import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Navbar from './components/navbar/Navbar';
 
//import Home from './views/Home'
import Footer from './views/Footer'


function App() {


  return (
    <>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Footer/>}></Route>
          <Route path="" element=""></Route>
          <Route path="" element=""></Route>
        </Routes>
    </>
  )
}

export default App
