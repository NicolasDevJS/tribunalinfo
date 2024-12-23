"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPrint } from "react-icons/fa";
import decisoesData from "../../../../data/decisoes";
import Header from "../../../../components/common/Header";
import jsPDF from "jspdf";

const Container = styled.div`
  padding: 20px;
  margin-top: 80px;
`;

const Titulo = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #191970;
`;

const Categoria = styled.span`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Descricao = styled.p`
  margin-bottom: 20px;
  font-size: 1rem;
  color: #444;
`;

const Data = styled.span`
  display: block;
  color: #777;
  margin-bottom: 10px;
`;

const DecisaoDetalhes = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;

  h3 {
    font-size: 1.5rem;
    color: #191970;
    margin-bottom: 15px;
    border-bottom: 2px solid #e2e2e2;
    padding-bottom: 5px;
  }

  p {
    font-size: 1rem;
    color: #333;
    margin-bottom: 10px;
    line-height: 1.5;

    strong {
      color: #191970;
      font-weight: 600;
    }
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 20px;
  background-color: #191970;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  padding: 15px 20px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000080;
  }

  svg {
    font-size: 1.2rem;
  }
`;

export default function PesquisaPage() {
  const [id, setId] = useState(null);
  const [decisao, setDecisao] = useState(null);

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const idFromUrl = currentUrl.split("/").pop();
    setId(idFromUrl);

    const matchedDecisao = decisoesData.find((item) => item.id === idFromUrl);
    setDecisao(matchedDecisao);
  }, []);

  const handleVoltar = () => {
    window.history.back();
  };

  const handlePrint = () => {
    const printContents = document.getElementById("decisao-content").innerHTML;
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
        <head>
          <title>Decisão</title>
        </head>
        <body>${printContents}</body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  const handlePDF = () => {
    const doc = new jsPDF();
    const content = document.getElementById("decisao-content").innerText;
    doc.text(content, 10, 10);
    doc.save("decisao.pdf");
  };

  if (!id) {
    return (
      <>
        <Header />
        <Container>
          <p>Carregando...</p>
        </Container>
      </>
    );
  }

  if (!decisao) {
    return (
      <>
        <Header />
        <Container>
          <p>Decisão não encontrada</p>
        </Container>
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <div id="decisao-content">
          <Titulo>{decisao.descricaoClasse}</Titulo>
          <Categoria>Tipo de Decisão: {decisao.tipoDeDecisao}</Categoria>
          <Descricao>{decisao.ementa}</Descricao>
          <Data>Data de Publicação: {decisao.dataPublicacao.split(" ").pop()}</Data>
          <DecisaoDetalhes>
            <h3>Detalhes da Decisão:</h3>
            <p>
              <strong>Número do Processo:</strong> {decisao.numeroProcesso}
            </p>
            <p>
              <strong>Número do Registro:</strong> {decisao.numeroRegistro}
            </p>
            <p>
              <strong>Órgão Julgador:</strong> {decisao.nomeOrgaoJulgador}
            </p>
            <p>
              <strong>Ministro Relator:</strong> {decisao.ministroRelator}
            </p>
            <p>
              <strong>Decisão:</strong> {decisao.decisao}
            </p>
          </DecisaoDetalhes>
        </div>
      </Container>
      <FloatingButton onClick={handlePrint}>
        <FaPrint /> Imprimir / PDF
      </FloatingButton>
    </>
  );
}
