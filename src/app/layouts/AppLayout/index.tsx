import { FC, ReactNode } from 'react'
// import Footer from '@/components/Footer'
import Header from '@/components/Header/ui/Header'

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={'root'} />
      {children}
      {/*<Footer />*/}
    </>
  )
}

export default AppLayout
