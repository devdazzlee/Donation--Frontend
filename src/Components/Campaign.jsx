import React, { useState } from 'react';
import axios from 'axios';

const CampaignForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        phoneNumber: '',
        city: '',
        address: '',
        educationLevel: '',
        fundType: '',
        scholarshipTitle: '',
        scholarshipReason: '',
        familyMembers: 0,
        householdIncome: '',
        amountNeeded: '',
        termsAgreement: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/create-campaign', formData);
            console.log('Campaign created successfully:', response.data);
            alert("Campaign created successfully:")
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                birthDate: '',
                phoneNumber: '',
                city: '',
                address: '',
                educationLevel: '',
                fundType: '',
                scholarshipTitle: '',
                scholarshipReason: '',
                familyMembers: 0,
                householdIncome: '',
                amountNeeded: '',
                termsAgreement: false,
            });
    
            // Optionally, you can redirect the user or show a success message
        } catch (error) {
            console.error('Error creating campaign:', error);
            alert("Error creating campaign")
            // Handle error: show error message to the user
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold py-4 font-serif">Student Details</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* Personal Information */}
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="@gmail.com"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="birthDate" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
                    <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="+92 XXXXXXXXXX"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Upload Your image:</label>
                    <input
                        type="file"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="+92 XXXXXXXXXX"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Upload Your Cnic:</label>
                    <input
                        type="file"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="+92 XXXXXXXXXX"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
                    <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="">Select City</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Multan">Multan</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Upload Your ID Card:</label>
                    <input
                        type="file"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="+92 XXXXXXXXXX"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Upload Your Fee Voucher</label>
                    <input
                        type="file"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="+92 XXXXXXXXXX"
                        required
                    />
                </div>
                {/* Educational Information */}
                <div className="mb-4">
                    <label htmlFor="educationLevel" className="block text-gray-700 text-sm font-bold mb-2">Education Level:</label>
                    <select
                        id="educationLevel"
                        name="educationLevel"
                        value={formData.educationLevel}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="">Select Education Level</option>
                        <option value="Middle School">Middle School</option>
                        <option value="High School">High School</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="Ph.D.">Ph.D.</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="fundType" className="block text-gray-700 text-sm font-bold mb-2">Type of fund:</label>
                    <select
                        id="fundType"
                        name="fundType"
                        value={formData.fundType}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="">Select the need of fund requirement</option>
                        <option value="1">Admission Fees</option>
                        <option value="2">Monthly fee</option>
                        <option value="3">Scholarship</option>
                        <option value="4">Certification</option>
                        <option value="5">Tuition Expenses</option>
                        </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="scholarshipTitle" className="block text-gray-700 text-sm font-bold mb-2">Title for Scholarship:</label>
                    <input
                        type="text"
                        id="scholarshipTitle"
                        name="scholarshipTitle"
                        value={formData.scholarshipTitle}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="scholarshipReason" className="block text-gray-700 text-sm font-bold mb-2">Reason for Scholarship (250 words):</label>
                    <textarea
                        id="scholarshipReason"
                        name="scholarshipReason"
                        value={formData.scholarshipReason}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="familyMembers" className="block text-gray-700 text-sm font-bold mb-2">Number of Family members:</label>
                    <input
                        type="number"
                        id="familyMembers"
                        name="familyMembers"
                        value={formData.familyMembers}
                        onChange={handleChange}
                        min="1"
                        max="5"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="householdIncome" className="block text-gray-700 text-sm font-bold mb-2">Household Income:</label>
                    <input
                        type="text"
                        id="householdIncome"
                        name="householdIncome"
                        value={formData.householdIncome}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="amountNeeded" className="block text-gray-700 text-sm font-bold mb-2">Amount needed for cause:</label>
                    <input
                        type="text"
                        id="amountNeeded"
                        name="amountNeeded"
                        value={formData.amountNeeded}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="termsAgreement" className="block text-gray-700 text-sm font-bold mb-2">Terms and Conditions:</label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="termsAgreement"
                            name="termsAgreement"
                            checked={formData.termsAgreement}
                            onChange={handleChange}
                            className="form-checkbox h-5 w-5 text-blue-600"
                            required
                        />
                        <label htmlFor="termsAgreement" className="ml-2 text-gray-700 text-sm">I agree that all the information provided is correct and the website has the right to take legal action if detected scam.</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="termsAgreement"
                            className="form-checkbox h-5 w-5 text-blue-600"
                            required
                        />
                        <label htmlFor="termsAgreement" className="ml-2 text-gray-700 text-sm">I agree that I am eligible to sign up for donation.</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="termsAgreement"
                            className="form-checkbox h-5 w-5 text-blue-600"
                            required
                        />
                        <label htmlFor="termsAgreement" className="ml-2 text-gray-700 text-sm">I give consent for all the cross verification of my documents.</label>
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Details</button>
            </form>
        </div>
    );
};

export default CampaignForm;
