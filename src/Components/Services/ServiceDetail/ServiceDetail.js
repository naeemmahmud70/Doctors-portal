import React, { useEffect } from 'react';
import './ServiceDetail.css'
import Aos from "aos";
import "aos/dist/aos.css"

const ServiceDetail = ({ service }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div data-aos="fade-left" className="col-md-4 text-center card-style">
        <img style={{height: '50px'}} src={service.img} alt="" />
        <h5 className="mt-3 mb-3">{service.name}</h5>
        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
    </div>
    );
};

export default ServiceDetail;