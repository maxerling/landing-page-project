import React from "react";
import styled from "styled-components";
import logob from "../imgs/Group 3.svg";
import { NavLink } from ".";

interface HeaderProps {}

const HeaderWrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  margin: 16px 0 0 70px;

  @media (max-width: 768px) {
    margin: 16px 0 0 16px;
  }
`;

const MidSection = styled.div`
  display: flex;
  flex: 2;
`;

const RightSection = styled.div`
  display: flex;
  margin: 16px 70px 0 0;

  @media (max-width: 768px) {
    margin: 16px 16px 0 0;
  }
`;

const Logo = styled.img`
  transition: transform 0.5s ease;
  width: 148px;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Header: React.FC<HeaderProps> = () => {
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
