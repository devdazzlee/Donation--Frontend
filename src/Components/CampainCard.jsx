import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CampaignCard = ({ campaign }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{campaign.studentName}</div>
        <p className="text-gray-700 text-base">{campaign.description}</p>
        <p className="text-gray-700 text-base">Required Amount: ${campaign.requiredAmount}</p>
      </div>
    </div>
  );
};