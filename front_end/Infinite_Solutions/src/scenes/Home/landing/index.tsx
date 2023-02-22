import useMediaQuery from '@/hooks/useMediaQuery'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import CarouselBackground from '../Carousal/Carousal';

useMediaQuery
type Props = {}

const Landing = (props: Props) => {
    useEffect (() => {
        console.log('hsdb')
    }) 
  return (
    <section>
        
        <div > 
            <CarouselBackground />
        </div>
        
    </section>
  )
}

export default Landing;