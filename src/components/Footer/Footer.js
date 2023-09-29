import './Footer.css';

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto text-center">
                <p>
                    &copy; {new Date().getFullYear()} Bull Technologies, LLC.
                    All rights reserved.
                </p>
                <p>
                    <a
                        href="/privacy-policy"
                        className="text-blue-400 hover:text-blue-200 mx-2"
                    >
                        Privacy Policy
                    </a>
                    |
                    <a
                        href="/terms-of-use"
                        className="text-blue-400 hover:text-blue-200 mx-2"
                    >
                        Terms of Use
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
