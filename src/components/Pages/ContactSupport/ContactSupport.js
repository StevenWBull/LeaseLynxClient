import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import SupportService from '../../../Services/SupportService';
import useSweetAlert from '../../../hooks/useSweetAlert';

const ContactSupport = () => {
    const currentUser = useAuth().getUserData();
    const { showAlert } = useSweetAlert();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: currentUser?.firstName
            ? `${currentUser?.firstName} ${currentUser?.lastName}`
            : '',
        email: currentUser?.email || '',
        supportMessage: '',
    });

    const navigateToHome = () => {
        return currentUser?.id ? navigate('/home') : navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await SupportService.postSupport(formData);

        if (response.status === 201) {
            const options = {
                icon: 'success',
                title: 'Success',
                text: 'Your message has been sent!',
            };
            showAlert(options, navigateToHome());
        } else {
            const options = {
                icon: 'error',
                title: 'Error',
                text: response?.data?.message || response?.message,
            };
            showAlert(options, navigateToHome());
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-blue-900 text-white py-4 px-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">Contact Support</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-bold mb-2"
                        >
                            Your Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md text-black"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-bold mb-2"
                        >
                            Your Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md text-black"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="supportMessage"
                            className="block text-sm font-bold mb-2"
                        >
                            Your Message:
                        </label>
                        <textarea
                            id="supportMessage"
                            name="supportMessage"
                            value={formData.supportMessage}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md text-black"
                            placeholder="Enter your message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactSupport;
