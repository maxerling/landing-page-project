import React from "react";
import {
  CTASection,
  CollabSection,
  ContactSection,
  FAQSection,
  AboutSection,
  ServiceSection,
} from ".";

interface ContentProps {}

export const Content: React.FC<ContentProps> = ({}) => {
  return (
    <>
      <CTASection />
      {/*<CollabSection />*/}
      <ServiceSection />
      <AboutSection />
      <ContactSection />
      <FAQSection />
    </>
  );
};
