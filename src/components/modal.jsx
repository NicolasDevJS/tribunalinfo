import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90vw; 
  height: 90vh; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto; 
`;


const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalContent = styled.div`
  p {
    margin: 10px 0;
  }
`;

const Modal = ({ decisao, onClose }) => {
  return (
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{decisao.titulo}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalContent>
          <p><strong>Categoria:</strong> {decisao.categoria}</p>
          <p><strong>Descrição:</strong> {decisao.descricao}</p>
          <p><strong>Data:</strong> {decisao.data}</p>
        </ModalContent>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
