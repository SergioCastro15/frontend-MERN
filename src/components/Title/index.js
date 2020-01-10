import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Title = () => {
  return(
    <Jumbotron fluid>
      <Container>
        <h1>Movie CRUD MERN Stack</h1>
        <p>
          Please add or search some movie :D thanks !!
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Title;