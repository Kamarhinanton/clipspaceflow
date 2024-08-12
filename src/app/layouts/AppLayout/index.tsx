import { FC, ReactNode } from 'react'
import Header from '@/components/Header/ui/Header'
import { Footer } from '@/components/Footer'

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={'root'} />
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
