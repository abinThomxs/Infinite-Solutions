import React from "react";

type Props = {};

const Info = (props: Props) => {
  return (
    <div className="m-16 flex justify-center">
      <div
        id="shad"
        className="flex-column w-7/12 items-center justify-center  bg-white p-8 "
      >
        <div className="flex justify-center items-center">
          <div >
            <h1 className="text-center text-5xl ">Why use Infinite Solutions?</h1>
            <p>
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
