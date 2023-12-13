import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_ENDPOINT}`;

const postSupport = async ({ name, email, supportMessage }) => {
    const response = await axios.post(`${API_URL}/support/`, {
        name,
        email,
        message: supportMessage,
    });
    return response; // Return results, let caller decide what to do.
};

export default {
    postSupport,
};
