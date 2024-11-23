"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styled from "styled-components";
import Juris from "@/components/jurisprudencia/jurisprudencia";
import Loader from "@/components/common/Loader";

const Container = styled.div`
  min-height: 100vh;
  padding: 80px 20px;
  background-color: #f9f9f9;
  margin-top: 20px;
`;

const Jurisprudencias = () => {
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
        <Juris />
      </Container>
      <Footer />
    </>
  );
};

export default Jurisprudencias;
