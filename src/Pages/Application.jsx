import React from 'react';
import downloadImg from '../assets/icon-downloads.png'
import starImg from '../assets/icon-ratings.png'
import { Link } from 'react-router';

const Application = ({data}) => {
    console.log(data);

    const {image,title,downloads,ratingAvg,id} = data;
    
    return (
     <Link to={`/appsDetails/${id}`}>
          <div className='border-0  bg-white rounded-xl p-5'>
                 <img className='w-[200px] h-[200px] mx-auto p-5 rounded-xl' src={image} alt="" />
                 <h2 className='font-medium text-[20px] mb-3'>{title}</h2>
                 <div className='flex justify-between'>
       
                  <div className='flex items-center border-0 bg-[#F1F5E8] rounded-sm px-2 py-1'>
                    <img className='h-[10px] w-[10px]' src={downloadImg} alt="" />
                   <p className='font-medium text-[#00D390] px-2'>{downloads}</p>
                  </div>
       
                  <div className='flex items-center border-0 bg-[#FFF0E1] rounded-sm px-2 py-1'>
                    <img className='h-[10px] w-[10px]' src={starImg} alt="" />
                    <p className='font-medium text-[#FF8811] '>{ratingAvg}</p>
                  </div>
                 </div>
               </div>
     </Link>
    );
};

export default Application;