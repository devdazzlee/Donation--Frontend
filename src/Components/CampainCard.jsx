import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

export const CampaignCard = ({ campaign, onClick }) => {
  const percentageGenerator = () => {
    return Math.floor(Math.random() * (100 - 30 + 1)) + 30;
  };

  // Placeholder image URLs related to poverty
  const povertyImages = [
    'https://images.unsplash.com/photo-1494832944834-a08818c634b0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1682097168134-aeb1d79cfa43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1523847027398-d3eb27914c67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  // Randomly select an image from the list
  const selectedImage = povertyImages[Math.floor(Math.random() * povertyImages.length)];

  return (
    <div onClick={onClick} className="my-2 max-w-sm bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mx-4">
      <img src={selectedImage} alt="Poverty related" className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <h2 className="font-semibold text-xl mb-2 text-gray-800">{campaign.scholarshipTitle}</h2>
        <p className="text-gray-700 text-base">{campaign.scholarshipReason}</p>
        <p className="text-gray-700 text-base mt-2">Required Amount: <span className="font-semibold">${campaign.fundType}</span></p>
        <div className="mt-4">
          <ProgressBar completed={percentageGenerator()} />
        </div>
      </div>
    </div>
  );
};
