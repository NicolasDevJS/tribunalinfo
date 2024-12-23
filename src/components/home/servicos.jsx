"use client";

import React from "react";
import styled from "styled-components";
import { FaCalculator, FaFileAlt, FaBalanceScale } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const ServiceItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 350px;
  background: #fbfbfc;
  border: 1px solid #00000039;
  border-radius: 8px;
  padding: 30px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 95%;
    height: 250px;
    padding: 15px;
  }

  @media (min-width: 768px) {
    width: 260px;
    height: 300px;
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: #191970;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  color: #0a2540;
  margin: 10px 0 5px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: #555;
  text-align: center;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const LearnMore = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: #191970;
  cursor: pointer;
  text-decoration: underline;

  svg {
    margin-left: 5px;
    font-size: 0.9rem;
  }

  &:hover {
    color: #005bb5;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default function Servicos() {
  const servicesData = [
    {
      icon: <FaFileAlt />,
      title: "Gerador de Petições Trabalhistas",
      description:
        "Simplifique a criação de petições trabalhistas com um gerador prático e intuitivo, desenvolvido para atender às necessidades específicas de advogados e profissionais do direito.",
      link: "/modelo",
    },
    {
      icon: <FaCalculator />,
      title: "Cálculos Jurídicos",
      description:
        "Obtenha cálculos detalhados e precisos para fundamentar decisões jurídicas complexas, com suporte a índices atualizados e regras claras.",
      link: "/painel-de-calculos",
    },
    {
      icon: <FaBalanceScale />,
      title: "Consulta de Jurisprudências",
      description:
        "Explore um amplo banco de jurisprudências para fortalecer seus argumentos jurídicos, com pesquisa rápida e filtros avançados.",
      link: "/jurisprudencia",
    },
    {
      icon: <MdSearch />,
      title: "Consulta de Processos",
      description:
        "Acompanhe processos judiciais em tempo real, com informações detalhadas e atualizações frequentes para manter-se sempre informado.",
      link: "/pesquisajuridica",
    },
  ];

  return (
    <ServicesContainer>
      {servicesData.map((service, index) => (
        <Link key={index} href={service.link} passHref legacyBehavior>
          <ServiceItem>
            <IconWrapper>{service.icon}</IconWrapper>
            <Title>{service.title}</Title>
            <Description>{service.description}</Description>
            <LearnMore>
              Saber Mais <FiArrowRight />
            </LearnMore>
          </ServiceItem>
        </Link>
      ))}
    </ServicesContainer>
  );
}
