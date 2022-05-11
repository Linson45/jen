import React from "react";
import styled, { css } from "styled-components";
import { Nav as BSNav, Navbar as BSNavbar } from "react-bootstrap";
import LogoURL from "../../assets/jenseen-logo.png";

const Navbar = styled(BSNavbar)`
  display: flex;
  position: sticky;
  top: 0px;
  left: 0px;
  width: 100%;
  background: #3a3b48 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000000b;
  height: 60px;
  z-index: 3333;
  justify-content: space-between !important;
  align-items: center;
  padding: 10px;
`;
const Nav = styled(BSNav)`
  align-items: center;
  a.nav-link {
    font-size: 14px;
    line-height: 18px;
    font-family: Montserrat Alternates-semiBold;
    letter-spacing: 0px;
    color: #ffffff !important;
    opacity: 1;
  }
  button {
    width: 110px;
    height: 40px;
    font-size: 14px;
    line-height: 20px;
    font-family: Montserrat Alternates-Bold;
    letter-spacing: 0px;
    color: #ffffff;
    background: transparent linear-gradient(270deg, #33c2df 0%, #0081c5 100%) 0%
      0% no-repeat padding-box;
    border: 2px solid #0000000d;
    border-radius: 5px;
  }
`;
const PublicNavBar = (props) => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>
        <img
          alt=""
          src={LogoURL}
          width="120"
          height="25"
          className="d-inline-block align-top logo"
        />
      </Navbar.Brand>
      <Nav>
        {/* <Nav.Link href="#">Help</Nav.Link>
            <Nav.Link href="#">Register</Nav.Link> */}
        <Nav.Link href="#">
          {/* <button>Login</button> */}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default PublicNavBar;
