import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';

const LeaseDetails = () => {
    const [newNotes, setNewNotes] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const leaseInfo = location.state?.leaseInfo; // Passed state containing lease info

    // Assuming currentNotes is a part of leaseInfo, otherwise you can set it from a fetch call or similar
    const currentNotes = leaseInfo?.notes || 'No current notes.';

    const fullAddress =
        leaseInfo?.leaseAddress +
        ' ' +
        leaseInfo?.leaseCity +
        ', ' +
        leaseInfo?.leaseState +
        ' ' +
        leaseInfo?.leaseZip;

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

    const handleDelete = () => {
        // Handle delete action here
        console.log('Delete action triggered');
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center p-4">
                <button
                    onClick={goBack}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Go back"
                >
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </button>
                <button
                    onClick={handleDelete}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Delete lease"
                >
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                </button>
            </div>
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
                    {fullAddress || 'No address found.'}
                </p>
                <p>
                    <strong>Renter:</strong> {leaseInfo.leaseeName}
                </p>
                <p>
                    <strong>Renter Phone:</strong> {leaseInfo.leaseePhone}
                </p>
                <p>
                    <strong>Renter Email:</strong> {leaseInfo.leaseeEmail}
                </p>
                <br />
                <p>
                    <strong>Lease Start Date:</strong>{' '}
                    {formatDate(leaseInfo.leaseStart)}
                </p>
                <p>
                    <strong>Lease End Date:</strong>{' '}
                    {formatDate(leaseInfo.leaseEnd)}
                </p>
                <p>
                    <strong>Days Until Termination:</strong>{' '}
                    {calculateDaysUntilTermination(
                        leaseInfo.leaseStart,
                        leaseInfo.leaseEnd
                    )}
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
        </div>
    );
};

export default LeaseDetails;
