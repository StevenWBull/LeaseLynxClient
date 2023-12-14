import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children }) => {
    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
            id="my-modal"
        >
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    {children}
                    {/* <div className="items-center px-4 py-3">
                        <button
                            id="ok-btn"
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={onSave}
                        >
                            Save
                        </button>
                        <button
                            id="close-btn"
                            className="mt-3 px-4 py-2 bg-gray-300 text-black text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Modal;
