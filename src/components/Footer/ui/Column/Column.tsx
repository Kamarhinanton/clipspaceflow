import React, { FC } from 'react'
import Link from 'next/link'

import styles from './Column.module.scss'
import classNames from 'classnames'

type ColumnLinks = {
  id: number
  title?: string
  href: string
}

type ColumnFooterType = {
  title?: string
  links: ColumnLinks[]
  className?: string
}

const Column: FC<ColumnFooterType> = ({ links, title, className }) => {
  return (
    <div className={classNames(styles['column'], className)}>
      {title && (
        <h2 className={classNames('h2', styles['column__title'])}>{title}</h2>
      )}
      <nav className={styles['column__navigation']}>
        {links.map((link) => (
          <Link
            className={styles['column__navigation_link']}
            key={link.id}
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Column
