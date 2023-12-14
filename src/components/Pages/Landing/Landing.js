import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-16">
                <div id="hero" className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Welcome to LeaseLynx!
                    </h1>
                    <p className="text-lg mb-8">
                        Your one-stop solution for all your Property Management
                        needs.
                    </p>
                    <a
                        href="#features"
                        className="bg-white text-blue-900 py-2 px-6 rounded-full text-lg hover:bg-blue-100 transition duration-300 ease-in-out"
                    >
                        Learn More
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature: Property Management */}
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">
                                Property Management
                            </h3>
                            <p className="text-gray-600">
                                Efficient handling of property-related tasks.
                            </p>
                        </div>

                        {/* Feature: Lease Information Management */}
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">
                                Lease Information Management
                            </h3>
                            <p className="text-gray-600">
                                Keep track of all lease agreements.
                            </p>
                        </div>

                        {/* Feature: Payment Tracking */}
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">
                                Payment Tracking
                            </h3>
                            <p className="text-gray-600">
                                Monitor and record payments effortlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="bg-blue-900 text-white py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Basic Plan */}
                        <div className="bg-white rounded-lg p-6 shadow-lg text-black">
                            <h3 className="text-2xl font-semibold mb-4">
                                Basic Plan - $29/month
                            </h3>
                            <ul className="mt-4">
                                <li>Property Management</li>
                                <li>Lease Information Management</li>
                                <li>Limited Payment Tracking</li>
                            </ul>
                        </div>

                        {/* Pro Plan */}
                        <div className="bg-white rounded-lg p-6 shadow-lg text-black">
                            <h3 className="text-2xl font-semibold mb-4">
                                Pro Plan - $49/month
                            </h3>
                            <ul className="mt-4">
                                <li>All Basic Plan features</li>
                                <li>Full Payment Tracking</li>
                                <li>Property Details Access</li>
                                <li>Detailed Note Keeping</li>
                            </ul>
                        </div>

                        {/* Premium Plan */}
                        <div className="bg-white rounded-lg p-6 shadow-lg text-black">
                            <h3 className="text-2xl font-semibold mb-4">
                                Premium Plan - $69/month
                            </h3>
                            <ul className="mt-4">
                                <li>All Pro Plan features</li>
                                <li>Automated Lease Ending Reminders</li>
                                <li>Priority Support</li>
                                <li>Advanced Reporting Features</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                    <p className="text-gray-600 mb-8">
                        Have questions, want a demo, or need assistance? Contact
                        our support team!
                    </p>
                    {/* Removed the form and added a Link component */}
                    <Link
                        to="/contact-support"
                        className="bg-blue-900 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                    >
                        Contact Support
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Landing;
