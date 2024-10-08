import React, { useCallback, useState } from 'react'
import Container from '@/app/layouts/Container'
import Link from 'next/link'
import Logo from '../../../../public/icons/logo.svg'
import Navigation from '@/components/Header/ui/Navigation/Navigation'
import routes from '@/utils/routes'
import PrimaryButton from '@/ui/PrimaryButon'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import dynamic from 'next/dynamic'
import { breakpointMob } from '@/utils/variables'
import { AnimatePresence } from 'framer-motion'

const Burger = dynamic(() => import('@/components/Header/ui/Burger/Burger'), {
  ssr: false,
})

const MobileSubmenu = dynamic(
  () => import('@/components/Header/ui/MobileSubmenu/MobileSubmenu'),
  {
    ssr: false,
  },
)

import styles from './Header.module.scss'

const Header = () => {
  const { width } = useWindowDimensions()
  const [opened, setOpened] = useState(false)
  const toggleMenu = useCallback(() => {
    setOpened((prev) => !prev)
  }, [])

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
          <div className={styles['header__content_navigation']}>
            <Navigation />
            <div className={styles['buttons']}>
              <PrimaryButton
                id={'HvyeP6sN'}
                className={styles['btn']}
                variant={'dark'}
              >
                Join as video creator
              </PrimaryButton>
              <PrimaryButton id={'Y56992yH'}>Hire video creators</PrimaryButton>
            </div>
          </div>
          {width <= breakpointMob && (
            <>
              <AnimatePresence>
                {opened && <MobileSubmenu setOpened={setOpened} />}
              </AnimatePresence>
              <Burger opened={opened} toggleMenu={toggleMenu} />
            </>
          )}
        </div>
      </Container>
    </header>
  )
}

export default Header
