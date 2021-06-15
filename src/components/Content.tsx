import React from "react";
import { CTASection, CollabSection, ContactSection, FAQSection, AboutSection } from ".";

interface ContentProps {}

export const Content: React.FC<ContentProps> = ({}) => {
  return (
    <>
      <CTASection />
      <CollabSection />
      <AboutSection />
      <ContactSection />
      <FAQSection />
    </>
  );
};
