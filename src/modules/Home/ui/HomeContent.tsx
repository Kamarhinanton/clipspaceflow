import React from 'react'
import HeroSection from '@/modules/Home/ui/HeroSection/HeroSection'
import Demo from '@/modules/Home/ui/Demo/Demo'
import SliderLogo from '@/modules/Home/ui/SliderLogo/SliderLogo'
import SliderLogoRevers from '@/modules/Home/ui/SliderLogoRevers/SliderLogoRevers'
import VideoEditorsSlider from '@/modules/Home/ui/VideoEditorsSlider/VideoEditorsSlider'
import HiringSection from '@/modules/Home/ui/HiringSection/HiringSection'
import MakeIt from '@/modules/Home/ui/MakeIt/MakeIt'
import JoinBeta from '@/modules/Home/ui/JoinBeta/JoinBeta'
import FAQSection from '@/modules/Home/ui/FAQSection/FAQSection'
import RunningText from '@/modules/Home/ui/RunningText/RunningText.module'
import Header from '../../../components/Header/ui/Header'

const HomeContent = () => {
  return (
    <>
      <Header />
      <div className={'root'} />
      <main>
        <HeroSection />
        <Demo />
        <SliderLogo />
        <SliderLogoRevers />
        <VideoEditorsSlider />
        <HiringSection />
        <MakeIt />
        <JoinBeta />
        <FAQSection />
        <RunningText />
      </main>
    </>
  )
}

export default HomeContent
