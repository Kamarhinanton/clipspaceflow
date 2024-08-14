import React from 'react'
import Container from '@/app/layouts/Container'
import Lottie from 'lottie-react'
import { makeItData } from '@/modules/Home/ui/MakeIt/data/data'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import styles from './MakeIt.module.scss'

import lottie1 from './data/1.json'

const MakeIt = () => {
  return (
    <section id={'paragraph-2'} className={styles['makeIt']}>
      <Container size={'large'}>
        <div className={styles['makeIt__content']}>
          <div className={styles['title']}>
            <h2 className={'h1'}>WE MAKE IT EASY</h2>
            <Lottie
              className={styles['title__lottie']}
              animationData={lottie1}
              autoplay={true}
              loop={true}
            />
          </div>
          <ul className={styles['list']}>
            {makeItData.map((item) => (
              <li className={styles['list__item']} key={item.id}>
                <p className={styles['list__item_top']}>
                  <span>{item.topic}</span>
                </p>
                <div className={styles['list__item_content']}>
                  <div className={styles['text']}>
                    <p>{item.description}</p>
                  </div>
                  {item.src && (
                    <BackgroundImage
                      className={styles['image']}
                      src={item.src}
                      alt={'picture'}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default MakeIt
