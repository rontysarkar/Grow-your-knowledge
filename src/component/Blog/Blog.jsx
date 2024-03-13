import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddBookmark,handleRedingTime}) => {

    const {title,cover,author,author_img,posted_date,reading_time,hashtag} = blog

    

    return (
        <div >
            <img className='w-full rounded-2xl' src={cover} alt="" />
            <div className="flex justify-between items-center py-8">
                <div className='flex gap-10 justify-between items-center'>
                    
                    <img className='h-20 w-20 object-cover rounded-full' src={author_img} alt="" />
                    <div>
                        <h1 className="text-2xl font-bold">{author}</h1>
                        <p className='text-xl opacity-80 mt-3' >{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className="text-3xl">{reading_time} min read</span>
                    <button onClick={()=> handleAddBookmark(blog)} className='text-2xl ml-4'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='py-4 text-4xl font-extrabold'>{title}</h1>
            <h1 className="py-4 text-2xl"><a href="#">{hashtag}</a></h1>
            <button onClick={()=> handleRedingTime(blog)} className='text-xl text-[#6047EC] pb-8'>Mark as read</button>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object,
    handleAddBookmark:PropTypes.func,
    handleRedingTime:PropTypes.func
}

export default Blog;