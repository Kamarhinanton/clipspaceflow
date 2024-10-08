import React from 'react'
import Container from '@/app/layouts/Container'
import MovingBorder from '@/ui/MovingBorder/MovingBorder'

import styles from './Demo.module.scss'

const Demo = () => {
  return (
    <section id={'paragraph-2'} className={styles['demo']}>
      <Container size={'large'}>
        <div className={styles['demo__content']}>
          <p className={styles['demo__content_text']}>
            One platform to hire and manage short-form video creators. Watch
            demo
          </p>
          <MovingBorder className={styles['square']}>
            <div></div>
          </MovingBorder>
        </div>
      </Container>
    </section>
  )
}

export default Demo
