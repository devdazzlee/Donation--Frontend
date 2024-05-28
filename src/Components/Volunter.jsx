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
                      <a href="#">Zain Khan</a>
                  </h3>
                  <span class="text-gray-500  ">CEO & Web Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500  ">Zain Khan  Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                 
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex  ">
              <a href="#">
                  <img class=" w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={Rohan} alt="Jese Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900  ">
                      <a href="#">Rohan Chaudhry</a>
                  </h3>
                  <span class="text-gray-500  ">CTO</span>
                  <p class="mt-3 mb-4 font-light text-gray-500  ">Rohan Chaudhry  the technical strategy of the flowbite platform and brand.</p>
                
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex  ">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={Meera} alt="Michael Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900  ">
                      <a href="#">Sadia Shah</a>
                  </h3>
                  <span class="text-gray-500  ">Senior Front-end Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500  ">Sadia Shah drives the technical strategy of the flowbite platform and brand.</p>
               
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex  ">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={Sara} alt="Sofia Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900  ">
                      <a href="#">Aisha Patel</a>
                  </h3>
                  <span class="text-gray-500  ">Marketing & Sale</span>
                  <p class="mt-3 mb-4 font-light text-gray-500  ">Aisha Patel drives the technical strategy of the flowbite platform and brand.</p>
                
              </div>
          </div>  
       
      </div>  
  </div>
</section>
  )
}

export default Volunter