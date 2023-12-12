import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AccountPage = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        profileImage: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setUserData((prevData) => ({
            ...prevData,
            profileImage: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match!',
            });
            return;
        }

        // Here you would handle the form submission, e.g., sending it to an API
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your account has been updated.',
        }).then(() => {
            // Perform further actions like redirecting the user or clearing the form
        });

        console.log(userData);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-blue-900 text-white py-4 px-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">Account Settings</h1>
                <form onSubmit={handleSubmit}>
                    {/* Profile Picture */}
                    <div className="mb-4">
                        <label
                            htmlFor="profileImage"
                            className="block text-sm font-bold mb-2"
                        >
                            Profile Picture:
                        </label>
                        <input
                            type="file"
                            id="profileImage"
                            name="profileImage"
                            onChange={handleImageChange}
                            className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
                        />
                    </div>
                    {/* First Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-bold mb-2"
                        >
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={userData.firstName}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md"
                            required
                        />
                    </div>
                    {/* Last Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-bold mb-2"
                        >
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={userData.lastName}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md"
                            required
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-bold mb-2"
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md"
                            required
                        />
                    </div>
                    {/* Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-bold mb-2"
                        >
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-bold mb-2"
                        >
                            Confirm Password:
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={userData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md"
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                    >
                        Update Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AccountPage;
