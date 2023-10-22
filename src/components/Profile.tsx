import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import FormImage from './ProfileComps/FormImage'

const Profile = () => {
  let user= 'dan'
  return (
    <div >
      <Container className='border border-primary-subtle border-5 rounded-5 mt-1 text-center col-sm-7'>
        <h1 className=' mt-4 fw-bold'>Bem Vindo {user}</h1>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSm08qLsKrgJRZGC1ulKQh9TAHHooYB2uHHxQwtwySrvcO5bbvuB2DIZ_Mr-T0lqHVp9w&usqp=CAU" alt="InstaPhoto" min-width={50} className='m-3' roundedCircle fluid/>
        <Button className='mb-3' data-bs-toggle="modal" data-bs-target='#changeImage'>
         Change Image
        </Button>
      </Container>
      
      <div className='mt-5'>
        <Container fluid>
        <Row >
          <Col className='border' xs={3}>
          <ol>
            <li>Posts</li>
            <li>Comentarios</li>
            <li>Configurações</li>
            <li>Sair</li>
          </ol>

          </Col>
          <Col className='border'>
            <ol>
              <li>Posts</li>
              <li>Comentarios</li>
              <li>Configurações</li>
              <li>Sair</li>

            </ol>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  )
}

export default Profile