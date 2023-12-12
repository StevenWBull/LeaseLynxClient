import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import PropTypes from 'prop-types';

const RequireAuth = ({ children }) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return children;
};

RequireAuth.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RequireAuth;
