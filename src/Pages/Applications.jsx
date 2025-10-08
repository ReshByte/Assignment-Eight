import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Application from './Application';
import NotFound from '../assets/5156006_2689520 1.png'

const Applications = () => {

    const allData = useLoaderData();
    const [searchText,setSearchText]=useState("");
    const [filteredData,setFilteredData] =useState(allData);
    const[loading,setLoading] = useState(false)

    useEffect(() => {
      setLoading(true);
      const timeout = setTimeout(()=>{
         const result = allData.filter((item) => 
          item.title.toLowerCase().includes(searchText.toLowerCase())
        );
          setFilteredData(result);
          setLoading(false);

      }, 500);
       
      return () => clearTimeout(timeout);
     },[searchText,allData]);
    
  return (
  <div>
    <h1 className='font-bold text-center text-[48px] mt-10'>Our All Applications</h1>
    <p className='text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

    <div className='flex justify-between items-center mx-20 mt-10 max-sm:flex-col-reverse'>
      <p className='text-[24px] font-semibold'>({allData.length}) Apps Found</p>
      <div>
        <label className="input">
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
          <input 
            type="search" 
            required 
            placeholder="Search Apps"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </label>
      </div>
    </div>

    
    {loading ? (
      <div className="flex justify-center items-center h-[200px]">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    ) : (
      filteredData.length > 0 ? (
        <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4 gap-6 p-20'>
          {filteredData.map(data => (
            <Application key={data.id} data={data} />
          ))}
        </div>
      ) : (
        <div className='flex justify-center'>
          <div>
            <img className='' src={NotFound} alt="" />
          <div className='text-center'>
            <h1 className='font-semibold text-[#001931] text-[48px]'>Oops, page not found!</h1>
            <p className='text-[#627382]'>The page you are looking for is not available.</p>
            <button className='border-0 text-white background-gradient rounded-sm px-6 py-2 mt-4'>Go Back!</button>
          </div>
          </div>
        </div>
      )
    )}
  </div>
);

};

export default Applications;