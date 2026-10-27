import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Jobs from './pages/jobs/jobs';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={ <Signup />} />
    </Routes>
    </>
    
  )
}

export default App
