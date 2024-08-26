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
  color: blue;
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const truncate = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

const Juris = ({ filtro }) => {
  const [decisoes, setDecisoes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(21);
  const router = useRouter();

  useEffect(() => {
    setDecisoes(decisoesData);
  }, []);

  const decisoesFiltradas = decisoes
    .filter((decisao) => {
      const lowerCaseFiltro = filtro.toLowerCase();
      return (
        (decisao.descricaoClasse && decisao.descricaoClasse.toLowerCase().includes(lowerCaseFiltro)) ||
        (decisao.tipoDeDecisao && decisao.tipoDeDecisao.toLowerCase().includes(lowerCaseFiltro)) ||
        (decisao.ementa && decisao.ementa.toLowerCase().includes(lowerCaseFiltro)) ||
        (decisao.dataPublicacao && decisao.dataPublicacao.includes(lowerCaseFiltro))
      );
    })
    .sort((a, b) => {
      const dateA = new Date(a.dataPublicacao.split(' ').pop());
      const dateB = new Date(b.dataPublicacao.split(' ').pop());
      return dateB - dateA;
    }); 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = decisoesFiltradas.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(decisoesFiltradas.length / itemsPerPage);

  const handleDecisaoClick = (decisao) => {
    const storedDecisions = JSON.parse(localStorage.getItem('recentDecisions')) || [];
    const updatedRecentDecisions = [...storedDecisions.filter(d => d.id !== decisao.id), decisao];
    localStorage.setItem('recentDecisions', JSON.stringify(updatedRecentDecisions));
    router.push(`/decisoes/${decisao.id}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const generatePaginationButtons = () => {
    let buttons = [];
    if (totalPages <= 5) {
      buttons = Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      const startPage = Math.min(Math.max(currentPage - 2, 1), totalPages - 4);
      const endPage = startPage + 4;
      buttons = Array.from({ length: 5 }, (_, index) => startPage + index);

      if (endPage < totalPages) {
        buttons.push('...');
        buttons.push(totalPages);
      }

      if (startPage > 1) {
        buttons.unshift('...');
        buttons.unshift(1);
      }
    }
    return buttons;
  };

  return (
    <Container>
      <h1>Últimas Jurisprudências</h1>
      <Grid>
        {currentItems.map((decisao) => (
          <DecisaoCard key={decisao.id} onClick={() => handleDecisaoClick(decisao)}>
            <Titulo>{truncate(decisao.descricaoClasse, 30)}</Titulo>
            <Categoria>Tipo de Decisão: {decisao.tipoDeDecisao}</Categoria>
            <Descricao>{truncate(decisao.ementa, 100)}</Descricao>
            <Data>{decisao.dataPublicacao.split(' ').pop()}</Data>
          </DecisaoCard>
        ))}
      </Grid>
      <PaginationContainer>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </PaginationButton>
        {generatePaginationButtons().map((page, index) =>
          typeof page === 'number' ? (
            <PaginationButton
              key={index}
              onClick={() => handlePageChange(page)}
              disabled={currentPage === page}
            >
              {page}
            </PaginationButton>
          ) : (
            <span key={index} style={{ padding: '10px 20px', margin: '0 5px' }}>
              {page}
            </span>
          )
        )}
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próxima
        </PaginationButton>
      </PaginationContainer>
    </Container>
  );
};

export default Juris;
