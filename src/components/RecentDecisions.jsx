import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import decisoesData from '@/data/decisoes';

const Container = styled.div`
  padding: 10px;
  overflow-x: auto;
  white-space: nowrap;
  cursor: grab;
`;

const DecisaoCard = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-right: 10px;
  background-color: #f9f9f9;
  cursor: pointer;
  width: 200px; 
  white-space: normal;
`;

const Titulo = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 8px 0;
`;

const Categoria = styled.span`
  display: block;
  margin: 0 0 8px 0;
  font-weight: bold;
  color: #555;
`;

const Data = styled.span`
  display: block;
  margin: 0;
  color: #777;
`;

const RecentDecisions = () => {
  const [recentDecisions, setRecentDecisions] = useState([]);
  const router = useRouter();
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const storedDecisions = JSON.parse(localStorage.getItem('recentDecisions')) || [];
    setRecentDecisions(storedDecisions.slice(-10).reverse());
  }, []);

  const handleDecisaoClick = (decisao) => {
    const updatedRecentDecisions = [...recentDecisions.filter(d => d.id !== decisao.id), decisao];
    localStorage.setItem('recentDecisions', JSON.stringify(updatedRecentDecisions));
    router.push(`/decisoes/${decisao.id}`);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Container
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {recentDecisions.map((decisao) => (
        <DecisaoCard key={decisao.id} onClick={() => handleDecisaoClick(decisao)}>
          <Titulo>{decisao.titulo}</Titulo>
          <Categoria>Categoria: {decisao.categoria}</Categoria>
          <Data>Data: {decisao.data}</Data>
        </DecisaoCard>
      ))}
    </Container>
  );
};

export default RecentDecisions;
