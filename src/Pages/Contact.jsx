import React from "react";
import MegaMenu from "../Components/Navbar";
import CampaignForm from "../Components/Campaign";
import Footer from "../Components/Footer";
import { Contact_Form } from "../Components/Contact_Form";

const Contact = () => {
  return (
    <div className="fontchange">
      <MegaMenu />
      <div className="py-24">
        <Contact_Form />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
