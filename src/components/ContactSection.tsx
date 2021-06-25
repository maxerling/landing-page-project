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
  border-radius: 2px;
  margin: 0 26px 32px 0;
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
  border-radius: 2px;
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
  flex-direction: row;
  color: #fa3d3e;
  background-color: #ffe0e0;
  width: 13em;
  height: 2.7em;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 0.8rem;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: column;
  justify-content: start;
  width: 100%;
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
  height: 2em;
  width: 7em;
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
  justify-content: start;
`;

const Submit = (e: any) => {
  e.preventDefault();
};

export const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  const LabelNames = ["Förnamn", "Efternamn", "Telefonnummer", "E-post"];
  const ErrorMessages = [
    "Fältet får inte vara tomt, försök igen!",
    "Fältet får inte vara tomt, försök igen!",
    "Ange ett giltigt nummer, försök igen!",
    "Ange en giltig e-post, försök igen!",
  ];

  const ErrorAndLabels = [
    { label: "Förnamn", error: "Fältet får inte vara tomt, försök igen!" },
    { label: "Efternamn", error: "Fältet får inte vara tomt, försök igen!" },
    { label: "Telefonnummer", error: "Ange ett giltigt nummer, försök igen!" },
    { label: "E-post", error: "Ange en giltig e-post, försök igen!" },
  ];

  const FieldMapping = ErrorAndLabels.map((defualt) => {
    return (
      <>
        <Label>
          {defualt.label}
          <RequirimentStyle>*</RequirimentStyle>
        </Label>
        <Input />
        <ErrorMessage>{defualt.error}</ErrorMessage>
      </>
    );
  });

  return (
    <ContentWrapper>
      <HeaderText>Kontakta Oss</HeaderText>

      <form onSubmit={Submit}>
        {FieldMapping}

        <FieldWrapper>
          <Label>Meddelande</Label>
          <TextArea />
        </FieldWrapper>

        <LowSection>
          <Button>Skicka</Button>
        </LowSection>
      </form>
    </ContentWrapper>
  );
};

{
  /*<Label>
          Förnamn<RequirimentStyle>*</RequirimentStyle>
        </Label>
        <Input />
        <ErrorMessage>Fältet får inte vara tomt, försök igen!</ErrorMessage>

        <Label>
          Efternamn<RequirimentStyle>*</RequirimentStyle>
        </Label>
        <Input />
        <ErrorMessage>Fältet får inte vara tomt, försök igen!</ErrorMessage>

        <Label>
          Nummer<RequirimentStyle>*</RequirimentStyle>
        </Label>
        <Input />
        <ErrorMessage>Ange ett giltigt nummer, försök igen!</ErrorMessage>

        <Label>
          E-post<RequirimentStyle>*</RequirimentStyle>
        </Label>
        <Input />
        <ErrorMessage>Ange en giltig e-post, försök igen!</ErrorMessage>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
          const ErrorMessageMapping = (
    ErrorMessages: string[],
    LabelNames: string[]
  ) => {
    ErrorMessages.map((errorMessage) => {
      LabelNames.map((labelName) => {
        LabelMapping(errorMessage, labelName);
      });
    });
  };

  const LabelMapping = (errorMessage: string, labelName: string) => {
    return (
      <>
        <Label>
          {labelName}
          <RequirimentStyle>*</RequirimentStyle>
        </Label>
        <Input />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </>
    );
  };
        
        
        */
}
