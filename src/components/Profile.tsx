import React, {useState, useRef} from 'react'
import { Container, Row, Col, Button, Image, Modal, Form } from 'react-bootstrap'

import ModalChangeImage from './ModalChangeImage'

const Profile = () => {
  let userName= 'dan'

  const [showModalImage, setShowModalImage] = useState(false);

  const handleModalImage = () => {
    setShowModalImage(true);
  };

  const handleCloseModalImage = () => {
    setShowModalImage(false);
  };

  return (
    <div >
      <Container className='border border-primary-subtle border-5 rounded-5 mt-1 text-center col-sm-7'>

        <h1 className=' mt-4 fw-bold'>Bem Vindo {userName}</h1>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSm08qLsKrgJRZGC1ulKQh9TAHHooYB2uHHxQwtwySrvcO5bbvuB2DIZ_Mr-T0lqHVp9w&usqp=CAU" alt="profilePic" min-width={50} className='m-3' roundedCircle fluid onClick={handleModalImage}/>

<ModalChangeImage showModalImage={showModalImage} handleModalImage={handleModalImage} handleCloseModalImage={handleCloseModalImage} />

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