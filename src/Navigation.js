import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './UI/Cart/Cart';
// import Navbar from './Views/Navbar/Navbar';
import Landing from './UI/LandingPage.js/Landing';
import Navbar from './UI/NavBar/Navbar';
function Navigation() {
    return (
        <React.Fragment>
            <Router basename="/">
                {/* <Navbar /> */}
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                    <Route exact path="/cart" element={<Cart />} />

                </Routes>
            </Router>
        </React.Fragment>

    );
}

export default Navigation;