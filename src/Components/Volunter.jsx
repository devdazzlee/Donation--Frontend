import React from 'react'
import Aarav from '../Aarav.jpg'
import Aisha from '../Aisha.jpg'
import Rohan from '../Rohan.jpg'
import Sara from '../Sara.jpg'
import Zain from '../ZAin.jpg'
import Meera from '../Meera.jpg'



const Volunter = () => {
  return (
    <section class="bg-white dark:bg-gray-900 ">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900  ">Our Team</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl  ">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
      </div> 
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex  ">
              <a href="#">
                  <img class=" rounded-lg sm:rounded-none sm:rounded-l-lg " src={Aarav} alt="Bonnie Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900  ">
                      <a href="#">Zain khan</a>
                  </h3>
                  <span class="text-gray-500  ">CEO</span>
                  <p class="mt-3 mb-4 font-light text-gray-500  ">Provides overall strategic direction and vision for the platform, ensuring alignment with the mission to support students. Builds partnerships with educational institutions and major donors to secure funding and increase platform credibility.</p>
                 
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex  ">
              <a href="#">
                  <img class=" w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={Rohan} alt="Jese Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900  ">
                      <a href="#">Rohan </a>
                  </h3>
                  <span class="text-gray-500  ">Chief Technology Officer (CTO) </span>
                  <p class="mt-3 mb-4 font-light text-gray-500  ">Leads the technology strategy and oversees the development of the crowdfunding platform. Ensures the site is secure, efficient, and capable of handling large volumes of donations and user activity.</p>
                
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex  ">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={Meera} alt="Michael Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900  ">
                      <a href="#">Saadia</a>
                  </h3>
                  <span class="text-gray-500  ">Marketing Manager</span>
                  <p class="mt-3 mb-4 font-light text-gray-500  ">Develops and implements marketing strategies to attract users to the platform and promote individual projects. Manages social media, content creation, and advertising campaigns to increase visibility and drive engagement.</p>
               
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex  ">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={Sara} alt="Sofia Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900  ">
                      <a href="#">Aisha </a>
                  </h3>
                  <span class="text-gray-500  ">Donor Relations Manager</span>
                  <p class="mt-3 mb-4 font-light text-gray-500  ">Focuses on building and maintaining relationships with donors, ensuring they have a positive experience. Develops strategies to engage and retain donors, provides regular updates on the impact of their contributions, and handles donor inquiries and feedback.</p>
                
              </div>
          </div>  
       
      </div>  
  </div>
</section>
  )
}

export default Volunter