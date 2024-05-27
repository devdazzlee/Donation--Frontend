import { useEffect, useState } from "react";
import { CampaignCard } from "./CampainCard";
import axios from "axios";

const CampaignList = () => {
    const [campaigns, setCampaigns] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:8000/campaigns') // Assuming your API endpoint is /campaigns
        .then(response => {
          setCampaigns(response.data);
        })
        .catch(error => {
          console.error('Error fetching campaigns:', error);
        });
    }, []);
  
    return (
      <div className="flex flex-wrap justify-center">
      {campaigns.map(campaign => (
        <CampaignCard key={campaign._id} campaign={campaign} />
      ))}
    </div>
    
    );
  };
  
  export default CampaignList;
  