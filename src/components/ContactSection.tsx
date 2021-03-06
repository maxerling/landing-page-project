import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

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
  margin: 0 18px 32px 0;
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
  padding: 1.3em;
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

const LowSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
`;

type FormData = {
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  message: string;
};

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: object) => window.location.reload();

  return (
    <ContentWrapper id="contact">
      <HeaderText>Kontakta Oss</HeaderText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          F??rnamn<RequirimentStyle>*</RequirimentStyle>
        </Label>
        <Input
          type="text"
          {...register(`firstName`, {
            required: "F??ltet f??r inte vara tomt, f??rs??k igen!",
          })}
        />
        {errors.firstName && (
          <ErrorMessage>{errors.firstName.message}</ErrorMessage>
        )}

        <Label>
          Efternamn<RequirimentStyle>*</RequirimentStyle>
        </Label>
        <Input
          type="text"
          {...register(`lastName`, {
            required: "F??ltet f??r inte vara tomt, f??rs??k igen!",
          })}
        />
        {errors.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}

        <Label>
          Telefonnummer<RequirimentStyle>*</RequirimentStyle>
        </Label>
        <Input
          type="tel"
          {...register(`number`, {
            required: "F??ltet f??r inte vara tomt, f??rs??k igen!",
            minLength: {
              value: 10,
              message: "Ange ett giltigt nummer, f??rs??k igen!",
            },
            maxLength: {
              value: 12,
              message: "Ange ett giltigt nummer, f??rs??k igen!",
            },
            pattern: {
              value: /[0-9+]/,
              message: "Ange endast siffror, f??rs??k igen!",
            },
          })}
        />

        {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}

        <Label>
          E-post<RequirimentStyle>*</RequirimentStyle>
        </Label>
        <Input
          type="text"
          {...register(`email`, {
            required: "F??ltet f??r inte vara tomt, f??rs??k igen!",
            pattern: {
              value: /@/,
              message: "E-post m??ste inneh??lla @, f??rs??k igen!",
            },
            maxLength: {
              value: 254,
              message:
                "Ange en e-post med ett mindre antal karakt??rer, f??rs??k igen!",
            },
            minLength: {
              value: 3,
              message:
                "Ange en e-post med ett st??rre antal karakt??rer, f??rs??k igen!",
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <FieldWrapper>
          <Label>Meddelande</Label>
          <TextArea {...register(`message`)} />
        </FieldWrapper>

        <LowSection>
          <Button>Skicka</Button>
        </LowSection>
      </form>
    </ContentWrapper>
  );
};
