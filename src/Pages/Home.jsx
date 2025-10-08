import React from 'react';
import google from '../assets/googleplay.png'
import appStore from '../assets/Group (2).png'
import { Link, useLoaderData } from 'react-router';
import heroImg from '../assets/hero.png' 
import Cards from '../component/Cards';

const Home = () => {

        const data = useLoaderData();
    
    


    return (
        <div>
            <div className='mt-[80px]'>
         <div>
            <h1 className='text-6xl font-bold text-center'>We Build <br />
 <span className='text-gradient'> Productive</span> Apps</h1>
         </div>

         <div className='mt-5'>
            <p className='text-center text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
         </div>
         <div className='flex justify-center gap-3 mt-5'>
            <div>
                <Link to="https://play.google.com/store/games?hl=en">
                 <button className='btn border-1 border-gray-500 bg-[#d2d2d2] font-medium py-6'><img src={google} alt="" /> Google Play</button>
                </Link>
                 
            </div>
           <div>
               <Link to="https://www.apple.com/app-store/">
               <button className='btn border-1 border-gray-500 bg-[#d2d2d2] font-medium py-6'> <img src={appStore} alt="" /> App Store</button>
               </Link>
           </div>
            
         </div>
        </div>

        <div className='flex justify-center mt-20'>
            <img src={heroImg} alt="" />
        </div>
        <div className='background-gradient py-15'>
            <h1 className='font-bold text-[48px] text-center text-white'>Trusted by Millions, Built for You</h1>
           <div className='  max-sm:flex-col   md:flex justify-around'>
             <div className='text-center'>
                <p className='text-white'>Total Downloads</p>
                <h1 className='font-extrabold text-[64px] text-white'>29.6M</h1>
                <p className='text-white'>21% more than last month</p>
            </div>
             <div className='text-center'>
                <p className='text-white'>Total Reviews</p>
                <h1 className='font-extrabold text-[64px] text-white'>906K</h1>
                <p className='text-white'>46% more than last month</p>
            </div>
             <div className='text-center'>
                <p className='text-white'>Active Apps</p>
                <h1 className='font-extrabold text-[64px] text-white'>132+</h1>
                <p className='text-white'>31 more will Launch</p>
            </div>
           
           </div>
           
        </div>

        <div className='mt-10'>
            <h1 className='font-bold text-center text-[48px]'>Trending Apps</h1>
            <p className=' text-center'>Explore All Trending Apps on the Market developed by us</p>

          {
            <Cards data={data}></Cards>
          }

         

        </div >
         <div className='text-center'> 
          <Link to='/apps'>
           <button className='btn px-10 font-medium text-white background-gradient '>Show All</button>
          </Link> 
            </div>
        </div>

        
    );
};

export default Home;