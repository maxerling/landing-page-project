import React from "react";
import styled from "styled-components";

interface FooterProps {}

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #2e2e2e;
  height: 5em;
`;

const FooterContent = styled.div`
  display: flex;
`;

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <FooterWrapper>
      <FooterContent></FooterContent>
    </FooterWrapper>
  );
};
