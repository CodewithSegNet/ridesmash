import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HirePurchase = () => {
  const [expandedContent, setExpandedBlogs] = useState({});

  const toggleReadMore = (index) => {
    setExpandedBlogs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const content = [
    {
      id: 1,
      title: 'APPLICATION',
      description:
        'Pick up an application form or request an E-form (with account details for registration) \n1. Application Fee: 10,000 Naira \n2. Verification of the Application and Approval ',
    },
    {
      id: 2,
      title: 'PROCESSING FEE',
      description:
        "Pay 2.5% processing fee of your selected car's value",
    },
    {
        id: 3,
        title: 'VERIFICATION AND APPROVAL',
        description:
          "Verification of applicant, guarantors and Approval",
      },
      {
        id: 4,
        title: 'SELECT VEHICLE',
        description:
          "Choose a car within the range of 5 million to 15 million (Belgium not Nigerian Used)\n- Submit invoice details of your selected car.",
      },
      {
        id: 5,
        title: 'OFFER LETTER',
        description:
          "The company issues an offer letter to the Applicant to agree with the terms and conditions and sign base on the agreement.",
      },
      {
        id: 6,
        title: 'INSPECTION OF THE VEHICLE',
        description:
          "Before approving any vehicle, we conduct a thorough inspection to ensure quality and safety",
      },
      {
        id: 7,
        title: 'DOWN PAYMENT',
        description:
          "Pay 30% down payment of the cost of the car. (Equity contribution)",
      },
      {
        id: 8,
        title: 'VEHICLE PURCHASE AND DOCUMENTATION',
        description:
          "1. Ridesmash purchases the vehicle and install tracker, vehicle registration, CRM\n2. Processes all documents including insurance.",
      },
      {
        id: 9,
        title: 'AGREEMENT',
        description:
          "The client and the guarantors understand their obligations and sign the agreement",
      },
      {
        id: 10,
        title:'HAND OVER',
        description:
          "Vehicle handover to applicant.",
      },
  ];

  return (
    <div className="flex md:h-full py-[3.5rem] md:py-[4.5rem] lg:py-[7rem] px-[1rem] md:bg-blue-100 md:justify-center md:items-center md:w-full">
      <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-col">
        {/* Header Section */}
        <div className="flex max-w-screen-2xl mx-auto md:w-full md:p-6 md:items-center items-start md:justify-center flex-col">
          <h3 className="text-3xl md:text-4xl text-primary text-center w-[100%] font-black mb-6 inter">
            Application Process
          </h3>
          <p className='mb-12 text-center w-full md:w-[80%]'><span className='inter text-primary font-bold text-xl'>Note: </span> Every step will be verified and communicated to the applicant to proceed to the next step.

Applicant who are unable to come to our office to pick a form, can request for an <a className='text-blue-700 underline' href="">e-form</a>  which will be sent to you with an account details for registration then afterwards the process continues.</p>
        </div>

        {/* Blog Cards Section */}
        <div className="w-full md:w-full md:flex-row flex-col gap-2 md:gap-2">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start gap-4 md:gap-6 md:items-center md:justify-center sm:gap-5">
            {content.map((content, index) => (
              <Link to="" key={content.id}>
                <div className="bg-blue-200 rounded-md shadow-lg py-10 px-8 items-center flex justify-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex w-[100%] h-[100%] flex-col justify-center">
                    <div className="rounded-full flex items-center bg-primary mb-9 justify-center px-3 w-[40px] h-[40px] border-2 border-primary">
                      <p className="text-gray-100">{content.id}</p>
                    </div>
                    <h5 className="text-sm md:text-md font-semibold text-primary">{content.title}</h5>
                    <h5 className="text-sm md:text-sm text-gray-600 mt-3">
                      {expandedContent[index]
                        ? content.description.split(/<br>|\n/).map((line, i) => (
                            <p key={i} className="mb-2">{line.trim()}</p>
                          ))
                        : `${content.description.slice(0, 80)}...`}
                    </h5>

                    <span
                      className="text-primary font-semibold text-sm cursor-pointer mt-4"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleReadMore(index);
                      }}
                    >
                      {expandedContent[index] ? 'Read Less' : 'Read More'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HirePurchase;
