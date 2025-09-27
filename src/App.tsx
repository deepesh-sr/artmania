import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Transition from './common/Transition'


function App() {
  return (
    <Transition>

    <Routes>
      <Route path='/' element={<Nav/>}/>
    </Routes>

    </Transition>
  )
}

export default App
