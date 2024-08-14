import React, { FC } from 'react'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import styles from './MobileSubmenu.module.scss'
import Navigation, {
  NavigationType,
} from '@/components/Header/ui/Navigation/Navigation'

const headerVariants = {
  initial: {
    y: '-55rem',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: '-55rem',
    opacity: 0,
  },
  transition: { duration: 0.4 },
}

const MobileSubmenu: FC<NavigationType> = ({ setOpened }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div className={styles['mobileSubmenu']} {...headerVariants}>
        <Navigation setOpened={setOpened} />
      </m.div>
    </LazyMotion>
  )
}

export default MobileSubmenu
