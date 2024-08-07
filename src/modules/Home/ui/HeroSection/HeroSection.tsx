import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import PrimaryButton from '@/ui/PrimaryButon'

import styles from './HeroSection.module.scss'

const HeroSection = () => {
  return (
    <section className={styles['hero']}>
      <Container>
        <div className={styles['hero__content']}>
          <h1 className={classNames('h1', styles['title'])}>
            <span>HIRE S-TIER SHORT-FORM</span>
            <br /> CONTENT CREATORS
            <br /> IN A FEW CLICKS
          </h1>
          <p className={styles['description']}>
            Get matched with top video editors, UGC creators and video ads
            creators. 1st video is free.
          </p>
          <PrimaryButton className={styles['button']} size={'large'}>
            Hire top video creators
          </PrimaryButton>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
