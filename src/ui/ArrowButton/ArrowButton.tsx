import React from 'react'
import { useRouter } from 'next/router'

import styles from './ArrowButton.module.scss'

const ArrowButton = () => {
  const router = useRouter()

  return (
    <button className={styles['arrowButton']} onClick={() => router.back()} />
  )
}

export default ArrowButton
