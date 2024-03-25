import React, { useState } from 'react';
import BlogCard from './BlogCard';

// Sample data for blog types
const BlogTypes = [
  'Emotional Intelligence',
  'Cognitive Biases',
  'Mindfulness & Meditation',
  'Mental Health Stigma',
  'Motivation'
];

// Sample data for blogs with different types
const BlogsByType = {
  'Emotional Intelligence': Array.from({ length: 2 }, (_, index) => ({ title: `Emotional Intelligence Blog ${index + 1}`, type: 'Emotional Intelligence' })),
  'Cognitive Biases': Array.from({ length: 2 }, (_, index) => ({ title: `Cognitive Biases Blog ${index + 1}`, type: 'Cognitive Biases' })),
  'Mindfulness & Meditation': Array.from({ length: 2 }, (_, index) => ({ title: `Mindfulness & Meditation Blog ${index + 1}`, type: 'Mindfulness & Meditation' })),
  'Mental Health Stigma': Array.from({ length: 2 }, (_, index) => ({ title: `Mental Health Stigma Blog ${index + 1}`, type: 'Mental Health Stigma' })),
  'Motivation': Array.from({ length: 4 }, (_, index) => ({ title: `Motivation Blog ${index + 1}`, type: 'Motivation' })),
};

function BlogComponent() {
  // State to track the selected blog type
  const [selectedType, setSelectedType] = useState('All');

  // Function to handle clicks on blog types
  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  // Function to get all blogs when "All" is selected
  const getAllBlogs = () => {
    const allBlogs = [];
    BlogTypes.forEach(type => {
      allBlogs.push(...BlogsByType[type]);
    });
    return allBlogs;
  };

  //  function to Determine which blogs to display based on the selected type
  const blogsToDisplay = selectedType === 'All' ? getAllBlogs() : BlogsByType[selectedType];

  return (
    <>
      {/* Our Blog + Blog list */}
      <div className="flex flex-col justify-center items-center w-screen bg-home bg-center object-cover h-auto">
        <br />
        <br />
        <br />
        

        {/* Our Blog */}
        <div className='flex flex-col justify-center items-center w-[40%] h-[28%] '>
          <div>
            <h2 className='text-6xl text-center font-urbanist font-bold text-primdark'>Our</h2>
            <div className='bg-seclight w-[250px] h-auto flex justify-center rounded-l-lg border-sechover border-r-4'>
              <h2 className='text-6xl font-bold font-urbanist text-primdark '>Blog</h2>
            </div>
          </div>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ad voluptas cumque nemo expedita, debitis consequuntur totam rem minus laboriosam, vero qui ratione minima possimus harum reprehenderit repellat animi nobis.</p>
        </div>

        <br />
        <br />
        <br />

        {/* Blog types */}
        <div className='w-[80%]'>
          <div className='bg-primdark rounded-b-lg'>
            <ul className="flex justify-between items-center text-secwhite p-8">
              {[...BlogTypes, 'All'].reverse().map((type, index) => ( // Reversed the array here
                <div
                  key={index}
                  className={`p-2 cursor-pointer ${selectedType === type ? 'bg-seclight text-primdark font-urbanist rounded-md p-4' : 'font-urbanist'}`}
                  onClick={() => handleTypeClick(type)}
                >
                  {type}
                </div>
              ))}
            </ul>
          </div>
          <br />
          <br />
        </div>

        <div className=' flex justify-center w-screen h-auto bg-secwhite'>
          <div className="w-[80%] bg-primback rounded-lg ">
            {/* List of Filtered Blogs */}
            <div className="grid grid-cols-2 gap-0">
              {blogsToDisplay.map((blog, index) => (
                <div key={index} className="blog-card">
                  <BlogCard title={blog.title} blogtype={blog.type} />
                </div>
              ))}
            </div>
          </div>
        </div>
     
        </div>
        <br /><br /><br /><br /><br /> <br /> <br /><br />
    </>
  );
}

export default BlogComponent;
