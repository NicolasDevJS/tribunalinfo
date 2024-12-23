"use client";

import React from "react";
import styled from "styled-components";
import { services } from "../../data/services";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  width: 80%;
  max-width: 600px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #888888;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 15px;
  padding-bottom: 10px;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #191970;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHeader = styled.th`
  border: 1px solid #cccccc;
  background: #f9f9f9;
  padding: 10px;
  text-align: left;
  font-weight: bold;
  color: #0a2540;
`;

const TableCell = styled.td`
  border: 1px solid #cccccc;
  padding: 10px;
  font-size: 0.9rem;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  background: #191970;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #005bb5;
  }
`;

const PlanDetailsModal = ({ planId, onClose }) => {
  const planServices = services.find((service) => service.id === planId);

  if (!planServices) {
    return null;
  }

  const handleSignUp = () => {
    alert(`Iniciando assinatura para o plano ${planServices.id.toUpperCase()}`);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalHeader>
          <ModalTitle>Detalhes do Plano: {planServices.id.toUpperCase()}</ModalTitle>
        </ModalHeader>

        <Table>
          <thead>
            <tr>
              <TableHeader>Serviço</TableHeader>
              <TableHeader>Detalhes</TableHeader>
            </tr>
          </thead>
          <tbody>
            {Object.entries(planServices.details).map(([serviceName, details], index) => (
              <tr key={index}>
                <TableCell>{serviceName}</TableCell>
                <TableCell>
                  {Array.isArray(details) ? (
                    <ul>
                      {details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    <span>{details}</span>
                  )}
                </TableCell>
              </tr>
            ))}
          </tbody>
        </Table>

        <ModalFooter>
          <ActionButton onClick={handleSignUp}>Assinar Agora</ActionButton>
        </ModalFooter>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default PlanDetailsModal;
