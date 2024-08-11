import React from 'react'
import Container from '@/app/layouts/Container'
import PrimaryButon from '@/ui/PrimaryButon'

// import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <PrimaryButon variant={'dark'}>Join as video creator</PrimaryButon>
          <PrimaryButon>Join as video creator</PrimaryButon>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
