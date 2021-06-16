import React from "react";
import styled from "styled-components";
import logo1 from "../imgs/companies/logo1.png";

interface CollabSectionProps {}

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  padding: 2em;
  width: 100%;
  opacity: 0.7;
`;

const CompanyLogo = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 10em;
  opacity: 0.7;
  padding: 0 0 5em 0;
`;

export const CollabSection: React.FC<CollabSectionProps> = ({}) => {
  return (
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
    </ContentWrapper>
  );
};
