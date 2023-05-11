import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Post from './pages/Post'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const user = true
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/post/:id' element={<Post/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
