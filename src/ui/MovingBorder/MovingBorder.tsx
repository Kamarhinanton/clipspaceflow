import React, { FC, ReactNode } from 'react'
import styles from './MovingBorder.module.scss'
import classNames from 'classnames'

type MovingBorderType = {
  children: ReactNode
  className?: string
}

const MovingBorder: FC<MovingBorderType> = ({ children, className }) => {
  return (
    <div className={classNames(styles['border'], className)}>
      <div className={styles['border__content']}>{children}</div>
    </div>
  )
}

export default MovingBorder
