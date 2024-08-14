import React, { FC, ReactNode } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './IconButton.module.scss'

type IconButtonType = {
  title: string
  children: ReactNode
  href: string
  className?: string
  targetBlank?: boolean
}

const IconButton: FC<IconButtonType> = ({
  title,
  href,
  children,
  className,
  targetBlank = false,
}) => {
  return (
    <Link
      target={targetBlank ? '_blank' : ''}
      className={classNames(styles['iconButton'], className)}
      href={href}
    >
      <div className={styles['iconButton__logo']}>{children}</div>
      {title}
    </Link>
  )
}

export default IconButton
