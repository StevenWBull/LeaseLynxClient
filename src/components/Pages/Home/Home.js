import React, { useEffect, useState } from 'react';
import PropertyCard from '../../PropertyCard/PropertyCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LeaseInfoForm from '../../Forms/LeaseInfoForm';
import Modal from '../../Modal/Modal';
import { useAuth } from '../../../context/AuthContext';
import LeaseDataService from '../../../Services/LeaseDataService';
import useSweetAlert from '../../../hooks/useSweetAlert';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const currentUser = useAuth().getUserData();
    console.log(currentUser);
    const [showModal, setShowModal] = useState(false);
    const [leaseInfo, setLeaseInfo] = useState([]);
    const [leaseFormData, setLeaseFormData] = useState(null);

    const { showAlert } = useSweetAlert();

    const handleGetLeaseInfo = async () => {
        const response = await LeaseDataService.getLeaseData(
            currentUser.token,
            currentUser.id
        );
        console.log(response);
        if (response.status === 200) {
            setLeaseInfo(response.data.leaseData);
        } else {
            const options = {
                icon: 'error',
                title: 'Error',
                text: response?.data?.message || response?.message,
            };
            showAlert(options);
        }
    };

    useEffect(() => {
        handleGetLeaseInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSave = async (info) => {
        setLeaseFormData(info);
        setShowModal(false); // Close the form after saving

        const response = await LeaseDataService.postLeaseData(
            currentUser.token,
            currentUser.id,
            info
        );
        if (response.status === 201) {
            setLeaseInfo(response.data.leaseData);
            const options = {
                icon: 'success',
                title: 'Success',
                text: 'Lease data saved!',
            };
            showAlert(options);
        } else {
            const options = {
                icon: 'error',
                title: 'Error',
                text: response?.data?.message || response?.message,
            };
            showAlert(options);
        }
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <Modal>
                    <LeaseInfoForm onclose={handleClose} onSave={handleSave} />
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
                    {leaseInfo.map((property) => (
                        <PropertyCard key={property._id} property={property} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
