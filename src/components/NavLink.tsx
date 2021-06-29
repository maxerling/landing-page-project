import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface NavLinkProps {}

const NavLinkContainer = styled.div`
  display: flex;
`;

const LinkWrapper = styled.ul`
  display: flex;
`;

const LinkItem = styled.li`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const AnchorLinkStyled = styled(AnchorLink)`
  text-decoration: none;
  color: #000;
  transition: 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;

export const NavLink: React.FC<NavLinkProps> = () => {
  return (
    <NavLinkContainer>
      <LinkWrapper>
        <LinkItem>
          <AnchorLinkStyled href="#about">Om oss</AnchorLinkStyled>
        </LinkItem>
      </LinkWrapper>
    </NavLinkContainer>
  );
};
