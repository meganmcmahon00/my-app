import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import ConfirmBooking from './Pages/ConfirmBooking';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
     <Header />
    <Routes>
    <Route exact path="/" element={<HomePage/>}></Route>
    <Route path="/Booking" element={<BookingPage />}></Route>
    <Route path="/Confirm" element={<ConfirmBooking />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
