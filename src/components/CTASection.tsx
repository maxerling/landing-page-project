import React from "react";
import styled from "styled-components";
import { ServiceSection } from ".";
import CTAImage from "../imgs/Ventilationen.jpg";

interface CTASectionProps {}

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #000;
  justify-content: center;
  align-items: center;
  height: 40em;
  transition: all 0.45s;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  color: #e9eaec;
  flex-wrap: wrap;
`;

const HeaderText = styled.h1`
  display: row;
  flex-direction: column;
  padding: 0 0 2.5em 0;
  font-weight: 800;
  font-size: 1.9em;
`;

const SectionText = styled.p`
  display: row;
  flex-direction: column;
  padding: 0 0 4em 0;
  font-size: 1.1em;
`;

const Button = styled.button`
  display: flex;
  background-color: #fff;
  flex-direction: row;
  color: inherit;
  width: 12em;
  height: 3em;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: #000;

  &:hover {
    background-color: #000;
    border: solid 2px #fff;
    color: #fff;
  }

  &:active {
    background-color: #fff;
    border: none;
    color: #000;
  }
`;

export const CTASection: React.FC<CTASectionProps> = ({}) => {
  return (
    <ContentWrapper>
      <MainContent>
        <HeaderText>Mekanluft AB - Vi ventilerar Sverige!</HeaderText>
        <SectionText>
          Vi erbjuder luftflödesmätningar och injustering av ventilation,
          OVK-besiktningar, ljudmätningar, felsökning i ventilationssystem och
          utredningar. Med lång erfarenhet och bred kompetens inom
          ventilationsbranschen kan vi garantera väl genomförda leveranser inom
          bestämd tidsram.
        </SectionText>
        <Button>Kontakta Oss</Button>
        <ServiceSection />
        <ServiceSection />
        <ServiceSection />
      </MainContent>
    </ContentWrapper>
  );
};
