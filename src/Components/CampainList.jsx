import { useEffect, useState } from "react";
import { CampaignCard } from "./CampainCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const   CampaignList = () => {
    const [campaigns, setCampaigns] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate hook


    useEffect(() => {
      axios.get('https://donation-backend-gerd.vercel.app/campaigns') // Assuming your API endpoint is /campaigns
        .then(response => {
          setCampaigns(response.data);
        })
        .catch(error => {
          console.error('Error fetching campaigns:', error);
        });
    }, []);
  
console.log(campaigns)

 // Function to handle campaign click
 const handleCampaignClick = (campaign) => {
  // Transfer to a different page with campaign data
  navigate(`/campaign/${campaign._id}`, { state: { campaign  }  });
};



    return (
      <div className="flex flex-wrap justify-center ">
      {campaigns.map(campaign => (
        <CampaignCard  key={campaign._id} 
        campaign={campaign} 
       onClick={() => handleCampaignClick(campaign)}   />
      ))}
    </div>
    
    );
  };
  
  export default CampaignList;
  