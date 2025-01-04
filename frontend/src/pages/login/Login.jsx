import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axiosInstance from "../../utils/axiosConfig";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm()


  const onSubmit = async (data) => {
    try {
      const response = await axios.post(import.meta.env.VITE_REACT_APP_API + '/login', data);
      localStorage.setItem('user', JSON.stringify(response.data));
      toast.success('Login successful');
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };
  return (

    <div className="w-full p-10 px-2 md:px-0">
      <div className="mx-auto w-full md:w-[500px] p-10 bg-white shadow-xl rounded-md ">
        {error && <p className="text-center bg-red-100 text-red-500 py-2 mb-2 rounded-md">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="rounded-none h-full">

          <h2 className="text-2xl mb-4 font-bold  text-center text-[#6B66F6] ">Admin Login</h2>

          <div className="relative mt-12  w-full  mb-4">
            <input type="email" {...register('email')} className="p-2 w-full border border-slate-300 rounded-md" placeholder="Enter your email address" />
          </div>

          <div className="relative mt-4">
            <input type="password" {...register('password')} className="p-2 w-full border border-slate-300 rounded-md" placeholder="Enter your Password" />

          </div>

          <div className="flex justify-between mt-8 items-center ">

            <div className="flex gap-2 items-center text-white font-semibold">
            </div>

            <Link to='/forgot-password' className="text-[#6B66F6] md:text-sm text-xs font-semibold">Forgot Password?</Link>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="md:p-3 p-1 lg:py-2 md:py-1 py-2 rounded bg-[#6B66F6] text-white font-semibold md:text-base text-sm">Login</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
