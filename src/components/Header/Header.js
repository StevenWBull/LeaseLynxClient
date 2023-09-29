import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [pathname, _] = useState(window.location.pathname);
    // Function to scroll to a section when a navigation link is clicked
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: sectionId === 'hero' ? 0 : section.offsetTop,
                behavior: 'smooth', // Use smooth scrolling animation
            });
        }
    };

    // State to track whether the user has scrolled
    const [hasScrolled, setHasScrolled] = useState(false);

    // Function to handle scroll events
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    };

    // Attach scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Define CSS classes for the header based on scroll state
    const headerClasses = `bg-blue-900 text-white py-4 fixed top-0 left-0 w-full z-10 ${
        hasScrolled ? 'shadow-lg border-b-4 border-blue-500' : ''
    }`;

    const logoType = () => {
        let ele = (
            <Link id="header-logo" className="ml-3 text-2xl font-bold" to="/">
                LeaseLynx
            </Link>
        );
        if (pathname === '/') {
            ele = (
                <div
                    id="header-logo"
                    className="ml-3 text-2xl font-bold"
                    onClick={(e) => scrollToSection(e, 'hero')}
                >
                    LeaseLynx
                </div>
            );
        }
        return ele;
    };

    return (
        <header className={headerClasses}>
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                {logoType()}

                {/* Navigation Menu */}
                <nav className="mr-3 space-x-4">
                    <Link
                        to="/login"
                        className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
                    >
                        Login
                    </Link>
                    <a
                        className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
                        onClick={(e) => scrollToSection(e, 'features')}
                    >
                        Features
                    </a>
                    <a
                        className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
                        onClick={(e) => scrollToSection(e, 'pricing')}
                    >
                        Pricing
                    </a>
                    <a
                        className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
                        onClick={(e) => scrollToSection(e, 'contact')}
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
