import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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
  font-size: 1.1rem;
  margin: 0 0 8px 0;
`;

const Categoria = styled.span`
  display: block;
  margin: 0 0 8px 0;
  font-weight: bold;
  color: #555;
`;

const truncate = (text, length) => {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

const capitalize = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

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
      {recentDecisions
        .filter(decisao => decisao.descricaoClasse && decisao.tipoDeDecisao) // Filtra decisões válidas
        .map((decisao) => (
          <DecisaoCard key={decisao.id} onClick={() => handleDecisaoClick(decisao)}>
            <Titulo>{truncate(capitalize(decisao.descricaoClasse), 30)}</Titulo>
            <Categoria>Tipo de Decisão: {decisao.tipoDeDecisao}</Categoria>
          </DecisaoCard>
        ))}
    </Container>
  );
};

export default RecentDecisions;
