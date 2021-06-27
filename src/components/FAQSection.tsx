import React, { useState } from "react";
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

const FAQ = styled.div`
  border: 2px solid;
  justify-content: center;
  flex-direction: wrap;
  width: 100%;
  padding: 1em;
  margin: 1em;
`;
const FAQQ = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 1.563rem;
  font-weight: 600;

  &:active {
    content: "";
  }
`;

const FAQA = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
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
          <FAQA>{faq.answer}</FAQA>
        </FAQ>
      ))}
    </ContentWrapper>
  );
};
