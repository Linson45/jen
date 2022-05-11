import styled from "styled-components";
import React from "react";
import { ProfileIcon, LogoutIcon } from "../../assets/icons.js";
import SampleImage from "../../assets/Profile_sample.svg";
import { withRouter, useHistory, useLocation } from "react-router-dom";
import Logo from "../../assets/svg/jenseen-logo.svg";
import { Popover as BSPopover } from "react-bootstrap";
import { OverlayTrigger, Button, Row, Col } from "react-bootstrap";
import editIcon from "../../assets/Edit.svg"

const StyledNavBar = styled.nav`
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  color: #ffffff;
  text-align: left;
  height: auto;
  overflow: auto;
  padding: 10px;
  /* padding: 12px; */
  box-shadow: 5px 0 5px #6d6d6d;
  z-index: 99999;

  li {
    text-decoration: none;
    list-style: none;
    float: right;
    font-size: 14px;
  }
  .profile {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    /* identical to box height */
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    color: #000000;
  }

  .profile-image {
    border-radius: 50%;
    height: 24.17px;
    width: 24.17px;
    margin-right: 15px;
  }

  .greetings {
    font-size: 18px;
    float: left;
    line-height: 22px;
    color:#000;
    /* font-family: Montserrat Alternates-semiBold; */
  }
`;

const StyledLogo = styled.div`
   margin-left:10px;
  img {
    width: 100%;
  }
  margin-bottom: 0px;
`;

const Iconbackground = styled.div`
  height: 40px;
  width: 40px;
  background: #ffffff;
  box-shadow: 0px 3px 26px #00000017;
  border: 3px solid #5b5d6e;
  border-radius: 40px;
  display: inline-block;
  text-align: center;
  margin-right: 5px;
  svg {
    font-size: 1.3em;
    margin-top: 8px;
  }
  .notification-icon {
    path {
      fill: #343540;
    }
  }
`;
const Popover = styled(BSPopover)` 
 background-color:white;
 /* margin-top:20px; */

.popover-body {
    padding: 1rem 0.9rem;
    color: #212529;
    border:none;
    margin-bottom:-5px;
    
   }
  
   
   @media only screen and (max-width:1028px){
  .popover-body {
    padding: 1rem 1rem;
    color: #212529;
    border:none;
    margin-bottom:-5px;
    margin-left: -22px;
   }
 }
`;
const Editprofile = styled.span` 
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
color: rgba(0, 0, 0, 0.6);
letter-spacing: 0.25px;
position: relative;
right: 5px;
@media only screen and (max-width:1028px){
  position: relative;
  right:-10px;
  
 }
 
 `;
const ImageDiv = styled.span` 
 position:relative;

 cursor:pointer;
 svg{
  width: 12px;
    height: 12px;
 }
 `;
const NavText = styled.span` 
 font-style: normal;
 font-weight: 500;
 font-size: 12px;
 line-height: 14px;
 letter-spacing: 0.15px;
 color: #000000;
 position:relative;
 left:-10px;
 `;
const ProfileDropdown = () => {

  const onLogout = () => {
    window.location.pathname = "/";
  };

  return (
    <>
      <Iconbackground>
        <ProfileIcon />
      </Iconbackground>
      <Iconbackground>
        <LogoutIcon onClick={onLogout} />
      </Iconbackground>
    </>
  )
}

const PrimaryPrivateNavbar = ({ name }) => {
  const { push } = useHistory();
  let location = useLocation();

  const popover = (
    <Popover id="popover-basic" style={{marginTop:"18px"}}>
      <Popover.Body>
        <Editprofile>Edit Profile</Editprofile>
        <ImageDiv>
          {/* <img src={editIcon} alt="tour" onClick={() => push("/editprofile")} /> */}

          {
          location.pathname === "/tour-operator/dashboard" || location.pathname === "/tour-operator/tour"||
          location.pathname === "/tour-operator/driver"||location.pathname === "/tour-operator/bus"?
          <img src={editIcon} alt="tour"  onClick={() => push("/editprofile")} />:
          <img src={editIcon} alt="tour"  onClick={() => push("/admin/tour-operator/add")} />

         }
        </ImageDiv>
      </Popover.Body>
    </Popover>
  )
  return (
    <StyledNavBar>
      <li className="greetings">
        <StyledLogo className="logo">
          <img alt="Jenssen Dashboard" src={Logo}></img>
        </StyledLogo>
      </li>
      <OverlayTrigger trigger="click" rootClose placement="bottom-start" overlay={popover}>
      <li className="profile">
       
          <img className="profile-image" src={SampleImage} />
        
       
        <NavText>Hello {name}</NavText>
      </li>
      </OverlayTrigger>

      {/* <li className="profile">
        <img className="profile-image" src={SampleImage} />
        Hello {name}
      </li> */}
    </StyledNavBar>
  );
};
export default withRouter(PrimaryPrivateNavbar);
