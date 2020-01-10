import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { deleteMovie } from '../../../api';

const DeleteMovieModal = ({ id, closeModal, setDidRequest }) => {
  const deleteMovieAction = async () => {
    try {
      await deleteMovie(id);
      setDidRequest(true);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Modal.Body>Are you sure of delete this movie ? </Modal.Body>
      <Modal.Footer className="modal-footer-fix">
        <Row>
          <Col>
            <Button onClick={closeModal} variant="outline-secondary">
              Cancel
            </Button>
          </Col>

          <Col>
            <Button onClick={deleteMovieAction} variant="outline-danger">
              Delete
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </>
  );
};

export default DeleteMovieModal;