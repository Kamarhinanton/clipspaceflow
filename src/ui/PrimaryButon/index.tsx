import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { PopupButton } from '@typeform/embed-react'

import styles from './PrimaryButton.module.scss'

type ButtonPrimaryVariants = 'light' | 'dark'
type ButtonPrimarySizes = 'small' | 'large'

type ButtonPrimaryProps = {
  className?: string
  variant?: ButtonPrimaryVariants
  size?: ButtonPrimarySizes
  children: ReactNode
  id: string
}

const PrimaryButton: FC<ButtonPrimaryProps> = ({
  children,
  variant = 'light',
  size = 'small',
  className,
  id = 'b2YpsCGe',
}) => {
  const mods = {
    [styles[variant]]: true,
    [styles[size]]: true,
  }

  return (
    <PopupButton
      className={classNames(styles['primaryButton'], className, mods)}
      id={id}
    >
      <span>{children}</span>
      {variant === 'dark' && (
        <span className={styles['primaryButton__cloneText']}>{children}</span>
      )}
    </PopupButton>
  )
}

export default PrimaryButton
