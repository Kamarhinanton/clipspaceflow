import React, { FC } from 'react'
import { socialLinks } from '@/components/Footer/ui/SocialLinks/data'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './SocialLinks.module.scss'

type SocialLinksType = {
  className?: string
}

const SocialLinks: FC<SocialLinksType> = ({ className }) => {
  return (
    <nav className={classNames(styles['logos'], className)}>
      {socialLinks.map((link) => (
        <Link className={styles['logos__link']} key={link.id} href={link.href}>
          {link.imageSrc}
        </Link>
      ))}
    </nav>
  )
}

export default SocialLinks
