"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Loader from "@/components/common/Loader"; 
import ProcessSearch from "@/components/pesquisajuridica/SeachProcess";

const Container = styled.div`
  min-height: 100vh;
  padding: 80px 20px;
  background-color: white;
  margin-top: 20px;
`;

export default function pesquisajuridica() {
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
    <ProcessSearch/>
      </Container>
      <Footer />
    </>
  );
}
