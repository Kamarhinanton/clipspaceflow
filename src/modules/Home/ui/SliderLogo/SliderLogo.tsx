import React from 'react'
import Container from '@/app/layouts/Container'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import { sliderLogosData } from '@/modules/Home/ui/SliderLogo/data'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import styles from './SliderLogo.module.scss'

import 'swiper/css'

const swiperProps: SwiperProps = {
  speed: 4000,
  loop: true,
  freeMode: true,
  autoplay: { delay: 0, disableOnInteraction: false },
  slidesPerView: 'auto',
  modules: [Autoplay, FreeMode],
  grabCursor: true,
}

const SliderLogo = () => {
  return (
    <section className={styles['sliderLogo']}>
      <Container size={'large'}>
        <div className={styles['sliderLogo__content']}>
          <p className={styles['text']}>
            Clipspace creators are trusted by leading brands and top influencers
          </p>
          <Swiper className={styles['slider']} {...swiperProps}>
            {sliderLogosData.map((slide) => (
              <SwiperSlide key={slide.id} className={styles['slider__slide']}>
                <div className={styles['slider__slide_image']}>
                  <BackgroundImage
                    position={'cover'}
                    src={slide.src}
                    alt={'person image'}
                  />
                </div>
                <div className={styles['slider__slide_text']}>
                  {slide.description}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default SliderLogo
