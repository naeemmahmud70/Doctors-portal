import React from 'react';
import Contact from '../Contact/Contact';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Header from './Header/Header';



const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services>
           <FeaturedService></FeaturedService>
           <MakeAppointment></MakeAppointment>
           <Testimonials></Testimonials>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;