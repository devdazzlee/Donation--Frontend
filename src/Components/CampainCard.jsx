import React from 'react';
import axios from 'axios';

export const CampaignCard = ({ campaign , onClick }) => {

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return description;
  };

  return (
    <div   onClick={onClick}  className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mx-4">
      <div className="px-6 py-4">
        <h2 className="font-semibold text-xl mb-2 text-gray-800">{campaign.studentName}</h2>
        <p className="text-gray-700 text-base">{truncateDescription(campaign.description)}</p>
        <p className="text-gray-700 text-base mt-2">Required Amount: <span className="font-semibold">${campaign.requiredAmount}</span></p>
      </div>
    </div>
  );
};
