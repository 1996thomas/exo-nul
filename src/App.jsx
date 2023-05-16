import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Works from './pages/Works/Works'
import Projects from './pages/Works/Projects/Projects'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

 


  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/works' element={<Works/>}>
        <Route path='/works/:client' element={<Projects/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
