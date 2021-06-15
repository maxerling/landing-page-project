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
  padding: 0 1em 0 0;
`;

const Link = styled.a`
  font-weight: 600;
  text-decoration: none;
  color: #000;
  transition: all 200ms ease-in-out;
  border-bottom: 4px solid transparent;

  &:hover {
    border-bottom: 4px solid #000;
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
