import Link from "next/link";
import styled from "styled-components";


export const Nav = styled.nav`
  gird-area: nav;
  width: 100px;
  height: 100%;
  boarder-right: 1px solid grey;
`;

export const NavbarInnerWrapper = styled.ul`
  height: 100%;
`;

export const NavbarItem = styled.li`
  height: 20px;
`;

export const NavbarLink = styled(Link)`
  display: flex;
  height: 56px;
  &:hover {
    background: blue;
  }

`;