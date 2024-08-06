import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import classNames from 'classnames'

import styles from './PrimaryButton.module.scss'

type ButtonPrimaryVariants = 'light' | 'dark'
type ButtonPrimarySizes = 'small' | 'large'

type ButtonPrimaryProps = {
  className?: string
  variant?: ButtonPrimaryVariants
  size?: ButtonPrimarySizes
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const PrimaryButton: FC<ButtonPrimaryProps> = ({
  children,
  variant = 'light',
  size = 'small',
  className,
  ...buttonProps
}) => {
  const mods = {
    [styles[variant]]: true,
    [styles[size]]: true,
  }

  return (
    <button
      className={classNames(styles['primaryButton'], className, mods)}
      {...buttonProps}
    >
      <span>{children}</span>
      {variant === 'dark' && (
        <span className={styles['primaryButton__cloneText']}>{children}</span>
      )}
    </button>
  )
}

export default PrimaryButton
