import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../../../context/AuthContext';
import UserService from '../../../Services/UserService';
import useSweetAlert from '../../../hooks/useSweetAlert';

const AccountPage = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        changePassword: false, // Added state to track if password should be changed
        password: '',
        confirmPassword: '',
        profileImage: null,
    });

    const currentUser = useAuth().getUserData();
    const { updateUser } = useAuth();
    const { showAlert } = useSweetAlert();

    useEffect(() => {
        const { firstName, lastName, email } = currentUser;
        setUserData((prevData) => ({
            ...prevData,
            firstName,
            lastName,
            email,
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleImageChange = (e) => {
        setUserData((prevData) => ({
            ...prevData,
            profileImage: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // If the changePassword is true, then check for password match
        if (
            userData.changePassword &&
            userData.password !== userData.confirmPassword
        ) {
            showAlert({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match!',
            });
            return;
        }

        // Construct the data object to submit based on whether the password is being changed
        const submitData = {
            first_name: userData.firstName,
            last_name: userData.lastName,
            email: userData.email,
            ...(userData.changePassword && { pword: userData.password }),
            profileImage: userData.profileImage,
        };

        try {
            const response = await UserService.patchUserInfo(
                currentUser.token,
                currentUser.id,
                submitData
            );

            if (response.statusText === 'OK') {
                const data = await response.data;
                console.log(data);
                updateUser({
                    email: data?.currentUserInfo?.email,
                    token: data?.token,
                });
                showAlert({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your account has been updated.',
                });
            } else {
                const errorData = await response.data;
                showAlert({
                    icon: 'error',
                    title: 'Error',
                    text: errorData.data.error || 'An unknown error occurred.',
                });
            }
        } catch (error) {
            showAlert({
                icon: 'error',
                title: 'Error',
                text:
                    error.error ||
                    'An error occurred while updating your account.',
            });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-blue-900 text-white py-4 px-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">Account Settings</h1>
                <form onSubmit={handleSubmit}>
                    {/* Profile Picture */}
                    {/* <div className="mb-4">
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
                            className="w-full text-sm text-black-700 file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
                        />
                    </div> */}
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
                            className="w-full p-2 rounded-md text-black"
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
                            className="w-full p-2 rounded-md text-black"
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
                            className="w-full p-2 rounded-md text-black"
                            required
                        />
                    </div>
                    {/* Checkbox to indicate if the user wants to change the password */}
                    <div className="mb-4">
                        <input
                            type="checkbox"
                            id="changePassword"
                            name="changePassword"
                            checked={userData.changePassword}
                            onChange={handleChange}
                            className="mr-2 leading-tight"
                        />
                        <span>Check if you want to change your password</span>
                    </div>

                    {/* Only show password fields if changePassword is true */}
                    {userData.changePassword && (
                        <>
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-bold mb-2"
                                >
                                    New Password:
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={userData.password}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-md text-black"
                                    required={userData.changePassword}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-bold mb-2"
                                >
                                    Confirm New Password:
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={userData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-md text-black"
                                    required={userData.changePassword}
                                />
                            </div>
                        </>
                    )}
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
