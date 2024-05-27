import React from 'react'
import MegaMenu from '../Components/Navbar'
import CampaignForm from '../Components/Campaign'
import Footer from '../Components/Footer'
import { Contact_Form } from '../Components/Contact_Form'

const Contact = () => {
  return (
    <>
    <MegaMenu/>
<div className='py-24' >
<Contact_Form/>
</div>

<Footer/>
    
    </>
  )
}

export default Contact