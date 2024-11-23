"use client";

import { useState } from "react";
import styled from "styled-components";
import { MdSearch, MdVisibility } from "react-icons/md";

const SearchContainer = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const SearchTitle = styled.h2`
  font-size: 1.8rem;
  color: #191970;
  margin-bottom: 20px;
  text-align: center;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  padding: 15px 50px 15px 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 1rem;
  height: 50px;
  outline: none;

  &:focus {
    border-color: #191970;
  }
`;

const SearchIcon = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #191970;
  font-size: 24px;

  &:hover {
    color: #626263;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: 0;
`;

const CardContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Card = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f9f9f9;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background: ${({ selected }) => (selected ? "#191970" : "#e6e6fa")};
    transform: scale(1.05);
  }

  h4 {
    margin: 0 0 10px;
    font-size: 1.2rem;
    color: #191970;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: #333;
  }

  button {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    background: #191970;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
      background: #000080;
    }

    svg {
      font-size: 1.2rem;
    }
  }
`;

const BenefitsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const BenefitBox = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: #191970;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
  }
`;

export default function ProcessSearch() {
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);

  const validateCpf = (cpf) => {
    const cleanedCpf = cpf.replace(/\D/g, "");
    if (cleanedCpf.length !== 11) return false;
    return /^[0-9]{11}$/.test(cleanedCpf);
  };

  const handleSearch = () => {
    if (!validateCpf(cpf)) {
      setError("Por favor, insira um CPF válido com 11 dígitos.");
      return;
    }
    setError("");

    setResults([
      {
        id: 1,
        number: "014XXXX-08.2009.8.26.0001",
        parties: "Mateus Henrique Gomes x Carlos Cardoso Gomes",
        court: "TJSP · Foro Regional I - Santana da Comarca de São Paulo, SP",
      },
      {
        id: 2,
        number: "015XXXX-05.2015.8.26.0002",
        parties: "Ana Luiza Silva x João Almeida",
        court: "TJSP · Foro Regional II - Pinheiros da Comarca de São Paulo, SP",
      },
    ]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <SearchContainer>
        <SearchTitle>Busca de Processos Rápido e Simples</SearchTitle>
        <SearchWrapper>
          <SearchInput
            type="text"
            placeholder="Digite o CPF (apenas números)..."
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SearchIcon onClick={handleSearch}>
            <MdSearch />
          </SearchIcon>
        </SearchWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <CardContainer>
          {results.map((result) => (
            <Card key={result.id}>
              <h4>Processo nº {result.number}</h4>
              <p>{result.parties}</p>
              <p>{result.court}</p>
              <button>
                <MdVisibility />
                Ver Processo
              </button>
            </Card>
          ))}
        </CardContainer>
      </SearchContainer>
      <BenefitsContainer>
        <BenefitBox>
          <h3>Pesquisa Rápida</h3>
          <p>Encontre processos com eficiência, utilizando nosso sistema otimizado.</p>
        </BenefitBox>
        <BenefitBox>
          <h3>Informações Precisas</h3>
          <p>Garantimos a precisão e atualização constante dos dados processuais.</p>
        </BenefitBox>
        <BenefitBox>
          <h3>Assine Agora</h3>
          <p>
            Torne-se um assinante e aproveite benefícios exclusivos, como acesso ilimitado.
          </p>
        </BenefitBox>
      </BenefitsContainer>
    </>
  );
}
