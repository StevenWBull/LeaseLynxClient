import React from 'react';
import PropertyCard from '../../PropertyCard/PropertyCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
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
        // {
        //     id: 1,
        //     image: 'property1.jpg', // Replace with the actual image URL
        //     address: '123 Main St',
        //     renterName: 'John Doe',
        //     terminationDate: '2023-12-31', // Replace with the termination date
        //     daysUntilTermination: 0, // Replace with the number of days until termination
        // },
        // {
        //     id: 1,
        //     image: 'property1.jpg', // Replace with the actual image URL
        //     address: '123 Main St',
        //     renterName: 'John Doe',
        //     terminationDate: '2023-12-31', // Replace with the termination date
        //     daysUntilTermination: 0, // Replace with the number of days until termination
        // },
        // {
        //     id: 1,
        //     image: 'property1.jpg', // Replace with the actual image URL
        //     address: '123 Main St',
        //     renterName: 'John Doe',
        //     terminationDate: '2023-12-31', // Replace with the termination date
        //     daysUntilTermination: 0, // Replace with the number of days until termination
        // },
        // Add more property objects here
    ];

    return (
        <>
            <div className="container mx-auto py-4 custom-min-height">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold mb-4">
                        Welcome, [User's Name]
                    </h1>
                </div>

                <hr className="max-w-[80%] mx-auto"></hr>

                <div className="grid grid-cols-1 px-4 relative">
                    <button
                        className="fixed bottom-8 right-8 bg-blue-900 hover:bg-blue-600 text-white w-16 h-16 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
                        onClick={() => {
                            // Add your logic for adding a property here
                        }}
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
