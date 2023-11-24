import React from "react";
import ContactForm from "@/components/contact-form";
import { Phone } from 'lucide-react';
import { MapPinned } from 'lucide-react';
import { Mail } from 'lucide-react';

import './style.css'
const contactPage = () => {
    return (
        <div className="contact-page bg-[#faf2ec] py-12">
            <div className="heading container text-center pb-5 text-5xl text-[#54595f]">
                <h1>Get in Touch!</h1>
            </div>
            <div className="content-wrapper container grid md:grid-cols-2 sm:grid-cols-1 gap-24">
                <div className="form-wrapper">
                    <ContactForm />
                </div>
                <div className="communication flex flex-col text-[#54595f] justify-center items-center gap-10">
                    <div className="">
                        <div className="flex justify-center pb-1">
                            <MapPinned />
                        </div>
                        <address>
                            Sardarpura B Road <br />
                            Near Goru Sweets <br />
                            Pin Code -342008
                        </address>
                    </div>
                    <div className="">
                        <div className="flex justify-center pb-1">
                            <Phone />
                        </div>
                        <p>+91 98745 63210</p>
                    </div>
                    <div className="">
                        <div className="flex justify-center pb-1">
                            <Mail />
                        </div>
                        <p>info@woodland-interiors.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default contactPage;