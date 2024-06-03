import React, { useState } from "react";
import BlogCard from "./BlogCard";
import blogimg1 from "/assets/img1.png";
import blogimg2 from "/assets/img2.png";
import blogimg3 from "/assets/img3.png";
import blogimg4 from "/assets/img4.png";
import blogimg5 from "/assets/img5.png";
import blogimg6 from "/assets/img6.png";

// Sample data for blog types
const BlogTypes = [
  "Emotional Intelligence",
  "Cognitive Biases",
  "Mindfulness & Meditation",
  "Mental Health Stigma",
  "Motivation",
];

// Sample data for blogs with different types
const BlogsByType = {
  "Emotional Intelligence": Array.from({ length: 2 }, (_, index) => ({
    title: `Emotional Intelligence Blog ${index + 1}`,
    type: "Emotional Intelligence",
    description: "description for Emotional Intellgence blog 1",
    imageUrl: blogimg3,
  })),
  "Cognitive Biases": Array.from({ length: 2 }, (_, index) => ({
    title: `Cognitive Biases Blog ${index + 1}`,
    type: "Cognitive Biases",
    description: "description for Cognitive Biases blog 1",
    imageUrl: "/assets/img1.png",
  })),
  "Mindfulness & Meditation": Array.from({ length: 2 }, (_, index) => ({
    title: `Mindfulness & Meditation Blog ${index + 1}`,
    type: "Mindfulness & Meditation",
    description: "description for Mindfulness & Meditation blog 1",
    imageUrl: blogimg5,
  })),
  "Mental Health Stigma": Array.from({ length: 2 }, (_, index) => ({
    title: `Mental Health Stigma Blog ${index + 1}`,
    type: "Mental Health Stigma",
    description: "description for Mental health & Stigma blog 1",
    imageUrl: blogimg3,
  })),
  Motivation: Array.from({ length: 4 }, (_, index) => ({
    title: `Motivation Blog ${index + 1}`,
    type: "Motivation",
    description: "description for Motivation blog 1",
    imageUrl: "/assets/img1.png",
  })),
};

function BlogComponent() {
  // State to track the selected blog type
  const [selectedType, setSelectedType] = useState("All");

  // Function to handle clicks on blog types
  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  // Function to get all blogs when "All" is selected
  const getAllBlogs = () => {
    const allBlogs = [];
    BlogTypes.forEach((type) => {
      allBlogs.push(...BlogsByType[type]);
    });
    return allBlogs;
  };

  //  function to Determine which blogs to display based on the selected type
  const blogsToDisplay =
    selectedType === "All" ? getAllBlogs() : BlogsByType[selectedType];

  return (
    <div className="flex flex-col justify-between ">
      {/* Our Blog + Blog list */}
      <div className="flex flex-col justify-between items-center w-[100%] h-[70%] bg-home bg-center bg-cover mb-10 mt-6 pt-10">
        {/* Our Blog */}
        <div className="flex flex-col justify-center items-center w-[40%] h-[28%] m-10">
          <div className="w-[28%]">
            <h2 className="text-6xl text-center font-urbanist font-bold text-primdark">
              Our
            </h2>
            <div className="bg-seclight w-[100%] h-auto flex justify-center rounded-l-lg border-sechover border-r-4">
              <h2 className="text-6xl font-bold font-urbanist text-primdark ">
                Blog
              </h2>
            </div>
          </div>
          <br />

          <p className="text-center text-primdark">
            Oxypsy Blogs is a mental health platform with expert-curated
            articles on stress, resilience, relationships, and more. It empowers
            readers with practical advice and personal stories, fostering a
            supportive community for wellness journeys.
          </p>
        </div>

        {/* Blog types */}
        <div className="w-[80%] ">
          <div className="bg-primdark rounded-b-lg">
            <ul className="flex justify-between items-center text-secwhite p-8">
              {[...BlogTypes, "All"].reverse().map(
                (
                  type,
                  index // Reversed the array here
                ) => (
                  <div
                    key={index}
                    className={`p-2 cursor-pointer ${
                      selectedType === type
                        ? "bg-seclight text-primdark font-urbanist rounded-md p-4"
                        : "font-urbanist"
                    }`}
                    onClick={() => handleTypeClick(type)}
                  >
                    {type}
                  </div>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className=" flex justify-center w-[100%] h-auto bg-secwhite mb-20">
        <div className="w-[80%] bg-primback rounded-lg ">
          {/* List of Filtered Blogs */}
          <div className="grid grid-cols-2 gap-0">
            {blogsToDisplay.map((blog, index) => (
              <div key={index} className="blog-card">
                <BlogCard
                  title={blog.title}
                  imageUrl={blog.imageUrl}
                  blogtype={blog.type}
                  description={blog.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;
