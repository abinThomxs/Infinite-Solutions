import "./service.css";

const ServicesBox = () => {
  return (
    <div id="service" className="p-auto mt-16 flex  w-2/3  flex-col">
      <h1 className="lg:px-20 lg:mx-0 mx-5 flex justify-center px-5 pt-4 text-4xl font-bold text-blue-100 md:mx-20 md:px-10">
        Services
      </h1>
      <div className="scrollbar-hide flex overflow-x-auto py-6 ">
        <div className="flex flex-nowrap  ">
          <div className="inline-block px-3">
            <div className="serviceBox shadow-3xl flex h-32 w-32 max-w-xs items-center justify-center overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <img
                src="/assets/icons/plumping.png"
                alt=""
                className="h-20 w-20"
              />
            </div>
            <p className="mx-auto flex items-center justify-center">Plumbing</p>
          </div>
          <div className="inline-block px-3">
            <div className="serviceBox shadow-3xl flex h-32 w-32 max-w-xs items-center justify-center overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <img
                src="/assets/icons/cooking.png"
                alt=""
                className="h-20 w-20"
              />
            </div>
            <p className="mx-auto flex items-center justify-center">Cooking</p>
          </div>
          <div className="inline-block px-3">
            <div className="serviceBox shadow-3xl flex h-32 w-32 max-w-xs items-center justify-center overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <img
                src="/assets/icons/driving.png"
                alt=""
                className="h-20 w-20"
              />
            </div>
            <p className="mx-auto flex items-center justify-center">Driving</p>
          </div>
          <div className="inline-block px-3">
            <div className="serviceBox shadow-3xl flex h-32 w-32 max-w-xs items-center justify-center overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <img
                src="/assets/icons/electrical.png"
                alt=""
                className="h-20 w-20"
              />
            </div>
            <p className="mx-auto flex items-center justify-center">
              Electrical
            </p>
          </div>
          <div className="inline-block px-3">
            <div className="serviceBox shadow-3xl flex h-32 w-32 max-w-xs items-center justify-center overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <img
                src="/assets/icons/gardening.png"
                alt=""
                className="h-20 w-20"
              />
            </div>
            <p className="mx-auto flex items-center justify-center">
              Gardening
            </p>
          </div>
          <div className="inline-block px-3">
            <div className="serviceBox shadow-3xl flex h-32 w-32 max-w-xs items-center justify-center overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <img
                src="/assets/icons/home_nurse.png"
                alt=""
                className="h-20 w-20"
              />
            </div>
            <p className="mx-auto flex items-center justify-center">
              Home Nurse
            </p>
          </div>
          <div className="inline-block px-3">
            <div className="serviceBox shadow-3xl flex h-32 w-32 max-w-xs items-center justify-center overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <img
                src="/assets/icons/pet_care.png"
                alt=""
                className="h-20 w-20"
              />
            </div>
            <p className="mx-auto flex items-center justify-center">Pet Care</p>
          </div>
          <div className="inline-block px-3">
            <div className="serviceBox shadow-3xl flex h-32 w-32 max-w-xs items-center justify-center overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <img
                src="/assets/icons/plumping.png"
                alt=""
                className="h-20 w-20"
              />
            </div>
            <p className="mx-auto flex items-center justify-center">Plumbing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBox;
