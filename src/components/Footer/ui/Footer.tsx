import React from 'react'
import Container from '@/app/layouts/Container'
import Link from 'next/link'
import classNames from 'classnames'
import Column from '@/components/Footer/ui/Column/Column'
import SocialLinks from '@/components/Footer/ui/SocialLinks/SocialLinks'
import { legalLinks, teamLinks } from '@/components/Footer/ui/Column/data'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <Container>
        <div className={styles['footer__content']}>
          <div className={styles['social']}>
            <h2 className={classNames('h2', styles['social__title'])}>
              CLIPSPACE CO. 2024
            </h2>
            <Link
              target="_blank"
              href={'mailto:hello@clipspace.co'}
              className={styles['social__link']}
            >
              hello@clipspace.co
            </Link>
            <SocialLinks />
          </div>
          <Column links={teamLinks} title={'TEAM'} />
          <Column links={legalLinks} title={'LEGAL'} />
          <div>
            <Link href={'/'}>Follow us on X</Link>
            <Link href={'/'}>Join our Beta</Link>
            <p>
              We are still fine tuning our product and would love to get your
              feedback.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
