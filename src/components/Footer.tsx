import React from "react";
import styled from "styled-components";
import bisnode from "../imgs/bisnode.png";

interface FooterProps {}

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #2e2e2e;
  height: 14em;

  @media (min-width: 500px) {
    height: 16.5em;
  }

  @media (min-width: 640px) {
    height: 18em;
  }

  @media (min-width: 1000px) {
    height: 18em;
  }
`;

const FooterContent = styled.div`
  display: flex;
  color: #fff;
  font-weight: 500;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 1440px) {
    font-weight: 600;
  }
`;

const Text = styled.p`
  padding: 0;
  margin: 1em 0 0 1em;
  font-size: 0.8rem;

  @media (min-width: 500px) {
    font-size: 1rem;
  }

  @media (min-width: 640px) {
    font-size: 1.2rem;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const MidSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

  @media (min-width: 848px) {
    justify-content: space-between;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const FooterImage = styled.img`
  display: flex;
  height: 5em;
  margin: 2em;

  @media (min-width: 768px) {
    height: 8em;
    margin: 0 0 0 5em;
  }

  @media (min-width: 848px) {
    margin: 0 4em 0 0;
  }
`;

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <FooterWrapper>
      <FooterContent>
        <TopSection>
          <Text>
            BESÖKSADRESS<br></br> Torögatan 6, 122 65 Enskede
          </Text>
        </TopSection>
        <MidSection>
          <Text>
            FÖRETAGSADRESS <br></br> Klockhammarsgränd 48 124 70 Bandhagen
          </Text>
          <FooterImage src={bisnode} alt="Kreditvärdering" />
        </MidSection>
        <BottomSection>
          <Text>© Mekanluft AB 2021</Text>
        </BottomSection>
      </FooterContent>
    </FooterWrapper>
  );
};
