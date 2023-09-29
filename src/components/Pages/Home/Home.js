import React from 'react';
import PropertyCard from '../../PropertyCard/PropertyCard';

const Home = () => {
    // Sample data for properties (replace with your own data)
    const properties = [
        {
            id: 1,
            image: 'property1.jpg', // Replace with the actual image URL
            address: '123 Main St',
            renterName: 'John Doe',
            terminationDate: '2023-12-31', // Replace with the termination date
        },
        // Add more property objects here
    ];

    return (
        <>
            <div className="container mx-auto py-8 margin-top">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold mb-4">
                        Welcome, [User's Business Name]
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
