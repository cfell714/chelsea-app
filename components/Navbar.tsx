import { Nav, NavbarInnerWrapper, NavbarItem, NavbarLink } from "./Navbar.styles"

export const Navbar = () => {
  return (
  <Nav>
    <NavbarInnerWrapper>
        <NavbarItem>
            <NavbarLink href="/temp">
                this
            </NavbarLink>
        </NavbarItem>
    </NavbarInnerWrapper>
  </Nav>)
}