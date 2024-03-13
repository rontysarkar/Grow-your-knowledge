import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddBookmark,handleRedingTime}) => {

    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        
    },[])

    return (
        <div className="md:w-2/3">
            {
               blogs.map((blog,idx) => <Blog 
                handleAddBookmark={handleAddBookmark}
                handleRedingTime={handleRedingTime}
                key={idx} 
                blog={blog}
            ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleAddBookmark:PropTypes.func,
    handleRedingTime:PropTypes.func
}

export default Blogs;