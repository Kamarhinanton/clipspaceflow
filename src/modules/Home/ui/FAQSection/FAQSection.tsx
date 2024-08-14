import { useState } from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import Accordion from '@/modules/Home/ui/FAQSection/Accordion/Accordion'
import { accordionsDescription } from '@/modules/Home/ui/FAQSection/data/data'

import styles from './FAQSection.module.scss'

const FAQSection = () => {
  const [expanded, setExpanded] = useState<false | number>(0)

  return (
    <section className={styles['FAQSection']}>
      <Container>
        <div className={styles['FAQSection__content']}>
          <div className={styles['FAQSection__content_top']}>
            <h2 className={classNames('h1', styles['title'])}>
              GOT QUESTIONS?
            </h2>
          </div>
          <div className={styles['FAQSection__content_bottom']}>
            <ul className={styles['list']}>
              {accordionsDescription.map((item) => (
                <Accordion
                  i={item.id}
                  key={item.id}
                  description={item.description}
                  title={item.title}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FAQSection
