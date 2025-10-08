import React from 'react';
import appsNotFound from '../assets/4660853_2417235 1.png'

const ErrorPage = () => {
    return (
         <div className='flex justify-center pb-25'>
                  <div>
                    <img className='' src={appsNotFound} alt="" />
                  <div className='text-center'>
                    <h1 className='font-semibold text-[#001931] text-[48px]'>OPPS!! APP NOT FOUND</h1>
                    <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                    <button className='border-0 text-white background-gradient rounded-sm px-6 py-2 mt-4'>Go Back!</button>
                  </div>
                  </div>
                </div>
    );
};

export default ErrorPage;<h1>404 page not found</h1>