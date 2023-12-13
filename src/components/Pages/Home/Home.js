import React, { useState } from 'react';
import PropertyCard from '../../PropertyCard/PropertyCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LeaseInfoForm from '../../Forms/LeaseInfoForm';
import Modal from '../../Modal/Modal';
import { useAuth } from '../../../context/AuthContext';

const Home = () => {
    const currentUser = useAuth().getUserData();
    const [showModal, setShowModal] = useState(false);
    const [leaseInfo, setLeaseInfo] = useState(null);

    const handleSave = (info) => {
        setLeaseInfo(info);
        setShowModal(false); // Close the form after saving
    };

    const handleClose = () => {
        setShowModal(false);
    };

    // Sample data for properties (replace with your own data)
    const properties = [
        {
            id: 1,
            image: 'property1.jpg', // Replace with the actual image URL
            address: '123 Main St',
            renterName: 'John Doe',
            terminationDate: '2023-12-31', // Replace with the termination date
            daysUntilTermination: 0, // Replace with the number of days until termination
        },
        {
            id: 2,
            image: 'property1.jpg', // Replace with the actual image URL
            address: '123 Main St',
            renterName: 'John Doe',
            terminationDate: '2023-12-31', // Replace with the termination date
            daysUntilTermination: 0, // Replace with the number of days until termination
        },
        {
            id: 3,
            image: 'property1.jpg', // Replace with the actual image URL
            address: '123 Main St',
            renterName: 'John Doe',
            terminationDate: '2023-12-31', // Replace with the termination date
            daysUntilTermination: 0, // Replace with the number of days until termination
        },
        {
            id: 4,
            image: 'property1.jpg', // Replace with the actual image URL
            address: '123 Main St',
            renterName: 'John Doe',
            terminationDate: '2023-12-31', // Replace with the termination date
            daysUntilTermination: 0, // Replace with the number of days until termination
        },
        // Add more property objects here
    ];

    return (
        <>
            {showModal && (
                <Modal
                    onClose={handleClose}
                    onSave={() => handleSave(leaseInfo)}
                >
                    <LeaseInfoForm onSave={(info) => setLeaseInfo(info)} />
                </Modal>
            )}
            <div className="container mx-auto py-4 custom-min-height">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold mb-4">
                        Welcome, {currentUser.firstName}!
                    </h1>
                </div>

                <hr className="max-w-[80%] mx-auto"></hr>

                <div className="grid grid-cols-1 px-4 relative">
                    <button
                        className="fixed bottom-8 right-8 bg-blue-900 hover:bg-blue-600 text-white w-16 h-16 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
                        onClick={() => setShowModal(true)}
                    >
                        <FontAwesomeIcon icon={faPlus} size="2x" />
                    </button>
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
