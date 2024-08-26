import React from 'react';
import { Container, ProfileCard, ProfileInfo, ProfileImage, UserName, UserDetail, AddPhotoButton, ServicesContainer, ServiceCard, ServiceTitle, ServicePrice, ServiceDescription, ServiceList, ServiceItem, ServiceItemDesc, SubscribeButton } from './styles.module';
import { FaUserCircle, FaCamera } from 'react-icons/fa';

const UserHome = () => {
  // Simulação de dados do usuário
  const user = {
    name: "Guisep",
    email: "gui.doe@example.com",
    phone: "+55 11 98765-4321",
  };

  // Planos de serviços com preços
  const servicesPlans = [
    {
      title: "Plano Básico",
      price: "R$ 29/mês",
      description: "Plano básico para iniciantes.",
      services: [
        {
          name: "Revisão de Documentos",
          description: "Análise detalhada de documentos simples."
        },
        {
          name: "Acesso ao Banco de Jurisprudências",
          description: "Pesquise jurisprudências de diversos tribunais."
        },
        {
          name: "Notificações de Processos",
          description: "Receba atualizações sobre processos em andamento."
        },
        {
          name: "Suporte por E-mail",
          description: "Atendimento rápido via e-mail."
        }
      ],
    },
    {
      title: "Plano Intermediário",
      price: "R$ 39/mês",
      description: "Plano intermediário para necessidades avançadas.",
      services: [
        {
          name: "Consultas Jurídicas Ilimitadas",
          description: "Acesso ilimitado a consultas jurídicas."
        },
        {
          name: "Revisão de Contratos",
          description: "Revisão detalhada e feedback de contratos."
        },
        {
          name: "Acompanhamento de Processos",
          description: "Monitoramento contínuo dos seus processos."
        },
        {
          name: "Suporte Telefônico Prioritário",
          description: "Suporte por telefone com prioridade."
        }
      ],
    },
    {
      title: "Plano Premium",
      price: "R$ 59/mês",
      description: "Plano completo com todos os serviços.",
      services: [
        {
          name: "Consultoria Jurídica Personalizada",
          description: "Consultoria específica para suas necessidades."
        },
        {
          name: "Elaboração de Documentos Complexos",
          description: "Criação de documentos detalhados e complexos."
        },
        {
          name: "Monitoramento Avançado de Processos",
          description: "Monitoramento detalhado com alertas personalizados."
        },
        {
          name: "Atendimento Exclusivo",
          description: "Atendimento dedicado e personalizado."
        }
      ],
    },
  ];

  return (
    <Container>
      <ProfileCard>
        <ProfileImage>
          <FaUserCircle size={80} />
          <AddPhotoButton>
            <FaCamera size={20} />
          </AddPhotoButton>
        </ProfileImage>
        <ProfileInfo>
          <UserName>{user.name}</UserName>
          <UserDetail>{user.email}</UserDetail>
          <UserDetail>{user.phone}</UserDetail>
        </ProfileInfo>
      </ProfileCard>

      <ServicesContainer>
        {servicesPlans.map((plan, index) => (
          <ServiceCard key={index}>
            <ServiceTitle>{plan.title}</ServiceTitle>
            <ServicePrice>{plan.price}</ServicePrice>
            <ServiceDescription>{plan.description}</ServiceDescription>
            <ServiceList>
              {plan.services.map((service, i) => (
                <ServiceItem key={i}>
                  {service.name}
                  <ServiceItemDesc>{service.description}</ServiceItemDesc>
                </ServiceItem>
              ))}
            </ServiceList>
            <SubscribeButton>Assinar</SubscribeButton>
          </ServiceCard>
        ))}
      </ServicesContainer>
    </Container>
  );
};

export default UserHome;
