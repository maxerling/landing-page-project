import React from "react";
import styled from "styled-components";

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

const Link = styled.a`
  text-decoration: none;
  color: #000;
  transition: transform 1.2s ease;
  &:hover {
    opacity: 0.2;
  }
`;

export const NavLink: React.FC<NavLinkProps> = ({}) => {
  return (
    <NavLinkContainer>
      <LinkWrapper>
        <LinkItem>
          <Link href="#">Om oss</Link>
        </LinkItem>
      </LinkWrapper>
    </NavLinkContainer>
  );
};
