import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LeaseInfoForm = ({ onClose, onSave }) => {
    const [leaseStart, setLeaseStart] = useState('');
    const [leaseEnd, setLeaseEnd] = useState('');
    const [leaseeName, setLeaseeName] = useState('');
    const [leaseeEmail, setLeaseeEmail] = useState('');
    const [leaseePhone, setLeaseePhone] = useState('');
    const [leaseAddress, setLeaseAddress] = useState('');
    const [leaseCity, setLeaseCity] = useState('');
    const [leaseState, setLeaseState] = useState('');
    const [leaseZip, setLeaseZip] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const leaseInfo = {
            leaseStart,
            leaseEnd,
            leaseeName,
            leaseeEmail,
            leaseePhone,
            leaseAddress,
            leaseCity,
            leaseState,
            leaseZip,
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
            {/* New input fields for additional data */}
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="leaseeName"
                >
                    Leasee Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="leaseeName"
                    type="text"
                    placeholder="Leasee Name"
                    value={leaseeName}
                    onChange={(e) => setLeaseeName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="leaseeEmail"
                >
                    Leasee Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="leaseeEmail"
                    type="email"
                    placeholder="leasee@example.com"
                    value={leaseeEmail}
                    onChange={(e) => setLeaseeEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="leaseePhone"
                >
                    Leasee Phone
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="leaseePhone"
                    type="tel"
                    placeholder="555-555-5555"
                    value={leaseePhone}
                    onChange={(e) => setLeaseePhone(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="leaseAddress"
                >
                    Property Street Address
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="leaseAddress"
                    type="text"
                    placeholder="Lease Address"
                    value={leaseAddress}
                    onChange={(e) => setLeaseAddress(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="leaseCity"
                >
                    City
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="leaseCity"
                    type="text"
                    placeholder="City"
                    value={leaseCity}
                    onChange={(e) => setLeaseCity(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="leaseState"
                >
                    State
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="leaseState"
                    type="text"
                    placeholder="State"
                    value={leaseState}
                    onChange={(e) => setLeaseState(e.target.value)}
                    required
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="leaseZip"
                >
                    Zip Code
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="leaseZip"
                    type="text"
                    placeholder="Zip Code"
                    value={leaseZip}
                    onChange={(e) => setLeaseZip(e.target.value)}
                    required
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="leaseStart"
                >
                    Lease Start Date
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="leaseStart"
                    type="date"
                    value={leaseStart}
                    onChange={(e) => setLeaseStart(e.target.value)}
                    required
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="leaseEnd"
                >
                    Lease End
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="leaseEnd"
                    type="date"
                    value={leaseEnd}
                    onChange={(e) => setLeaseEnd(e.target.value)}
                    required
                />
            </div>
            <button
                type="submit"
                id="ok-btn"
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Save
            </button>
            <button
                id="close-btn"
                className="mt-3 px-4 py-2 bg-gray-300 text-black text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={onClose}
            >
                Close
            </button>
        </form>
    );
};

LeaseInfoForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default LeaseInfoForm;
