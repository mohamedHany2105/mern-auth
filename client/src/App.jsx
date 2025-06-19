import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/header'


export default function App() {
  return (
    <BrowserRouter >
    {/* <Header/> */}
    <Header/>
      <Routes>
        <Route path={"/"&&"/home"} element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>

    </BrowserRouter>
  )
} 
