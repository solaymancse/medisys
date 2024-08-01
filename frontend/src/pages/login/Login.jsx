import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();


  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      // Save user data in local storage
      localStorage.setItem('authUser', JSON.stringify(user));
      navigate('/dashboard')

    } catch (error) {
      setError(error.message);
    }

  }
  return (

    <div className="w-full h-screen py-10 px-2 md:px-0">
      <div className="mx-auto w-full md:w-[500px] px-10 h-[550px] pt-20 pb-4 bg-white shadow-sm rounded-md ">
        {error && <p className="text-center bg-red-100 text-red-500 py-2 mb-2 rounded-md">{error}</p>}

        <form onSubmit={handleLogIn} className="rounded-none h-full">

          <h2 className="text-2xl mb-4 font-bold  text-center text-[#6B66F6] ">Admin Login</h2>

          <div className="relative mt-12  w-full  mb-4">
            <Input onChange={(e) => setEmail(e.target.value)} className="py-2 " placeholder="Enter your email address" type="email" name="email" />

          </div>

          <div className="relative mt-4">
            <Input onChange={(e) => setPassword(e.target.value)} className="py-2 " placeholder="Enter your Password" type="password" name="password" />

          </div>

          <div className="flex justify-between mt-8 items-center ">

            <div className="flex gap-2 items-center text-white font-semibold">
              <input type="checkbox" name="check" id="" />


              <span className="label-text">Remember me</span>


            </div>

            <Link to='/forgot-password' className="text-[#6B66F6] md:text-sm text-xs font-semibold">Forgot Password?</Link>
          </div>
          <div className="form-control mt-6">
            <button className="md:p-3 p-1 lg:py-2 md:py-1 py-2 rounded bg-[#6B66F6] text-white font-semibold md:text-base text-sm">Login</button>
          </div>

          <div className="mt-12">
            <p className="my-4 font-semibold text-center md:text-sm text-xs">Dont Have An Account? <Link to='/register' className="text-[#6B66F6] md:text-sm text-xs">Create an account</Link>
            </p>

          </div>


        </form>
      </div>
    </div>
  )
}

export default Login
