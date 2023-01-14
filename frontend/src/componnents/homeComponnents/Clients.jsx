export const Clients = () => {
    return (
      <div className="mb-20 bg-[#f0f8ff] mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20">
        <div className="px-8 grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Des offres sur mesure 
                <br className="hidden md:block" />
                    adaptées {' '}
                <span className="inline-block text-deep-purple-accent-400">
                à vos besoins
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Vous êtes étudiant ou jeune actif? Vous êtes salarié ou fonctionnaire? 
                CRÉDIT DU MAROC met à votre disposition une panoplie d'offres pour vous accompagner au quotidien.
              </p>
            </div>
            <div>
            <div class="mt-10 space-y-20">
              <div class="w-full">
                <div class="flex-1 h-full w-96 cursor-pointer">
                  <div class="flex w-full bg-white shadow rounded-lg py-4 px-16">
                    <p class="m-auto inset-0 text-xl font-semibold leading-7 text-center text-gray-800">OUVRIR MON COMPTE</p>
                    <div class="">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover bg-white mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="/illustration/clip-man-gives-a-diploma-to-a-student-girl-with-handshake.svg"
                alt="student"
              />
              <img
                className="object-cover bg-white w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="/illustration/sammy-man-in-tie-and-watch.svg"
                alt="entrepreneur"
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover bg-white w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="/illustration/clip-hardworking-man.svg"
                alt="sammy-man-in-tie-and-watch.svg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };