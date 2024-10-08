import React from 'react'
import Container from '@/app/layouts/Container'
import PrimaryButton from '@/ui/PrimaryButon'
import classNames from 'classnames'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules'
import { videoEditorsSliderData } from '@/modules/Home/ui/VideoEditorsSlider/data'

import styles from './VideoEditorsSlider.module.scss'
import 'swiper/css'

const swiperProps: SwiperProps = {
  speed: 2000,
  loop: true,
  autoplay: true,
  allowTouchMove: false,
  slidesPerView: 1,
  pagination: {
    el: '.current-pagination',
    clickable: false,
    horizontalClass: styles['pagination'],
    bulletClass: styles['pagination__bullet'],
    bulletActiveClass: styles['active'],
  },
  modules: [Autoplay, EffectCreative, Pagination],
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [0, '-20%', -1],
    },
    next: {
      translate: [0, '100%', 0],
    },
  },
}

const VideoEditorsSlider = () => {
  return (
    <section className={classNames(styles['videoEditorsSlider'], 'decor-star')}>
      <Container>
        <Swiper {...swiperProps} className={styles['slider']}>
          <div className="current-pagination" />
          {videoEditorsSliderData.map((slide) => (
            <SwiperSlide key={slide.id} className={styles['slide']}>
              <div
                className={classNames(styles['slide__left'], styles['column'])}
              >
                <div className={styles['slide__left_content']}>
                  <p className={styles['topic']}>{slide.topic}</p>
                  <h3 className={classNames('h1', styles['title'])}>
                    <span>{slide.title}</span>
                  </h3>
                  <p className={styles['text']}>{slide.description}</p>
                  <PrimaryButton
                    className={styles['button']}
                    size={'large'}
                    variant={'light'}
                    id={'Y56992yH'}
                  >
                    Hire top video creators
                  </PrimaryButton>
                </div>
              </div>
              <div
                className={classNames(styles['slide__right'], styles['column'])}
              >
                <div className={classNames(styles['square'])}>
                  <video
                    className={styles['square__video']}
                    playsInline
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    controls={false}
                  >
                    <source src={slide.videoSrc} type="video/mp4" />
                  </video>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default VideoEditorsSlider
