import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Jobs from './pages/jobsPage/jobs';
import Pricing from './pages/pricingPage/pricing';
import Blogs from './pages/blogsPage/blogs';
import SavedJobs from './pages/savedJobsPage/savedJobs';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={ <Signup />} />
      <Route path='/pricing' element={<Pricing />}/>
      <Route path='*' element={<h1 className="text-3xl font-bold text-center py-80 text-light bg-hero-bg min-h-screen">404 Page Not Found</h1>} />
      <Route path='/blogs' element={<Blogs />}/>
      <Route path='/saved-jobs' element={<SavedJobs />}/>
    </Routes>
    </>
    
  )
}

export default App
