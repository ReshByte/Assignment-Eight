import React from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';

const Cards = ({data}) => {





    return (
        <div className='grid grid-cols-4 gap-6 p-20'>
            {
                data.map(singleData=><Card singleData={singleData}></Card>)
            }

           
        </div>
    );
};

export default Cards;