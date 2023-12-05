// Note: This is the main component of the application
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Landing from '../Pages/Landing/Landing';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import LeaseDetails from '../Pages/LeaseDetails/LeaseDetails';

const App = () => {
    return (
        <>
            <Router>
                {/* Create sticky footer */}
                <div className="flex flex-col min-h-screen relative">
                    <Header />
                    <main className="flex-grow">
                        <div className="mx-auto margin-top">
                            <Routes>
                                <Route path="/" element={<Landing />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/home" element={<Home />} />
                                <Route
                                    path="/lease-details"
                                    element={<LeaseDetails />}
                                />
                            </Routes>
                        </div>
                    </main>
                    <Footer />
                </div>
            </Router>
        </>
    );
};

export default App;
