import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TrackerHome from './pages/TrackerHome.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/tracker' element={<TrackerHome/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
