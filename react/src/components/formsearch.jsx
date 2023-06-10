import { useState, useEffect } from "react";
import { API_BASE_URL } from "../apiRoutes";
import { useNavigate } from "react-router-dom";

function Formsearch() {
  const [specialities, setSpecialities] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

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
    setSelectedSpeciality(event.target.value);
  };

  const handleCityChange = (event) => {
    event.preventDefault();
    setSelectedCity(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    navigate(`/doctorlist?speciality=${selectedSpeciality}&city=${selectedCity}`);

  };

  return (
    <div>
      <form onSubmit={handleButtonClick}>
        <div className="mt-10 flex items-center justify-center flex flex-col sm:flex-row md:items-center gap-x-6">
          <select
            id="speciality"
            value={selectedSpeciality}
            name="speciality"
            onChange={handleSpecialityChange}
            className="mb-4 md:mr-4 md:mb-0 block w-full px-30 py-3 text-base text-gray-900 border border-white rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 dark:text-dark dark:focus:ring-orange-500 dark:focus:border-orange-500"
          >
            <option selected value={""}>
              Sélectionner une spécialité
            </option>
            {specialities.map((specialityOption) => (
              <option key={specialityOption.id} value={specialityOption.id}>
                {specialityOption.nom}
              </option>
            ))}
          </select>
          <select
            id="city"
            name="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="mb-4 md:mr-4 md:mb-0 block w-full px-30 py-3 text-base text-gray-900 border border-white rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 dark:text-dark dark:focus:ring-orange-500 dark:focus:border-orange-500"
          >
            <option selected value={""}>
              Sélectionner une ville
            </option>
            {cities.map((cityOption) => (
              <option key={cityOption.id} value={cityOption.id}>
                {cityOption.nom}
              </option>
            ))}
          </select>
          <button
          onClick={handleButtonClick}
            type="submit"
            className="rounded-md bg-orange-500 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Chercher
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formsearch;
