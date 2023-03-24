import { ReactNode } from 'react'
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="">
        <MainHeader />
        <main>{children}</main>
        <MainFooter />
      </div>
    </>
  )
}

export default MainLayout
