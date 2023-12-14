import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_ENDPOINT}`;

const createHeaders = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    };
};

const getLeaseData = async (token, userId) => {
    const response = await axios.get(
        `${API_URL}/lease/${userId}/all`,
        createHeaders(token)
    );
    return response;
};

const postLeaseData = async (token, userId, leaseData) => {
    const allLeaseData = {
        userId,
        newLeaseData: [leaseData],
    };
    const response = await axios.post(
        `${API_URL}/lease`,
        allLeaseData,
        createHeaders(token)
    );
    return response;
};

const deleteLeaseData = async (token, userId, leaseId) => {
    const leaseData = {
        userId,
        leaseId,
    };
    const response = await axios.delete(
        `${API_URL}/lease/${userId}/${leaseId}`,
        createHeaders(token)
    );
    return response;
};

export default {
    getLeaseData,
    postLeaseData,
    deleteLeaseData,
};
