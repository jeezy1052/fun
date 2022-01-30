import React from 'react'
import LogoImag from '../assests/logo.png'

import { NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, Logo } from '../styles/Navbar.style'



const Navbar = () => {
  return (

    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/review">Reviews</NavbarLink>
            <NavbarLink to="/database">Database</NavbarLink>
            <NavbarLink to="/">About Us</NavbarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImag}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer>

      </NavbarExtendedContainer>
    </NavbarContainer>
  )
}

export default Navbar
