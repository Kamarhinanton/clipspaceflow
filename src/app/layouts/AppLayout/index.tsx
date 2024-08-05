import { FC, ReactNode } from 'react'
import Footer from '@/components/Footer'

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
