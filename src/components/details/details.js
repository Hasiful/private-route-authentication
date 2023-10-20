import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    let detailsData = useLoaderData()
    const { title, body} = detailsData
    return (
        <div className='max-w-7xl mx-auto px-3'>
            <div className='dark:bg-slate-800 p-4 rounded bg-slate-100 mt-8'>
                <h1 className='dark:text-white font-semibold text-xl mb-4 text-slate-800'>
                    {title}
                </h1>
                <p className='dark:text-gray-400'>
                    {body}
                </p>
            </div>
        </div>
    );
};

export default Details;