import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import classNames from 'classnames'

import styles from './PrimaryButton.module.scss'

type ButtonPrimaryVariants = 'light' | 'dark'

type ButtonPrimaryProps = {
  className?: string
  variant?: ButtonPrimaryVariants
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const PrimaryButton: FC<ButtonPrimaryProps> = ({
  children,
  variant = 'light',
  className,
  ...buttonProps
}) => {
  const mods = {
    [styles[variant]]: true,
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
