import React, { ReactNode } from 'react'
import { LayoutWrapper } from './styles'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
    </>
  )
}

export { Layout }
