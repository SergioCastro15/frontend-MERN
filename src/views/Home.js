import React, { useState, useEffect, useCallback } from 'react'
import BoxInfo from '../components/BoxInfo';
import ButtonApp from '../components/ButtonApp';
import Title from '../components/Title';
import StandarModal from '../components/StandarModal';
import EditMovieModal from '../components/StepsModal/EditMovieModal';
import DeleteMovieModal from '../components/StepsModal/DeleteMovieModal';
import { getMovies } from '../api';
import { navigate } from "@reach/router"

const getCurrentModalStepComponent = {
  deleteMovieModal: DeleteMovieModal,
  editMovieModal: EditMovieModal,
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [didRequest, setDidRequest] = useState(true);
  const [modalStep, setModalStep] = useState("");
  const [currentId, setCurrentId] = useState(0);
  const [titleModal, setTitleModal] = useState("");

  const CurrentModalStep = getCurrentModalStepComponent[modalStep];

  useEffect(() => {
    const getMoviesFromApi = async () => {
      try{
        const allMovies = await getMovies();
        setMovies(allMovies);
      } catch(error) {
        console.log(error);
      }
    };
    if(didRequest) {
      getMoviesFromApi();
      setDidRequest(false);
    };
  }, [didRequest]);

  const goToAddNewView = useCallback(() => {
      navigate("/add-movie");
    },[]
  );

  const openModalDelete = useCallback(({ name, id }) => {
      setCurrentId(id);
      setTitleModal(name);
      setModal(true);
      setModalStep("deleteMovieModal");
    },
    [setCurrentId, setTitleModal, setModal, setModalStep],
  );

  const openModalEdit = useCallback(({ name, id }) => {
      setCurrentId(id);
      setTitleModal(name);
      setModal(true);
      setModalStep("editMovieModal");
    },
    [setCurrentId, setTitleModal, setModal, setModalStep]
  );

  const closeModal = useCallback(() => {
      setModal(false)
    },
    [setModal],
  );

  return (
    <>
      <Title />
      <ButtonApp
        typeOfButton="outline-secondary"
        isBlock={true}
        handleAction={goToAddNewView}
      >
        Add new
      </ButtonApp>
      {movies.map(({name, classification, duration, gender, studio, _id }) => (
        <BoxInfo
          key={_id}
          name={name}
          classification={classification}
          duration={duration}
          gender={gender}
          studio={studio}
          openModalDelete={openModalDelete}
          openModalEdit={openModalEdit}
          id={_id}
        />
      ))}
      <StandarModal isOpen={modal} setModal={setModal} title={titleModal}>
        <CurrentModalStep id={currentId} closeModal={closeModal} setDidRequest={setDidRequest}/>
      </StandarModal>
    </>
  );
};

export default Home;