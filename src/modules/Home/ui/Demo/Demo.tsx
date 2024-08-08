import React from 'react'
import Container from '@/app/layouts/Container'

import styles from './Demo.module.scss'

const Demo = () => {
  return (
    <section className={styles['demo']}>
      <Container size={'large'}>
        <div className={styles['demo__content']}>
          <p className={styles['demo__content_text']}>
            One platform to hire and manage
            <br /> short-form video creators. Watch demo
          </p>
          <div className={styles['demo__content_square']}></div>
        </div>
      </Container>
    </section>
  )
}

export default Demo
