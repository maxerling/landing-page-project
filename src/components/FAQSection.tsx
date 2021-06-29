import React, { useState } from "react";
import styled from "styled-components";

interface FAQSectionProps {}

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 0 0 20em 0;
  text-align: center;
  justify-content: center;
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

const FAQ = styled.div`
  border: 2px solid;
  justify-content: center;
  flex-direction: wrap;
  width: 60%;
  padding: 1em;
  margin: 1em;

  @media (min-width: 1440px) {
    width: 50%;
  }
`;

const FAQQ = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.25rem;
  &:active {
    content: "";
  }

  @media (min-width: 1024px) {
    font-size: 1.563rem;
  }
`;

const FAQA = styled.div`
  display: flex;
  font-size: 1rem;
  width: 100%;
  justify-content: center;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.6s ease;

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const FAQSection: React.FC<FAQSectionProps> = ({}) => {
  const questions = [
    {
      question: "Hur kontaktar jag er?",
      answer:
        "Via vårt kontaktformulär alternativt via telefon på detta nummer: 07xxxxxxxx.",
      open: false,
    },
    {
      question: "När kan ni jobba?",
      answer: "Kontakta oss och sedan återkommer vi med ett svar.",
      open: false,
    },
  ];

  const [faqs, setfaqs] = useState(questions);
  const toogleFAQ = (index: number) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          console.log(faq);
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <ContentWrapper>
      <HeaderText>FAQ</HeaderText>
      {faqs.map((faq: any, i: number) => (
        <FAQ className={faq.open ? "open" : ""} onClick={() => toogleFAQ(i)}>
          <FAQQ>{faq.question}</FAQQ>
          <FAQA className={faq.open ? "open" : ""}>{faq.answer}</FAQA>
        </FAQ>
      ))}
    </ContentWrapper>
  );
};
