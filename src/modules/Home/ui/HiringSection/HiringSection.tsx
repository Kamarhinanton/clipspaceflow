import React from 'react'
import Container from '@/app/layouts/Container'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { listContent } from '@/modules/Home/ui/HiringSection/data'

import styles from './Hiring.module.scss'

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
