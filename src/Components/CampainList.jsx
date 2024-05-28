import { useEffect, useState } from "react";
import { CampaignCard } from "./CampainCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";


const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    axios.get('https://donation-backend-gerd.vercel.app/campaigns') // Assuming your API endpoint is /campaigns
      .then(response => {
        setCampaigns(response.data);
        setLoading(false); // Data fetched, set loading to false
      })
      .catch(error => {
        console.error('Error fetching campaigns:', error);
        setLoading(false); // Error occurred, set loading to false
      });
  }, []);

  console.log(campaigns);

  // Function to handle campaign click
  const handleCampaignClick = (campaign) => {
    // Navigate to a different page with campaign data
    navigate(`/campaign/${campaign._id}`, { state: { campaign } });
  };

  return (
    <div className="flex flex-wrap justify-center min-h-96">
      {loading ? (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        />
      ) : (
        campaigns.map(campaign => (
          <CampaignCard
            key={campaign._id}
            campaign={campaign}
            onClick={() => handleCampaignClick(campaign)}
          />
        ))
      )}
    </div>
  );
};

export default CampaignList;
