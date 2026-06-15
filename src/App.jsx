
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Dashboard from './components/Section/Dashboard'



function App() {

  return (
    <>
    <Header/>
  <Routes>
  <Route path='/' element={<Dashboard />} />
  <Route path='/home' element={<Home />}/>
  <Route path='/login' element={<Login />} />
  <Route path='/signup' element={<Signup />} />
  </Routes>
  <Footer/>
    </>
  )
}

export default App
