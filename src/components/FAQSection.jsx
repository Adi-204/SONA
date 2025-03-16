import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
            aria-hidden="true"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const FAQSection = () => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const faqs = [
        {
            id: 1,
            question: "What are your restaurant’s hours of operation?",
            answer: `Monday - Sunday: 5 – 10 pm (Thursday - Saturday until 11 pm)`,
        },
        {
            id: 2,
            question: "Do you offer vegetarian or vegan options?",
            answer: "Yes, we have a wide range of vegetarian dishes, and many can be customized to be vegan. Please let our staff know about your dietary preferences.",
        },
        {
            id: 3,
            question: "Are there gluten-free options available?",
            answer: "We have several gluten-free options on our menu. Please inform our staff of any dietary restrictions, and we will be happy to accommodate you.",
        },
        {
            id: 4,
            question: "What measures are you taking for health and safety?",
            answer: "We adhere to strict health and safety guidelines, including regular sanitization, social distancing, and staff health checks to ensure a safe dining experience for our guests.",
        },
        {
            id: 5,
            question: "What payment methods do you accept?",
            answer: "We accept cash, credit/debit cards, and mobile payment options. If you have any other questions, feel free to contact us directly. We look forward to serving you!",
        },
    ];

    return (
        <div className='lg:ml-36 mt-8 ml-12 max-w-[80vw]'>
            {faqs.map(({ id, question, answer }) => (
                <Accordion key={id} open={open === id} icon={<Icon id={id} open={open} />} className="mb-4">
                    <AccordionHeader
                        className={`text-black transition-colors ${open === id ? "text-blue-500 hover:!text-blue-700" : "hover:text-black"}`}
                        onClick={() => handleOpen(id)}
                    >
                        {question}
                    </AccordionHeader>
                    <AccordionBody className='text-black text-[1.2rem]'>{answer}</AccordionBody>
                </Accordion>
            ))}
        </div>
    );
};

export default FAQSection;
