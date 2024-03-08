import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Navbar from './components/navbar/Navbar';
//import Home from './views/Home'
import Footer from './views/Footer'
import WhatsappButton from './components/whatsappButton/WhatsappButton';


function App() {


  return (
    <>
        <Navbar></Navbar>
        <WhatsappButton/>
        <Routes>
          <Route path="/" element={<Footer/>}></Route>
          <Route path="" element=""></Route>
          <Route path="" element=""></Route>
        </Routes>
    </>
  )
}

export default App
