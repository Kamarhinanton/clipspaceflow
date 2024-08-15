import React from 'react'
import Container from '@/app/layouts/Container'
import Link from 'next/link'
import classNames from 'classnames'
import Column from '@/components/Footer/ui/Column/Column'
import SocialLinks from '@/components/Footer/ui/SocialLinks/SocialLinks'
import { legalLinks, teamLinks } from '@/components/Footer/ui/Column/data'
import IconButton from '@/ui/IconButton/IconButton'
import IconX from '../../../../public/icons/social/x.svg'
import IconAI from '../../../../public/icons/social/ai.svg'
import routes from '@/utils/routes'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <Container>
        <div className={styles['footer__content']}>
          <div className={styles['social']}>
            <Link
              href={routes.public.index}
              className={classNames('h2', styles['social__title'])}
            >
              CLIPSPACE CO. 2024
            </Link>
            <Link
              target="_blank"
              href={'mailto:hello@clipspace.co'}
              className={styles['social__link']}
            >
              hello@clipspace.co
            </Link>
            <SocialLinks className={styles['social__logos']} />
          </div>
          <div className={styles['columns']}>
            <Column links={teamLinks} title={'TEAM'} />
            <Column links={legalLinks} title={'LEGAL'} />
          </div>
          <div className={styles['join']}>
            <IconButton
              title={'Follow us on X'}
              href={'https://x.com/HelloClipspace'}
              targetBlank
            >
              <IconX />
            </IconButton>
            <IconButton title={'Join our Beta'} href={'/'}>
              <IconAI />
            </IconButton>
            <p className={styles['join__text']}>
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
