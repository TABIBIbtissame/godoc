import{ useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

function Patientregistration() {
  const navigate = useNavigate();
  const [nom, setNom] = useState('');
  const [genre, setGenre] = useState('');
  const [datedenaissance, setDatedenaissance] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//------------------------------------------
const notify = () => {
  toast.success('votre compte a été créé avec succès !');
  setTimeout(() => {
    navigate('/doctorlogin');
  }, 3000);
};
//--------------------------------------
  const handleSubmit = async (e)=>{
    e.preventDefault();
      try{
          const response = await axios.post('http://127.0.0.1:8000/api/patients', 
          { nom,
            genre,
            datedenaissance,
            telephone ,
            email ,
            password
            });
          console.log(response.data);
        }
      catch(error){
            console.error(error);
        }
       
    };
  
  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <Link to={'/'}>
          <img
            className="mx-auto h-14 w-auto"
            src="../public/images/dodoc-log.png"
            alt="Your Company"
          />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inscription
          </h2>

        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="mt-2">
                <input
                  id="nom"
                  name="nom"
                  value={nom}
                  autoComplete='off'
                  onChange={(e) => setNom(e.target.value)}
                  type="text"
                  placeholder="Nom"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="female"
                    name="genre"
                    type="radio"
                    value="female"
                    checked={genre === 'female'}
                    onChange={(e) => setGenre(e.target.value)}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="femme" className="block text-sm font-medium leading-6 text-gray-900">
                   Femme
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    value="male"
                    checked={genre === 'male'}
                    id="male"
                    name="genre"
                    type="radio"
                    onChange={(e) => setGenre(e.target.value)}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-900">
                    Homme
                  </label>
                </div>
              </div>
              <div>
              <div className="mt-2">
              <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-900">
                    Date de naissance 
                  </label>
                <input
                  id="datedenaissance"
                  name="datedenaissance"
                  type="date"
                  value={datedenaissance}
                  onChange={(e) => setDatedenaissance(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                /> 
              </div>
            </div>
            <div>
              <div className="mt-2">
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  autoComplete='off'
                  placeholder="Téléphone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <input 
                  id="email"
                  name="email"
                  type="email"
                  autoComplete='off'
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
              type='submit'
              onClick={notify}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sinscrire
              </button>
              <Toaster />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Vous avez déja un compte?{' '}
            <Link to='/patientlogin' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Se connecter !
            </Link>
          </p>
        </div>
      </div>
    
    
  )}


export default Patientregistration;
