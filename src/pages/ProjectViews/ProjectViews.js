import React from 'react'


const asoeGambar = [

    {
        image1:"https://images.pexels.com/photos/4464483/pexels-photo-4464483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        image2:"https://images.pexels.com/photos/4464483/pexels-photo-4464483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        image3:"https://images.pexels.com/photos/4464483/pexels-photo-4464483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        image1:"https://images.pexels.com/photos/4464483/pexels-photo-4464483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        image2:"https://images.pexels.com/photos/4464483/pexels-photo-4464483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        image3:"https://images.pexels.com/photos/4464483/pexels-photo-4464483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        image1:"https://images.pexels.com/photos/4464483/pexels-photo-4464483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        image2:"https://images.pexels.com/photos/4464483/pexels-photo-4464483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        image3:"https://images.pexels.com/photos/4464483/pexels-photo-4464483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
];

const ProjectViews = () => {
  return (
    <section className='flex justify-center w-full aglign-center bg-slate-50 h-full  h-50 mx-50'>
    <div className='justify-center w-full aglign-center bg-slate-50 h-full'>

    <div className='flex justify-center aglign-center mt-20'>
        <li className='items-center mt-20 text-center list-none'>
    <p className='flex-row'>
            Why Choose SlyBuild?
            </p>
            <h1 className='text-2xl font-bold mt30'>
            Our Solutions Cover a Wide Range of Industries
            </h1>
            </li>
    </div>



{/* List card */}
<div className='flex justify-center items-center'>
<div className='grid grid-cols-2 gap-1 gap-x-3 gap-y-5 md:grid-cols-3 lg:grid-cols-3 mx-20 py-20 md:mx-10 md:my10 place-content-center'>

{asoeGambar.map((items) => (
    
<div class="max-w-sm bg-white shadow- shadow-blue-500/50 rounded-3xl">
    <a href="#">
        <img class="rounded-t-3xl" src={items.image1} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

))}



</div>

</div>







    </div>

    </section>
  )
}

export default ProjectViews
