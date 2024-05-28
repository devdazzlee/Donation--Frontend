import React from "react";
import MegaMenu from "../Components/Navbar";
import Footer from "../Components/Footer";
import CampaignForm from "../Components/Campaign";

const Student_campaign = () => {
  return (
    <div className="fontchange">
      <MegaMenu />
      <div className="py-28">
        <CampaignForm />
      </div>
      <Footer />
    </div>
  );
};

export default Student_campaign;
