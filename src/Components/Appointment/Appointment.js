import React, { useState } from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Header/Navbar/Navbar';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (data) =>{
        setSelectedDate(data)
        console.log(selectedDate)
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange= {handleDateChange}></AppointmentHeader>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;