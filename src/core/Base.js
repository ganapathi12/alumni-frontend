import React from 'react'
import Footer from './Footer'
import Menu from './menu'

const Base = ({
  title = 'My title',
  description = 'My description',
  className = ' text-white p-4',
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className='container-fluid '>
        <div className={className}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Base
