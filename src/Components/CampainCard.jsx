import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

export const CampaignCard = ({ campaign, onClick }) => {
  const percentageGenerator = () => {
    return Math.floor(Math.random() * (100 - 30 + 1)) + 30;
  };

  // Placeholder image URLs related to poverty
  const povertyImages = [
    'https://images.pexels.com/photos/716281/pexels-photo-716281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1181474/pexels-photo-1181474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4260325/pexels-photo-4260325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2861798/pexels-photo-2861798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  // Randomly select an image from the list
  const selectedImage = povertyImages[Math.floor(Math.random() * povertyImages.length)];

  return (
    <div 
    onClick={onClick} 
    className="my-2 max-w-sm bg-gradient-to-r from-blue-100 to-purple-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mx-4"
  >
    <img 
      src={selectedImage} 
      alt="Poverty related" 
      className="w-full h-48 object-cover transition duration-300 ease-in-out transform hover:scale-110" 
    />
    <div className="px-6 py-4">
      <h2 className="font-semibold text-xl mb-2 text-gray-900">{campaign.scholarshipTitle}</h2>
      <p className="text-gray-700 text-base">{campaign.scholarshipReason}</p>
      <p className="text-gray-700 text-base mt-2">Required Amount: <span className="font-semibold">${campaign.fundType}</span></p>
      <div className="mt-4">
        {/* <ProgressBar completed={percentageGenerator()} /> */}
      </div>
    </div>
    <div className="px-6 py-4 bg-gray-100 flex justify-between items-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Donate Now</button>
      <p className="text-gray-700 text-sm">Every donation helps!</p>
    </div>
  </div>
  
  );
};
