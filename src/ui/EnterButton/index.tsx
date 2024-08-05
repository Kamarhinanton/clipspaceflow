import React from 'react'
import EnterIcon from '../../../public/icons/enter.svg'

import styles from './EnterButton.module.scss'

const EnterButton = () => {
  return (
    <div className={styles['button']}>
      <p>press enter</p>
      <div className={styles['button__icon']}>
        <EnterIcon />
      </div>
    </div>
  )
}

export default EnterButton
