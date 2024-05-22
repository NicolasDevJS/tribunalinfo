import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import decisoesData from '@/data/decisoes';

const Container = styled.div`
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const DecisaoCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
  cursor: pointer;
`;

const Titulo = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1.2rem;
`;

const Descricao = styled.p`
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

const truncate = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

const Juris = ({ filtro }) => {
  const [decisoes, setDecisoes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setDecisoes(decisoesData);
  }, []);

  const decisoesFiltradas = decisoes.filter((decisao) => {
    const lowerCaseFiltro = filtro.toLowerCase();
    return (
      decisao.titulo.toLowerCase().includes(lowerCaseFiltro) ||
      decisao.descricao.toLowerCase().includes(lowerCaseFiltro) ||
      decisao.categoria.toLowerCase().includes(lowerCaseFiltro) ||
      decisao.data.includes(lowerCaseFiltro)
    );
  });

  const handleDecisaoClick = (decisao) => {
    const storedDecisions = JSON.parse(localStorage.getItem('recentDecisions')) || [];
    const updatedRecentDecisions = [...storedDecisions.filter(d => d.id !== decisao.id), decisao];
    localStorage.setItem('recentDecisions', JSON.stringify(updatedRecentDecisions));
    router.push(`/decisoes/${decisao.id}`);
  };

  return (
    <Container>
      <Grid>
        {decisoesFiltradas.map((decisao) => (
          <DecisaoCard key={decisao.id} onClick={() => handleDecisaoClick(decisao)}>
            <Titulo>{decisao.titulo}</Titulo>
            <Categoria>Categoria: {decisao.categoria}</Categoria>
            <Descricao>{truncate(decisao.descricao, 50)}</Descricao>
            <Data>Data: {decisao.data}</Data>
          </DecisaoCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Juris;
