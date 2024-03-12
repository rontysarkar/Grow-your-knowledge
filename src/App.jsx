import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import Header from './component/Header/Header'

function App() {
  

  return (
    <>
     
      <Header></Header>
      <main className='container mx-auto '>
      <Blogs></Blogs>
      <Bookmark></Bookmark>
      </main>
      
    </>
  )
}

export default App
