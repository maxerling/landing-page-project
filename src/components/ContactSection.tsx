import React from "react";
import styled from "styled-components";

interface ContactSectionProps {}

const ContentWrapper = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  justify-content: center;
  height: 50em;
`;

const Content = styled.div`
  display: flex;
  color: #000;
  flex-wrap: wrap;
  width: 40em;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const MidSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 30%;
  height: 25%;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const SubmitSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 1em;
`;

const HeaderText = styled.h1`
  display: flex;
  padding: 2em 0 0 0;
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
`;

const Label = styled.label`
  display: flex;
  font-weight: bold;
  flex-direction: row;
`;

const TextArea = styled.textarea`
  display: flex;
  flex-direction: row;
  resize: none;
  width: 40em;
  height: 8em;
`;

const Submit = styled.button`
  width: 8em;
  height: 2.5em;
  margin: 3em 0 0 0;
  text-align: center;
`;

export const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  return (
    <>
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
    </>
  );
};
