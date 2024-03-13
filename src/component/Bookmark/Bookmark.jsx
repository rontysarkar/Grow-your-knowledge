import PropTypes from 'prop-types'
import Mark from '../Mark';

const Bookmark = ({bookmarks,readingTime}) => {
   
    return (

        
     <div className='md:w-1/3 text-center'>
        <h1 className='text-2xl p-4 m-4 bg-blue-100 rounded-xl text-blue-600 font-bold' >Spent time on read : {readingTime} min</h1>
         <div className=" bg-gray-200 rounded-2xl mx-6 ">
            <h1 className='text-xl font-bold'>Bookmarked Blogs :{bookmarks.length} </h1>
    
             {
               bookmarks.map((mark,idx) => <Mark key={idx} mark ={mark}></Mark>)
             }
        </div>
    </div>
    );
};
1
Bookmark.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmark;