import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ data } ) => {
    const {title, body, id} = data

    const navigate = useNavigate()

    const handleDetails = () =>{
        navigate(`/post/${id}`)
    }

    return (
        <div className='bg-slate-100 dark:bg-slate-800 p-4 rounded'>
            <h1 className='dark:text-white text-slate-800 font-semibold text-lg pb-2 mb-3 line-clamp-2 border-b border-slate-400'>
                {title ? title : "No Title"}
            </h1>
            <p className='text-sm dark:text-gray-400 line-clamp-4'>
                {body}
            </p>
            <button onClick={handleDetails} type="submit" class="transition-all mt-4 font-semibold w-full dark:bg-purple-800 bg-slate-800 text-white rounded block p-2">Read More</button>
        </div>
    );
};

export default PostCard;