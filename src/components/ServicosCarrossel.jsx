import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f8f8f8;
  color: #00264e;
  text-align: center;
  margin: 0 auto;
  user-select: none;
  position: relative;
  overflow: hidden;
  cursor: pointer; 
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  width: calc(400px * 14 + 120px); 
  animation: ${slide} 30s linear infinite;
`;

const Card = styled.div`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  margin: 0 10px;
  padding: 20px;
  text-align: left;
  color: #00264e;
  flex-shrink: 0;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #000;
`;

export default function ServicosCarrossel() {
  const servicosData = [
    {
      titulo: 'Cálculos Jurídicos',
      descricao: 'Realizamos cálculos precisos para apoiar decisões jurídicas complexas.',
    },
    {
      titulo: 'Cálculos de Dívidas',
      descricao: 'Entenda o valor real das suas dívidas e como melhor negociá-las.',
    },
    {
      titulo: 'Revisão de FGTS',
      descricao: 'Revisamos seu FGTS para garantir que todos os valores estão corretos.',
    },
    {
      titulo: 'Cálculo de Pensão',
      descricao: 'Auxiliamos no cálculo de pensão para garantir que todos os direitos sejam respeitados.',
    },
    {
      titulo: 'Cálculo de Financiamento',
      descricao: 'Analisamos as condições de financiamento para assegurar as melhores taxas.',
    },
    {
      titulo: 'Banco de Jurisprudências',
      descricao: 'Acesse um extenso banco de jurisprudências para fundamentar seu caso.',
    },
    {
      titulo: 'Documentos Jurídicos',
      descricao: 'Elaboramos e revisamos documentos jurídicos com precisão e cuidado.',
    },
  ];

  const servicosDuplicados = [...servicosData, ...servicosData];

  return (
    <Link href="/login" passHref>
      <Container>
        <Title>Assine já para ter acesso a todos os nossos produtos</Title>
        <CarouselContainer>
          {servicosDuplicados.map((servico, index) => (
            <Card key={index}>
              <CardTitle>{servico.titulo}</CardTitle>
              <Description>{servico.descricao}</Description>
            </Card>
          ))}
        </CarouselContainer>
      </Container>
    </Link>
  );
}
