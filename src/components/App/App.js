// Note: This is the main component of the application
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Landing from '../Pages/Landing/Landing';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import ContactSupport from '../Pages/ContactSupport/ContactSupport';
import LeaseDetails from '../Pages/LeaseDetails/LeaseDetails';
import RequireAuth from '../Auth/RequireAuth';
import RedirectIfAuthenticated from '../Auth/RedirectIfAuthenticated';
import { AuthProvider } from '../../context/AuthContext';
import AccountPage from '../Pages/AccountPage/AccountPage';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                {/* Create sticky footer */}
                <div className="flex flex-col min-h-screen relative">
                    <Header />
                    <main className="flex-grow">
                        <div className="mx-auto margin-top">
                            <Routes>
                                <Route
                                    path="/contact-support"
                                    element={<ContactSupport />}
                                />
                                <Route
                                    path="/"
                                    element={
                                        <RedirectIfAuthenticated>
                                            <Landing />
                                        </RedirectIfAuthenticated>
                                    }
                                />
                                <Route
                                    path="/login"
                                    element={
                                        <RedirectIfAuthenticated>
                                            <Login />
                                        </RedirectIfAuthenticated>
                                    }
                                />
                                <Route
                                    path="/home"
                                    element={
                                        <RequireAuth>
                                            <Home />
                                        </RequireAuth>
                                    }
                                />
                                <Route
                                    path="/lease-details"
                                    element={
                                        <RequireAuth>
                                            <LeaseDetails />
                                        </RequireAuth>
                                    }
                                />
                                <Route
                                    path="/account"
                                    element={
                                        <RequireAuth>
                                            <AccountPage />
                                        </RequireAuth>
                                    }
                                />
                            </Routes>
                        </div>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
