import React from 'react'
import Container from '@/app/layouts/Container'
import PrimaryButton from '@/ui/PrimaryButon'
import classNames from 'classnames'

import styles from './JoinBeta.module.scss'

const JoinBeta = () => {
  return (
    <section id={'paragraph-3'} className={styles['joinBeta']}>
      <Container>
        <h2
          className={classNames(
            'h1',
            'mobile-view',
            'decor-star',
            styles['title'],
          )}
        >
          JOIN BETA AND TRY <span>CLIPSPACE AI</span>
        </h2>
        <div className={styles['joinBeta__content']}>
          <div className={styles['joinBeta__content_text']}>
            <h2
              className={classNames(
                'h1',
                'desk-view',
                'decor-star',
                styles['title'],
              )}
            >
              JOIN BETA AND TRY <span>CLIPSPACE AI</span>
            </h2>
            <p className={styles['description']}>
              Our new AI model that helps to find the perfect video creators in
              just 1 click. Try it today.
            </p>
            <PrimaryButton className={styles['button']} size={'large'}>
              Join Beta
            </PrimaryButton>
          </div>
          <div className={styles['joinBeta__content_video']}>
            <video
              className={styles['square__video']}
              playsInline
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
            >
              <source src={'/videos/Desktop.mp4'} type="video/mp4" />
            </video>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default JoinBeta
