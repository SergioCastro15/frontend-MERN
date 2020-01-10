import React from 'react';
import ButtonApp from '../ButtonApp';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.css";

const BoxInfo = ({
  name,
  classification,
  duration,
  gender,
  studio,
  id,
  openModalDelete,
  openModalEdit
}) => {
  return(
    <Container className="container-fix">
      <Card className="space-top-card remove-padding-left-container">
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Container>
            <Card.Title>{studio}</Card.Title>
            <Card.Text>Classification: {classification}</Card.Text>
            <Card.Text> Gender: {gender}</Card.Text>
            <Card.Text> Duration: {duration}</Card.Text>
          </Container>
          <Row>
            <Col xs={1}>
              <ButtonApp handleAction={() => openModalDelete({name, id})} typeOfButton="outline-danger">Delete</ButtonApp>
            </Col>
            <Col xs={1}>
              <ButtonApp handleAction={() => openModalEdit({name, id})} typeOfButton="outline-success">Edit</ButtonApp>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BoxInfo;