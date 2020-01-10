import React, { useState, useEffect } from 'react';
import FormApp from '../../FormApp';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getMovie, editMovie } from '../../../api';

const EditMovieModal = ({ id, closeModal, setDidRequest }) => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovieFromApi = async () => {
      try {
        const infoMovie = await getMovie(id);
        setMovie(infoMovie);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieFromApi();
  }, []);

  const editMovieSelected = async ({ name, classification, duration, gender, studio }) => {
    const infoForm = {
      movie: {
        name,
        classification,
        duration,
        gender,
        studio
      },
      id,
    }
    try {
      await editMovie(infoForm);
      closeModal();
      setDidRequest(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (Object.entries(movie).length === 0) {
    return null;
  };

  return(
    <>
    <Modal.Body>
       <FormApp
        initialValueName={movie.name}
        initialValueClassification={movie.classification}
        initialValueDuration={movie.duration}
        initialValueGender={movie.gender}
        initialValueStudio={movie.studio}
        onHandleClick={editMovieSelected}
        isEdit={true}
      />
    </Modal.Body>
      <Modal.Footer className="modal-footer-fix">
        <Button onClick={closeModal} variant="outline-danger" block>
          Cancel
        </Button>
      </Modal.Footer>
    </>
  );
};

export default EditMovieModal;