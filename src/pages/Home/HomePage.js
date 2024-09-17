import React from 'react'
import Card from '../Card/Card'


const Hero = () => {
  return (

   <section>
    <div class="relative  overflow-hidden">
      
    <div className='bg-cover bg-center bg-cover absolute inset-0'>
          <img src='https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='image' class="object-cover object-center w-full h-full"/>
    </div>

    <div className='flex relative z-10 justify-center items-center m-20'>

      <ul className='text-center'>

        <h1 className='text-4x pt-44 text-center '>Find Your Job
        Here
        </h1>
        <p1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p1>
        </ul>  
    </div>


    <div class="flex relative z-10 justify-center items-center my-20">
        <div>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
        </div>
    </div>

    <div>

  
    
    </div>

    </div>

    <Card />
   </section>

  )
}

export default Hero
