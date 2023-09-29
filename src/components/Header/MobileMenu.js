import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';

function MobileMenu({ isOpen, closeMenu }) {
    return (
        <Menu
            isOpen={isOpen}
            onStateChange={({ isOpen }) => {
                if (!isOpen) {
                    closeMenu(); // Close the menu when a link is clicked
                }
            }}
        >
            {/* Menu items */}
        </Menu>
    );
}

// Define prop types for MobileMenu component
MobileMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean and is required
    closeMenu: PropTypes.func.isRequired, // closeMenu should be a function and is required
};

export default MobileMenu;
