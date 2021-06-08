import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z7x7t5r', 'template_3c6fuec', e.target, 'user_edB0yp4J6oB3DhbVnw1d4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary">Contact</h5>
                    <h1>Always  connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form data-aos="fade-left" onSubmit={sendEmail}>
                        <div className="row d-flex flex-column">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="name" />
                            </div> <br />
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="email" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="subject" />
                            </div>
                            <div className="form-group">
                                <textarea name="message" className="form-control" cols="30" rows="10" placeholder="Your message"></textarea><br />
                                <input type="submit" value="Send Message" className="btn btn-info" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;