import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../assets/icon-downloads.png';
import starImg from '../assets/icon-ratings.png';
import reviewImg from '../assets/review.png';
import { ToastContainer, toast } from 'react-toastify';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { addToStoredDB } from '../component/addToDb';

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  // ✅ Toggle state is now persistent using localStorage
  const [toggle, setToggle] = useState(() => {
    const saved = localStorage.getItem(`installed-${id}`);
    return saved === 'true';
  });

  const handleInstall = (id) => {
    toast('Installed Successfully!');
    addToStoredDB(id);

    // ✅ Save installed state
    localStorage.setItem(`installed-${id}`, 'true');
    setToggle(true);
  };

  const singleApp = data.find((app) => app.id === appId);

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
    ratings,
  } = singleApp;

  const ratingsData = Object.entries(ratings)
    .map(([key, value]) => ({
      name: `${key} star`,
      count: Number(value),
    }))
    .sort((a, b) => parseInt(b.name) - parseInt(a.name));

  const reversedData = [...ratingsData].reverse();

  return (
    <div>
      <div className="max-sm:flex-col lg:flex gap-10 m-20">
        <div className="h-[350px] w-[350px] border-0 bg-white">
          <img
            className="w-[310px] h-[300px] mx-auto p-10"
            src={image}
            alt={title}
          />
        </div>

        <div>
          <h1 className="font-bold text-[32px] text-[#001931]">{title}</h1>
          <p className="text-[#627382]">
            Developed by <span className="text-gradient">{companyName}</span>
          </p>

          <div className="max-sm:w-2xl lg:border-b border-gray-400 w-5xl mt-6"></div>

          <div className="mt-8">
            <div className="max-sm:flex-col max-sm:gap-10 lg:flex gap-20">
              <div className="max-sm:mb-5">
                <img src={downloadImg} alt="Downloads" />
                <p className="text-[#001931]">Downloads</p>
                <h1 className="font-extrabold text-[40px] text-[#001931]">
                  {downloads}
                </h1>
              </div>

              <div className="max-sm:mb-5">
                <img src={starImg} alt="Ratings" />
                <p className="text-[#001931]">Average Ratings</p>
                <h1 className="font-extrabold text-[40px] text-[#001931]">
                  {ratingAvg}
                </h1>
              </div>

              <div className="max-sm:mb-5">
                <img src={reviewImg} alt="Reviews" />
                <p className="text-[#001931]">Total Reviews</p>
                <h1 className="font-extrabold text-[40px] text-[#001931]">
                  {reviews}
                </h1>
              </div>
            </div>

         
           <button
  disabled={toggle}
  onClick={() => handleInstall(id)}
  className={`border-0 rounded-sm px-8 py-2 mt-8 text-white text-[20px] font-semibold
    ${toggle ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390] cursor-pointer'}`}
>
  {toggle ? 'Installed' : `Install Now (${size} MB)`}
</button>

          </div>
        </div>
      </div>

     
      <div className="ml-20 mr-20">
        <h1 className="font-semibold text-[24px] text-[#001931] mb-4">
          Ratings
        </h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={reversedData}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid stroke="rgba(0, 0, 0, 0.05)" horizontal={false} />
            <XAxis type="number" allowDecimals={false} />
            <YAxis
              dataKey="name"
              type="category"
              width={60}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: 'rgba(240, 240, 240, 0.5)' }}
              contentStyle={{ background: '#fff', border: '1px solid #ddd' }}
              labelStyle={{ fontWeight: 'bold' }}
            />
            <Bar dataKey="count" fill="#f97316" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="ml-20 mt-10 mr-20">
        <h1 className="font-semibold text-[24px] text-[#001931] mb-2">
          Description
        </h1>
        <p className="text-[20px] text-[#627382]">{description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;
