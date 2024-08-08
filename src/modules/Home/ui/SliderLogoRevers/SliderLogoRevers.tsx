import React from 'react'
import Container from '@/app/layouts/Container'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import { sliderLogosReversData } from '@/modules/Home/ui/SliderLogoRevers/data'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import classNames from 'classnames'

import styles from './SliderLogoRevers.module.scss'
import 'swiper/css'

const swiperProps: SwiperProps = {
  speed: 4000,
  loop: true,
  freeMode: true,
  autoplay: { delay: 0, reverseDirection: true },
  slidesPerView: 'auto',
  modules: [Autoplay, FreeMode],
}

const SliderLogoRevers = () => {
  return (
    <section className={styles['sliderLogo']}>
      <Container size={'large'}>
        <div className={styles['sliderLogo__content']}>
          <Swiper
            className={classNames(styles['slider'], 'gradient-slider')}
            {...swiperProps}
          >
            {sliderLogosReversData.map((slide) => (
              <SwiperSlide key={slide.id} className={styles['slider__slide']}>
                <div className={styles['slider__slide_image']}>
                  <BackgroundImage
                    position={'contain'}
                    src={slide.src}
                    alt={'person image'}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default SliderLogoRevers
