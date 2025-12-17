"use client"
import { useState } from "react";
import "./contact.css";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
export default function page() {
  const [error,setError]=useState(false);
   const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [formData,setformData]=useState({
    fullName:"",
    email:"",
    subject:"",
    message:""
  })
  const data=["Fu"]
  const handleChange=(e)=>{
    let valid=true;
    let newError={
      fullName:"",
      email:"",
    subject:"",
    message:""
    };
    if(!formData.name){
      newError.name="Name is required";
      valid=false;
    }
    if(!formData.email){
      newError.email="Email is required";
      valid=false;
    }
    if(!formData.subject){
      newError.subject="Subject is required";
      valid=false;
    }
    if(!formData.message){
      newError.message="Message is required";
      valid=false;
    }
    setError(newError);
  if (!valid) return;

if (!formData.title || !formData.company|| !formData.subject||!formData.message) {
      alert("Title and Company are required!");
      return;
    }

  }
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


            {showUpdateForm&& 
        
            <form className="w-full max-w-180 flex flex-col space-y-8 mt-8">

              {/* <div className="space-y-1">
                <label className="text-[#bb8454] block text-md sm:text-xl ">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full border-none text-[14px] sm:text-[17px] text-slate-200 rounded px-3 sm:px-4 py-2
              bg-[#282828]
              focus:outline-none focus:ring-2 focus:ring-[#c28957]"
                  placeholder="Enter your full Name"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#bb8454] block text-md sm:text-xl ">
                  Email *
                </label>
                <input
                  type="text"
                  className="w-full border-none text-[14px] sm:text-[17px] text-slate-200 rounded px-3 sm:px-4 py-2
              bg-[#282828]
              focus:outline-none focus:ring-2 focus:ring-[#c28957]"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#bb8454] block text-md sm:text-xl ">
                  Subject *
                </label>
                <input
                  type="text"
                  className="w-full border-none text-[14px] sm:text-[17px] text-slate-200 rounded px-3 sm:px-4 py-2
              bg-[#282828]
              focus:outline-none focus:ring-2 focus:ring-[#c28957]"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[#bb8454] block text-md sm:text-xl ">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full  text-[14px] sm:text-[17px] text-slate-200 rounded px-3 sm:px-4 py-2 bg-[#282828] focus:outline-none focus:ring-2 focus:ring-[#c28957] h-24 sm:h-32"
                  placeholder="Write your message"
                ></textarea>
              </div> */}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#c28957]" />
                <p className="block text-sm sm:text-md text-slate-200 leading-relaxed">
                  I confirm that I am an authorised person/company to purchase
                  tobacco products in my country.
                </p>
              </div>
              <button className="bg-[#eab308] text-black px-4 sm:px-6 py-2 rounded font-semibold w-full sm:w-auto text-sm sm:text-base flex items-center justify-center gap-2">
                Inquire Now
              </button>
            </form>    }
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
            <div className="w-full h-[900px] md:h-[500px] relative rounded-lg overflow-hidden shadow-lg">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7135.121817549633!2d87.064171!3d26.598462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef1b001a5f52ad%3A0x6194d7420b1d264a!2sUchha%20Himal%20Product%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1765811658234!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            
            </div>
          </div>
        </section>

    </div>
  );
}
