"use client";

import React from "react";
import styled from "styled-components";
import data from "@/data/CalculosData";

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
  margin-bottom: 20px;
  text-align: left;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: white;
  margin: 20px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.375rem 0.75rem;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  color: #0a2540;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;

  &:hover {
    background: #e6e6fa;
  }

  &.orange {
    color: #d2691e;
  }

  &.red {
    color: #b22222;
  }

  &.green {
    color: #228b22;
  }

  &.blue {
    color: #0000cd;
  }

  &.black {
    color: black;
  }
`;

const Section = styled.div`
  margin-top: 50px;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #0a2540;
  margin-bottom: 20px;
  border-left: 4px solid #0a2540;
  padding-left: 10px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #e6e6fa;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #0a2540;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #555555;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const CardButton = styled.button`
  padding: 10px 20px;
  background: #191970;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #005bb5;
  }
`;

export default function Apresentacao() {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ApresentacaoContainer>
        <Title>Ferramentas Grátis de Cálculos Jurídicos</Title>
        <Description>
          Calculadoras e ferramentas grátis para multiplicar sua produtividade na advocacia. 
          Calcule rapidamente online quantas vezes quiser. Use as ferramentas o quanto precisar!
        </Description>
        <Divider />
        <ButtonGroup>
          <Button className="blue" onClick={() => handleScroll("previdenciarias")}>
            Calculadoras Previdenciárias
          </Button>
          <Button className="orange" onClick={() => handleScroll("bancarias")}>
            Calculadoras Bancárias
          </Button>
          <Button className="red" onClick={() => handleScroll("trabalhistas")}>
            Calculadoras Trabalhistas
          </Button>
          <Button className="green" onClick={() => handleScroll("correcaoMonetaria")}>
            Correção Monetária
          </Button>
          <Button className="black" onClick={() => handleScroll("documentos")}>
            Geradores de Documentos
          </Button>
          <Button className="blue" onClick={() => handleScroll("utilidades")}>
            Utilidades para Advogados
          </Button>
        </ButtonGroup>
      </ApresentacaoContainer>

      {Object.entries(data).map(([key, section]) => (
        <Section id={key} key={key}>
          <SectionTitle>{section.title}</SectionTitle>
          <CardGrid>
            {section.cards.map((card, index) => (
              <Card key={index}>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                <CardButton>{card.buttonText}</CardButton>
              </Card>
            ))}
          </CardGrid>
        </Section>
      ))}
    </>
  );
}
