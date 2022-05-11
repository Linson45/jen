import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { Nav as BSNav } from "react-bootstrap";
import {
  DashboardIcon,
  BusMenuIcon,
  DriverIcon,
  TourIcon,
  LogoutIcon,
  TopArrowSubmenuIcon,
  BookingIcon,
  CustomerIcon,
  Driver
} from "../../assets/icons.js";
import {Drivericon} from "../../assets/driver.svg"
import { Link } from "react-router-dom";
import arrowVector from "../../assets/svg/Arrow_Vector.svg"

const StyledSidebar = styled.div`
  background: #fff;
  box-shadow: 0px 3px 16px #0000001d;
  position: fixed;
  margin-top:54px;
  display: block;
  padding: 0;
  z-index: 5;
  height: 100%;
  padding: 20px;
  /* overflow: auto; */
  width:188px;
  /* width: ${(props) => (props.collapsed ? "85px" : "188px")}; */
  transition: all 0.2s ease-in;
  z-index: 55555;
  top: 0;

  ${({ disableTransitionEffects }) =>
    disableTransitionEffects &&
    `
   transition: none !important;
  `}
  

  .nav-link.active svg{
    fill: #33c2df;
    color:#FD6D03;
  }
  .nav-link.active .nav-text{
    color:#FD6D03;
  }
  .nav-text {
    opacity: ${(props) => (props.collapsed ? "0" : "1")};
    display: ${(props) => (props.collapsed ? "none" : "inline-block")};
    width: ${(props) => (props.collapsed ? "0" : "53%")};
    transition: opacity 0.7s ease-in;
    margin-top:10px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    /* color: rgba(33, 33, 33, 0.7); */
   }

  .toggle-button {
    transform: ${(props) =>
      props.collapsed ? "rotate(0deg)" : "rotate(180deg)"};
    transition: transform 0.5s ease-in-out;

    svg {
      width: 41px;
      height: 41px;
    }
  }

  .indicator-icon,
  .submenu > div {
    display: ${(props) => (props.collapsed ? "none" : "block")};
  }

  .sub-menu {
    .nav-link {
      display: ${(props) => (props.collapsed ? "none" : "block")};
    }
  }
  .logo {
    display: ${(props) => (props.collapsed ? "none" : "block")};
  }
  .collapsed-logo {
    display: ${(props) => (props.collapsed ? "block" : "none")};
  }

  .indicator-icon {
    opacity: ${(props) => (props.collapsed ? "0" : "1")};
  }
`;

const Nav = styled(BSNav)`
  flex-direction: column;
  .active{
    color: #e86029 !important;
  }
  svg {
    margin-right: 10px;
    /* font-size: 13px; */
    margin-bottom: 4px;
    width:1rem;
    /* height:2rem; */
  }

  a.nav-link {
    text-align: left;
    color: rgba(33, 33, 33, 0.7);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    /* font-size: 14px;
    letter-spacing: 0px; */
    padding: 0.4rem 0;
    height: 40PX;
    
  }
  a.active::after {
    content: "";   
    background: ${props => `url(${props.arrowVector}) no-repeat top center`};
    background-size: 5px;
    border: 5px solid transparent;
    margin-left: 30px;
    margin-top: 10px;
    position: relative;
    top: 3px;
    left: 10px;
  }
`;

const SubmenuContent = styled.div`
  padding-left: 8px;
  overflow: hidden;
`;

const SubmenuCaption = styled.div`
  color: #fff;
  font-size: 10px;
  line-height: 13px;
  cursor: pointer;
`;

const StyledSubmenu = styled.div`
  margin-bottom: 0;
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;

  .indicator-icon {
    float: right;
    font-size: 1em;
    margin-top: 2px;
    transform: ${(props) => (props.open ? "rotateZ(0deg)" : "rotateZ(90deg)")};
    transition: all 0.2s ease-in-out;
  }

  a.nav-link {
    margin: 0;
    margin-bottom: 0.4rem;
  }
 

  ${SubmenuContent} {
    transition: all 0.5s ease-in-out;
    margin-top: ${(props) => (props.open ? "12px" : "0")};
    height: ${(props) => (props.open ? "auto" : "0")};
  }
`;

