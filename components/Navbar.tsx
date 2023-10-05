import { Nav, NavbarWrapper, NavbarItem, NavbarLink } from "./Navbar.styles"

export const Navbar = () => {
  return (
    <NavbarWrapper>
  <Nav>
    <NavbarItem>
            <NavbarLink href="/">
                Main Page
            </NavbarLink>
        </NavbarItem>
        <NavbarItem>
            <NavbarLink href="/firstPage">
                First Page
            </NavbarLink>
        </NavbarItem>
  </Nav>
  </NavbarWrapper>)
}