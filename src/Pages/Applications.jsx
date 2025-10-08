import React from 'react';
import { useLoaderData } from 'react-router';
import Application from './Application';

const Applications = () => {

    const allData = useLoaderData();

    console.log(allData);
    
    return (
        

        <div>
               <h1 className='font-bold text-center text-[48px] mt-10'>Our All Applications</h1>
            <p className=' text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

           <div className='flex justify-between items-center mx-20 mt-10'>
             <p className='text-[24px] font-semibold'>({allData.length}) Apps Found</p>
             <div>
                <label className="input ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search Apps" />
</label>
             </div>
           </div>

            <div className='grid grid-cols-4 gap-6 p-20 '>
         {
            allData.map(data=><Application data={data}></Application>)
         }
            </div>
      
            
        </div>
    );
};

export default Applications;