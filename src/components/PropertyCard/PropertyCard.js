/* eslint-disable react/prop-types */
import React from 'react';
import './PropertyCard.css';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    const navigate = useNavigate();

    const goToDetailsPage = () => {
        navigate('/lease-details', {
            state: { leaseInfo: property },
        });
    };

    const calculateDaysUntilTermination = (leaseStart, leaseEnd) => {
        let leaseStartDate = new Date(leaseStart);
        let leaseEndDate = new Date(leaseEnd);

        let currentDate = new Date();

        if (currentDate < leaseStartDate)
            return 'The lease has not started yet.';

        // Check if the current date is after the lease end date
        if (currentDate > leaseEndDate) return 'The lease has already ended.';

        // Calculate the difference in milliseconds between the lease end date and the current date
        let differenceInMilliseconds = leaseEndDate - currentDate;

        // Convert the difference from milliseconds to days
        let differenceInDays = Math.ceil(
            differenceInMilliseconds / (1000 * 60 * 60 * 24)
        );

        return differenceInDays;
    };

    const formatDate = (isoDateString) => {
        // Extract the date portion of the ISO string (YYYY-MM-DD)
        return isoDateString.substring(0, 10);
    };

    return (
        <div
            className="bg-blue-600 text-white rounded shadow-custom p-4 my-2 cursor-pointer"
            onClick={goToDetailsPage}
        >
            {/* <img
                src={property.image}
                alt={`Property at ${property.leaseAddress} ${property.leaseCity}, ${property.leaseState} ${property.leaseZip}`}
                className="w-full h-32 object-cover mb-4"
            /> */}
            <div className="mb-2">
                <p className="text-lg font-semibold">
                    {property.leaseAddress} {property.leaseCity},{' '}
                    {property.leaseState} {property.leaseZip}
                </p>
            </div>
            <div className="text-sm text-white-600 mb-2">
                <p>Renter: {property.leaseeName}</p>
                <p>Start Date: {formatDate(property.leaseStart)}</p>
                <p>End Date: {formatDate(property.leaseEnd)}</p>
                <p>
                    Days Until Termination:{' '}
                    {calculateDaysUntilTermination(
                        property.leaseStart,
                        property.leaseEnd
                    )}
                </p>
            </div>
        </div>
    );
};

export default PropertyCard;
