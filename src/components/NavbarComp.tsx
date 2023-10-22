import React from 'react';
import {Link, NavLink, Router, Route} from 'react-router-dom';

import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';

function NavbarComp() {
  return (
    <div className=''>
      {/*Navbar é o container do navbar
      Nav é o container dos bottons
      NavbarCollapse é o container dos links
      Navbar.Brand é o container do logo
      Nav.Link é o container dos links
      Nav.Link é o container dos bottons */}
      <Navbar className='bg-primary text-light expand-sm d-flex fw-bold d-flex' data-bs-theme='dark' expand='md'>
        <Container className='' fluid>

          
            <Navbar.Brand as={NavLink} to={'/'} className='fs-3'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/83/Blogger_Shiny_Icon.svg' width='50' alt='logo' className='d-inline-block align-middle'/>
            BlogDevDan
            </Navbar.Brand>
          

            <Container className='d-flex justify-content-center' >
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2 bg-light" aria-label="Search"/>
                <Button className='me-2' variant="success">Search</Button>
              </Form>
              
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
              
                        <Nav className=" my-2 my-lg-0 me-auto" navbarScroll >
                        <Nav.Link className='ms-5' as={NavLink} to={'/profile'} >Profile</Nav.Link>
                        <Nav.Link as={NavLink} to={'/posts'} >Posts</Nav.Link>
                        <Nav.Link as={NavLink} to={'/config'} >Configuration</Nav.Link>
            


          </Nav>
          </Navbar.Collapse></Container>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;