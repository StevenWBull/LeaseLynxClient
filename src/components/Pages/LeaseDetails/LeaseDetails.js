import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import LeaseDataService from '../../../Services/LeaseDataService';
import NoteService from '../../../Services/NoteService';
import { useAuth } from '../../../context/AuthContext';
import Swal from 'sweetalert2';
import useSweetAlert from '../../../hooks/useSweetAlert';

const LeaseDetails = () => {
    const currentUser = useAuth().getUserData();
    const { showAlert } = useSweetAlert();

    const [newNote, setNewNote] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const leaseInfo = location.state?.leaseInfo; // Passed state containing lease info
    const [currentNotes, setCurrentNotes] = useState(
        leaseInfo?.leaseNotes || []
    );

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

    const formatNoteDate = (isoDateString) => {
        const date = new Date(isoDateString);
        return date.toLocaleDateString('default', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const renderNotes = () => {
        return currentNotes.map((note, index) => (
            <div key={index} className="note my-2">
                <p className="note-date italic font-semibold">
                    {formatNoteDate(note.added_date)}
                </p>
                <p className="note-content">{note.note}</p>
            </div>
        ));
    };

    const handleNewNoteChange = (e) => {
        setNewNote(e.target.value);
    };

    const handleNoteSave = async () => {
        // Here you would save the new notes to your database or state management
        console.log('New Notes to save:', newNote);
        try {
            const noteData = {
                userId: currentUser.id,
                leaseId: leaseInfo._id,
                newNote,
            };
            const response = await NoteService.postNewNote(
                currentUser.token,
                noteData
            );

            if (response.status === 201) {
                setCurrentNotes(response.data.notes);
                const options = {
                    icon: 'success',
                    title: 'Success',
                    text: 'New note saved!',
                };
                showAlert(options);
                // Clear note text area
                setNewNote('');
            }
        } catch (error) {
            console.log(error);
            showAlert({
                icon: 'error',
                title: 'Error',
                text: 'There was an error saving the new note.',
            });
        }
    };

    const goBack = () => {
        navigate(-1); // Navigates back to the previous page
    };

    const handleDelete = async () => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
            });

            if (result.isConfirmed) {
                const response = await LeaseDataService.deleteLeaseData(
                    currentUser.token,
                    currentUser.id,
                    leaseInfo._id
                );
                if (response.status === 204) {
                    const options = {
                        icon: 'success',
                        title: 'Success',
                        text: 'Lease deleted!',
                    };
                    showAlert(options, goBack());
                } else {
                    const options = {
                        icon: 'error',
                        title: 'Error',
                        text: response?.data?.message || response?.message,
                    };
                    showAlert(options);
                }
            }
        } catch (error) {
            console.log(error);
            showAlert({
                icon: 'error',
                title: 'Error',
                text: 'There was an error deleting the lease data.',
            });
        }
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
                <p>
                    {currentNotes.length ? renderNotes() : 'No current notes.'}
                </p>
            </div>

            <textarea
                className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={newNote}
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