const Submenu = (props) => {
  const sidebarCollapsed = props.sidebarCollapsed;
  const [open, setOpen] = useState(!sidebarCollapsed);

  const toggleMenuOpen = (event) => {
    setOpen(!open);
    event.preventDefault();
    event.stopPropagation();
  };

  const shouldBeOpen = () => {
    if (sidebarCollapsed) {
      return false;
    } else {
      return open;
    }
  };
  

  useEffect(() => {
    setOpen(JSON.parse(window.localStorage.getItem("open" + props.title)));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("open" + props.title, open);
  }, [open]);

  return (
    <StyledSubmenu open={shouldBeOpen()}>
      <SubmenuCaption>
        <TopArrowSubmenuIcon className="indicator-icon" />
        <Link to={props.to}>{props.icon}</Link>
        <span className="nav-text" onClick={toggleMenuOpen}>
          {props.title}
        </span>
      </SubmenuCaption>
      <SubmenuContent>{props.children}</SubmenuContent>
    </StyledSubmenu>
  );
};

function Sidebar(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [disableTransitionEffects, setDisableTransitionEffects] = useState(true);
  const location = useLocation();
  const history=useHistory();
  const roleType = location.pathname.split('/')[1];
  const page = location.pathname.split('/')[2];
  const logout = () => {
    localStorage.removeItem("currentUser");
    history.push('/');
  };
  const logoutAdmin=() => {
   localStorage.removeItem("currentUser");
    history.push('/adminlogin');
  };
  return (
    <>
      <StyledSidebar
        {...props}
        collapsed={collapsed}
        disableTransitionEffects={disableTransitionEffects}
      >
        <Nav arrowVector={arrowVector}>
          { roleType === 'admin' ?
            <>
              <Nav.Link href="/admin/dashboard" className={page === 'dashboard' ? 'active' : ''}>
                <DashboardIcon />
                <span className="nav-text">Dashbaord</span>
              </Nav.Link>
              <Nav.Link href="/admin/tour-operator" className={page === 'tour-operator' ? 'active' : ''}>
                <TourIcon isActive={page === 'tour-operator' ? true : false} />
                <span className="nav-text">Turoperatør</span>
              </Nav.Link>
              <Nav.Link href="/admin/booking" className={page === 'booking' ? 'active' : ''}>
                <BookingIcon isActive={page === 'booking' ? true : false} />
                <span className="nav-text">Bestilling</span>
              </Nav.Link>
              <Nav.Link href="/admin/customer" className={page === 'customer' ? 'active' : ''}>
                <CustomerIcon isActive={page === 'customer' ? true : false} />
                <span className="nav-text">Kunder</span>
              </Nav.Link>
              <Nav.Link href="/adminlogin" className={page === 'logout' ? 'active' : ''}>
                <LogoutIcon isActive={page === 'logout' ? true : false} onClick={()=>logoutAdmin} />
                <span className="nav-text" onClick={()=>(logoutAdmin())}>Logg ut</span>
              </Nav.Link>
            </> : 
            <>
              <Nav.Link href="/tour-operator/dashboard" className={page === 'dashboard' ? 'active' : ''}>
                <DashboardIcon isActive={page === 'dashboard' ? true : false} />
                <span className="nav-text">Dashbaord</span>
              </Nav.Link>
              <Nav.Link href="/tour-operator/bus" className={page === 'bus' ? 'active' : ''}>
                <BusMenuIcon isActive={page === 'bus' ? true : false} />
                <span className="nav-text">Busser</span>
              </Nav.Link>
              <Nav.Link href="/tour-operator/driver" className={page === 'driver' ? 'active' : ''}>
                <Driver isActive={page === 'driver' ? true : false} />
                <span className="nav-text">Sjåfør</span>
              </Nav.Link>
              <Nav.Link href="/tour-operator/tour" className={page === 'tour' ? 'active' : ''}>
                <TourIcon isActive={page === 'tour' ? true : false} />
                <span className="nav-text">Tur</span>
              </Nav.Link>
              <Nav.Link href="/"  className={page === 'logout' ? 'active' : ''}>
                <LogoutIcon isActive={page === 'logout' ? true : false}  onClick={()=>logout}/>
                <span className="nav-text" onClick={()=>(logout())}>Logg ut</span>
              </Nav.Link>
            </>
          }
        </Nav>
      </StyledSidebar>
    </>
  );
}
export default Sidebar;
