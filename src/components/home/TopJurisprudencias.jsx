"use client";

import React, { useState, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import decisoesData from "@/data/decisoes";


const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  color: #00264e;
  text-align: center;
  margin: 0 auto;
  user-select: none;

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

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; 
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  cursor: grab; 

  @media (max-width: 768px) {
    overflow-x: scroll; 
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
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
    width: 280px;
    height: 220px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 240px;
    height: 200px;
    padding: 10px;
  }
`;




const FakeCard = styled(Card)`
  background-color: transparent;
  border: none;
  box-shadow: none;
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 12px;
    -webkit-line-clamp: 4;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    -webkit-line-clamp: 3;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #00264e;
  font-size: 24px;
  cursor: pointer;

  &:disabled {
    color: #ccc;
    cursor: default;
  }

  &:hover:enabled {
    color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const PageIndicator = styled.span`
  font-size: 16px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: max-content;
  transform: ${({ $translateValue }) => `translateX(${$translateValue}px)`}; // Dinâmica, mas no CSS
`;


export default function TopJurisprudencias() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const displayedItems = decisoesData.slice(0, 10);

  const totalPages = Math.ceil(displayedItems.length / itemsPerPage);

  const translateValue = -currentPage * (350 * itemsPerPage + 40);

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX); 
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX; 
    const walk = (x - startX) * 1; 
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  return (
    <Container>
      <Title>Jurisprudências mais acessadas da semana</Title>
      <CarouselContainer>
        <CardContainer
          ref={containerRef}
          onMouseDown={startDrag}
          onMouseMove={onDrag}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={startDrag}
          onTouchMove={onDrag}
          onTouchEnd={endDrag}
        >
          <CardWrapper $translateValue={translateValue}>
            {displayedItems.map((item, index) => (
              <Link href={`/decisoes/${item.id}`} key={index} passHref>
                <Card>
                  <CardTitle>{item.descricaoClasse}</CardTitle>
                  <Category>{item.nomeOrgaoJulgador}</Category>
                  <Description>{item.ementa}</Description>
                </Card>
              </Link>
            ))}
            <FakeCard />
          </CardWrapper>
        </CardContainer>
      </CarouselContainer>
      <Navigation>
        <NavButton onClick={handlePrevPage} disabled={currentPage === 0}>
          <FaChevronLeft />
        </NavButton>
        <NavButton onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
          <FaChevronRight />
        </NavButton>
        <PageIndicator>
          {currentPage + 1} / {totalPages}
        </PageIndicator>
      </Navigation>
    </Container>
  );
}
