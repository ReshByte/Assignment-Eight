import React from 'react';
import { useLoaderData } from 'react-router';
import Application from './Application';

const Applications = () => {

    const allData = useLoaderData();

    console.log(allData);
    
    return (
        

        <div>
               <h1 className='font-bold text-center text-[48px]'>Our All Applications</h1>
            <p className=' text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <p className='text-[24px] font-semibold mx-20 mt-20'>({allData.length}) Apps Found</p>

            <div className='grid grid-cols-4 gap-6 p-20'>
         {
            allData.map(data=><Application data={data}></Application>)
         }
            </div>
      
            
        </div>
    );
};

export default Applications;