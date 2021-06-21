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
  margin: 40px 0 40px 0;
  font-weight: 600;
`;

const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const ServiceText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-variant: small-caps;
  box-sizing: border-box;
  border: solid 4px black;
  width: 300px;
  height: 300px;
  font-size: 1.728rem;
  line-height: 1;
  margin: 2em;
  transition: box-shadow 1s;
  padding: 24px;

  &:hover {
    box-shadow: -12px 5px 0px 3px;
  }
`;
//flex: 1 0 21%; /* explanation below */
export const ServiceSection: React.FC<ServiceSectionProps> = ({}) => {
  return (
    <ContnetWrapper>
      <HeaderText>Tjänster</HeaderText>
      <ServiceWrapper>
        <ServiceText>felsökning ventilationsystem</ServiceText>
        <ServiceText>okv-besiktning</ServiceText>
        <ServiceText>injustering av ventilation</ServiceText>
        <ServiceText>ventilation utredning</ServiceText>
        <ServiceText>luftflödesmätning</ServiceText>
        <ServiceText>ljudmätning</ServiceText>
      </ServiceWrapper>
    </ContnetWrapper>
  );
};
