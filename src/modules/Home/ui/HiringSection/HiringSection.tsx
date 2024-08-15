import React, { useEffect, useRef } from 'react'
import Container from '@/app/layouts/Container'
import { listContent } from '@/modules/Home/ui/HiringSection/data/data'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { useInView } from 'framer-motion'

import lottie from './data/cross.json'

import styles from './Hiring.module.scss'

const HiringSection = () => {
  const ref = useRef<LottieRefCurrentProps>(null)
  const ref2 = useRef<LottieRefCurrentProps>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 'all' })

  useEffect(() => {
    if (isInView) {
      ref.current?.play()
      ref2.current?.play()
    }
  }, [isInView])

  return (
    <section className={styles['hiring']}>
      <Container>
        <div className={styles['hiring__content']}>
          <div ref={sectionRef} className={styles['hiring__content_left']}>
            <h2 className={'h1'}>HIRING VIDEO CREATORS IS HARD</h2>
            <Lottie
              className={styles['lottie']}
              animationData={lottie}
              autoplay={false}
              loop={false}
              lottieRef={ref}
            />
          </div>
          <ul className={styles['list']}>
            {listContent.map((item) => (
              <li key={item.id} className={styles['list__item']}>
                <p className={styles['list__item_text']}>{item.description}</p>
                {item.playOnce ? (
                  <Lottie
                    className={styles['list__item_lottie']}
                    animationData={item.src}
                    autoplay={false}
                    loop={false}
                    lottieRef={ref2}
                  />
                ) : (
                  <Lottie
                    className={styles['list__item_lottie']}
                    animationData={item.src}
                    autoplay={true}
                    loop={true}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default HiringSection
