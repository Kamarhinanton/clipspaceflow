import React from 'react'
import Container from '@/app/layouts/Container'
import { listContent } from '@/modules/Home/ui/HiringSection/data/data'
import Lottie from 'lottie-react'

import lottie from './data/cross.json'

import styles from './Hiring.module.scss'

const HiringSection = () => {
  return (
    <section className={styles['hiring']}>
      <Container>
        <div className={styles['hiring__content']}>
          <div className={styles['hiring__content_left']}>
            <h2 className={'h1'}>HIRING VIDEO CREATORS IS HARD</h2>
            <Lottie
              className={styles['lottie']}
              animationData={lottie}
              autoplay={true}
              loop={true}
            />
          </div>
          <ul className={styles['list']}>
            {listContent.map((item) => (
              <li key={item.id} className={styles['list__item']}>
                <p className={styles['list__item_text']}>{item.description}</p>
                <Lottie
                  className={styles['list__item_lottie']}
                  animationData={item.src}
                  autoplay={true}
                  loop={true}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default HiringSection
