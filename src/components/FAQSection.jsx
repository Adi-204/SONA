import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const FAQSection = () => {

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className='lg:ml-36 mt-8 ml-12 max-w-[80vw]'>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader
                    className={`text-black transition-colors ${open === 1 ? "text-blue-500 hover:!text-blue-700" : "hover:text-black"
                        }`}
                    onClick={() => handleOpen(1)}
                >
                    What are your restaurant’s hours of operation?
                </AccordionHeader>
                <AccordionBody className='text-black text-[1.2rem]'>
                    Monday : 5 – 10 pm <br />
                    Tuesday : 5 – 10 pm <br />
                    Wednesday : 5 – 10 pm <br />
                    Thursday : 5 – 11 pm <br />
                    Friday : 5 – 11 pm <br />
                    Saturday : 5 – 11 pm <br />
                    Sunday : 5 – 10 pm
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader className={`text-black transition-colors ${open === 2 ? "text-blue-500 hover:!text-blue-700" : "hover:text-black"
                    }`} onClick={() => handleOpen(2)}>
                    Do you offer vegetarian or vegan options?
                </AccordionHeader>
                <AccordionBody className='text-black text-[1.2rem]'>
                    Yes, we have a wide range of vegetarian dishes, and many can be customized to be vegan. Please let our staff know about your dietary preferences.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader className={`text-black transition-colors ${open === 3 ? "text-blue-500 hover:!text-blue-700" : "hover:text-black"
                    }`} onClick={() => handleOpen(3)}>
                    Are there gluten-free options available?
                </AccordionHeader>
                <AccordionBody className='text-black text-[1.2rem]'>
                    We have several gluten-free options on our menu. Please inform our staff of any dietary restrictions, and we will be happy to accommodate you.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader className={`text-black transition-colors ${open === 4 ? "text-blue-500 hover:!text-blue-700" : "hover:text-black"
                    }`} onClick={() => handleOpen(4)}>
                    What measures are you taking for health and safety?
                </AccordionHeader>
                <AccordionBody className='text-black text-[1.2rem]'>
                    We adhere to strict health and safety guidelines, including regular sanitization, social distancing, and staff health checks to ensure a safe dining experience for our guests.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                <AccordionHeader className={`text-black transition-colors ${open === 5 ? "text-blue-500 hover:!text-blue-700" : "hover:text-black"
                    }`} onClick={() => handleOpen(5)}>
                    What payment methods do you accept?
                </AccordionHeader>
                <AccordionBody className='text-black text-[1.2rem]'>
                    We accept cash, credit/debit cards, and mobile payment options.
                    If you have any other questions, feel free to contact us directly. We look forward to serving you!
                </AccordionBody>
            </Accordion>
        </div>
    )
}

export default FAQSection