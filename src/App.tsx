import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'


function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="" element=""></Route>
          <Route path="" element=""></Route>
        </Routes>
    </>
  )
}

export default App
