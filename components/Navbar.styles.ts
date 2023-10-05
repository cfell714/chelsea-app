import Link from "next/link";
import styled from "styled-components";


export const Nav = styled.nav`
  gird-area: nav;
  width: 120px;
  height: 100%;
  boarder-right: 1px solid grey;
`;

export const NavbarWrapper = styled.ul`
  padding: 0;
  border-right: solid 1px grey;
`;

export const NavbarItem = styled.li`
  height: 40px;
`;

export const NavbarLink = styled(Link)`
  display: flex;
  height: 40px;
  text-align: center;
  justify-content: center;
  &:hover {
    background: grey;
  }

`;