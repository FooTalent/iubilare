import { Route, Routes } from 'react-router-dom'
import './App.css'
//import Home from './views/Home'
import Footer from './views/Footer'


function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<Footer/>}></Route>
          <Route path="" element=""></Route>
          <Route path="" element=""></Route>
        </Routes>
    </>
  )
}

export default App
