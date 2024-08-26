import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import decisoesData from '@/data/decisoes';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  color: #00264e;
  text-align: center;
  margin: 0 auto;
  user-select: none;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  cursor: grab;
`;

const CardWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.translateValue}px);
  width: max-content;
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
`;

const FakeCard = styled(Card)`
  background-color: transparent;
  border: none;
  box-shadow: none;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Category = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #666;
`;

const Description = styled.p`
  font-size: 14px;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
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
`;

const PageIndicator = styled.span`
  font-size: 16px;
  color: #666;
`;

export default function TopJurisprudencias() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  // Apenas 10 itens do array
  const displayedItems = decisoesData.slice(0, 10);

  const totalPages = Math.ceil(displayedItems.length / itemsPerPage);

  const translateValue = -currentPage * (350 * itemsPerPage + 40); // Corrigir o valor de tradução para 350px e margens

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
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = 'grabbing'; // Adiciona o cursor de movimento ao arrastar
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab'; // Restaura o cursor após o arraste
  };

  return (
    <Container>
      <Title>Top Juris</Title>
      <CarouselContainer>
        <CardContainer
          ref={containerRef}
          onMouseDown={startDrag}
          onMouseMove={onDrag}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
        >
          <CardWrapper translateValue={translateValue}>
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
