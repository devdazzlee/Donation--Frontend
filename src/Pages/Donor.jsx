import React from 'react'
import MegaMenu from '../Components/Navbar'
import CampaignForm from '../Components/Campaign'
import Footer from '../Components/Footer'
import CampaignList from '../Components/CampainList'

const Donor = () => {
  return (
    <>
    <MegaMenu/>
<div className='py-24' >
<CampaignList/>
</div>

<Footer/>
    
    </>
  )
}

export default Donor