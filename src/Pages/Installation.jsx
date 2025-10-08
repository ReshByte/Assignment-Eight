import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getDataFromLs, removeFromLs } from '../component/addToDb';
import InstallApps from '../component/InstallApps';
import Card from '../component/Card';
import { IoMdArrowDropdown } from "react-icons/io";

const Installation = () => {




  
  const[install,setInstall] = useState([])
    const data =  useLoaderData();

   const handleRemove=(id)=>{
    console.log(id);
    
    removeFromLs(id)
   }

    const handleSort = (type) =>{

      if(type === "lowToHigh"){
        const sortByAscending = [...install].sort((a,b) => a.size-b.size);
        setInstall(sortByAscending)
      }
         
      if(type === "highToLow"){
        const sortByDescending = [...install].sort((a,b) => b.size-a.size);
        setInstall(sortByDescending)
      }
    }


     useEffect(()=>{
          const storedAppsData = getDataFromLs();
        
          
        const convertedStoredApps = storedAppsData.map(id=>parseInt(id));
       
        
       
        
      const myAppsList = data.filter(book=>convertedStoredApps.includes(book.id));
    
      
      setInstall(myAppsList);
       

    },[])


    return (
        <div>
           <div className='mb-20'>
                <h1 className='font-bold text-center text-[48px] mt-10'>Your Installed Apps</h1>
            <p className=' text-center'>Explore All Trending Apps on the Market developed by us</p>
           </div>

           <div className='flex justify-between mb-4 mx-20'>
            <h1 className='text-[#001931] text-[24px] font-semibold'>{install.length} Apps Found</h1>
            <div>
                 <details className="dropdown">
  <summary className="btn m-1">Sort By Size <IoMdArrowDropdown /> </summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("lowToHigh")}>Low to High</a></li>
    <li><a onClick={()=>handleSort("highToLow")}>High to Low</a></li>
  </ul>
</details>
            </div>
           </div>
       
            {
                install.map(b=><InstallApps key={b.id} b={b}  handleRemove={ handleRemove}></InstallApps>)
            }
        
        </div>
    );
};

export default Installation;