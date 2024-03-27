import React from 'react'
import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import FeaturedProperties from '@/components/FeaturedProperties';
import connectDB from '@/config/database';

const HomePage =  () => {


  return (
    <>
 <Hero/>
 <InfoBoxes/>
 <FeaturedProperties/>
 <HomeProperties/>
    </>
  )
}

export default HomePage