import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

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
          <Navbar.Brand href='#home'>Amrita Alumni Portal</Navbar.Brand>
          <Nav className='me-auto'>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href='#blogs'>Blogs</Nav.Link>
            <Nav.Link href='#chat'>Messenger</Nav.Link>
            <Nav.Link href='#gallary'>Gallary</Nav.Link>
            <Nav.Link href='#more'>More..</Nav.Link>
          </Nav>
          <Navbar.Collapse className='justify-content-end'>
            <Nav.Link href='/signup'>REGISTER</Nav.Link>
            <Nav.Link href='/signin'>LOGIN</Nav.Link>
          </Navbar.Collapse>
          {/* <Navbar.Collapse className="justify-content-end">
      <Nav.Link href="#home">LOGOUT</Nav.Link>
    </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  )
}

export default withRouter(Menu)
