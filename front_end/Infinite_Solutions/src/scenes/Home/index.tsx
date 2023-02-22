import useMediaQuery from '@/hooks/useMediaQuery'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import CarouselBackground from '../Carousal/Carousal';

useMediaQuery
type Props = {}

const HomeComp = (props: Props) => {
    useEffect (() => {
        console.log('hsdb')
    }) 
  return (
    <section>
        
        <div className=''>

            
            <p>
            <CarouselBackground />
                hdsbafbhsdbfbfhbdfsbdfasdhbf
                jkdfksdksdf
                jsdbfjksdbfkskdf
                jsdnkfdjksnfkla
            </p>
        </div>
        
    </section>
  )
}

export default HomeComp;