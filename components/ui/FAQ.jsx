"use client"

import { useState } from "react";

const FAQ = () => {
    const faqs = [
        {
            question: "What types of vehicles are available in your fleet?",
            answer: "Our fleet at RPC Limo includes a variety of luxury vehicles such as stretch limousines for grand entrances, spacious SUV limos for larger groups, and elegant sedans for a more intimate experience. Each vehicle is regularly inspected and maintained to ensure safety and comfort.",
        },
        {
            question: "Are your chauffeurs experienced?",
            answer: "Yes, each RPC Limo chauffeur is a highly trained professional. They are licensed, undergo thorough background checks, and possess extensive knowledge of the New York area to ensure a smooth and efficient ride.",
        },
        {
            question: "What amenities can I expect in a RPC Limo?",
            answer: "Our limousines offer an array of luxurious amenities including plush leather seating, advanced multimedia entertainment systems, climate control, privacy partitions, and complimentary refreshments. The available features may vary depending on the chosen vehicle.",

        },
        {
            question: "What is the minimum age requirement to rent a limo?",
            answer: "The primary person renting the limo must be at least 21 years old. We require a valid ID for verification and compliance with our rental policies.",
        },
        {
            question: "What if I encounter a problem during my service?",
            answer: "In the unlikely event of a problem, RPC Limo provides 24/7 customer support and roadside assistance to resolve any issues promptly and ensure your travel remains uninterrupted.",
        },
        {
            question: "Can I modify or cancel my reservation?",
            answer: "Yes, we offer flexible reservation policies. You can modify or cancel your booking according to the terms outlined in your rental agreement, which are designed for your convenience.",
        },

        {
            question: "How does RPC Limo ensure passenger safety during the ride?",
            answer: "Safety is our utmost concern. Apart from professional chauffeurs and well-maintained vehicles, we adhere to strict safety protocols and regularly update our practices to meet the highest standards of the limousine service industry.",
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mt-10 mb-[100px]">Frequently Asked Questions for RPC Limo Service</h2>
            <div className="space-y-4 mb-10">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} faq={faq} />
                ))}
            </div>
        </div>
    );
};

const FAQItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={"border-b pb-4 cursor-pointer "}
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <div className={"flex justify-between items-center "}>
                <h3 className={`text-lg font-medium  ${isOpen ? "bg-yellow-400 p-4 w-full" : ""}`} >{faq.question}</h3>
                <span className={`text-xl  ${isOpen ? "bg-yellow-400 p-4 " : ""} `}>{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen ? <p className="text-gray-600 mt-2">{faq.answer}</p> : null}
        </div>
    );
};

export default FAQ;
