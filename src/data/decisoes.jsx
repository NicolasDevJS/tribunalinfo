const decisoesData = [
  {
    id: 1,
    titulo: "Decisão 1",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 1. Ela abrange várias nuances legais importantes.",
    data: "2023-05-01",
    categoria: "Trabalhista",
  },
  {
    id: 2,
    titulo: "Decisão 2",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 2. Inclui aspectos significativos sobre o caso.",
    data: "2023-06-15",
    categoria: "Contratual",
  },
  {
    id: 3,
    titulo: "Decisão 3",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 3. A decisão oferece uma visão abrangente dos fatos.",
    data: "2023-07-20",
    categoria: "Cível",
  },
  {
    id: 4,
    titulo: "Decisão 4",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 4. Trata-se de um caso complexo com múltiplas partes envolvidas.",
    data: "2023-08-05",
    categoria: "Penal",
  },
  {
    id: 5,
    titulo: "Decisão 5",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 5. A análise inclui vários precedentes relevantes.",
    data: "2023-09-10",
    categoria: "Tributário",
  },
  {
    id: 6,
    titulo: "Decisão 6",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 6. A decisão aborda importantes questões administrativas.",
    data: "2023-10-12",
    categoria: "Administrativo",
  },
  {
    id: 7,
    titulo: "Decisão 7",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 7. Inclui discussões sobre legislação ambiental.",
    data: "2023-11-01",
    categoria: "Ambiental",
  },
  {
    id: 8,
    titulo: "Decisão 8",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 8. Aborda questões constitucionais significativas.",
    data: "2023-12-15",
    categoria: "Constitucional",
  },
  {
    id: 9,
    titulo: "Decisão 9",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 9. A decisão tem implicações importantes para a jurisprudência.",
    data: "2024-01-20",
    categoria: "Trabalhista",
  },
  {
    id: 10,
    titulo: "Decisão 10",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 10. Contém análises de cláusulas contratuais.",
    data: "2024-02-25",
    categoria: "Contratual",
  },
  {
    id: 11,
    titulo: "Decisão 11",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 11. Descreve detalhes cruciais sobre a matéria cível.",
    data: "2024-03-05",
    categoria: "Cível",
  },
  {
    id: 12,
    titulo: "Decisão 12",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 12. Contém elementos importantes do direito penal.",
    data: "2024-04-10",
    categoria: "Penal",
  },
  {
    id: 13,
    titulo: "Decisão 13",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 13. Inclui uma análise tributária detalhada.",
    data: "2024-05-15",
    categoria: "Tributário",
  },
  {
    id: 14,
    titulo: "Decisão 14",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 14. A decisão foca em aspectos administrativos relevantes.",
    data: "2024-06-20",
    categoria: "Administrativo",
  },
  {
    id: 15,
    titulo: "Decisão 15",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 15. Aborda questões cruciais sobre direito ambiental.",
    data: "2024-07-25",
    categoria: "Ambiental",
  },
  {
    id: 16,
    titulo: "Decisão 16",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 16. Inclui análises constitucionais de relevância.",
    data: "2024-08-30",
    categoria: "Constitucional",
  },
  {
    id: 17,
    titulo: "Decisão 17",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 17. A decisão aborda importantes questões trabalhistas.",
    data: "2024-09-05",
    categoria: "Trabalhista",
  },
  {
    id: 18,
    titulo: "Decisão 18",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 18. Inclui elementos essenciais sobre contratos.",
    data: "2024-10-10",
    categoria: "Contratual",
  },
  {
    id: 19,
    titulo: "Decisão 19",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 19. A decisão apresenta uma visão abrangente do direito cível.",
    data: "2024-11-15",
    categoria: "Cível",
  },
  {
    id: 20,
    titulo: "Decisão 20",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 20. Aborda vários aspectos do direito penal.",
    data: "2024-12-20",
    categoria: "Penal",
  },
  {
    id: 21,
    titulo: "Decisão 21",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 21. Contém discussões aprofundadas sobre tributação.",
    data: "2025-01-25",
    categoria: "Tributário",
  },
  {
    id: 22,
    titulo: "Decisão 22",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 22. A decisão inclui análises administrativas cruciais.",
    data: "2025-02-05",
    categoria: "Administrativo",
  },
  {
    id: 23,
    titulo: "Decisão 23",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 23. Descreve detalhes importantes sobre questões ambientais.",
    data: "2025-03-10",
    categoria: "Ambiental",
  },
  {
    id: 24,
    titulo: "Decisão 24",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 24. Contém uma análise abrangente de questões constitucionais.",
    data: "2025-04-15",
    categoria: "Constitucional",
  },
  {
    id: 25,
    titulo: "Decisão 25",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 25. Aborda questões relevantes do direito trabalhista.",
    data: "2025-05-20",
    categoria: "Trabalhista",
  },
  {
    id: 26,
    titulo: "Decisão 26",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 26. Inclui aspectos importantes sobre contratos.",
    data: "2025-06-25",
    categoria: "Contratual",
  },
  {
    id: 27,
    titulo: "Decisão 27",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 27. A decisão contém discussões relevantes sobre direito cível.",
    data: "2025-07-30",
    categoria: "Cível",
  },
  {
    id: 28,
    titulo: "Decisão 28",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 28. Inclui análises importantes sobre direito penal.",
    data: "2025-08-05",
    categoria: "Penal",
  },
  {
    id: 29,
    titulo: "Decisão 29",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 29. Contém discussões detalhadas sobre tributação.",
    data: "2025-09-10",
    categoria: "Tributário",
  },
  {
    id: 30,
    titulo: "Decisão 30",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 30. A decisão aborda importantes questões administrativas.",
    data: "2025-10-15",
    categoria: "Administrativo",
  },
  {
    id: 31,
    titulo: "Decisão 31",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 31. Inclui análises relevantes sobre questões ambientais.",
    data: "2025-11-20",
    categoria: "Ambiental",
  },
  {
    id: 32,
    titulo: "Decisão 32",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 32. Contém discussões importantes sobre direito constitucional.",
    data: "2025-12-25",
    categoria: "Constitucional",
  },
  {
    id: 33,
    titulo: "Decisão 33",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 33. A decisão inclui elementos significativos do direito trabalhista.",
    data: "2026-01-30",
    categoria: "Trabalhista",
  },
  {
    id: 34,
    titulo: "Decisão 34",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 34. Aborda questões importantes sobre contratos.",
    data: "2026-02-05",
    categoria: "Contratual",
  },
  {
    id: 35,
    titulo: "Decisão 35",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 35. Inclui uma análise abrangente sobre direito cível.",
    data: "2026-03-10",
    categoria: "Cível",
  },
  {
    id: 36,
    titulo: "Decisão 36",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 36. A decisão contém discussões importantes sobre direito penal.",
    data: "2026-04-15",
    categoria: "Penal",
  },
  {
    id: 37,
    titulo: "Decisão 37",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 37. Inclui elementos essenciais sobre tributação.",
    data: "2026-05-20",
    categoria: "Tributário",
  },
  {
    id: 38,
    titulo: "Decisão 38",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 38. A decisão abrange questões administrativas de relevância.",
    data: "2026-06-25",
    categoria: "Administrativo",
  },
  {
    id: 39,
    titulo: "Decisão 39",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 39. Contém análises importantes sobre direito ambiental.",
    data: "2026-07-30",
    categoria: "Ambiental",
  },
  {
    id: 40,
    titulo: "Decisão 40",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 40. Inclui discussões sobre direito constitucional.",
    data: "2026-08-05",
    categoria: "Constitucional",
  },
  {
    id: 41,
    titulo: "Decisão 41",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 41. A decisão aborda questões trabalhistas de importância.",
    data: "2026-09-10",
    categoria: "Trabalhista",
  },
  {
    id: 42,
    titulo: "Decisão 42",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 42. Inclui elementos significativos sobre contratos.",
    data: "2026-10-15",
    categoria: "Contratual",
  },
  {
    id: 43,
    titulo: "Decisão 43",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 43. Contém discussões sobre aspectos cruciais do direito cível.",
    data: "2026-11-20",
    categoria: "Cível",
  },
  {
    id: 44,
    titulo: "Decisão 44",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 44. Aborda questões importantes do direito penal.",
    data: "2026-12-25",
    categoria: "Penal",
  },
  {
    id: 45,
    titulo: "Decisão 45",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 45. Inclui uma análise abrangente sobre tributação.",
    data: "2027-01-30",
    categoria: "Tributário",
  },
  {
    id: 46,
    titulo: "Decisão 46",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 46. A decisão inclui elementos essenciais do direito administrativo.",
    data: "2027-02-05",
    categoria: "Administrativo",
  },
  {
    id: 47,
    titulo: "Decisão 47",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 47. Contém discussões sobre questões ambientais de importância.",
    data: "2027-03-10",
    categoria: "Ambiental",
  },
  {
    id: 48,
    titulo: "Decisão 48",
    descricao:
      "Esta é a descrição detalhada da decisão judicial 48. A decisão abrange discussões constitucionais relevantes.",
    data: "2027-04-15",
    categoria: "Constitucional",
  },
  {
    id: 49,
    titulo: "Decisão 49",
    descricao:
      "é isso que eu disse ",
    data: "2027-05-20",
    categoria: "Trabalhista",
  },
  {
    id: 50,
    titulo: "Decisão 50",
    descricao:
      "jonatan e um trouxa.",
    data: "2027-06-25",
    categoria: "Contratual",
  },
];

export default decisoesData;
