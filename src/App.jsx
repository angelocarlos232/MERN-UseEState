import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignOut from '../src/pages/SignOut'
import Signin from './pages/SignIn'
import Profile from './pages/Profile'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/signout' element = {<SignOut />} />
        <Route path='/signin' element = {<Signin />} />
        <Route path='/profile' element = {<Profile />} />
        <Route path='/about' element = {<About />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
