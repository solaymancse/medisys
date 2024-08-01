// src/pages/forgotPassword/ForgotPassword.jsx
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            await sendPasswordResetEmail(auth, values.email);
            message.success('Password reset email sent successfully');
            navigate('/');
        } catch (error) {
            message.error(error.message);
        }
    };

    return (
        <div className="bg-[#F3F6FD] p-8 flex justify-center items-center w-full h-screen">
            <div className='bg-white border p-6 w-[400px] h-[200px]'>
                <h2 className='text-center text-text font-semibold text-sm mb-4'>Forgot Password</h2>
                <Form onFinish={handleSubmit}>
                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email address!' },
                            { type: 'email', message: 'Please enter a valid email address!' }
                        ]}
                    >
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='py-2'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button className='bg-[#6B66F6]  text-white' htmlType="submit">
                            Reset Password
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ForgotPassword;
