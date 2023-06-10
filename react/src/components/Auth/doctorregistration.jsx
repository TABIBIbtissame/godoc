import { useState,useEffect } from "react";
import { Link , useNavigate } from "react-router-dom"
import { API_BASE_URL } from "../../apiRoutes";
import axios from 'axios';
import  toast, { Toaster } from 'react-hot-toast';

function Doctorregistration() {
  const [nom, setNom] = useState('');
  const [specialite_id,setSpeciality] = useState('');
  const [ville_id , setCity] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse , setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [specialities, setSpecialities] = useState([]);
  const [cities, setCities] = useState([]);

//------------------------------------------
  const handleSubmit = async (e)=>{
    e.preventDefault();

      try{
          const response = await axios.post('http://127.0.0.1:8000/api/doctors', 
          { nom,
            specialite_id,
            ville_id,
            telephone ,
            adresse,
            email ,
            password,
        
            });
          console.log(response.data);
        }
      catch(error){
            console.error(error);
        }    
    };
    useEffect(() => {
      fetchSpecialities();
      fetchCities();
    }, []);

    const fetchSpecialities = async () => {
      const response = await fetch(`${API_BASE_URL}/specialities`);
      const data = await response.json();
      setSpecialities(data);
    };
    const fetchCities = async () => {
      const response = await fetch(`${API_BASE_URL}/cities`);
      const data = await response.json();
      setCities(data);
    };
    const handleSpecialityChange = (event) => {
      event.preventDefault();
      setSpeciality(event.target.value);
    };
  
    const handleCityChange = (event) => {
      event.preventDefault();
      setCity(event.target.value);
    };
  
//------------------------------------------
const notify = () => {
  toast.success('votre compte a été créé avec succès !');
  setTimeout(() => {
    navigate('/doctorlogin');
  }, 3000);
};
//------------------------------------------


  return (
    <>
   
     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to='/'>
          <img
            className="mx-auto h-14 w-auto"
            src="../public/images/dodoc-log.png"
            alt="Your Company"
          />
          </Link>
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inscription fiche praticien
          </h2>
        </div>
     
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="border-b border-gray-900/30"></div>
          <p className="mt-10 text-center text-sm text-gray-500">
          Vous avez déja un compte?{' '}
            <Link to='/doctorlogin' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Se connecter !
            </Link>
          </p>
            <div>
              <div className="mt-2">
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  autoComplete="off"
                  placeholder="Nom"
                
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div  className="mt-2">
            <select 
            id="speciality" 
            name="speciality"
            value={specialite_id}
            onChange={handleSpecialityChange}
            className="block w-full px-30 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-800 dark:focus:border-blue-800"
            >
              <option selected value={""} >Sélectionner une spécialité</option>
              
                {specialities.map((specialityOption)=>(
                    <option key={specialityOption.id} value={specialityOption.id}>
                    {specialityOption.nom}
                    </option>
                ))}
     
      </select>
            </div>
            <div className="mt-2">
            <select
                id="city"
                name="city"
                value={ville_id}
                onChange={handleCityChange}
                className="block w-full px-30 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-800 dark:focus:border-blue-800"
              >
                <option  selected value={""} >Sélectionner une ville</option>
                   {cities.map((cityOption) => (
              <option key={cityOption.id} value={cityOption.id}>
                {cityOption.nom}
              </option>
            ))}
              </select>
              </div>
              <div>
              <div className="mt-2">
                <input
                  id="adresse"
                  name="adresse"
                  type="text"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  placeholder="Adresse"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

              <div className="mt-2">
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder="Numéro de téléphone"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Adresse email"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={notify}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Créer un compte GRATUITEMENT !
              </button>
              <Toaster />
            </div>
          </form>

        
        </div>
      </div>
    </>
  )
}

export default Doctorregistration