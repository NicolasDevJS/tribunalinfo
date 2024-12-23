"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { plansData } from "../../data/plansData";
import PlanDetailsModal from "./PlanDetailsModal";

const PricingContainer = styled.div`
  width: 90%;
  margin: 50px auto;
  border: 1px solid #000;
  border-radius: 8px;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  background: ${({ active }) => (active ? "#191970" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#191970")};
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #e6e6fa;
  }
`;

const PlansHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

const HeaderCell = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #0a2540;
  background: #ffffff;
  z-index: 10;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PlanTitle = styled.div`
  font-size: 1.5rem;
  color: ${({ color }) => color || "#000"};
  margin-bottom: 10px;
`;

const PlanPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #888888;
  font-size: 1rem;
  display: block;
  margin-bottom: 10px;
`;

const DividerBar = styled.div`
  height: 5px;
  background: ${({ color }) => color};
  margin: 10px 0;
  border-radius: 3px;
`;

const SignUpButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background: #191970;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s;

  &:hover {
    background: #005bb5;
  }
`;

const PricingTable = () => {
  const [filter, setFilter] = useState("mensal");
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const filteredPlans = plansData.filter(
    (plan) => filter === "mensal" || (filter === "anual" && plan.yearlyPrice)
  );

  const openModal = (id) => {
    setSelectedPlanId(id);
  };

  const closeModal = () => {
    setSelectedPlanId(null);
  };

  return (
    <>
      <PricingContainer>
        <FilterGroup>
          <FilterButton
            active={filter === "anual"}
            onClick={() => setFilter("anual")}
          >
            Assinatura Anual
          </FilterButton>
          <FilterButton
            active={filter === "mensal"}
            onClick={() => setFilter("mensal")}
          >
            Assinatura Mensal
          </FilterButton>
        </FilterGroup>

        <PlansHeader>
          {filteredPlans.map((plan) => (
            <HeaderCell key={plan.id}>
              <PlanTitle color={plan.color}>{plan.title}</PlanTitle>
              {filter === "anual" ? (
                <>
                  {plan.oldPrice && <OldPrice>{plan.oldPrice}</OldPrice>}
                  <PlanPrice>{plan.monthlyPrice}</PlanPrice>
                </>
              ) : (
                <PlanPrice>{plan.oldPrice}</PlanPrice>
              )}
              <DividerBar color={plan.color} />
              <SignUpButton onClick={() => openModal(plan.id)}>
                Assinar Agora
              </SignUpButton>
            </HeaderCell>
          ))}
        </PlansHeader>
      </PricingContainer>

      {selectedPlanId && (
        <PlanDetailsModal planId={selectedPlanId} onClose={closeModal} />
      )}
    </>
  );
};

export default PricingTable;
