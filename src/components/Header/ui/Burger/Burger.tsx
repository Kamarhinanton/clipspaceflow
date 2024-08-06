import { FC, memo } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'

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
      top: { duration: 0.3 },
      translateY: { duration: 0.3 },
      rotate: { delay: 0.6, duration: 0.3 },
    },
  },
  closed: {
    rotate: 0,
    top: '0%',
    translateY: '0%',
    transition: {
      top: { delay: 0.6, duration: 0.3 },
      translateY: { duration: 0.3 },
      rotate: { duration: 0.3 },
    },
  },
}

const middleLineVariants = {
  open: {
    rotate: -45,
    transition: {
      rotate: { delay: 0.6, duration: 0.3 },
    },
  },
  closed: {
    rotate: 0,
    translateY: '-50%',
    transition: {
      rotate: { duration: 0.3 },
      translateY: { duration: 0.3 },
    },
  },
}

const bottomLineVariants = {
  open: {
    opacity: 0,
    bottom: '50%',
    translateY: '50%',
    transition: {
      bottom: { duration: 0.3 },
      translateY: { duration: 0.3 },
      opacity: { delay: 0.6, duration: 0 },
    },
  },
  closed: {
    opacity: 1,
    bottom: '0%',
    translateY: '0%',
    transition: {
      opacity: { delay: 0.6, duration: 0 },
      bottom: { delay: 0.6, duration: 0.3 },
      translateY: { delay: 0.6, duration: 0.3 },
    },
  },
}

const Burger: FC<BurgerProps> = ({ toggleMenu, opened }) => {
  const mods = {
    [styles.opened]: opened,
  }

  return (
    <motion.div
      className={classNames(styles['burger'], mods)}
      onClick={toggleMenu}
      initial={false}
      animate={opened ? 'open' : 'closed'}
    >
      <motion.span
        className={styles['burger__line']}
        variants={topLineVariants}
      ></motion.span>
      <motion.span
        className={styles['burger__line']}
        variants={middleLineVariants}
      ></motion.span>
      <motion.span
        className={styles['burger__line']}
        variants={bottomLineVariants}
      ></motion.span>
    </motion.div>
  )
}

export default memo(Burger)
