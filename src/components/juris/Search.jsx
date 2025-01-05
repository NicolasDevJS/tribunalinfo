"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const SearchContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
`;

const SearchTitle = styled.h2`
  color: #191970;
  font-size: 60px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  padding: 15px;
  padding-right: 50px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 1rem;
  height: 60px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const SearchIcon = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #191970;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
    right: 0px;
    top: 55%;
  }
`;

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const FilterButton = styled.button`
  background-color: ${(props) => (props.$selected ? "#191970" : "white")};
  color: ${(props) => (props.$selected ? "white" : "#191970")};
  border: 2px solid #191970;
  padding: 15px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #191970;
    color: white;
  }

  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(25, 25, 112, 0.2);
    transform: scale(0);
    border-radius: 50%;
    transition: transform 0.5s;
  }

  &:active::after {
    transform: scale(3);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 0;
  display: ${(props) => (props.$open ? "block" : "none")};
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 10px 15px;
  font-size: 14px;
  color: ${(props) => (props.$selected ? "#191970" : "#333")};
  font-weight: ${(props) => (props.$selected ? "bold" : "normal")};
  cursor: pointer;
  text-align: center;
  background: ${(props) => (props.$selected ? "#f0f4ff" : "transparent")};
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #f8f9fa;
    color: #191970;
  }
`;

const allOptions = {
  sessoes: [
    { id: 1, label: "Todas as Sessões" },
    { id: 2, label: "Artigos e Notícias" },
    { id: 3, label: "Jurisprudência" },
    { id: 4, label: "Diários Oficiais" },
    { id: 5, label: "Peças Processuais" },
    { id: 6, label: "Modelos" },
    { id: 7, label: "Legislação" },
    { id: 8, label: "Consulta Processual" },
    { id: 9, label: "Doutrina" },
  ],
  tipos: [
    { id: 1, label: "Todos os julgados" },
    { id: 2, label: "Súmulas" },
    { id: 3, label: "Acórdãos" },
    { id: 4, label: "Decisões" },
    { id: 5, label: "Sentenças" },
    { id: 6, label: "Despachos" },
    { id: 7, label: "Decisões" },
    { id: 8, label: "Orientações Jurisprudenciais" },
  ],
  tribunais: [
    { id: 1, label: "Todos" },
    { id: 2, label: "SP" },
    { id: 3, label: "DF" },
  ],
  datas: [
    { id: 1, label: "Todo o Período" },
    { id: 2, label: "Último mês" },
    { id: 3, label: "Último ano" },
  ],
};

export default function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownState, setDropdownState] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    sessoes: "Todas as Sessões",
    tipos: "Todos os julgados",
    tribunais: "Todos",
    datas: "Todo o Período",
  });

  const toggleDropdown = (filter) => {
    setDropdownState((prevState) => (prevState === filter ? null : filter));
  };

  const handleSelection = (filter, option) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filter]: option.label,
    }));
    setDropdownState(null);
  };

  const handleSearch = (value) => {
    const filters = {
      searchQuery: value || searchQuery,
      ...selectedFilters,
    };
    onSearch(filters);
  };

  useEffect(() => {
    handleSearch();
  }, [selectedFilters, searchQuery]);

  return (
    <SearchContainer>
      <SearchTitle>Pesquisa completa</SearchTitle>
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Pesquise sua jurisprudência"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIcon onClick={() => handleSearch()}>
          <MdSearch />
        </SearchIcon>
      </SearchWrapper>
      <FilterContainer>
        {Object.entries(allOptions).map(([key, options]) => (
          <div key={key} style={{ position: "relative" }}>
            <FilterButton
              $selected={dropdownState === key}
              onClick={() => toggleDropdown(key)}
            >
              {selectedFilters[key]} <IoIosArrowDown />
            </FilterButton>
            <DropdownMenu $open={dropdownState === key}>
              {options.map((option) => (
                <DropdownItem
                  key={option.id}
                  $selected={selectedFilters[key] === option.label}
                  onClick={() => handleSelection(key, option)}
                >
                  {option.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </div>
        ))}
      </FilterContainer>
    </SearchContainer>
  );
}
