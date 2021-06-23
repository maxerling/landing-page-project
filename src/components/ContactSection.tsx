import React from "react";
import styled from "styled-components";

interface ContactSectionProps {}

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #1e6aff;
  padding: 0 0 70px 70px;
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

const Label = styled.p`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-weight: 700;
  font-size: 1.25rem;
`;

const RequirimentStyle = styled.div`
  color: #fa3d3e;
  margin: 0 0 0 4px;
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  width: 17em;
  border: none;
  border-radius: 3px;
  margin: 0 16px 32px 0;
  height: 32px;

  @media (min-width: 373px) {
    width: 20em;
  }

  @media (min-width: 447px) {
    width: 24em;
  }
`;

const TextArea = styled.textarea`
  display: flex;
  border: none;
  border-radius: 3px;
  margin: 0 0 40px 0;
  resize: none;
  width: 16em;
  height: 16em;

  @media (min-width: 373px) {
    width: 20em;
  }

  @media (min-width: 447px) {
    width: 24em;
  }

  @media (min-width: 691px) {
    width: 44em;
  }

  @media (min-width: 1100px) {
    width: 57em;
  }

  @media (min-width: 1380px) {
    width: 58em;
  }
`;

const Description = styled.p`
  display: flex;
  
`;

const ErrorMessage = styled.p`
  display: flex;
  color: #fa3d3e;
  background-color: #ffe0e0;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: column;
  justify-content: start;
  margin: 0 0 0 0;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: #eec800;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.563rem;
  height: 1.5em;
  width: 5.5em;
  cursor: pointer;

  &:hover {
    border: solid 2px white;
  }

  &:active {
    color: #e9e8e8;
    background-color: #c7a601;
    border: none;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: start;
`;

const MidSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: start;
`;

const LowSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: start;
`;

export const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  return (
    <ContentWrapper>
      <HeaderText>Kontakta Oss</HeaderText>
      <TopSection>
        <FieldWrapper>
          <Label>
            Förnamn<RequirimentStyle>*</RequirimentStyle>
          </Label>
          <Input />
        </FieldWrapper>
        <FieldWrapper>
          <Label>
            Efternamn<RequirimentStyle>*</RequirimentStyle>
          </Label>
          <Input />
        </FieldWrapper>
        <FieldWrapper>
          <Label>
            Nummer<RequirimentStyle>*</RequirimentStyle>
          </Label>
          <Input />
        </FieldWrapper>
        <FieldWrapper>
          <Label>
            E-post<RequirimentStyle>*</RequirimentStyle>
          </Label>
          <Input />
        </FieldWrapper>
      </TopSection>
      <MidSection>
        <FieldWrapper>
          <Label>Meddelande</Label>
          <TextArea />
        </FieldWrapper>
        <LowSection>
          <Button>Skicka</Button>
        </LowSection>
      </MidSection>

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
