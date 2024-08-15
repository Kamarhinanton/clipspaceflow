import React from 'react'
import { useRouter } from 'next/router'
import routes from '@/utils/routes'

import styles from './ArrowButton.module.scss'

const ArrowButton = () => {
  const router = useRouter()

  return (
    <button
      className={styles['arrowButton']}
      onClick={() => router.push(routes.public.index)}
    />
  )
}

export default ArrowButton
