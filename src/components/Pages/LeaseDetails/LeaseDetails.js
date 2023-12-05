import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LeaseDetails = () => {
    const [newNotes, setNewNotes] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const leaseInfo = location.state?.leaseInfo; // Passed state containing lease info

    // Assuming currentNotes is a part of leaseInfo, otherwise you can set it from a fetch call or similar
    const currentNotes = leaseInfo?.notes || 'No current notes.';

    const handleNewNoteChange = (e) => {
        setNewNotes(e.target.value);
    };

    const handleNoteSave = () => {
        // Here you would save the new notes to your database or state management
        console.log('New Notes to save:', newNotes);
        // After saving you can update the current notes state or re-fetch it
    };

    const goBack = () => {
        navigate(-1); // Navigates back to the previous page
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
                {/* Display all the lease info here */}
                {leaseInfo?.image && (
                    <img
                        src={leaseInfo.image}
                        alt={`Property at ${leaseInfo.address}`}
                        className="w-full h-32 object-cover mb-4"
                    />
                )}
                <p>
                    <strong>Property Address:</strong>{' '}
                    {leaseInfo?.address || 'No address found.'}
                </p>
                <p>
                    <strong>Renter:</strong> {leaseInfo.renterName}
                </p>
                <p>
                    <strong>Termination Date:</strong>{' '}
                    {leaseInfo.terminationDate}
                </p>
                <p>
                    <strong>Days Until Termination:</strong>{' '}
                    {leaseInfo.terminationDate}
                </p>
                {/* Add more info as needed */}
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
                <h3 className="text-lg font-semibold">Current Notes</h3>
                <p>{currentNotes}</p>
            </div>

            <textarea
                className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={newNotes}
                onChange={handleNewNoteChange}
                placeholder="Add new notes here..."
            ></textarea>

            <button
                onClick={handleNoteSave}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Save New Notes
            </button>

            <button
                onClick={goBack}
                className="mt-4 ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Go Back
            </button>
        </div>
    );
};

export default LeaseDetails;
