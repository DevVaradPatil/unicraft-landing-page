import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const ContactForm = ({setIsModalOpen}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setIsModalOpen(false);
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-gray-700/50 flex items-center justify-center">
      <div className="w-[550px] px-5 sm:w-[90%] relative h-fit py-7 rounded-xl bg-white shadow-pricingBox flex flex-col justify-center items-center">
        <h1 className="text-4xl  font-extrabold text-gray-800 mb-4 sm:mt-4">Contact Us</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full text-lg  text-left  "
        >
            <div className="absolute p-1 text-red-500 bg-gray-200 rounded-md top-3 right-3 cursor-pointer hover:opacity-70" onClick={()=> setIsModalOpen(false)}>
                <IoClose fontSize={22}/>
            </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md font-medium"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md font-medium"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md font-medium resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-lg rounded-lg border text-gray-50 bg-gray-800 py-3 px-8 mt-2 font-semibold transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl sm:w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
