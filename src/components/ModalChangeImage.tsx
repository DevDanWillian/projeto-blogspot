import { read } from 'fs';
import React, {useState, useRef} from 'react'

import { Modal, Button, Form, Image} from 'react-bootstrap'

import profileImage from './Profile'

interface ModalChangeImageProps {
  showModalImage: boolean;
  handleModalImage: () => void;
  handleCloseModalImage: () => void;
  handleModalImageChange: () => void;
  
}

const ModalChangeImage = ({ showModalImage, handleModalImage, handleCloseModalImage }: ModalChangeImageProps) => {
  const inputProfilePic = useRef<HTMLInputElement>(null)

const [image,setImage]= useState('')
const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const fileProfilePic = event.target.files?.[0]
  
  if (fileProfilePic) {const reader = new FileReader();
    reader.readAsDataURL(fileProfilePic);
    reader.onload = () => { setImage(reader.result as string);
}}}

//create a const that makes button with id='savePhoto' change profileImage in Profile.tsx

  return (
    <div>

      <Button onClick={handleModalImage} variant='primary' className='mb-3' data-bs-toggle="modal" data-bs-target='changeImage'>
         Change Image
      </Button>

      <Modal show={showModalImage} id='changeImage' size='lg' centered={true} keyboard={false} onHide={handleCloseModalImage} className='border border-primary-subtle border-5 rounded-5'>

        <Modal.Header closeButton>
          <Modal.Title>Change Your Profile Pic</Modal.Title>
        </Modal.Header>

        <Modal.Body className='justify-content-center text-center'>

        <Image src="https://th.bing.com/th/id/OIP.07oHujH3TSqW-GYqt_-TaQHaFj?pid=ImgDet&rs=1" alt="profilePic" min-width={25} className='m-3' roundedCircle fluid />

        {image ? (
  <Image
    src={URL.createObjectURL(new Blob([image], { type: "image/" }))}
    alt="profilePic"
    min-width={25}
    className="m-3"
    roundedCircle
    fluid
  />
) : (
  <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSmhttps://th.bing.com/th/id/OIP.07oHujH3TSqW-GYqt_-TaQHaFj?pid=ImgDet&rs=1"
    alt="profilePic"
    min-width={25}
    className="m-3"
    roundedCircle
    fluid
  />
)}

          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Change You Profile Pic.</Form.Label>
            <Form.Control  id='inputProfilePic' name='inputProfilePic' className='mb-3' placeholder='Choose your profile pic.' as='input' onChange={handleProfileImageChange} type='file' accept='image/*' ref={inputProfilePic}/>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalImage}>
            Close
          </Button>
          <Button variant="primary" id='savePhoto' onClick={handleCloseModalImage}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalChangeImage