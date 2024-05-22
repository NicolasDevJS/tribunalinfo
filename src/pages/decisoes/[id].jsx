import { useRouter } from 'next/router';
import decisoesData from '@/data/decisoes';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Titulo = styled.h1`
  margin-bottom: 20px;
`;

const Categoria = styled.span`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Descricao = styled.p`
  margin-bottom: 20px;
`;

const Data = styled.span`
  display: block;
  color: #777;
`;

const Decisao = () => {
  const router = useRouter();
  const { id } = router.query;

  const decisao = decisoesData.find((decisao) => decisao.id === parseInt(id, 10));

  if (!decisao) {
    return <p>Decisão não encontrada</p>;
  }

  return (
    <Container>
      <Titulo>{decisao.titulo}</Titulo>
      <Categoria>Categoria: {decisao.categoria}</Categoria>
      <Descricao>{decisao.descricao}</Descricao>
      <Data>Data: {decisao.data}</Data>
    </Container>
  );
};

export default Decisao;

