import React from "react";

type Props = {};

const Info = (props: Props) => {
  return (
    <div className="m-16 flex justify-center">
      <div
        id="shad"
        className="flex-column md:w-7/12  items-center justify-center  bg-white md:p-8 "
      >
        <div className="md:flex md:justify-center items-center">
          <div className="md:w-6/12 sm:w-full" >
            <h1 className="text-center sm:text-xl md:text-5xl ">Why use Infinite Solutions?</h1>
            <p className="lg:text-xl sm:text-sm">
            ipsa quae ab illo inventore veritatis et quasi architecto beatae  
            vitae ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae
          </p>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <img className="h-52 w-80" src="/assets/icons/customers.png" alt="" />
            </div>
          </div>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Info;
