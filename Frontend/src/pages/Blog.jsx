import React from 'react'
import Header from '../components/Header'
import BlogBody from '../components/BlogBody'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <>
       <Header currentPage="blog"/> 
       <body>
            <BlogBody />
       </body>
       <Footer></Footer>
        
        
    </>
  )
}

export default Blog