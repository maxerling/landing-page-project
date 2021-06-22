import React from "react";
import styled from "styled-components";

interface AboutSectionProps {}

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 70px 70px;
`;

const HeaderText = styled.h1`
  display: flex;
  width: 100%;
  flex-direction: row;
  width: 100%;
  margin: 40px 0 40px 0;
  font-weight: 600;
`;

const Text = styled.p`
  display: flex;
  font-size: 1.728rem;
  overflow-wrap: break-word;
  width: 40%;
  text-align: left;
  line-height: 1.7;
`;

export const AboutSection: React.FC<AboutSectionProps> = ({}) => {
  return (
    <ContentWrapper>
      <HeaderText>Om Oss</HeaderText>
      <Text>
        Mekanluft grundandes 2018 av Salar Khosro och Jerry Erling. Vi erbjuder
        injustering av ventilation och OVK-besiktningar. Med lång erfarenhet och
        bred kompetens kan vi garantera väl genomförda leveranser inom bestämd
        tidsram.
      </Text>
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
    </ContentWrapper>
  );
};
