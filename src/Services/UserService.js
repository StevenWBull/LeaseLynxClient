import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_ENDPOINT}`;

const postLogin = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        pword: password,
    });
    const { token, message } = response.data;
    return { token, message }; // Return results, let caller decide what to do.
};

const postRegister = async (email, password, firstName, lastName) => {
    const response = await axios.post(`${API_URL}/auth/register`, {
        email,
        pword: password,
        first_name: firstName,
        last_name: lastName,
    });
    const { token, message } = response.data;
    return { token, message }; // Return results, let caller decide what to do.
};

const postLogout = async () => {
    // You might want an endpoint to invalidate tokens or perform other cleanup tasks.
    // If you add such logic, remember to handle it here.
};

const patchUserInfo = async (token, userId, userData) => {
    const updatedUserData = {
        userID: userId,
        ...userData,
    };
    const response = await axios.patch(`${API_URL}/user/`, updatedUserData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
    return response;
};

export default {
    postLogin,
    postRegister,
    postLogout,
    patchUserInfo,
};
