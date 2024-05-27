import React, { useContext, useState } from 'react';
import { AuthContext } from '../Components/AuthContext' // Ensure correct import path
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CampaignForm = () => {
    const [studentName, setStudentName] = useState('');
    const { user } = useContext(AuthContext); // Access user from AuthContext
    const [educationalLevel, setEducationalLevel] = useState('');
    const [description, setDescription] = useState('');
    const [requiredAmount, setRequiredAmount] = useState('');
    const [cnicFile, setCnicFile] = useState(null);
    const [voucherFile, setVoucherFile] = useState(null);
    const navigate = useNavigate();
  
    const handleCnicChange = (e) => {
      setCnicFile(e.target.files[0]);
    };
  
    const handleVoucherChange = (e) => {
      setVoucherFile(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:8000/create-campaign', {
          studentName,
          educationalLevel,
          description,
          requiredAmount,
          userId: user._id // Assuming you have userId available
        });
  
        if (response.status === 201) {
          alert('Campaign created successfully!');
        } else {
          alert('Failed to create campaign');
        }
      } catch (error) {
        console.error('Error creating campaign:', error);
        alert('Failed to create campaign');
      }
    }
  

  return (
    <div className="max-w-md mx-auto">

        <h1 className='text-3xl font-bold py-4 font-serif	' >Create Campaign</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="studentName" className="block text-gray-700 text-sm font-bold mb-2">Student Name:</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="educationalLevel" className="block text-gray-700 text-sm font-bold mb-2">Educational Level:</label>
          <input
            type="text"
            id="educationalLevel"
            value={educationalLevel}
            onChange={(e) => setEducationalLevel(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="requiredAmount" className="block text-gray-700 text-sm font-bold mb-2">Required Amount:</label>
          <input
            type="number"
            id="requiredAmount"
            value={requiredAmount}
            onChange={(e) => setRequiredAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cnicFile" className="block text-gray-700 text-sm font-bold mb-2">CNIC (File):</label>
          <input
            type="file"
            id="cnicFile"
            accept=".jpg, .jpeg, .png, .pdf"
            onChange={handleCnicChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="voucherFile" className="block text-gray-700 text-sm font-bold mb-2">Fee Voucher (File):</label>
          <input
            type="file"
            id="voucherFile"
            accept=".jpg, .jpeg, .png, .pdf"
            onChange={handleVoucherChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;
