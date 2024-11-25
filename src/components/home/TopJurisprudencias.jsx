"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import decisoesData from "@/data/decisoes";

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: #ffffff;
  color: #00264e;
  text-align: center;
  margin: 0 auto;
  user-select: none;

  @media (max-width: 768px) {
    padding: 10px 0;
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

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const CardWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: max-content;
  transform: ${({ $translateValue }) => `translateX(${$translateValue}px)`};
`;

const Card = styled.div`
  height: 240px;
  width: 350px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  color: #00264e;
  overflow: hidden;
  scroll-snap-align: center;

  @media (max-width: 768px) {
  
    height: 220px;
    padding: 15px;
  }

  @media (max-width: 480px) {

    height: 220px;
    padding: 10px;
    right: 40px;
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Category = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #000;
  overflow: auto;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;


const NavButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  svg {
    font-size: 32px; 
    color: #191970;
  }

  &:hover {
    transform: translateY(-50%) scale(1.2);
  }

  &:first-child {
    left: -10px;
  }

  &:last-child {
    right: -10px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

export default function TopJurisprudencias() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const cardWidth = 350;
  const displayedItems = decisoesData.slice(0, 10);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth;
      const newItemsToShow = Math.floor(containerWidth / (cardWidth + 20));
      setItemsToShow(newItemsToShow);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const translateValue = -(currentIndex * (cardWidth + 20));

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(displayedItems.length - itemsToShow);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex >= displayedItems.length - itemsToShow) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Container>
      <Title>Jurisprudências mais acessadas da semana</Title>
      <CarouselContainer>
        <NavButton onClick={handlePrev}>
          <FaChevronLeft />
        </NavButton>

        <CardWrapper $translateValue={translateValue}>
          {displayedItems.map((item, index) => (
            <Link href={`/jurisprudencia/pesquisa/${item.id}`} key={index} passHref>
              <Card>
                <CardTitle>{item.descricaoClasse}</CardTitle>
                <Category>{item.nomeOrgaoJulgador}</Category>
                <Description>{item.ementa}</Description>
              </Card>
            </Link>
          ))}
        </CardWrapper>

        <NavButton onClick={handleNext}>
          <FaChevronRight />
        </NavButton>
      </CarouselContainer>
    </Container>
  );
}