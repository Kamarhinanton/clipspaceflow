import React from 'react'
import Container from '@/app/layouts/Container'
import classNames from 'classnames'

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
          <div
            className={classNames(
              styles['demo__content_square'],
              'colored-gradient-border',
            )}
          ></div>
        </div>
      </Container>
    </section>
  )
}

export default Demo
