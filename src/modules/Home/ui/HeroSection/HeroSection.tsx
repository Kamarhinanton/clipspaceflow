import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import PrimaryButton from '@/ui/PrimaryButon'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import styles from './HeroSection.module.scss'

const HeroSection = () => {
  return (
    <section className={styles['hero']}>
      <Container>
        <div className={styles['hero__content']}>
          <div className={styles['hero__content_left']}>
            <h1 className={classNames('h1', styles['title'])}>
              HIRE S-TIER
              <br /> <span>SHORT-FORM</span>
              <br /> <span>VIDEO CREATORS</span>
              <br /> IN A FEW CLICKS
            </h1>
          </div>
          <div className={styles['hero__content_right']}>
            <BackgroundImage
              src={'/images/hero/hero_people.png'}
              alt={'hero-image'}
              className={styles['image']}
            />
            <p className={classNames(styles['topDescription'], styles['text'])}>
              Get matched with top video editors, UGC creators and video ads
              creators.
            </p>
            <PrimaryButton
              id={'Y56992yH'}
              className={styles['button']}
              size={'large'}
            >
              Hire top video creators
            </PrimaryButton>
            <p
              className={classNames(
                styles['bottomDescription'],
                styles['text'],
              )}
            >
              <span>1st video is free</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
