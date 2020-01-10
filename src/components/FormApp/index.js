import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import "./index.css";

const FormApp = ({
  onHandleClick,
  initialValueName= "",
  initialValueClassification= "",
  initialValueDuration= "",
  initialValueGender= "",
  initialValueStudio= "",
  isEdit = false,
}) => {
  const [name, setName] = useState(initialValueName);
  const [classification, setClassification] = useState(initialValueClassification);
  const [duration, setDuration] = useState(initialValueDuration);
  const [gender, setGender] = useState(initialValueGender);
  const [studio, setStudio] = useState(initialValueStudio);

  const validateButton = (name === '' || classification === '' || duration === '' || gender === '' || studio === '');

  return(
    <Container>
      <Form onSubmit={(e) => {
        e.preventDefault();
        onHandleClick({
          name,
          classification,
          duration,
          gender,
          studio
        });
      }}>
        <Row>
          <Col>
            <Form.Label>Movie name</Form.Label>
            <Form.Control
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Movie Name"
            />
          </Col>
          <Col>
            <Form.Label>Classification movie</Form.Label>
            <Form.Control
              value={classification}
              onChange={e => setClassification(e.target.value)}
              placeholder="Classifitcation"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label>Duration</Form.Label>
            <Form.Control
              value={duration}
              onChange={e => setDuration(e.target.value)}
              placeholder="Duration"
            />
          </Col>
          <Col>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              value={gender}
              onChange={e => setGender(e.target.value)}
              placeholder="Gender"
            />
          </Col>
          <Col>
            <Form.Label>Studio</Form.Label>
            <Form.Control
              value={studio}
              onChange={e => setStudio(e.target.value)}
              placeholder="Studio"
            />
          </Col>
        </Row>

        <Button disabled={validateButton} className="submit-button" variant="outline-primary" type="submit" block>
          { isEdit ? "Edit Movie" : "Save Movie"}
        </Button>

      </Form>
    </Container>
  )
};

export default FormApp;