
import { BrowserRouter,Routes , Route} from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './components/homepage'
import Patientregistration from './components/Auth/patientregistration'
import Patientlogin from './components/Auth/patientlogin'
import Doctorlogin from './components/Auth/doctorlogin'
import Doctorregistration from './components/Auth/doctorregistration'
import Doctorlist from './components/doctorlist'
import Dashboard from './components/dashboard'
import Navbar from './components/navbar'
import Fichemedecin from './components/fichemedecin'

function App() {
 
  return (
   <div className="App">

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/patientlogin' element={<Patientlogin/>}></Route>
      <Route path='/patientregistration' element={<Patientregistration/>}></Route>
      <Route path='/doctorlogin' element={<Doctorlogin/>}></Route>
      <Route path='/doctorregistration' element={<Doctorregistration/>}></Route>
      <Route path='/doctorlist' element={<Doctorlist/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/navbar' element={<Navbar/>}></Route>
      <Route path='/fichemedecin' element={<Fichemedecin/>}></Route>
    </Routes>
    </BrowserRouter>

   </div>
  )
}

export default App
