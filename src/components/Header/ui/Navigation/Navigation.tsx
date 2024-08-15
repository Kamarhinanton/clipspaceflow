import React, { FC } from 'react'
import Link from 'next/link'
import { headerNavigationLinks } from '@/components/Header/ui/Navigation/data'
import classNames from 'classnames'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import { PopupButton } from '@typeform/embed-react'

import styles from './Navigation.module.scss'

export type NavigationType = {
  setOpened?: (opened: boolean) => void
}

const Navigation: FC<NavigationType> = ({ setOpened }) => {
  const { width } = useWindowDimensions()
  const handleItemClick = (itemId: number) => {
    const paragraphId = `paragraph-${itemId}`
    const paragraphElement = document.getElementById(paragraphId)

    if (paragraphElement) {
      paragraphElement.scrollIntoView({ behavior: 'smooth' })
    }

    if (width <= breakpointMob && setOpened) {
      setOpened(false)
    }
  }

  return (
    <nav className={styles['navigation']}>
      {headerNavigationLinks.map((link) =>
        link.typeformId ? (
          <PopupButton
            id={link.typeformId}
            className={classNames(
              styles['navigation__link'],
              !link.desktop && [styles['desktopHidden']],
            )}
            key={link.id}
          >
            {link.description}
          </PopupButton>
        ) : (
          link.href && (
            <Link
              className={classNames(
                styles['navigation__link'],
                !link.desktop && [styles['desktopHidden']],
              )}
              onClick={() => handleItemClick(link.id)}
              key={link.id}
              href={link.href}
            >
              {link.description}
            </Link>
          )
        ),
      )}
    </nav>
  )
}

export default Navigation
