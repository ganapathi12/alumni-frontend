import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer bg-dark mt-auto py-3 fixed-bottom'>
      <div className='container'>
        <span className='text-muted'>
          Net Centric Programming {'  '}
          <span className='text-white'>Alumni Portal CSE A</span>
        </span>
      </div>
    </footer>
  )
}

export default withRouter(Footer)
