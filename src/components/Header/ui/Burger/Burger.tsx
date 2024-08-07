import { FC, memo } from 'react'
import classNames from 'classnames'
import { LazyMotion, m, domAnimation } from 'framer-motion'

import styles from './Burger.module.scss'

type BurgerProps = {
  toggleMenu: () => void
  opened: boolean
}

const topLineVariants = {
  open: {
    rotate: 45,
    top: '50%',
    translateY: '-50%',
    transition: {
      top: { duration: 0.2 },
      translateY: { duration: 0.2 },
      rotate: { delay: 0.2, duration: 0.2 },
    },
  },
  closed: {
    rotate: 0,
    top: '0%',
    translateY: '0%',
    transition: {
      top: { delay: 0.2, duration: 0.2 },
      translateY: { duration: 0.2 },
      rotate: { duration: 0.2 },
    },
  },
}

const middleLineVariants = {
  open: {
    rotate: -45,
    transition: {
      rotate: { delay: 0.2, duration: 0.2 },
    },
  },
  closed: {
    rotate: 0,
    translateY: '-50%',
    transition: {
      rotate: { duration: 0.2 },
      translateY: { duration: 0.2 },
    },
  },
}

const bottomLineVariants = {
  open: {
    opacity: 0,
    bottom: '50%',
    translateY: '50%',
    transition: {
      bottom: { duration: 0.2 },
      translateY: { duration: 0.2 },
      opacity: { delay: 0.2, duration: 0 },
    },
  },
  closed: {
    opacity: 1,
    bottom: '0%',
    translateY: '0%',
    transition: {
      opacity: { delay: 0.2, duration: 0 },
      bottom: { delay: 0.2, duration: 0.2 },
      translateY: { delay: 0.2, duration: 0.2 },
    },
  },
}

const Burger: FC<BurgerProps> = ({ toggleMenu, opened }) => {
  const mods = {
    [styles.opened]: opened,
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={classNames(styles['burger'], mods)}
        onClick={toggleMenu}
        initial={false}
        animate={opened ? 'open' : 'closed'}
      >
        <m.span
          className={styles['burger__line']}
          variants={topLineVariants}
        ></m.span>
        <m.span
          className={styles['burger__line']}
          variants={middleLineVariants}
        ></m.span>
        <m.span
          className={styles['burger__line']}
          variants={bottomLineVariants}
        ></m.span>
      </m.div>
    </LazyMotion>
  )
}

export default memo(Burger)
