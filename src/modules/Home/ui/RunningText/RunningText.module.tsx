import React, { useRef } from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'
import { MotionValue, useScroll, useTransform, motion } from 'framer-motion'
import { PopupButton } from '@typeform/embed-react'

import styles from './RunningText.module.scss'

const RunningText = () => {
  const useParallax = (value: MotionValue<number>) => {
    return useTransform(value, [0, 1], [-300, 300])
  }

  const refTarget = useRef(null)
  const { scrollYProgress } = useScroll({
    target: refTarget,
    offset: ['start end', 'end start'],
  })
  const x = useParallax(scrollYProgress)

  return (
    <section className={styles['runningText']}>
      <Container>
        <motion.div
          style={{ x }}
          ref={refTarget}
          className={styles['runningText__content']}
        >
          <PopupButton
            id={'b2YpsCGe'}
            className={classNames(styles['text'], 'h1', 'decor-star')}
          >
            <span>JOIN OUR BETA</span>
          </PopupButton>
          <PopupButton
            id={'b2YpsCGe'}
            className={classNames(styles['text'], 'h1', 'decor-star')}
          >
            <span>JOIN OUR BETA</span>
          </PopupButton>
          <PopupButton
            id={'b2YpsCGe'}
            className={classNames(styles['text'], 'h1', 'decor-star')}
          >
            <span>JOIN OUR BETA</span>
          </PopupButton>
          <PopupButton
            id={'b2YpsCGe'}
            className={classNames(styles['text'], 'h1', 'decor-star')}
          >
            <span>JOIN OUR BETA</span>
          </PopupButton>
          <PopupButton
            id={'b2YpsCGe'}
            className={classNames(styles['text'], 'h1', 'decor-star')}
          >
            <span>JOIN OUR BETA</span>
          </PopupButton>
        </motion.div>
      </Container>
    </section>
  )
}

export default RunningText
