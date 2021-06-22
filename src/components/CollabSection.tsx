import React from "react";
import styled from "styled-components";
import logo1 from "../imgs/companies/logo1.png";

interface CollabSectionProps {}

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ececec;
  padding: 0 0 70px 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: #000;
  margin: 40px 0 40px 0;
  font-weight: 600;
  opacity: 0.4;
  width: 100%;
`;

const CompanyWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
`;

const CompanyLogo = styled.img`
  display: flex;
  flex-direction: row;

  height: 10em;
  opacity: 0.4;
  margin: 1em;
  @media (min-width: 959px) {
    height: 7em;
  }
  @media (min-width: 1052px) {
    height: 8em;
  }
  @media (min-width: 1268px) {
    height: 9em;
  }

  @media (min-width: 1440px) {
    height: 10em;
  }
`;

export const CollabSection: React.FC<CollabSectionProps> = ({}) => {
  return (
    <>
      <ContentWrapper>
        <Content>
          <HeaderText>Samarbeten</HeaderText>
          <CompanyWrapper>
            <CompanyLogo src={logo1} />
            <CompanyLogo src={logo1} />
            <CompanyLogo src={logo1} />
            <CompanyLogo src={logo1} />
          </CompanyWrapper>
        </Content>
      </ContentWrapper>
      {/*
    <ContentWrapper>
      <Content>
        <HeaderText>Ett fåtal företag vi sammarbetar med:</HeaderText>
        <CompanyLogo src={logo1} />
        <CompanyLogo src={logo1} />
        <CompanyLogo src={logo1} />
        <CompanyLogo src={logo1} />
        <CompanyLogo src={logo1} />
        <CompanyLogo src={logo1} />
      </Content>
    </ContentWrapper>*/}
    </>
  );
};
