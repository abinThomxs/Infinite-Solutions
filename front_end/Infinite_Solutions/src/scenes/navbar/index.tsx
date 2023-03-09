import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
// import Link from './Link'
import useMediaQuery from "@/hooks/useMediaQuery";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { NavLink, useNavigate } from "react-router-dom";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage}: Props) => {
  const navigate = useNavigate();
  const flexBetween = "flex items-center justify-content-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage
    ? "bg-transparent text-white"
    : "bg-white text-blue-100 drop-shadow-xl";
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const token = localStorage.getItem("userToken");
  const [logout, setLogout] = useState(false);
  useEffect(() => {}, [localStorage.getItem("userToken")]);

  return (
    <>
      <nav>
        <div
          className={`${navbarBackground} ${flexBetween}  fixed top-0 z-20 h-8 w-full py-10`}
        >
          <div className={`${flexBetween}  w-10/11 mx-auto`}>
            <div className={`${flexBetween} w-full gap-16`}>
              <img
                src={Logo}
                alt="logo"
                className="tw-shadow-color: #fff h-60"
              />

              {isAboveMediumScreens ? (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-lg font-bold `}>
                    <nav className={`${flexBetween} gap-8 text-lg font-bold `}>
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/profile">Profile</NavLink>
                      <NavLink to="/profile">Services</NavLink>
                      {!token ? (
                        <button onClick={() => setShowLogin(!showLogin)}>
                          login
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            localStorage.removeItem('userToken');
                            localStorage.removeItem('userId');
                            logout ? setLogout(false) : setLogout(true);
                          }}
                        >
                          logout
                        </button>
                      )}

                      {token ? (
                        ""
                      ) : (
                        <button onClick={() => setShowSignup(!showSignup)}>
                          Register
                        </button>
                      )}
                    </nav>
                  </div>
                </div>
              ) : (
                <button
                  className="rounded-full p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-blue-100" />
                </button>
              )}
            </div>
          </div>
        </div>

        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gradient-to-r from-blue-100 to-slate-900  text-white drop-shadow-xl">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <nav className={` gap-8 text-lg font-bold `}>
                <div className="mb-6">
                  <NavLink to="/">Home</NavLink>
                </div>
                <div className="mb-6">
                  <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className="mb-6">
                  <NavLink to="/profile">Services</NavLink>
                </div>
                {!token ? (
                  <div className="mb-6">
                    <button onClick={() => setShowLogin(!showLogin)}>
                      login
                    </button>
                  </div>
                ) : (
                  <button
                    className="mb-6"
                    onClick={() => {
                      localStorage.clear();
                      logout ? setLogout(false) : setLogout(true);
                    }}
                  >
                    logout
                  </button>
                )}

                {token ? (
                  ""
                ) : (
                  <button
                    className="mb-6"
                    onClick={() => setShowSignup(!showSignup)}
                  >
                    Register
                  </button>
                )}
              </nav>

              {/* <div>
                <img
                  src={Logo}
                  alt="logo"
                  className="h-72"
                />
              </div> */}
            </div>
          </div>
        )}
      </nav>
      <div className="absolute inset-y-0 right-0 mt-0">
        {showLogin ? <Login /> : ""}
      </div>
      <div className="absolute inset-y-0 right-0 mt-0">
        {showSignup ? <Signup /> : ""}
      </div>
    </>
  );
};

export default Navbar;
