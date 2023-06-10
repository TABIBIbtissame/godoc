import { useState } from "react";
import {
  ClockIcon,
  ArrowLeftOnRectangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import { API_BASE_URL } from "../apiRoutes";
import Formsearch from "./formsearch";
import Navbar from "./navbar";

function Homepage() {
  const [setDoctors] = useState([]);

  const handleButtonClick = async (city, speciality) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/doctors?speciality=${speciality}&city=${city}`
      );
      const data = await response.json();

      setDoctors(data);
    } catch (error) {
      console.error("Error searching doctors:", error);
    }
  };
  //-----------------------------------------------------

  const features = [
    {
      name: "Gain de temps .",
      description:
        "Avec GoDoc, vous pouvez prendre rendez-vous en ligne en quelques minutes seulement, sans avoir à passer des heures à chercher des professionnels de la santé disponibles.",
      icon: ClockIcon,
    },
    {
      name: "Accessibilité.",
      description:
        " GoDoc est disponible 24 heures sur 24 et 7 jours sur 7, ce qui signifie que vous pouvez prendre rendez-vous à tout moment, depuis nimporte où.",
      icon: ArrowLeftOnRectangleIcon,
    },
    {
      name: "Suivi des rendez-vous.",
      description:
        " GoDoc vous permet de suivre tous vos rendez-vous en ligne, de recevoir des rappels de rendez-vous et de garder une trace de votre historique de rendez-vous, ce qui peut vous aider à mieux gérer votre emploi du temps et à ne jamais manquer un rendez-vous important..",
      icon: CheckCircleIcon,
    },
  ];
  return (
    <>
      <div className="bg-[url('../public/images/background-index.jpeg')]">
        <Navbar />
        <div className="relative isolate px-6 pt-1 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-blue-900 md:text-5xl lg:text-6xl ">
                Votre partenaire de santé &nbsp;
                <span class="leading-tight text-transparent bg-clip-text bg-gradient-to-r to-teal-600 from-sky-500">
                le plus fiable !
                </span>{" "}
               
              </h1>

              <p className="mt-6 text-xl leading-8 text-blue-800 text-4xl font-semibold">
                Dites adieu aux temps dattente, réservez vos rendez-vous en
                ligne dès maintenant !
              </p>
              <div>
                <Formsearch onClick={handleButtonClick} />
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
      <section></section>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                  Pourquoi prendre rendez-vous avec GoDoc?
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  En utilisant GoDoc, vous pourrez éviter les longues files
                  dattente et les retards en obtenant des rendez-vous rapides et
                  pratiques avec des médecins, des dentistes, des
                  physiothérapeutes et bien dautres professionnels de la santé.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h- w-5 text-orange-500"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="../public/images/section-image.jpg"
              alt="section-doctors-image"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.orange.400),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-8"
            src="../images/dodoc-log.png"
            alt="dodoc-logo"
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Nous sommes fiers doffrir à nos utilisateurs une expérience de
                réservation de rendez-vous simple, rapide et pratique grâce à
                notre plateforme DoDoc. Nous continuerons à travailler dur pour
                fournir des services de qualité supérieure et des
                fonctionnalités améliorées pour répondre aux besoins de nos
                utilisateurs. Chez DoDoc, nous croyons que chaque rendez-vous
                compte, et nous sommes déterminés à offrir une expérience
                exceptionnelle à chaque étape du processus..”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-20 w-30 rounded-full"
                src="../public/images/ceo-image.jpg"
                alt="ceo-image"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900"> Mr X</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO of Dodoc</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="flex items-end w-full min-h-screen bg-white">
        <footer className="w-full text-black bg-slate-50 body-font">
          <div className="container flex flex-col flex-wrap px-20 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-80 mx-auto text-center md:mx-0 md:text-left">
              <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <a href="/" className="-m-1 p-1">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="../public/images/dodoc-log.png"
                    alt="logo"
                  />
                </a>
              </a>
              <p className="mt-2 text-lg leading-8 text-gray-700">
                Prenez rendez-vous en ligne rapidement et facilement avec GoDoc
                - votre solution de réservation de rendez-vous en ligne de
                confiance. !
              </p>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 mt-2 text-4xl font-bold tracking-tight text-orange-500 sm:text-2xl">
                  Social Links
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-900 cursor-pointer hover:text-gray-500">
                      Facebook
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-900 cursor-pointer hover:text-gray-500">
                      Instagram
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-900 cursor-pointer hover:text-gray-500">
                      LinkedIn
                    </a>
                  </li>
                </nav>
              </div>

              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 mt-2 text-4xl font-bold tracking-tight text-orange-500 sm:text-2xl">
                  Contact-nous
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <p className="text-gray-900">
                      Avenue Allal Ben Abdellah imm Al YOUBIA 6ème étage, Fès
                      MAROC.
                    </p>
                  </li>
                  <li className="mt-3">
                    <p className="text-gray-900">contact@dodoc.ma</p>
                  </li>
                  <li className="mt-3">
                    <p className="text-gray-900">05 06 04 08 03</p>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-slate-100">
            <div className="container px-5 py-2 mx-auto">
              <p className="text-sm text-gray-700 capitalize xl:text-center">
                © 2023 All rights reserved by Plénitude Groupe{" "}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Homepage;
