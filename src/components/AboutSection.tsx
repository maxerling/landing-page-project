import React from "react";
import styled from "styled-components";

interface AboutSectionProps {}

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20em;
  background: #000;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fff;
`;

const HeaderText = styled.h1`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const Text = styled.p`
  display: flex;
  flex-direction: row;
  width: 15em;
`;

export const AboutSection: React.FC<AboutSectionProps> = ({}) => {
  return (
    <>
      {/*<ContentWrapper>
      <Content>
        <HeaderText>Om oss</HeaderText>
        <Text>
          Mekanluft grundandes 2018 av Salar Khosro och Jerry Erling. Vi
          erbjuder injustering av ventilation och OVK-besiktningar. Med lång
          erfarenhet och bred kompetens kan vi garantera väl genomförda
          leveranser inom bestämd tidsram.
        </Text>
      </Content>
    </ContentWrapper>*/}
    </>
  );
};
