import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import Header from './component/Header/Header'

function App() {

  const [bookmarks,setBookmars] = useState([])
  const [readingTime,setRedingTime] = useState(0)

  const handleAddBookmark = (blog) =>{
    setBookmars([...bookmarks,blog])
    
  }

  const handleRedingTime = ({reading_time,id}) =>{
    
    
    const newMark = bookmarks.filter(idx => idx.id !== id)
    setBookmars(newMark)
    

    const newTime = readingTime + parseInt(reading_time)
    setRedingTime(newTime)
    
    
  }
  

  return (
    <>
     
      <Header></Header>
      <main className='container mx-auto md:flex mt-8'>
      <Blogs 
      handleAddBookmark={handleAddBookmark}
      handleRedingTime={handleRedingTime}></Blogs>
      <Bookmark readingTime={readingTime} bookmarks={bookmarks} ></Bookmark>
      </main>
      
    </>
  )
}

export default App
