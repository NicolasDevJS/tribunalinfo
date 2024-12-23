"use client";

import React from "react";
import styled from "styled-components";

const ApresentacaoContainer = styled.div`
  width: 100%;
  background-color: #191970;
  color: white;
  padding: 40px;
  min-height: 200px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 450px) {
    margin: 100px 0 20px;
    padding: 30px;
    min-height: 150px;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  text-align: left;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: left;
`;

const Assinaturas = () => {
  return (
    <ApresentacaoContainer>
      <Title>Escolha o Plano Ideal para Potencializar Sua Advocacia</Title>
      <Description>
        Descubra a plataforma completa para advogados! Nossos serviços incluem geração de
        petições trabalhistas, cálculos jurídicos precisos, consultas rápidas de processos
        e jurisprudências, além de diversas ferramentas que tornam sua rotina mais
        produtiva e eficiente. Tudo em um só lugar!
      </Description>
    </ApresentacaoContainer>
  );
};

export default Assinaturas;
