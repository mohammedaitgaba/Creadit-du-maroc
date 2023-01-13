export const Content = () => {
    return (
    <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="pb-12">
        <div className="p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Comment ça marche?
                <br className="hidden md:block" />
                jumps over{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  a lazy dog
                </span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste
                error sit voluptatem accusantium doloremque rem aperiam.
              </p>
            </div>
          </div>
            <div className="grid gap-8 row-gap-5 mt-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                <div className="duration-300 transform bg-white border-l-4 border-[#0a72d1] hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                    <h6 className="mb-2 font-semibold leading-5">Profil</h6>
                    <p className="text-sm text-gray-900">
                        Sélectionnez le profil qui vous correspond le plus
                    </p>
                </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-[#0a72d1] hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                    <h6 className="mb-2 font-semibold leading-5">Package</h6>
                    <p className="text-sm text-gray-900">
                        Choisissez le package qui vous convient
                    </p>
                </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-[#0a72d1] hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                    <h6 className="mb-2 font-semibold leading-5">
                        Formulaire
                    </h6>
                    <p className="text-sm text-gray-900">
                        Remplissez le formulaire de pré-ouverture de compte en ligne
                    </p>
                </div>
                </div>
                <div className="duration-300 transform bg-white border-l-4 border-[#0a72d1] hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                    <h6 className="mb-2 font-semibold leading-5">Conseiller</h6>
                    <p className="text-sm text-gray-900">
                        Un conseiller prendra contact avec vous afin de vous proposer un RDV en agence
                    </p>
                </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    );
  };