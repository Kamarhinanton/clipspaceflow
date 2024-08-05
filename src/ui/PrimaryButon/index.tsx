import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import classNames from 'classnames'

import styles from './PrimaryButton.module.scss'

type ButtonPrimaryProps = {
  className?: string
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const PrimaryButton: FC<ButtonPrimaryProps> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={classNames(styles['primaryButton'], className)}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
