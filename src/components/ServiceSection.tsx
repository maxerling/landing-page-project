import React from "react";
import styled from "styled-components";

interface ServiceSectionProps {}

const ContnetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #eec800;
`;



const Text = styled.h2``;

const HeaderText = styled.h1`
  display: flex;
  width: 100%;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const ServiceSection: React.FC<ServiceSectionProps> = ({}) => {
  return (
    <ContnetWrapper>
      <HeaderText>Tjänster</HeaderText>
    </ContnetWrapper>
  );
};
