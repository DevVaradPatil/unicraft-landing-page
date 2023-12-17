import React, { useState } from "react";
import plus from "../assets/plus-circle.svg";
import minus from "../assets/minus-circle.svg";
import { motion } from "framer-motion";
import { textVariant } from "../motionVariants";
import { useInView } from "react-intersection-observer";

const Faq = () => {
  const QnA = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a free trial for 30 days. During this period, you can explore our services at no cost. Additionally, if you'd like, we can schedule a free, personalized 30-minute onboarding call to assist you in getting started quickly.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Certainly! You have the flexibility to change your plan at any time. Whether you want to upgrade or downgrade, we make it easy for you to adjust your subscription according to your needs.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy allows you to cancel your subscription at any time. If you decide to cancel, your service will continue until the end of the current billing period, and you won't be charged thereafter. We value your satisfaction and aim to make the process hassle-free.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Absolutely! You can customize your invoices by adding additional information to meet your specific requirements. Our platform is designed to be flexible, allowing you to include relevant details on your invoices for clear and transparent communication with your clients.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is straightforward. After the 30-day free trial, you will be automatically billed based on the chosen plan. We offer various payment options for your convenience. If you have any specific questions about billing details, feel free to reach out, and we'll be happy to assist you.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "To change your account email, log in to your account and navigate to the account settings. There, you'll find an option to update your email address. If you encounter any issues or need assistance, don't hesitate to contact our support team, and we'll guide you through the process.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      id="faq"
      className="w-full max-w-[768px] sm:w-[90%] flex flex-col justify-center items-center text-center py-20"
    >
      <motion.h1
        variants={textVariant(0)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-gray-900 font-bold text-6xl sm:text-[42px]"
      >
        Frequently asked questions
      </motion.h1>
      <motion.p
        variants={textVariant(0)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-gray-500 text-xl font-medium mt-4 sm:text-base"
      >
        Everything you need to know about the product and billing.
      </motion.p>
      <div className="flex w-full flex-col gap-4 mt-16">
        {QnA.map((item, index) => (
          <div key={index} className="flex-col flex w-full">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <p className="text-xl text-left font-medium text-gray-800">
                {item.question}
              </p>
              <img src={expandedIndex === index ? minus : plus} alt="" />
            </div>
            <p
              className={`text-gray-500 -z-10 text-left mt-6 font-medium transition-all duration-300 ${
                expandedIndex === index
                  ? "opacity-100 h-[60px] sm:h-[130px]"
                  : "opacity-0 h-0 "
              }`}
            >
              {item.answer}
            </p>
            <div className="h-px w-full mt-6 bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
