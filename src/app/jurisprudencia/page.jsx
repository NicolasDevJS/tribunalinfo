"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/common/Header";
import styled from "styled-components";
import Jurisprudencias from "@/components/juris/Jurisprudencias";
import Loader from "@/components/common/Loader";

const Container = styled.div`
  min-height: 100vh;
  padding: 80px 20px;
  background-color: #f9f9f9;
  margin-top: 20px;
`;

const Jurisprudencia = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Container>
        <Jurisprudencias/>
      </Container>
    </>
  );
};

export default Jurisprudencia;
