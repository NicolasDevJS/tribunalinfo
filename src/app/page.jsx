"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "@/components/common/Header";
import FooterR from "@/components/common/FooterR";
import SearchSection from "@/components/home/SearchSection";
import ServicosCarrossel from "@/components/home/ServicosCarrossel";
import TopJurisprudencias from "@/components/home/TopJurisprudencias";
import Services from "../components/home/Services";
import Loader from "@/components/common/Loader"; 

const Container = styled.div`
  min-height: 100vh;
  padding: 80px 20px;
  background-color: white;
  margin-top: 20px;
`;

export default function Home() {
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
        <SearchSection />
        <Services />
        <TopJurisprudencias />
        <ServicosCarrossel />
      </Container>
      <FooterR/>
    </>
  );
}
