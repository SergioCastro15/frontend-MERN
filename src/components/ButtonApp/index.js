import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import './index.css';

const ButtonApp = ({
  children,
  typeOfButton,
  isBlock,
  handleAction
}) => {
  return(
    <Container>
      <Button
        onClick={handleAction}
        className="styles-button"
        variant={typeOfButton}
        block={isBlock}
      >
        {children}
      </Button>
    </Container>
  );
};

export default ButtonApp;