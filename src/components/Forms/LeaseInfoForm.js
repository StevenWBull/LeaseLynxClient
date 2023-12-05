import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LeaseInfoForm = ({ onSave }) => {
    const [propertyAddress, setPropertyAddress] = useState('');
    const [renterName, setRenterName] = useState('');
    const [terminationDate, setTerminationDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const leaseInfo = {
            propertyAddress,
            renterName,
            terminationDate,
        };
        onSave(leaseInfo);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
            <h2 className="text-2xl font-semibold text-center mb-6">
                Add Lease Information
            </h2>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="propertyAddress"
                >
                    Property Address
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="propertyAddress"
                    type="text"
                    placeholder="123 Main St"
                    value={propertyAddress}
                    onChange={(e) => setPropertyAddress(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="renterName"
                >
                    Renter Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="renterName"
                    type="text"
                    placeholder="John Doe"
                    value={renterName}
                    onChange={(e) => setRenterName(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="terminationDate"
                >
                    Termination Date
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="terminationDate"
                    type="date"
                    value={terminationDate}
                    onChange={(e) => setTerminationDate(e.target.value)}
                />
            </div>
        </form>
    );
};

LeaseInfoForm.propTypes = {
    onSave: PropTypes.func.isRequired,
};

export default LeaseInfoForm;
