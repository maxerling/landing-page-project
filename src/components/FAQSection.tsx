import React from "react";
import styled from "styled-components";

interface FAQSectionProps {}

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 0 0 70px 0;
`;

const HeaderText = styled.h1`
  display: flex;
  width: 100%;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin: 40px 0 40px 0;
  font-weight: 600;
`;

export const FAQSection: React.FC<FAQSectionProps> = ({}) => {
  return (
    <ContentWrapper>
      <HeaderText>FAQ</HeaderText>
      
    </ContentWrapper>
  );
};
