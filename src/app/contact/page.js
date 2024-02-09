import React from "react";
import ContactForm from "../components/contact-form";
const contactPage = () => {
  return (
    <div className="contact-page bg-[#faf2ec] py-12">
      {/* Banner Image Section Start */}
      <section className="banner-image-wrapper">
        <div
          className="banner-image"
          style={{
            backgroundImage: "url('/uploads/images/contact/contact-us.jpg')",
            width: "100%",
            height: "85vh",
            marginTop: "-80px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover ",
          }}
        ></div>
      </section>
      {/* End */}
      <div className="heading container text-center py-5 text-4xl text-[#3c2f27]">
        <h1 className="font-crimson ">Customer Support</h1>
        <p className="text-lg text-[#3c2f27] pt-4 lg:w-1/2 md:w-3/4 w-full mx-auto text-justify font-roboto">We are here to assist you. Please fill out the form below, and our dedicated support team will get back to you as soon as possible.</p>
      </div>
      <div className="content-wrapper container grid grid-cols-1">
        <div className="form-wrapper lg:w-1/2 md:w-3/4 w-full mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default contactPage;
