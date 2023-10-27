import React, {useState, useRef} from 'react'

import { Modal, Button, Form,} from 'react-bootstrap'

interface ModalChangeImageProps {
  showModalImage: boolean;
  handleModalImage: () => void;
  handleCloseModalImage: () => void;
}

const ModalChangeImage = ({ showModalImage, handleModalImage, handleCloseModalImage }: ModalChangeImageProps) => {
  const inputProfilePic = useRef<HTMLInputElement>(null)

  
  return (
    <div>

      <Button onClick={handleModalImage} variant='primary' className='mb-3' data-bs-toggle="modal" data-bs-target='#changeImage'>
         Change Image
      </Button>

      <Modal show={showModalImage} id='changeImage' size='lg' centered={true} keyboard={false} onHide={handleCloseModalImage} className='border border-primary-subtle border-5 rounded-5'>

        <Modal.Header closeButton>
          <Modal.Title>Change Your Profile Pic</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Small file input example</Form.Label>
            <Form.Control  id='inputProfilePic' name='inputProfilePic' className='mb-3' placeholder='Choose your profile pic' as='input' onChange={handleModalImage} accept='image/*'/>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalImage}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModalImage}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalChangeImage