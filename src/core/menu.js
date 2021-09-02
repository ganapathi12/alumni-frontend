import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { signout, isAuthenticated } from '../auth/helper/index'

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#2ecc72' }
  } else {
    return { color: '#fff' }
  }
}

const Menu = ({ history }) => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Amrita Alumni Portal</Navbar.Brand>
          <Nav className='me-auto'>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href='#blogs'>Blogs</Nav.Link>
            <Nav.Link href='#chat'>chat</Nav.Link>
            <Nav.Link href='#gallary'>Gallary</Nav.Link>
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
              <Nav.Link href='/user/dashboard'>User Dashboard</Nav.Link>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 1 && (
              <Nav.Link href='/admin/dashboard'>Admin Dashboard</Nav.Link>
            )}
          </Nav>

          {!isAuthenticated() && (
            <Fragment>
              <Navbar.Collapse className='justify-content-end'>
                <Nav.Link style={currentTab(history, '/')} href='/signup'>
                  REGISTER
                </Nav.Link>
                <Nav.Link style={currentTab(history, '/')} href='/signin'>
                  LOGIN
                </Nav.Link>
              </Navbar.Collapse>
            </Fragment>
          )}

          {isAuthenticated() && (
            <Navbar.Collapse className='justify-content-end'>
              <Nav.Link
                onClick={() => {
                  signout(() => {
                    history.push('/')
                  })
                }}
              >
                LOGOUT
              </Nav.Link>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </>
  )
}

export default withRouter(Menu)
