import Landing from '@/scenes/Home/landing'
import ServicesBox from '@/scenes/Home/services'
import Navbar from '@/scenes/navbar'
import React, { useEffect } from 'react'

type Props = {}

const Home = (props: Props) => {
    
  return (
    <div>
        <Navbar isTopOfPage={false} selectedPage={''} setSelectedPage={function (value: string): void {
              throw new Error('Function not implemented.')
          } } />
        <Landing />
        <ServicesBox/>
    </div>
  )
}

export default Home;