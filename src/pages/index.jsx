import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Juris from '@/components/juris';
import RecentDecisions from '@/components/RecentDecisions';

const Container = styled.div`
  min-height: 100vh;
  padding: 80px 20px 20px 20px;
  background-color: white;
  margin-top: 20px;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background-image: linear-gradient(
    45deg,
    hsl(240deg 100% 26%) 0%,
    hsl(250deg 81% 25%) 10%,
    hsl(254deg 64% 22%) 20%,
    hsl(258deg 47% 19%) 30%,
    hsl(262deg 27% 16%) 40%,
    hsl(0deg 0% 13%) 50%,
    hsl(262deg 27% 16%) 60%,
    hsl(258deg 47% 19%) 70%,
    hsl(254deg 64% 22%) 80%,
    hsl(250deg 81% 25%) 90%,
    hsl(240deg 100% 26%) 100%
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 1000;
`;

const Title = styled.h1`
  color: #ffffff;
  margin: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Dropdown = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  background: #00b609;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 200px;

  &:hover {
    background: #00ff00;
  }
`;

export default function Home() {
  const [filtro, setFiltro] = useState('');
  const [categoria, setCategoria] = useState('');
  const router = useRouter();

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
    setFiltro(e.target.value);
  };

  const navigateToLogin = () => {
    router.push('/login');
  };

  return (
    <Container>
      <Head>
        <title>Tribunal Info</title>
      </Head>
      <Header>
        <Title>Tribunal Info</Title>
        <SearchContainer>
          <Dropdown value={categoria} onChange={handleCategoriaChange}>
            <option value="">Todos</option>
            <option value="Trabalhista">Trabalhista</option>
            <option value="Contratual">Contratual</option>
            <option value="Cível">Cível</option>
            <option value="Penal">Penal</option>
            <option value="Tributário">Tributário</option>
            <option value="Administrativo">Administrativo</option>
            <option value="Ambiental">Ambiental</option>
            <option value="Constitucional">Constitucional</option>
          </Dropdown>
          <SearchInput
            type="text"
            placeholder="Filtrar por categoria"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </SearchContainer>
        <LoginButton onClick={navigateToLogin}>Login</LoginButton>
      </Header>
      <h2>Recentes</h2>
      <RecentDecisions />
      <Juris filtro={filtro} />
    </Container>
  );
}

