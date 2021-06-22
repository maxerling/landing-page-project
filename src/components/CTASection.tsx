import React from "react";
import styled from "styled-components";
import { ServiceSection } from ".";
import CTAImage from "../imgs/Ventilationen.jpg";
import BigLogo from "../imgs/Group 19.svg";

interface CTASectionProps {}

const ContentWrapper = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  height: 600px;
  transition: all 0.45s;

  @media (min-width: 768px) {
    height: 800px;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #000;
  flex-wrap: wrap;
`;

const HeroLogo = styled.img`
  display: row;
  justify-content: center;
  align-items: center;
  transition: transform 1.2s ease;
  &:hover {
    transform: rotate(360deg);
  }
`;

const HeaderText = styled.h1`
  display: row;
  flex-direction: column;
  font-weight: 800;
  font-size: 2.074rem;
  text-align: center;
  font-variant: small-caps;
  width: 100%;
  margin: 40px 0 0 0;
  word-wrap: break-word;

  @media (min-width: 425px) {
    font-size: 2.488rem;
  }
`;

const SectionText = styled.p`
  display: row;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin: 4px 0 0 0;
  font-size: 1rem;

  @media (min-width: 425px) {
    font-size: 1.2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 24px 0 0 0;
  @media (min-width: 426px) {
    width: 80%;
  }

  @media (min-width: 892px) {
    width: 60%;
  }

  @media (min-width: 1260px) {
    width: 40%;
  }
`;

const Button = styled.button<{ color?: string; activeColor?: string }>`
  display: flex;
  background-color: ${(props) => {
    return props.color;
  }};
  flex-direction: row;
  width: 8em;
  height: 4em;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: #fff;
  transition: transform 0.5s ease;
  font-weight: 800;
  font-size: 1rem;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    color: #e9e8e8;
    background-color: ${(props) => {
      return props.activeColor;
    }};
  }

  @media (min-width: 600px) {
    width: 10em;
    height: 3em;
  }

  @media (min-width: 1025px) {
    margin: 32px 0 0 0;
  }

  @media (min-width: 1260px) {
    width: 13em;
  }
`;

export const CTASection: React.FC<CTASectionProps> = ({}) => {
  return (
    <ContentWrapper>
      <MainContent>
        <HeroLogo src={BigLogo}></HeroLogo>
        <HeaderText>Vi Ventilerar Sverige!</HeaderText>
        <SectionText>Andas ut och få ventilationen ordnad! </SectionText>
        <ButtonWrapper>
          <Button color="#1E6AFF" activeColor="#1a51be">
            Kontakta Oss
          </Button>
          <Button color="#EEC800" activeColor="#c7a601">
            Våra Tjänster
          </Button>
        </ButtonWrapper>
        {/*<HeaderText>Mekanluft AB - Vi ventilerar Sverige!</HeaderText>
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
        <ServiceSection />*/}
      </MainContent>
    </ContentWrapper>
  );
};
