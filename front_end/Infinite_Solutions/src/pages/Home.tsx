import Footer from '@/scenes/Footer/Footer'
import Banner from '@/scenes/Home/banner/Banner'
import Frequent from '@/scenes/Home/frequent/Frequent'
import Info from '@/scenes/Home/info/Info'
import Landing from '@/scenes/Home/landing'
import Reviews from '@/scenes/Home/reviews/Reviews'
import ServicesBox from '@/scenes/Home/services'
import Navbar from '@/scenes/Navbar'
import React, { useEffect, useState } from 'react'

type Props = {}

const Home = (props: Props) => {
  const [ isTopOfPage, setIsTopOfPage ] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0){
        setIsTopOfPage(true);
      }
      if (window.pageYOffset !== 0){
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div>
        <Navbar isTopOfPage={isTopOfPage} selectedPage={''} setSelectedPage={function (value: string): void {
              throw new Error('Function not implemented.')
          } } />
        <Landing />
        <div className='w-full flex justify-center'>
          <ServicesBox/>
        </div>
        <div className='w-full  flex justify-center'>
          <Banner/>
        </div>
        <div className='w-full  flex justify-center'>
          <Info/>
        </div>
        <div className='w-full  flex justify-center'>
          <Frequent/>
        </div>
        <div className='w-full  flex justify-center'>
          <Reviews/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home;