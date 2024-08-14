import React, { FC } from 'react'
import classNames from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'

import styles from './Accordion.module.scss'

type AccordionType = {
  i: number
  expanded: boolean | number
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>
  description?: string
  title?: string
}

const Accordion: FC<AccordionType> = ({
  i,
  expanded,
  setExpanded,
  title,
  description,
}) => {
  const isOpen = i === expanded

  return (
    <li className={styles['item']}>
      <h3
        className={classNames(styles['item__title'], {
          [styles['active']]: isOpen,
        })}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {title}
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={i}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0, transition: { delay: 0.1 } },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={styles['item__dropdownMenu']}
          >
            <motion.div
              style={{ overflow: 'hidden' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              exit={{ opacity: 0 }}
            >
              <div className={styles['item__dropdownMenu_description']}>
                <p className={styles['text']}>{description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default Accordion
