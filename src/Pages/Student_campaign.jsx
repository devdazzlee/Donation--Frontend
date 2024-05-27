import React from 'react'
import MegaMenu from '../Components/Navbar'
import Footer from '../Components/Footer'
import CampaignForm from '../Components/Campaign'

const Student_campaign = () => {
  return (
<>

<MegaMenu/>
<div className='py-24' >
<CampaignForm/>
</div>

<Footer/>

</>
  )
}

export default Student_campaign