import React from 'react'
import Container from '@/app/layouts/Container'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import styles from './Hiring.module.scss'

const listContent = [
  {
    description: 'Finding available creators is very challenging.',
    src: '/images/hiringSection/1.png',
    id: 1,
  },
  {
    description: 'It’s very hard to find qualified niche creators.',
    src: '/images/hiringSection/2.svg',
    id: 2,
  },
]

const HiringSection = () => {
  return (
    <section className={styles['hiring']}>
      <Container>
        <div className={styles['hiring__content']}>
          <div className={styles['hiring__content_left']}>
            <h2 className={'h1'}>HIRING VIDEO CREATORS IS HARD</h2>
            <BackgroundImage
              src={'/images/hiringSection/3.svg'}
              alt={'picture'}
              className={styles['img']}
            />
          </div>
          <ul className={styles['list']}>
            {listContent.map((item) => (
              <li key={item.id} className={styles['list__item']}>
                <p className={styles['list__item_text']}>{item.description}</p>
                <BackgroundImage
                  src={item.src}
                  alt={'picture'}
                  className={styles['list__item_img']}
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
