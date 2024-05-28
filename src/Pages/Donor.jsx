import React from 'react'
import MegaMenu from '../Components/Navbar'
import CampaignForm from '../Components/Campaign'
import Footer from '../Components/Footer'
import CampaignList from '../Components/CampainList'

const Donor = () => {
  return (
    <>
    <MegaMenu/>
<div  className='py-24' >
<h1 className="text-2xl font-bold text-center mb-6   ">Student Campaigns</h1>


<CampaignList/>
</div>

<Footer/>
    
    </>
  )
}

export default Donor