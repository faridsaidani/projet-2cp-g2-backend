import React from 'react';

const BlogCard = ({ imageUrl, blogType, title, description }) => {
  return (
    <div className='rounded-lg bg-primback p-4'>
      {/* General topic */}
      <div className='h-[20%] text-primdark font-urbanist'>
        <h4 className='text-xl font-bold  inline-block border-b border-seclight'>{blogType}</h4>
        <br /><br />
      </div>

      <div className="h-[80%] flex flex-col justify-center items-center">
        {/* Image */}
        <div className='w-full h-[40%]'>
          <a href="#!">
            <img src={imageUrl} alt="Blog Image" />
          </a>
        </div>
        <br />

        <div className=' flex justify-between items-center w-full h-[40%]'>
          <div className=' w-[70%] flex flex-col'>
            {/* Blog Title */}
            <h5 className='text-primdark font-bold font-urbanist'>{title}</h5>
            {/* Description */}
            <p className=''>{description}</p>
          </div>
          <button className='text-primdark bg-seclight rounded-lg p-2 '>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
