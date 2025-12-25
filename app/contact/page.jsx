"use client";
import { useState } from "react";
import "./contact.css";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
export default function page() {
  const [errors, setErrors] = useState({});
  const [showAddForm, setShowAddForm] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    isAuthorized: false,
  });

  const data = ["FullName", "Email", "Subject", "Message"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // const validateForm=()=>{
  //   let valid=true;
  //   let newError={}
  //   if(!formData.name){
  //     newError.name="Name is required";
  //     valid=false;
  //   }
  //   if(!formData.email){
  //     newError.email="Email is required";
  //     valid=false;
  //   }
  //   if(!formData.subject){
  //     newError.subject="Subject is required";
  //     valid=false;
  //   }
  //   if(!formData.message){
  //     newError.message="Message is required";
  //     valid=false;
  //   }
  //   setError(newError);
  // }
  //   const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) return;

  //   console.log("Form submitted:", formData);

  //   setFormData({
  //     fullName: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });
  // };
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    } else {
    
        const fullNamePattern = /^([\w'-]+\s*){1,20}$/;
        if (!fullNamePattern.test(formData.fullName)) {
          newErrors.fullName =
            "Full name cannot exceed 20 words or contain invalid characters";
       
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    }else{
      const emailPattern=/^(?=.*[a-z])(?=.*[A-Z])[^\s@]+@[^\s@]+\.[^\s@]+$/
      if(!emailPattern.test(formData.email)){
        newErrors.email="Please enter a valid email address"

      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter the subject";
    // }else{
    //   const subjectPattern=/^[a-zA-Z0-9\s.,!?'-]{1,50}$/;
    //   if(!subjectPattern.test(formData.email)){
    //     newErrors.subject="Subject can have up to 50 valid characters"

    //   }
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter the message";
    }
    if (!formData.isAuthorized) {
      newErrors.isAuthorized =
        "You must confirf authorixation to submit this form";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form submitted:", formData);

    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
      isAuthorized: false,
    });

    setErrors({});
  };

  return (
    <div>
      <div className="contact-section">
        <div
          style={{
            backgroundImage: "url('./featureproductimg/ourproduct.png')",
          }}
          className="contact-background"
        ></div>
        <div className="contact-overlay"></div>
        <div className="contact-content">
          <h1 className="content-title">Contact us </h1>
          <p className="content-para">
            Have questions about our products or export services? Our team is
            here to help and ready to assist you.
          </p>
        </div>
      </div>
      <div className="bg-black p-4 sm:p-8 md:p-12 lg:p-20">
        <div className="mx-auto flex flex-col lg:flex-row text-white justify-between gap-12 max-w-[1600px]">
          <div className="flex-1 lg:flex-2 w-full shadow-md shadow-white/20 lg:shadow-none p-6 sm:p-8 lg:p-10 rounded-lg bg-[rgba(20,20,20,1)] lg:bg-transparent">
            <p className="text-[#be6b22] font-bold text-2xl sm:text-3xl mb-1">
              Send us a message
            </p>
            <p className="text-zinc-500 text-sm sm:text-base">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>
            {showAddForm && (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-180 flex flex-col space-y-8 mt-8"
              >
                {/* Full Name */}
                <div>
                  <label className="text-[#bb8454] text-xl">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    required
                    onChange={handleChange}
                    className="w-full bg-[#282828] text-white rounded px-4 py-2"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-[#bb8454] text-xl">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                    className="w-full bg-[#282828] text-white rounded px-4 py-2"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="text-[#bb8454] text-xl">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    required
                    onChange={handleChange}
                    className="w-full bg-[#282828] text-white rounded px-4 py-2"
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-[#bb8454] text-xl">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    required
                    onChange={handleChange}
                    className="w-full bg-[#282828] text-white rounded px-4 py-2 h-32"
                    placeholder="Write your message"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-[#c28957]"
                      name="isAuthorized"
                      checked={formData.isAuthorized}
                      onChange={handleChange}
                    />
                    <p className="block text-sm sm:text-md text-slate-200 leading-relaxed">
                      I confirm that I am an authorised person/company to
                      purchase tobacco products in my country.
                    </p>
                    {errors.isAuthorized && (
                      <p className="text-red-500 text-sm">
                        {errors.isAuthorized}
                      </p>
                    )}
                  </div>
                </div>
                <button className="bg-[#eab308] text-black px-4 sm:px-6 py-2 rounded font-semibold w-full sm:w-auto text-sm sm:text-base flex items-center justify-center gap-2">
                  Inquire Now
                </button>
              </form>
            )}
          </div>
          <div className="flex-1 w-full shadow-md shadow-white/20 p-6 sm:p-8 lg:p-10 rounded-lg bg-[#141414]">
            <h1 className="text-2xl sm:text-3xl text-[#be6b22] font-bold mb-4">
              Contact Information
            </h1>
            <div className="space-y-5 sm:space-y-7">
              <div className="space-y-5 sm:space-y-7">
                <h3 className="text-[#c28957] text-md sm:text-xl">
                  Your text here
                </h3>
                <p className="text-sm sm:text-lg">
                  {" "}
                  Laukahi 56713, Sunsari District, Nepal
                </p>
              </div>
              <div className="space-y-5 sm:space-y-7">
                <h3 className="text-[#c28957] text-md sm:text-xl">Email us</h3>
                <p className="text-sm sm:text-lg"> info@tobacconepal.com</p>
              </div>
              <div className="space-y-5 sm:space-y-7">
                <h3 className="text-[#c28957] text-md sm:text-xl">Call us</h3>
                <p className="text-sm sm:text-lg"> +977-9801800741</p>
              </div>
              <div className="space-y-5 sm:space-y-7">
                <h3 className="text-[#c28957] text-md sm:text-xl">
                  Business Hours
                </h3>
                <p className="text-sm sm:text-lg">
                  {" "}
                  Monday - Friday: 9:00 AM - 5:00 PM
                </p>
                <p className="text-sm sm:text-lg"> Saturday, Sunday : Closed</p>
              </div>
            </div>
            <div className="flex flex-col mt-8 space-y-4">
              <h1 className="text-[#c28957] text-base sm:text-xl mb-4">
                Follow us
              </h1>
              <div className="flex gap-6 flex-wrap">
                <FaFacebook className=" text-[#AB4600]" size={35} />
                <MdOutlineWhatsapp className="text-[#AB4600]" size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="w-full h-[300px] md:h-[500px] lg:h-[900px] relative rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7135.121817549633!2d87.064171!3d26.598462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef1b001a5f52ad%3A0x6194d7420b1d264a!2sUchha%20Himal%20Product%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1765811658234!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
