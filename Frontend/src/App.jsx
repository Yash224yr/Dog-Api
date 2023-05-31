import Home from '../Home'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Breed from './Breed'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/breed' element={<Breed/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
