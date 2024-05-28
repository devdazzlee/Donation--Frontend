
import React, { useState } from 'react';
import "./Navbar.css"; // CSS for styling
// import img1 from '../../Images/updatedAsset 9.svg'
import { Link  , useNavigate } from 'react-router-dom';
import logo from '../Web logo.png'


const MegaMenu = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false)
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)
  
  const navigate = useNavigate()
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(prevState => !prevState);
    };
    const handleClick = () => {
      window.location.href = 'tel:+17373591874';
    };
  
  
    function handleClick23() {
      navigate("/Donor");
    }
  
    return (
      <nav 
      style={{
        position: 'fixed',
        zIndex: '100',
      }}
      className="navbar nav-with-shadow bg-white border-gray-200 py-4">
        <div className="navbar-container">
     <Link  to={"/home"} >
  
  {/* <h1 className='font-bold text-3xl font-serif	' >Education Empower</h1> */}
     <img  className='h-16 md:mx-12 mx-4'  src={logo} alt="The Readsy Testimonials" />
  
        </Link>
  
          <div className="navbar-hamburger" onClick={toggleMobileMenu}>
            ☰
          </div>
  
          <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
  
          <Link itemprop="availability" href="https://schema.org/InStock"
                className="listitemcolorhover  block py-2 pl-3 pr-4 text-white rounded  md:p-0   "
                to={'/home'}
              >
                Home
              </Link>
          
  <li   className='mb-dropdown' >
  
  
  <Link itemprop="availability" href="https://schema.org/InStock"
                className="listitemcolorhover block py-2 pl-3 pr-4 text-white rounded  md:p-0"
                onClick={()=>{
                  setDropdown(!dropdown)
                }}
              >
                Contact
              </Link>
  </li>
  <Link itemprop="availability" href="https://schema.org/InStock"
                className="listitemcolorhover block  pl-3 pr-4 text-white rounded  md:p-0"
                to={'/Donor'}
              >
                
         Donor
              </Link>
            <Link itemprop="availability" href="https://schema.org/InStock"
                className="listitemcolorhover block  pl-3 pr-4 text-white rounded  md:p-0"
                to={'/Student_campaign'}
              >
               Student Campaign 
              </Link>
              <Link itemprop="availability" href="https://schema.org/InStock"
                className="listitemcolorhover block py-2 pl-3 pr-4 text-white rounded  md:p-0   "
                to={'/Contact'}
              >
  Contact
              </Link>
      
        <button
          style={{ background: "#232F3F" }}
          className="listitemcolorhover w-full md:w-auto text-white font-bold py-2 px-4 rounded-full custom-button"
          itemscope
          itemtype="http://schema.org/Button"
          onClick={handleClick}
        >
          <span itemprop="name"> +1 737-222-7373</span>
        </button>


  <button
  onClick={handleClick23}
    style={{ background: "#232F3F" }}
    className="listitemcolorhover w-full md:w-auto text-white font-bold py-2 px-4 rounded-full custom-button"
    itemscope
    itemtype="http://schema.org/Button"
  >
    <span itemprop="name">Donate Now </span>
  </button>

          </ul>
        </div>
      </nav>
    );
  };
  
export default MegaMenu;