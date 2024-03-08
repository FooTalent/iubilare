import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Navbar from './components/navbar/Navbar';
 

function App() {


  return (
    <>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="" element=""></Route>
          <Route path="" element=""></Route>
        </Routes>
    </>
  )
}

export default App
