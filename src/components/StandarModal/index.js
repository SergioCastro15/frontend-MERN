import React from 'react';
import Modal from 'react-bootstrap/Modal';

const StandarModal = ({ children, isOpen, setModal, title }) => {
  return(
    <Modal show={isOpen} centered animation >
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {children}
    </Modal>
  );
};

export default StandarModal;