import React from "react";

type Props = {};

const Frequent = (props: Props) => {
  return (
    <div className="sm:w-full">
      <h1 className="sm:ml-5 text-center md:text-3xl sm:text-lg">Frequently Used Services</h1>
      <div className="sm:flex md:w-full md:justify-evenly sm:justify-center">
        <div className="shadow-2xl border-2 border-gray-200 p-0">
          <div>
            <img className="w-60" src="./assets/gardening.png" alt="" />
          </div>
          <div>
            <h1 className="text-center text-2xl">Gardening</h1>
          </div>
          <div>
            <p className="w-60 text-center text-md">
              ipsa quae ab illo inventore veritatis et quasi architecto beatae
              vitae ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae
            </p>
          </div>
        </div>
        <div className="shadow-2xl border-2 border-gray-200">
          <div>
            <img className="w-60" src="./assets/cooking.png" alt="" />
          </div>
          <div>
            <h1 className="text-center text-2xl">Cooking</h1>
          </div>
          <div>
            <p className="w-60 text-center">
              ipsa quae ab illo inventore veritatis et quasi architecto beatae
              vitae ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae
            </p>
          </div>
        </div>
        <div className="shadow-2xl border-2 border-gray-200">
          <div>
            <img className="w-60" src="./assets/driving.png" alt="" />
          </div>
          <div>
            <h1 className="text-center text-2xl">Driving</h1>
          </div>
          <div>
            <p className="w-60 text-center">
              ipsa quae ab illo inventore veritatis et quasi architecto beatae
              vitae ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae
            </p>
          </div>
        </div>
        <div className="shadow-2xl border-2 border-gray-200">
          <div>
            <img className="w-60" src="./assets/pet_care.png" alt="" />
          </div>
          <div>
            <h1 className="text-center text-2xl">Pet Care</h1>
          </div>
          <div>
            <p className="w-60 text-center">
              ipsa quae ab illo inventore veritatis et quasi architecto beatae
              vitae ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequent;
