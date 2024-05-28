import React, { useContext } from 'react'
import MegaMenu from '../Components/Navbar'
import Volunter from '../Components/Volunter'
import { AuthContext } from '../Components/AuthContext' // Ensure correct import path
import Footer from '../Components/Footer'
import Aboutus from '../Components/About-us'

const Home = () => {
    const { user } = useContext(AuthContext); // Access user from AuthContext


    console.log(user)
  return (
   <>

   <MegaMenu/>

   <div className='pt-24' >

        
   </div>
   <Aboutus/>
   <Volunter/>
<Footer/>

   </>
  )
}

export default Home