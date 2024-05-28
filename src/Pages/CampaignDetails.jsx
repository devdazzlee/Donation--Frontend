import React from "react";
import { useLocation } from "react-router-dom";
// import { FaMoneyBillAlt } from "react-icons/fa"; // Import FontAwesome Skrill icon

const CampaignDetails = () => {
  const { state } = useLocation();

  // Access the campaign data passed from the previous page
  const campaign = state && state.campaign;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">Campaign Details</h2>
      {campaign && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">{campaign.studentName}</h3>
          <p className="text-gray-600 mb-4">{campaign.educationalLevel}</p>
          <p className="text-gray-800 mb-6">{campaign.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-800 font-semibold">Required Amount: ${campaign.requiredAmount}</p>
            <button className="flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Pay With Skrill  <i class="fa-solid ml-2 fa-dollar-sign"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignDetails;
