import React, { useContext } from 'react'
import MegaMenu from '../Components/Navbar'
import Volunter from '../Components/Volunter'
import { AuthContext } from '../Components/AuthContext' // Ensure correct import path
import Footer from '../Components/Footer'
import Aboutus from '../Components/About-us'
import BannerCarousel from '../Components/Carousel'

const Home = () => {
    const { user } = useContext(AuthContext); // Access user from AuthContext


    console.log(user)
  return (
   <div className='fontchange'>

   <MegaMenu/>
   <div className='pt-24' >
    <BannerCarousel/>
   <Aboutus/>
   </div>
   <Volunter/>
<Footer/>

   </div>
  )
}

export default Home