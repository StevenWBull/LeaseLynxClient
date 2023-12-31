import React, { useState } from 'react';
import './Login.css';
import { useAuth } from '../../../context/AuthContext';
import UserService from '../../../Services/UserService';
import useSweetAlert from '../../../hooks/useSweetAlert';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { showAlert } = useSweetAlert();
    const { login } = useAuth();

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const { message, token } = await UserService.postLogin(
                email,
                password
            );
            login({ email, token });
        } catch (error) {
            const options = {
                icon: 'error',
                title: 'Error',
                text: error?.response
                    ? error.response.data.message
                    : error.message,
            };
            showAlert(options);
        }
    };

    return (
        <div className="custom-min-height flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Sign In
                </h2>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="text-gray-600 font-medium block mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="text-gray-600 font-medium block mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
