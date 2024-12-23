"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaBriefcase, FaHardHat, FaShieldAlt, FaClock, FaExclamationTriangle, FaMoneyCheck } from "react-icons/fa";

const InformativoContainer = styled.div`
  padding: 40px 20px;
  margin-top: 80px;
  max-width: 1200px;
  margin: 80px auto 0;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #191970;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 40px;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Card = styled(Link)`
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 250px;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: #191970;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #191970;
`;

const Explanation = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  text-align: left;
  line-height: 1.6;
  color: #333;
`;

const ExplanationTitle = styled.h2`
  font-size: 1.5rem;
  color: #191970;
  margin-bottom: 10px;
`;

const ExplanationText = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Informativo = () => {
  const items = [
    { title: "Rescisão indireta por ofensas", icon: <FaBriefcase />, link: "/peticoes-trabalhistas/" },
    { title: "Acidente de trabalho típico", icon: <FaHardHat />, link: "/peticoes-trabalhistas/" },
    { title: "Adicional de insalubridade", icon: <FaShieldAlt />, link: "/peticoes-trabalhistas/" },
    { title: "Horas extras por sobrejornada", icon: <FaClock />, link: "/peticoes-trabalhistas/" },
    { title: "Adicional de periculosidade", icon: <FaExclamationTriangle />, link: "/peticoes-trabalhistas/" },
    { title: "Seguro desemprego", icon: <FaMoneyCheck />, link: "/peticoes-trabalhistas/" },
  ];

  return (
    <InformativoContainer>
      <Title>Petições Trabalhistas no Dejures</Title>
      <Description>
        No Dejures, oferecemos uma ampla gama de petições trabalhistas prontas,
        desenvolvidas para atender às suas necessidades jurídicas. Confira
        abaixo algumas das petições mais utilizadas:
      </Description>
      <CardGrid>
        {items.map((item, index) => (
          <Card href={item.link} key={index}>
            <CardIcon>{item.icon}</CardIcon>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        ))}
      </CardGrid>
      <Explanation>
        <ExplanationTitle>Como Funcionam as Petições Trabalhistas no Dejures?</ExplanationTitle>
        <ExplanationText>
          As petições trabalhistas disponibilizadas no Dejures são modelos cuidadosamente
          desenvolvidos para atender às demandas mais comuns na área trabalhista. Cada modelo
          foi estruturado com base nas melhores práticas jurídicas, oferecendo um ponto de partida
          sólido para advogados e profissionais do direito.
        </ExplanationText>
        <ExplanationText>
          Esses modelos são totalmente ajustáveis e podem ser personalizados de acordo com as
          especificidades de cada caso. Com o Dejures, você economiza tempo e garante qualidade
          na elaboração de documentos, sem comprometer a precisão e a adequação jurídica.
        </ExplanationText>
        <ExplanationText>
          Explore nossas opções e veja como o Dejures pode tornar sua rotina mais produtiva e eficiente.
        </ExplanationText>
      </Explanation>
    </InformativoContainer>
  );
};

export default Informativo;
