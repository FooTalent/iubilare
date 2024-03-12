import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
//import Home from './views/Home'
//import Footer from './views/Footer'
import WhatsappButton from './components/whatsappButton/WhatsappButton';
import Footer from './components/footer/Footer';
import Home from './views/Home';

function App() {


  return (
    <>
        <Navbar></Navbar>
        <WhatsappButton/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Footer></Footer>
    </>
  )
}

export default App
