import React from "react";
import Navbar from "./navbar";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
function fichemedecin() {
  return (
    <>
      <div className="mb-32">
        <Navbar />
      </div>

      <div>
        <div class=" max-w-4xl mx-40 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100">
          <a href="#">
            <h5 class="p mb-5 text-2xl font-bold tracking-tight text-Teal-900 dark:text-sky-600">
              Informations du contact
            </h5>
          </a>
          <div className="mb-3 ml-5  flex items-center text-base">
            <EnvelopeIcon className="h-5 w-5 mr-2" color="#ea580c" />{" "}
            &nbsp;ibtissametabibi@gmail.com
          </div>
          <div className="mb-3 ml-5  flex items-center text-base">
            <PhoneIcon className="h-5 w-5 mr-2" color="#ea580c" />{" "}
            &nbsp;0678772642
          </div>
          <div className="mb-3 ml-5  flex items-center text-base">
            <MapPinIcon className="h-5 w-5 mr-2" color="#ea580c" /> &nbsp;Riad
            Zouhour , Fès
          </div>
        </div>

        <div class=" mt-10 max-w-4xl mx-40 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100">
          <a href="#">
            <h5 class="p mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-sky-600">
              Présentation
            </h5>
          </a>
          <div className="mb-3   flex items-center text-sm">
            <p className="text-base font-bold font-sans text-orange	">
              Spécialité
            </p>
          </div>
          <div className="mb-3 ml-5  flex items-center text-sm">
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-normal text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:bg-gray-200 dark:text-gray-800 dark:border-gray-100 dark:hover:text-black dark:hover:bg-gray-300"
            >
              Dermatologue
            </button>
          </div>
          <div className="mb-3   flex items-center text-sm">
            <p className="text-base font-bold font-sans	text-orange ">
              Qualification Professionnelle
            </p>
          </div>

          <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100"></dl>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">1989</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Diplômée en Dermatologie Pédiatrique (Nantes - France)
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">1999</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Diplômée en Dermatologie et Maladies de Système (Montpellier -
                France)
              </dd>
            </div>
          </div>
        </div>

        <div class=" mt-10  max-w-4xl mb-10 mx-40 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100">
          <a href="#">
            <h5 class="p mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-sky-600">
              Houraire d'ouverture
            </h5>
          </a>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
              <tbody>
                <tr class="bg-gray-300 border-b border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black"
                  >
                   Lundi
                  </th>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4">
                    <p href="#" class="font-medium text-black">
                    09:00 {'>'} 18:00
                    </p>
                  </td>
                </tr>
                <tr class="bg-gray-300 border-b border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black"
                  >
                   Mardi
                  </th>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4">
                    <p href="#" class="font-medium text-black">
                    09:00 {'>'} 18:00
                    </p>
                  </td>
                </tr>
                <tr class="bg-gray-300 border-b border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black"
                  >
                   Mercredi
                  </th>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4">
                    <p href="#" class="font-medium text-black">
                    09:00 {'>'} 18:00
                    </p>
                  </td>
                </tr>
                <tr class="bg-gray-300 border-b border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black"
                  >
                   Jeudi
                  </th>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4">
                    <p href="#" class="font-medium text-black">
                    09:00 {'>'} 18:00
                    </p>
                  </td>
                </tr>
                <tr class="bg-gray-300 border-b border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black"
                  >
                   Vendredi
                  </th>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4">
                    <p href="#" class="font-medium text-black">
                    09:00 {'>'} 18:00
                    </p>
                  </td>
                </tr>
                <tr class="bg-gray-300 border-b border-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-black"
                  >
                   Samedi
                  </th>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4">
                    <p href="#" class="font-medium text-black">
                      09:00 {'>'} 12:00
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default fichemedecin;
