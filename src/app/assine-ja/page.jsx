"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import FooterR from "../../components/common/FooterR";
import Loader from "../../components/common/Loader";
import Assinaturas from "../../components/planosBeneficios/Assinaturas";
import Pricing from "../../components/planosBeneficios/Planos";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1; /* Faz o conteúdo ocupar o espaço restante entre o header e o footer */
`;

export default function Planos() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Assinaturas />
        <Pricing />
      </MainContent>
      <FooterR />
    </PageContainer>
  );
}

