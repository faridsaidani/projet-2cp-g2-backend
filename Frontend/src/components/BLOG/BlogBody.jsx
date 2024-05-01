import React from "react";
import BlogComponent from "./BlogComponent";
import blogimg1 from "../../assets/blogimage1.png";
import blogimg2 from "../../assets/blogimage2.png";
import blogimg3 from "../../assets/blogimage3.png";
import blogimg4 from "../../assets/blogimage4.png";
import blogimg5 from "../../assets/blogimage5.png";
import blogimg6 from "../../assets/blogimage6.png";

const BlogBytype = {
  Motivation: [
    {
      blogType: "Motivation",
      title: "Motivation blog 1",
      description: "description for Motivation blog 1",
      imageUrl: blogimg1,
    },
    {
      blogType: "Motivation",
      title: "Motivation blog 2",
      description: "description for Motivation blog 2",
      imageUrl: blogimg2,
    },
  ],
  "Mental health & Stigma": [
    {
      blogType: "Mental health & Stigma",
      title: "Mental health & Stigma blog 1",
      description: "description for Mental health & Stigma blog 1",
      imageUrl: blogimg3,
    },
    {
      blogType: "Mental health & Stigma",
      title: "Mental health & Stigma blog 2",
      description: "description for Mental health & Stigma blog 2",
      imageUrl: blogimg4,
    },
  ],
  "Mindfulness & Meditation": [
    {
      blogType: "Mindfulness & Meditation",
      title: "Mindfulness & Meditation blog 1",
      description: "description for Mindfulness & Meditation blog 1",
      imageUrl: blogimg5,
    },
    {
      blogType: "Mindfulness & Meditation",
      title: "Mindfulness & Meditation blog 2",
      description: "description for Mindfulness & Meditation blog 1",
      imageUrl: blogimg6,
    },
  ],
  "Cognitive Biases": [
    {
      blogType: "Cognitive Biases",
      title: "Cognitive Biases blog 1",
      description: "description for Cognitive Biases blog 1",
      imageUrl: blogimg1,
    },
    {
      blogType: "Cognitive Biases",
      title: "Cognitive Biases blog 2",
      description: "description for Cognitive Biases blog 2",
      imageUrl: blogimg2,
    },
  ],
  "Emotional Intellgence": [
    {
      blogType: "Emotional Intellgence",
      title: "Emotional Intellgence blog 1",
      description: "description for Emotional Intellgence blog 1",
      imageUrl: blogimg3,
    },
    {
      blogType: "Emotional Intellgence",
      title: "Emotional Intellgence blog 2",
      description: "description for Emotional Intellgence blog 2",
      imageUrl: blogimg4,
    },
    {
      blogType: "Emotional Intellgence",
      title: " Emotional Intellgence blog 3",
      description: "description for Emotional Intellgence blog 3",
      imageUrl: blogimg5,
    },
    {
      blogType: "Emotional Intellgence",
      title: "Emotional Intellgence blog 4",
      description: "description for Emotional Intellgence blog 4",
      imageUrl: blogimg6,
    },
  ],
};

const BlogBody = () => {
  return (
    <>
      <BlogComponent BlogBytype={BlogBytype} />
    </>
  );
};

export default BlogBody;
