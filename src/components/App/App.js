// Note: This is the main component of the application
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Landing from '../Pages/Landing/Landing';
import Login from '../Pages/Login/Login';

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<h1>Home</h1>} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};

export default App;
