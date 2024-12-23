"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import FooterR from "../../components/common/FooterR";
import Loader from "../../components/common/Loader";
import styled from "styled-components";
import Informativo from "../../components/peticoesTrabalhistas/Informativo";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

export default function PeticoesTrabalhistas() {
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
        <Informativo/>

      </MainContent>
      <FooterR />
    </PageContainer>
  );
}

