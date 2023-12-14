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
/* 
    noteData = {
        userId: 1,
        leaseId: 1,
        newNote: 'This is a new note.',
    }
*/
const postNewNote = async (token, noteData) => {
    const response = await axios.post(
        `${API_URL}/note`,
        noteData,
        createHeaders(token)
    );
    return response;
};

export default {
    postNewNote,
};
