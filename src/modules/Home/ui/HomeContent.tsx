import React from 'react'
import HeroSection from '@/modules/Home/ui/HeroSection/HeroSection'
import Demo from '@/modules/Home/ui/Demo/Demo'
import SliderLogo from '@/modules/Home/ui/SliderLogo/SliderLogo'
import SliderLogoRevers from '@/modules/Home/ui/SliderLogoRevers/SliderLogoRevers'

const HomeContent = () => {
  return (
    <main>
      <HeroSection />
      <Demo />
      <SliderLogo />
      <SliderLogoRevers />
    </main>
  )
}

export default HomeContent
