import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
//import Home from './views/Home'
//import Footer from './views/Footer'
import WhatsappButton from './components/whatsappButton/WhatsappButton';
import Footer from './components/footer/Footer';
import Home from './views/Home';
import Nosotros from './views/Nosotros';
import Tramites from './views/Tramites';
import Ayuda from './views/Ayuda';


function App() {


  return (
    <>
        <Navbar></Navbar>
        <WhatsappButton/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/nosotros' element={<Nosotros/>}></Route>
          <Route path="/tramites" element={<Tramites/>}></Route>
          <Route path="/ayuda" element={<Ayuda/>}></Route>
        </Routes>

        <Footer></Footer>
    </>
  )
}

export default App
