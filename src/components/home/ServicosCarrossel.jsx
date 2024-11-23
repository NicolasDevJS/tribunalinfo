"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #e0e0e04b;
  color: #191970;
  text-align: center;
  margin: 0 auto;
  user-select: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    animation: none; /* Desativa o movimento automático no mobile */
    overflow-x: scroll; /* Habilita o scroll horizontal */
    scroll-snap-type: x mandatory; /* Para scroll suave */
    gap: 10px; /* Espaçamento entre os cartões */
  }
`;

const Card = styled.div`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  margin: 0 10px;
  padding: 20px;
  text-align: left;
  color: #191970;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 300px; /* Ajusta a largura do cartão no mobile */
    height: 180px;
    scroll-snap-align: center; /* Alinha no centro ao rolar */
  }

  @media (max-width: 480px) {
    width: 260px; /* Largura menor em telas pequenas */
    height: 160px;
    padding: 15px;
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export default function ServicosCarrossel() {
  const servicosData = [
    {
      titulo: "Cálculos Jurídicos",
      avaliacao: "Os cálculos são extremamente precisos e confiáveis. Já resolvi vários casos complexos com a ajuda dessa ferramenta.",
      advogado: "Dr. Rafael Monteiro",
    },
    {
      titulo: "Cálculos de Dívidas",
      avaliacao: "Consegui negociar dívidas de clientes com confiança graças aos relatórios detalhados fornecidos.",
      advogado: "Dra. Paula Vasconcelos",
    },
    {
      titulo: "Revisão de FGTS",
      avaliacao: "A revisão de FGTS me ajudou a recuperar valores importantes para meus clientes. Uma funcionalidade indispensável!",
      advogado: "Dr. Henrique Souza",
    },
    {
      titulo: "Cálculo de Pensão",
      avaliacao: "Excelente para cálculos claros e precisos de pensões alimentícias. Evita erros e facilita o processo.",
      advogado: "Dra. Camila Almeida",
    },
    {
      titulo: "Cálculo de Financiamento",
      avaliacao: "A ferramenta é prática e rápida. Me ajudou a revisar contratos de financiamento com taxas transparentes.",
      advogado: "Dr. Lucas Barros",
    },
    {
      titulo: "Banco de Jurisprudências",
      avaliacao: "O banco de jurisprudências é completo e atualizado. A pesquisa é rápida e os resultados são sempre relevantes.",
      advogado: "Dra. Ana Clara Mendes",
    },
    {
      titulo: "Documentos Jurídicos",
      avaliacao: "Ótima plataforma para revisar documentos importantes. Economia de tempo e alta precisão!",
      advogado: "Dr. João Pereira",
    },
    {
      titulo: "Consultas de Processos",
      avaliacao: "A consulta de processos é ágil e eficiente. Acompanhar prazos ficou muito mais fácil.",
      advogado: "Dra. Mariana Ribeiro",
    },
    {
      titulo: "Gerador de Petições",
      avaliacao: "O gerador de petições é uma solução prática e rápida, reduzindo significativamente o tempo de elaboração.",
      advogado: "Dr. Eduardo Castro",
    },
    {
      titulo: "Cálculo de Rescisões",
      avaliacao: "O cálculo de rescisões é muito preciso e confiável. Me ajudou a proteger os direitos dos meus clientes.",
      advogado: "Dra. Letícia Santos",
    },
  ];

  const servicosDuplicados = [...servicosData, ...servicosData];

  return (
    <Link href="/login" passHref>
      <Container>
      <Title>Advogados recomendam: Assine já e aproveite todos os nossos produtos aprovados por especialistas!</Title>

        <CarouselContainer>
          {servicosDuplicados.map((servico, index) => (
            <Card key={index}>
              <CardTitle>{servico.titulo}</CardTitle>
              <Description>{servico.avaliacao}</Description>
              <Description>{servico.advogado}</Description>
            </Card>
          ))}
        </CarouselContainer>
      </Container>
    </Link>
  );
}