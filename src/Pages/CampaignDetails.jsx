import React from "react";
import { Link, useLocation } from "react-router-dom";

const CampaignDetails = () => {
  const { state } = useLocation();
  const campaign = state && state.campaign;

  const povertyImages = [
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%27',
    'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%27',
  ];

  // Randomly select an image from the list
  const selectedImage = povertyImages[Math.floor(Math.random() * povertyImages.length)];


  return (
    <div className="max-w-4xl mx-auto px-4 py-8 fontchange">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Campaign Details</h2>
      {campaign ? (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src={selectedImage} // Placeholder image URL, replace with actual image URL
            alt="Campaign"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{campaign.scholarshipTitle}</h3>
            <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Student Name: </span>{campaign.firstName} {campaign.lastName}</p>
            <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Email: </span>{campaign.email}</p>
            <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Birth Date: </span>{new Date(campaign.birthDate).toLocaleDateString()}</p>
            <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Phone Number: </span>{campaign.phoneNumber}</p>
            <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">City: </span>{campaign.city}</p>
            <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Address: </span>{campaign.address}</p>
            <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Education Level: </span>{campaign.educationLevel}</p>
            <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Scholarship Reason: </span>{campaign.scholarshipReason}</p>
            <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Family Members: </span>{campaign.familyMembers}</p>
            <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Household Income: </span>${campaign.householdIncome}</p>

            <p className="text-gray-700 text-lg mb-4"><span className="font-semibold">Created On: </span>{new Date(campaign.createdOn).toLocaleDateString()}</p>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="text-gray-800 text-xl font-semibold">Required Amount: <span className="text-green-500">${campaign.fundType}</span></p>
            </div>
            <div className="flex justify-center">

<Link  to={'/PaywithSkrill'} >
              <button style={{"backgroundColor" :"#5D1650"}} className="flex items-center  text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
              Pay With Skrill   {campaign.amountNeeded} <i class="fa-solid ml-2 fa-dollar-sign"></i>
              </button>

</Link>

            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No campaign data available.</p>
      )}
    </div>
  );
};

export default CampaignDetails;
