import React from "react";
import styled from "styled-components";

interface ContactSectionProps {}

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #1e6aff;
`;

const HeaderText = styled.h1`
  display: flex;
  width: 100%;
  flex-direction: row;
  width: 100%;
  color: #fff;
  margin: 40px 0 40px 0;
  font-weight: 600;
`;

export const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  return (
    <ContentWrapper>
      <HeaderText>Kontakta Oss</HeaderText>
      {/*<ContentWrapper>
      <Content>
        <RightSection>
          <HeaderText>Kontakta oss</HeaderText>
        </RightSection>
        <MidSection>
          <Label>Förnamn</Label>
          <Input />
          <Label>Efterman</Label>
          <Input />
          <Label>Telefonnummer</Label>
          <Input />
          <Label>E-post</Label>
          <Input />
          <Label>Ämne</Label>
          <Input />
        </MidSection>
        <LeftSection>
          <Label>Meddelande</Label>
          <TextArea></TextArea>
        </LeftSection>
        <SubmitSection>
          <Submit>Skicka</Submit>
        </SubmitSection>
      </Content>
    </ContentWrapper> */}
    </ContentWrapper>
  );
};
