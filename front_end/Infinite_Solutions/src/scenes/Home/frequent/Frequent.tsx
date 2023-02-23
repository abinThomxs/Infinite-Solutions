import React from "react";

type Props = {};

const Frequent = (props: Props) => {
  return (
    <div className="w-full">
      <h1 className="m-5 text-center text-3xl">Frequently Used Services</h1>
      <div className="flex w-full justify-evenly">
        <div className="shadow-2xl border-2 border-gray-200">
          <div>
            <img className="w-60" src="./assets/gardening.png" alt="" />
          </div>
          <div>
            <h1 className="text-center text-2xl">Gardening</h1>
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
