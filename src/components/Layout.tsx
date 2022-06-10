import React from 'react';
import Nav from './Nav'
import Head from 'next/head'
import HeadInfo from './HeadInfo'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeadInfo />
      <Nav />
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout