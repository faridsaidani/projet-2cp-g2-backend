import React from 'react'
import BlogComponent from './BlogComponent'

import blogimage1 from '../assets/blogimage1.png'
import blogimage2 from '../assets/blogimage2.png'
import blogimage3 from '../assets/blogimage3.png'
import blogimage4 from '../assets/blogimage4.png'
import blogimage5 from '../assets/blogimage5.png'
import blogimage6 from '../assets/blogimage6.png'

const BlogBytype={
  "Motivation":[
    {imageUrl:blogimage1, blogType:'Motivation', title:'Motivation blog 1', description:'description for Motivation blog 1'},
    {imageUrl:blogimage1, blogType:'Motivation', title:'Motivation blog 2', description:'description for Motivation blog 2'}
  ],
  "Mental health & Stigma":[
    {imageUrl:blogimage2, blogType:'Mental health & Stigma', title:'Mental health & Stigma blog 1', description:'description for Mental health & Stigma blog 1'},
    {imageUrl:blogimage2, blogType:'Mental health & Stigma', title:'Mental health & Stigma blog 2', description:'description for Mental health & Stigma blog 2'}

  ],
  "Mindfulness & Meditation":[
    {imageUrl:blogimage3, blogType:'Mindfulness & Meditation', title:'Mindfulness & Meditation blog 1', description:'description for Mindfulness & Meditation blog 1'},
    {imageUrl:blogimage3, blogType:'Mindfulness & Meditation', title:'Mindfulness & Meditation blog 2', description:'description for Mindfulness & Meditation blog 1'}

  ],
  "Cognitive Biases":[
    {imageUrl:blogimage4, blogType:'Cognitive Biases', title:'Cognitive Biases blog 1', description:'description for Cognitive Biases blog 1'},
    {imageUrl:blogimage4, blogType:'Cognitive Biases', title:'Cognitive Biases blog 2', description:'description for Cognitive Biases blog 2'}

  ],
  "Emotional Intellgence":[
    {imageUrl:blogimage3, blogType:'Emotional Intellgence', title:'Emotional Intellgence blog 1', description:'description for Emotional Intellgence blog 1'},
    {imageUrl:blogimage4, blogType:'Emotional Intellgence', title:'Emotional Intellgence blog 2', description:'description for Emotional Intellgence blog 2'},
    {imageUrl:blogimage5, blogType:'Emotional Intellgence', title:' Emotional Intellgence blog 3', description:'description for Emotional Intellgence blog 3'},
    {imageUrl:blogimage6, blogType:'Emotional Intellgence', title:'Emotional Intellgence blog 4', description:'description for Emotional Intellgence blog 4'}

  ],
  
}


const BlogBody = () => {
  return (
  <>
    <BlogComponent BlogBytype={BlogBytype}/>
  </>)
}

export default BlogBody