import React from 'react';
import downloadImg from '../assets/icon-downloads.png'
import starImg from '../assets/icon-ratings.png'
const InstallApps = ({b}) => {
    console.log(b);
    
    return (
        <div className='flex justify-between items-center border-0 bg-white p-5 rounded-sm mx-20 mb-5'>
            <div className='flex gap-5'>
                 <div className='border-0 h-[80px] w-[80px] p-2 flex items-center bg-gray-200 rounded-xl'>
          <img className='' src={b.image} alt="" />
        </div>

        <div>
            <h2 className='font-medium text-[20px] text-[#001931] mb-3'>{b.title}</h2>
          <div className='flex items-center gap-5'>
              <div className='flex items-center gap-1'>
                <img className='h-[16px] w-[16px]' src={downloadImg} alt="" />
                <p className='font-medium text-[#00D390]'>{b.downloads}</p>
            </div>
            <div className='flex items-center gap-1'>
                <img className='h-[16px] w-[16px]' src={starImg} alt="" />
                <p className='font-medium text-[#FF8811]'>{b.ratingAvg}</p>
            </div>
            <div className='flex items-center gap-1'>
                <p className='font-medium text-[#627382]'>{b.size} MB</p>
            </div>
          </div>
        </div>

            </div>

<div>
                <button className='border-0 rounded-sm px-5 py-2 text-white font-semibold bg-[#00D390]'>Uninstall</button>

</div>
        </div>
    );
};

export default InstallApps;