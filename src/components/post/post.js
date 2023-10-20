import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostCard from '../postCard/postcard';

const Post = () => {
    const post = useLoaderData()

    return (
        <div className='max-w-7xl mx-auto px-3 py-8'>
            <div className='grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3'>
                {
                    post.map(postItem => <PostCard key={post.id} data={postItem}></PostCard>)
                }
            </div>
        </div>
    );
};

export default Post;