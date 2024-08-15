import React, { useCallback, useEffect, useRef } from 'react'
import Container from '@/app/layouts/Container'
import Lottie, {
  LottieRefCurrentProps,
  useLottieInteractivity,
} from 'lottie-react'
import { makeItData } from '@/modules/Home/ui/MakeIt/data/data'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { useInView } from 'framer-motion'

import styles from './MakeIt.module.scss'

import lottie1 from './data/1.json'

const MakeIt = () => {
  const ref = useRef<LottieRefCurrentProps>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 'all' })

  useEffect(() => {
    if (isInView) {
      ref.current?.play()
    }
  }, [isInView])

  return (
    <section className={styles['makeIt']}>
      <Container size={'large'}>
        <div className={styles['makeIt__content']}>
          <div ref={sectionRef} className={styles['title']}>
            <h2 className={'h1'}>WE MAKE IT EASY</h2>
            <Lottie
              className={styles['title__lottie']}
              animationData={lottie1}
              lottieRef={ref}
              autoplay={false}
              loop={false}
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
