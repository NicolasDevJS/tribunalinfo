"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const SearchContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const SearchTitle = styled.h2`
  color: #191970;
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 20px;
  overflow: hidden;
  position: relative; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f9f9f9;
  border-right: 1px solid #ccc;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ccc;
  }
`;

const SwitchButton = styled.button`
  flex: 1;
  padding: 15px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  outline: none;
  background: ${({ selected }) => (selected ? "#191970" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#191970")};
  transition: all 0.3s ease;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: center;

  @media (max-width: 768px) {
    width: 50%;
    height: auto;
  }

  &:hover {
    background: ${({ selected }) => (selected ? "#191970" : "#e6e6fa")};
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 15px 50px 15px 15px; 
  border: none;
  font-size: 1rem;
  height: 60px;
  outline: none;

  @media (max-width: 768px) {
    height: 50px;
    font-size: 0.9rem;
  }
`;

const SearchIcon = styled.button`
  position: absolute;
  right: 15px; 
  top: 55%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #191970;
  font-size: 24px;

  &:hover {
    color: #626263;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    top: 80%;
  }
`;

export default function SearchSection() {
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("jurisprudencia"); // Estado inicial
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim() !== "") {
      const route =
        selectedOption === "jurisprudencia"
          ? "/jurisprudencia"
          : "/pesquisajuridica";
      router.push(`${route}?query=${encodeURIComponent(search)}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSwitch = (option) => {
    setSelectedOption(option);
  };

  const getTitle = () =>
    selectedOption === "jurisprudencia"
      ? "Pesquisa completa de jurisprudência"
      : "Pesquisa completa de processo";

  return (
    <SearchContainer>
      <SearchTitle>{getTitle()}</SearchTitle>
      <SearchWrapper>
        <SwitchContainer>
          <SwitchButton
            selected={selectedOption === "jurisprudencia"}
            onClick={() => handleSwitch("jurisprudencia")}
          >
            Jurisprudência
          </SwitchButton>
          <SwitchButton
            selected={selectedOption === "pesquisajuridica"}
            onClick={() => handleSwitch("pesquisajuridica")}
          >
            Pesquisa Jurídica
          </SwitchButton>
        </SwitchContainer>
        <SearchInput
          type="text"
          placeholder="Digite sua pesquisa..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <SearchIcon onClick={handleSearch}>
          <MdSearch />
        </SearchIcon>
      </SearchWrapper>
    </SearchContainer>
  );
}
