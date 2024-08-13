import React from 'react'
import HeroSection from '@/modules/Home/ui/HeroSection/HeroSection'
import Demo from '@/modules/Home/ui/Demo/Demo'
import SliderLogo from '@/modules/Home/ui/SliderLogo/SliderLogo'
import SliderLogoRevers from '@/modules/Home/ui/SliderLogoRevers/SliderLogoRevers'
import VideoEditorsSlider from '@/modules/Home/ui/VideoEditorsSlider/VideoEditorsSlider'
import HiringSection from '@/modules/Home/ui/HiringSection/HiringSection'
import MakeIt from '@/modules/Home/ui/MakeIt/MakeIt'

const HomeContent = () => {
  return (
    <main>
      <HeroSection />
      <Demo />
      <SliderLogo />
      <SliderLogoRevers />
      <VideoEditorsSlider />
      <HiringSection />
      <MakeIt />
    </main>
  )
}

export default HomeContent
