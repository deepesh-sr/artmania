import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Transition from './common/Transition'

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'))
const Nav = lazy(() => import('./components/Nav'))
const Model = lazy(() => import('./components/Model'))

// Loading component
const Loading = () => (
  <div className="h-screen w-full flex items-center justify-center bg-black">
    <div className="text-white text-xl animate-pulse">Loading...</div>
  </div>
)

function App() {
  const location = useLocation();

  return (
    <Transition key={location.pathname}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nav' element={<Nav />} />
          <Route path='/d' element={<Model />} />
          <Route path='*' element={
            <div className="h-screen w-full flex items-center justify-center bg-black">
              <div className="text-center">
                <h1 className="text-2xl text-white mb-4">404 - Page Not Found</h1>
                <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Go back to home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </Suspense>
    </Transition>
  )
}

export default App
