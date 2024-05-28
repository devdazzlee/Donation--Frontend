import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { AuthProvider } from './Components/AuthContext';
import Student_campaign from './Pages/Student_campaign';
import Donor from './Pages/Donor';
import Contact from './Pages/Contact';
import CampaignDetails from './Pages/CampaignDetails';
import PaywithSkrill from './Components/PaywithSkrill';


const App = () => {
  return (

<>
<AuthProvider>

<BrowserRouter>

<Routes>

<Route
      path={"/"}
      element={
        <>
     <Login  />
        </>
      }
    />

<Route
      path={"/Signup"}
      element={
        <>
     <Signup  />
        </>
      }
    />

<Route
      path={"/home"}
      element={
        <>
     <Home  />
        </>
      }
    />
<Route
      path={"/Student_campaign"}
      element={
        <>
     <Student_campaign  />
        </>
      }
    />

<Route
      path={"/Donor"}
      element={
        <>
     <Donor/>
        </>
      }
    />
    <Route
      path={"/Contact"}
      element={
        <>
     <Contact/>
        </>
      }
    />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/PaywithSkrill" element={<PaywithSkrill />} />


        
    </Routes>


    

</BrowserRouter>

</AuthProvider>



</>

    )
}

export default App