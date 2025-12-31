import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Transition from './common/Transition'
import Nav from './components/Nav'


function App() {
  return (
    <Transition>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/nav' element={<Nav/>}/>
    </Routes>

    </Transition>
  )
}

export default App
