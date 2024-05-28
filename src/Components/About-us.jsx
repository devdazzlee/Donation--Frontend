import React from 'react';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8 mt-4">About Us</h1>

      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-blue-600">Education Empower</span>, a dedicated crowdfunding platform designed to empower students in their educational journeys. We understand that financial barriers can hinder access to quality education, and we're here to bridge that gap. Our mission is to provide a reliable and secure platform where students can raise funds for scholarships, tuition fees, course registrations, and other educational expenses.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold text-blue-600">Education Empower</span>, we believe in the power of community and the importance of education. We ensure that only verified and authentic students are featured on our site, giving donors the confidence that their contributions are making a genuine difference. Our rigorous verification process and transparent fund disbursement system ensure that every dollar donated goes directly to supporting the student's educational needs.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Together, we can make a difference, one student at a time.
        </p>
       <Link to={'/donor'} >
       
       <button
    style={{ background: "#232F3F" }}
    className="listitemcolorhover mt-6  w-full md:w-auto text-white font-bold py-2 px-4 rounded-full custom-button"
    itemscope
    itemtype="http://schema.org/Button"
  >
    <span itemprop="name">Donate Now </span>
  </button>
       
       </Link>
      </div>
    </>
  );
};

export default Aboutus;
