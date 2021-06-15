import React from "react";
import styled from "styled-components";
import logob from "../imgs/mekanluft-b-logo.png";
import { NavLink } from ".";

interface HeaderProps {}

const HeaderWrapper = styled.div`
  display: flex;
  //width: 100%;
  height: 60px;
  padding: 0 1.5em;
  align-items: center;
  background-color: #e9eaec;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
`;

const LeftSection = styled.div`
  display: flex;
`;

const MidSection = styled.div`
  display: flex;
  flex: 2;
`;

const RightSection = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  padding: 0 0 0 2em;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <HeaderWrapper>
      <LeftSection>
        <a href="#">
          <Logo src={logob}></Logo>
        </a>
      </LeftSection>
      <MidSection />
      <RightSection>
        <NavLink></NavLink>
      </RightSection>
    </HeaderWrapper>
  );
};

export default Header;
