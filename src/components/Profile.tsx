import React, {useState, useRef} from 'react'
import { Container, Row, Col, Button, Image, Modal, Form } from 'react-bootstrap'

import ModalChangeImage from './ModalChangeImage'

const Profile = () => {
  let userName= 'dan'

  const profileImage = useRef(null);

  const [showModalImage, setShowModalImage] = useState(false);

  const handleModalImage = () => {
    setShowModalImage(true);
  };

  const handleCloseModalImage = () => {
    setShowModalImage(false);
  };

  return (
    <div >
      <Container className='border border-primary-subtle border-5 rounded-5 mt-1 text-center col-sm-7 justify-content-center'>

        <h1 className=' mt-4 fw-bold'>Bem Vindo {userName}</h1>
        <Image role='button' src="https://th.bing.com/th/id/OIP.07oHujH3TSqW-GYqt_-TaQHaFj?pid=ImgDet&rs=1" alt="profilePic" min-width='75%' className='m-auto p-3 rounded-circle pointer' fluid onClick={handleModalImage} ref={profileImage}/> 

<ModalChangeImage showModalImage={showModalImage} handleModalImage={handleModalImage} handleCloseModalImage={handleCloseModalImage} handleModalImageChange={handleCloseModalImage} />

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