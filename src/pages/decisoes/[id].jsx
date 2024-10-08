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

const DecisaoExpandida = styled.div`
  margin-bottom: 20px;
`;

const VoltarButton = styled.button`
  padding: 15px 35px;
  background: #ffffff;
  border: 1px solid #cccccc; 
  border-radius: 8px;
  color: #000000;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 2vw;
  font-weight: 500;
  font-size: 20px;

  &:hover {
    background: #e2e2e2;
    color: #000000;
    border: 1px solid #bbbbbb;
  }
`;

const Decisao = () => {
  const router = useRouter();
  const { id } = router.query;

  const decisao = decisoesData.find((decisao) => decisao.id === id);

  if (!decisao) {
    return <p>Decisão não encontrada</p>;
  }

  const handleVoltar = () => {
    router.push('/search');
  };

  return (
    <Container>
      <VoltarButton onClick={handleVoltar}>Voltar</VoltarButton>
      <Titulo>{decisao.descricaoClasse}</Titulo>
      <Categoria>Tipo de Decisão: {decisao.tipoDeDecisao}</Categoria>
      <Descricao>{decisao.ementa}</Descricao>
      <Data>Data de Publicação: {decisao.dataPublicacao.split(' ').pop()}</Data>
      <DecisaoExpandida>
        <h3>Detalhes da Decisão:</h3>
        <p><strong>Número do Processo:</strong> {decisao.numeroProcesso}</p>
        <p><strong>Número do Registro:</strong> {decisao.numeroRegistro}</p>
        <p><strong>Órgão Julgador:</strong> {decisao.nomeOrgaoJulgador}</p>
        <p><strong>Ministro Relator:</strong> {decisao.ministroRelator}</p>
        <p><strong>Decisão:</strong> {decisao.decisao}</p>
      </DecisaoExpandida>
    </Container>
  );
};

export default Decisao;
