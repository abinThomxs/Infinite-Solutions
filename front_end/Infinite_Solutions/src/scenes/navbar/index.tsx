import React, {  useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "@/assets/logo.png"
import Link from './Link'
import useMediaQuery from '@/hooks/useMediaQuery'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

type Props = {
  isTopOfPage: boolean;
  selectedPage: string;
  setSelectedPage: (value: string) => (void);
 };

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-content-between"
  const [ isMenuToggled, setIsMenuToggled ] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? 'bg-transparent text-white' : 'bg-white text-blue-100 drop-shadow-xl'
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const token = localStorage.getItem('token');
  const [ logout, setLogout ] = useState(false);
  useEffect(() => {
    
  }, [localStorage.getItem('token')])
  

    return (
    <><nav>
        <div className={`${navbarBackground} ${flexBetween}  fixed top-0 z-20 w-full h-8 py-10`}>

          <div className={`${flexBetween}  mx-auto w-10/11`}>
            <div className={`${flexBetween} w-full gap-16`}>
              <img src={Logo} alt="logo" className='h-60 tw-shadow-color: #fff' />

              {isAboveMediumScreens ? (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-lg font-bold `}>
                    <Link
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage} />
                    <Link page="Services"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage} />
                    <Link page="Profile"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage} />
                    <Link page="About"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage} />
                    <Link page="FRS"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage} />
                    <Link page="Reviews"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage} />
                    {!token ? (<button onClick={() => setShowLogin(!showLogin)}>login</button>) : 
                    (<button onClick={() => {localStorage.clear(); logout ? setLogout(false) : setLogout(true) }}>logout</button>)}                     
                    

                    <button onClick={() => setShowSignup(!showSignup)}>Register</button>

                  </div>
                </div>
              ) : (
                <button
                  className='rounded-full p-2'
                  onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <Bars3Icon className='h-6 w-6 text-blue-100' />
                </button>
              )}
            </div>
          </div>
        </div>

        {!isAboveMediumScreens && isMenuToggled && (
          <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-white drop-shadow-xl'>
            <div className='flex justify-end p-12'>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className='h-6 w-6' />
              </button>
            </div>

            <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
              <Link page="Services"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
              <Link page="Profile"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
              <Link page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
              <Link page="FRS"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
              <Link page="Reviews"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
              <p>Logout</p>

              <p>Register</p>

            </div>

          </div>
        )}
      </nav>
        <div className='absolute inset-y-0 right-0 mt-0'>
          {showLogin ? <Login /> : ''}
        </div>
        <div className='absolute inset-y-0 right-0 mt-0'>
          {showSignup ? <Signup /> : ''}
        </div>
        </>
  )
}

export default Navbar;