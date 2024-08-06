import React from 'react'
import Container from '@/app/layouts/Container'
import Link from 'next/link'
import Logo from '../../../../public/icons/logo.svg'
import Navigation from '@/components/Header/ui/Navigation/Navigation'
import routes from '@/utils/routes'
import PrimaryButton from '@/ui/PrimaryButon'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles['header']}>
      <Container>
        <div className={styles['header__content']}>
          <Link
            className={styles['header__content_logo']}
            href={routes.public.index}
          >
            <Logo />
          </Link>
          <div className={styles['header__content_submenu']}>
            <Navigation />
            <div className={styles['buttons']}>
              <PrimaryButton className={styles['btn']} variant={'dark'}>
                Join as video creator
              </PrimaryButton>
              <PrimaryButton>Hire video creators</PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
