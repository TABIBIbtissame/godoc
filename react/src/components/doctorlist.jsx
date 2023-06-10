import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../apiRoutes";
import { MapPinIcon } from "@heroicons/react/24/outline";

import Navbar from "./navbar";

function Doctorlist() {
  const [doctors, setDoctors] = useState([]);
  const queryPara = new URLSearchParams(window.location.search);
  const city = queryPara.get("city");
  const speciality = queryPara.get("speciality");
  const navigate =useNavigate();

  const fetchDoctors = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/doctors?speciality=${speciality}&city=${city}`
      );
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        setDoctors(data);
      } else {
        throw new Error("Erreur lors de la récupération des médecins");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDoctors();
  }, []);

const handlefichenavigate = ()=>{

  navigate(`/fichemedecin`)
}
  return (
    <>
    <div className="mb-40">
    <Navbar/>
    </div>

      <div className="ml-80 mr-20 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-2">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className=" py-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-100 dark:border-slate-200"
            >
              <p className="mt-2 pl-10 text-lg font-bold text-gray-900 dark:text-black">
                Dr {doctor.nom}
              </p>
              <p className="mb-3 pl-10 text-sm">
                {doctor.speciality.nom} à {doctor.city.nom}
              </p>
              <div className="mb-3 pl-10 flex items-center text-sm">
                <MapPinIcon className="h-5 w-5" /> &nbsp;{doctor.adresse}
              </div>
              <div className="ml-10">
              <button
              onClick={handlefichenavigate}
                className="inline-flex items-center px-5 py-2 w-max text-sm font-medium text-center text-white rounded-lg hover:bg-yellow-800 dark:bg-yellow-500 dark:hover:bg-yellow-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                &nbsp;
                Voir la fiche !
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Doctorlist;
