import React from 'react'
import Container from '@/app/layouts/Container'
import EnterButton from '../../ui/EnterButton'
import PrimaryButon from '@/ui/PrimaryButon'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <EnterButton />
          <PrimaryButon>Next</PrimaryButon>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
