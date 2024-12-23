"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import FooterR from "../../components/common/FooterR";
import Apresentacao from "../../components/calculos/apresentacao";
import Loader from "../../components/common/Loader";

export default function PainelDeCalculos() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader/>
  }
  return (
    <>
      <Header />
      <Apresentacao/>
      <FooterR/>
    </>
  );
}
