const Banner = () => {
  return (
    <section class="overflow-hidden">
      <div class="relative overflow-hidden bg-no-repeat bg-cover" id='home_div1'>
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden" id='home_div2'>
          <div class="flex justify-center items-center h-full">
            <div class="text-center text-white px-6 md:px-12">
              <h1 class="text-5xl md:text-6xl xl:text-5xl font-bold tracking-tight mb-12">Devenir client CRÉDIT DU MAROC <br /><span>en toute simplicité. </span></h1>
              <a class="inline-block px-7 py-3 mr-1.5 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">OUVRIR MON COMPTE</a>
              <a class="inline-block px-7 py-3 border-2 border-transparent bg-transparent text-white font-medium text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <div class="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10" id='home_curve_banner'>
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z" fill="currentColor"></path>
        </svg>
      </div>
  </section>
  )
}

export default Banner