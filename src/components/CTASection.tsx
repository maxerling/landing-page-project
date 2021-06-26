import React from "react";
import styled from "styled-components";
import { ServiceSection } from ".";
import CTAImage from "../imgs/Ventilationen.jpg";
import BigLogo from "../imgs/Group 19.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface CTASectionProps {}

const ContentWrapper = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  height: 600px;
  transition: all 0.45s;

  @media (min-width: 768px) {
    height: 1200px;
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

  @media (min-width: 1078px) {
    width: 24em;
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

  @media (min-width: 1078px) {
    font-size: 3.052rem;
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

  @media (min-width: 1078px) {
    font-size: 1.563rem;
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
    width: 55%;
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

  @media (min-width: 1078px) {
    width: 13em;
    height: 3em;
    font-size: 1.25rem;
  }
`;

const AnchorLinkStyled = styled(AnchorLink)`
  color: #fff;
  text-decoration: none;
`;

//const AnchorLink = styled.a``;

export const CTASection: React.FC<CTASectionProps> = ({}) => {
  return (
    <ContentWrapper>
      <MainContent>
        <HeroLogo src={BigLogo}></HeroLogo>
        <HeaderText>Vi Ventilerar Sverige!</HeaderText>
        <SectionText>Andas ut och få ventilationen ordnad! </SectionText>
        <ButtonWrapper>
          <AnchorLinkStyled href="#contact">
            <Button color="#1E6AFF" activeColor="#1a51be">
              Kontakta Oss
            </Button>
          </AnchorLinkStyled>
          <AnchorLinkStyled href="#services">
            <Button color="#EEC800" activeColor="#c7a601">
              Våra Tjänster
            </Button>
          </AnchorLinkStyled>
        </ButtonWrapper>
      </MainContent>
    </ContentWrapper>
  );
};
