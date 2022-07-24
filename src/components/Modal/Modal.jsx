
import { useState } from 'react'
import CartForm from '../CartView/CartForm'
import { Modal, Button, ModalHeader, ModalBody,ModalFooter } from 'reactstrap'
import './Modal.css'

const FormModal = () => {
    const [modal, setModal] = useState(false)

    const showModal = () => {
        setModal(!modal)
    }
    return (
        <>
            <Button color="success" onClick={showModal}>Comfirmar compra</Button>
            <div>
                <Modal isOpen={modal}>
                    <ModalHeader>Modal title</ModalHeader>
                    <ModalBody>
                        <CartForm />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={showModal}>Volver</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default FormModal