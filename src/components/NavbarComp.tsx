import React from 'react';
import {Link, NavLink, Router} from 'react-router-dom';
import { LinkContainer} from 'react-router-bootstrap';

import { Container, Navbar, Nav, NavbarCollapse, Form, Button } from 'react-bootstrap';

function NavbarComp() {
  return (
    <div>
      {/*Navbar é o container do navbar
      Nav é o container dos bottons
      NavbarCollapse é o container dos links
      Navbar.Brand é o container do logo
      Nav.Link é o container dos links
      Nav.Link é o container dos bottons */}
      <Navbar className='bg-primary text-light expand-sm mt-1 d-flex fw-bold' data-bs-theme='dark'>
        <Container className='' fluid>
          <Navbar.Brand href='#home' className=''>
          <img src='https://upload.wikimedia.org/wikipedia/commons/8/83/Blogger_Shiny_Icon.svg' width='50' alt='logo'/>
          BlogDevDan
          </Navbar.Brand>

          {/*Nav é os buttoen de navbar*/}
          <Nav className=''>
            <Form className="d-flex me-5">
              <Form.Control
              type="search" placeholder="Search" className="me-2" aria-label="Search"/>
              <Button variant="success">Search</Button>
            </Form>

            <NavbarCollapse className='justify-content-end' id='navbarContent'>
              
              
                <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
              

              <Nav.Link href='#profile'>Profile</Nav.Link>
            
              <Nav.Link href='#config'>
              Configurations
              </Nav.Link>
            </NavbarCollapse>
          </Nav>
        </Container>
        

      </Navbar>
    </div>
  );
}

export default NavbarComp;