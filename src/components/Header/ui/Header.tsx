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
import { LazyMotion, m, domAnimation } from 'framer-motion'

const Burger = dynamic(() => import('@/components/Header/ui/Burger/Burger'), {
  ssr: false,
})

import styles from './Header.module.scss'

const Header = () => {
  const { width } = useWindowDimensions()

  const headerVariants =
    width <= breakpointMob
      ? {
          initial: {
            y: '55rem',
            opacity: 0,
            transition: { duration: 0.4 },
          },
          opened: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4 },
          },
        }
      : {
          initial: {
            y: 0,
            opacity: 1,
          },
          opened: {
            y: 0,
            opacity: 1,
          },
        }

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
          <LazyMotion features={domAnimation}>
            <m.div
              className={styles['header__content_submenu']}
              variants={headerVariants}
              animate={opened ? 'opened' : 'initial'}
            >
              <Navigation />
              <div className={styles['buttons']}>
                <PrimaryButton className={styles['btn']} variant={'dark'}>
                  Join as video creator
                </PrimaryButton>
                <PrimaryButton>Hire video creators</PrimaryButton>
              </div>
            </m.div>
          </LazyMotion>
          {width <= breakpointMob && (
            <Burger opened={opened} toggleMenu={toggleMenu} />
          )}
        </div>
      </Container>
    </header>
  )
}

export default Header
