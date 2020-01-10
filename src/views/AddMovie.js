import React, { useCallback } from 'react';
import FormApp from '../components/FormApp';
import { postMovie } from '../api';
import { navigate } from "@reach/router"

const AddMovie = () => {
  const addNewMovie = useCallback(
    async ({ name, classification, duration, gender, studio }) => {
      try {
        await postMovie({
          name,
          classification,
          duration,
          gender,
          studio
        });
        navigate('/');
      } catch(error) {
        console.log(error);
      };
    }, []
  );

  return (
    <FormApp onHandleClick={addNewMovie} />
  );
};

export default AddMovie;