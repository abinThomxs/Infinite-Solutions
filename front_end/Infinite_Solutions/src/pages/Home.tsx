import HomeComp from '@/scenes/Home'
import Navbar from '@/scenes/navbar'
import React, { useEffect } from 'react'

type Props = {}

const Home = (props: Props) => {
    
  return (
    <div>
        <Navbar isTopOfPage={false} selectedPage={''} setSelectedPage={function (value: string): void {
              throw new Error('Function not implemented.')
          } } />
        <HomeComp />
    </div>
  )
}

export default Home;