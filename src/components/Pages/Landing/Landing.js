import './Landing.css';

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
            <section id="features" className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">
                                Feature 1
                            </h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">
                                Feature 2
                            </h3>
                            <p className="text-gray-600">
                                Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">
                                Feature 3
                            </h3>
                            <p className="text-gray-600">
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="bg-blue-900 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Plan 1 */}
                        <div className="bg-white rounded-lg p-6 shadow-lg text-black">
                            <h3 className="text-2xl font-semibold mb-4">
                                Basic Plan
                            </h3>
                            <p className="text-gray-600">$19/month</p>
                            <ul className="mt-4">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                                <li>Feature 4</li>
                            </ul>
                            <br />
                            <a
                                href="#"
                                className="bg-blue-900 text-white py-2 px-6 mt-6 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* Plan 2 */}
                        <div className="bg-white rounded-lg p-6 shadow-lg text-black">
                            <h3 className="text-2xl font-semibold mb-4">
                                Pro Plan
                            </h3>
                            <p className="text-gray-600">$39/month</p>
                            <ul className="mt-4">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                                <li>Feature 4</li>
                            </ul>
                            <br />
                            <a
                                href="#"
                                className="bg-blue-900 text-white py-2 px-6 mt-6 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* Plan 3 */}
                        <div className="bg-white rounded-lg p-6 shadow-lg text-black">
                            <h3 className="text-2xl font-semibold mb-4">
                                Premium Plan
                            </h3>
                            <p className="text-gray-600">$59/month</p>
                            <ul className="mt-4">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                                <li>Feature 4</li>
                            </ul>
                            <br />
                            <a
                                href="#"
                                className="bg-blue-900 text-white py-2 px-6 mt-6 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                    <p className="text-gray-600 mb-8">
                        Have questions or need assistance? Contact our support
                        team.
                    </p>
                    <form className="max-w-md mx-auto">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="bg-gray-100 w-full p-3 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-gray-100 w-full p-3 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                placeholder="Message"
                                className="bg-gray-100 w-full p-3 rounded-lg"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-900 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Landing;
