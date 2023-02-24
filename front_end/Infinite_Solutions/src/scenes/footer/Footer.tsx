import React from "react";
import "./footer.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-16 w-full">
      <div className="flex justify-center">
        <img src="./assets/logo1.png" alt="" />
      </div>
      <div className="flex w-full justify-center">
        <div className="flex h-32 w-2/12 items-center justify-between">
          <img src="./assets/icons/twitter.png" alt="" className="w-10" />
          <img src="./assets/icons/instagram.png" alt="" className="w-10" />
          <img src="./assets/icons/facebook.png" alt="" className="w-10" />
        </div>
      </div>
      <div className="footerbg h-32 w-full bg-cover">
        <div className="flex justify-center">
          <div className="w-4/12">
            <div className="flex justify-between ">
              <p>Kochi</p>
              <p>Calicut</p>
              <p>Bangalore</p>
            </div>
            <div className="flex justify-between text-center ">
              <p>Mysore</p>
              <p>Chennai</p>
              <p>Mangalore</p>
            </div>
            <div className="flex justify-between ">
              <p>Delhi</p>
              <p>Pune</p>
              <p>Mumbai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
