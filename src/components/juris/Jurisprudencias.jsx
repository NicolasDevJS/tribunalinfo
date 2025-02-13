"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import decisoesData from "@/data/decisoes";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  gap: 20px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const DecisaoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  overflow: hidden;
  position: relative;
  min-height: 600px;
  max-height: 850px;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  @media (max-width: 780px) {
    max-height: 400px;
  }
`;

const Titulo = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #191970; 
`;

const Categoria = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #555;
`;

const Descricao = styled.p`
  font-size: 1rem;
  color: #777;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Data = styled.p`
  font-size: 0.9rem;
  color: #999;

  align-self: flex-end;
`;

const Jurisprudencias = ({ filters = {} }) => {
  const {
    searchQuery = "",
    sessoes = "Todas as Sessões",
    tipos = "Todos os julgados",
    tribunais = "Todos",
    datas = "Todo o Período",
  } = filters;

  const matchSearchQuery = (decisao, searchQuery) => {
    const query = String(searchQuery).toLowerCase();
    return (
      decisao.descricaoClasse?.toLowerCase().includes(query) ||
      decisao.ementa?.toLowerCase().includes(query)
    );
  };

  const matchSessoes = (decisao, sessoes) => {
    if (sessoes === "Todas as Sessões") return true;
    return decisao.termosAuxiliares
      ?.toLowerCase()
      .includes(sessoes.toLowerCase());
  };

  const matchTipos = (decisao, tipos) => {
    if (tipos === "Todos os julgados") return true;
    return decisao.tipoDeDecisao?.toLowerCase() === tipos.toLowerCase();
  };

  const matchTribunais = (decisao, tribunais) => {
    if (tribunais === "Todos") return true;
    return decisao.nomeOrgaoJulgador
      ?.toLowerCase()
      .includes(tribunais.toLowerCase());
  };

  const matchDatas = (decisao, datas) => {
    if (datas === "Todo o Período") return true;

    const hoje = new Date();
    const dataMatch = decisao.dataPublicacao.match(/\d{2}\/\d{2}\/\d{4}/);
    if (!dataMatch) return false;
    const dataPublicacao = new Date(
      dataMatch[0].split("/").reverse().join("-")
    );

    if (datas === "Último mês") {
      const umMesAtras = new Date();
      umMesAtras.setMonth(hoje.getMonth() - 1);
      return dataPublicacao >= umMesAtras;
    }

    if (datas === "Último ano") {
      const umAnoAtras = new Date();
      umAnoAtras.setFullYear(hoje.getFullYear() - 1);
      return dataPublicacao >= umAnoAtras;
    }

    if (datas.startsWith("Últimos")) {
      const anos = parseInt(datas.match(/\d+/)[0], 10);
      const anosAtras = new Date();
      anosAtras.setFullYear(hoje.getFullYear() - anos);
      return dataPublicacao >= anosAtras;
    }

    return true;
  };

  const filteredDecisoes = decisoesData.filter(
    (decisao) =>
      matchSearchQuery(decisao, searchQuery) &&
      matchSessoes(decisao, sessoes) &&
      matchTipos(decisao, tipos) &&
      matchTribunais(decisao, tribunais) &&
      matchDatas(decisao, datas)
  );

  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  const handleFilterChange = (filterKey, selectedValue) => {
    console.log(`Filter changed: ${filterKey} -> ${selectedValue}`);
  };

  return (
    <Container>
      <Search onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <Grid>
        {filteredDecisoes.map((decisao) => (
          <DecisaoCard key={decisao.id}>
            <Link
              href={`/jurisprudencia/pesquisa/${decisao.id}`}
              legacyBehavior
            >
              <a>
                <Titulo>{decisao.descricaoClasse}</Titulo>
                <Categoria>Tipo de Decisão: {decisao.tipoDeDecisao}</Categoria>
                <Descricao>{decisao.ementa}</Descricao>
                <Data>
                  Data de Publicação: {decisao.dataPublicacao.split("DATA:")[1]}
                </Data>
              </a>
            </Link>
          </DecisaoCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Jurisprudencias;
