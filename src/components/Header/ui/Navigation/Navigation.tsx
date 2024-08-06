import React from 'react'
import Link from 'next/link'
import { headerNavigationLinks } from '@/components/Header/ui/Navigation/data'

import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles['navigation']}>
      {headerNavigationLinks.map((link) => (
        <Link
          className={styles['navigation__link']}
          key={link.id}
          href={link.href}
        >
          {link.description}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
