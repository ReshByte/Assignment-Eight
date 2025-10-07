import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../assets/icon-downloads.png';
import starImg from '../assets/icon-ratings.png';
import reviewImg from '../assets/review.png';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  const singleApp = data.find(app => app.id === appId);

  if (!singleApp) {
    return <p>App not found</p>;
  }

  const {
    companyName,
    description,
    size,
    image,
    ratingAvg,
    title,
    reviews,
    downloads,
    ratings
  } = singleApp;


  const ratingsData = Object.entries(ratings)
    .map(([key, value]) => ({
      name: `${key} star`,
      count: value
    }))
    .sort((a, b) => parseInt(b.name) - parseInt(a.name)); 

  return (
    <div>
     
      <div className='flex gap-10 m-20'>
        <div className='h-[350px] w-[350px] border-0 bg-white'>
          <img className='w-[310px] h-[300px] mx-auto p-10' src={image} alt={title} />
        </div>

        <div>
          <h1 className='font-bold text-[32px] text-[#001931]'>{title}</h1>
          <p className='text-[#627382]'>
            Developed by <span className='text-gradient'>{companyName}</span>
          </p>

          <div className='border-b border-gray-400 w-full mt-6'></div>

          <div className='mt-8'>
            <div className='flex gap-20'>
              <div>
                <img src={downloadImg} alt="Downloads" />
                <p className='text-[#001931]'>Downloads</p>
                <h1 className='font-extrabold text-[40px] text-[#001931]'>{downloads}</h1>
              </div>

              <div>
                <img src={starImg} alt="Ratings" />
                <p className='text-[#001931]'>Average Ratings</p>
                <h1 className='font-extrabold text-[40px] text-[#001931]'>{ratingAvg}</h1>
              </div>

              <div>
                <img src={reviewImg} alt="Reviews" />
                <p className='text-[#001931]'>Total Reviews</p>
                <h1 className='font-extrabold text-[40px] text-[#001931]'>{reviews}</h1>
              </div>
            </div>

            <button className='border-0 rounded-sm px-8 py-2 mt-8 bg-[#00D390] text-white text-[20px] font-semibold'>
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>

      {/* Ratings Bar Chart */}
      <div className='ml-20 mr-20'>
        <h1 className='font-semibold text-[24px] text-[#001931] mb-4'>Ratings</h1>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratingsData}
              layout="vertical"
              margin={{ top: 20, right: 20, left: 40, bottom: 20 }}
            >
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="count" fill="#ff7c00" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

     
      <div className='ml-20 mt-10 mr-20'>
        <h1 className='font-semibold text-[24px] text-[#001931] mb-2'>Description</h1>
        <p className='text-[20px] text-[#627382]'>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
