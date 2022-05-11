import styled from "styled-components";
import React from "react";

const StyledCard = styled.div`
  cursor: pointer;
  position: relative;
  width: 105%;
  color: #ffffff;
  text-align: left;
  height: auto;
  background: black;
  max-width: 1000px;
  margin:4px;
  /* border-radius: 5px; */
  /* margin-bottom: 15px; */
  box-shadow: 0px 2px 6px #0000000a;
  /* padding-bottom: 10px; */
  
  /* height: calc(100% - 15px - 6px); */
  border:none;
  min-height:80px;
  background: transparent
    linear-gradient(
      111deg,
      ${(props) => props.gradientStart} 0%,
      ${(props) => props.gradientEnd} 100%
    )
    0% 0% no-repeat padding-box;

  .card-header {
    color: rgba(0, 0, 0, 0.6);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    background-color: transparent;
    border-bottom:none;
    padding: 12px;
    text-align: left;
    position:relative;
    top:10px;
    letter-spacing: 0.25px;
  /* svg {
      position: relative;
      float: right;
    } */
  }

  .card-body {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.87);
    letter-spacing: 0.15px;
    padding: 0 12px;
    padding-bottom:12px;
    position:relative;
    top:5px;
    .imageSection {
       float: right;
       position: relative;
       width: 40px;
       height: 40px;
       padding: 7px 10px;
       border-radius: 200px;
       position:relative;
       top:-12px;
       
       svg{
      padding:20px;
    }
   }
   img{
    padding:0px;
    width:100%;
    padding-top:0px;
    }
  
  }

  .card-footer {
    font-size: 24px;
    line-height: 24px;
    color: #ffffff;
    border: none;
    background-color: transparent;
  }

 
`;

const GradientCard = (props) => {
  const children = props.children;
  const header = React.Children.map(children, (child) =>
    child.type.displayName === "Header" ? child : null
  );
  const body = React.Children.map(children, (child) =>
    child.type.displayName === "Body" ? child : null
  );
  const footer = React.Children.map(children, (child) =>
    child.type.displayName === "Footer" ? child : null
  );
  return (
    <StyledCard className="card" {...props}>
      <div className="card-header">{header}</div>
      <div className="card-body">{body}</div>
      <div className="card-footer">{footer}</div>
    </StyledCard>
  );
};

const Header = ({ children }) => children;
Header.displayName = "Header";
GradientCard.Header = Header;

const Body = ({ children }) => children;
Body.displayName = "Body";
GradientCard.Body = Body;

const Footer = ({ children }) => children;
Footer.displayName = "Footer";
GradientCard.Footer = Footer;

export default GradientCard;
