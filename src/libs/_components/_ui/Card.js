import styled from "styled-components";
import React from "react";

const StyledCard = styled.div`
  position: relative;
  width: 100%;
  background-color: #3a3b48;
  color: #ffffff;
  text-align: left;
  height: auto;
  background: #3a3b48;
  max-width: 1024px;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 0px 2px 6px #0000000a;
  padding-bottom: 10px;
  height: calc(100% - 15px - 6px);

  .card-header {
    border-bottom: none;
    color: #909090;
    font-size: 14px;
    line-height: 25px;
    font-style: normal;
    padding: 12px;
    background: none;

    svg {
      position: relative;
      float: right;
    }
  }
   .card-body {
    font-size: 12px;
    line-height: 15px;
    font-style: normal;
    font-weight: normal;
    color: #fff;
    padding: 0 12px;
    padding-bottom: 12px;
   
    span.metric {
      font-size: 20px;
      line-height: 24px;
      font-style: normal;
      font-weight: 600;
      color: #ffffff;
    }
  }

  .card-footer {
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    border: none;
    background-color: transparent;
  }

  ul {
    color: #c3c3c3;
    font-size: 14px;
    line-height: 21px;
    margin: 0;
    padding: 0;
  }

  li {
    font-style: normal;
    font-display: inherit;
    color: #ffffff;
    font-weight: 600;
    font-size: 11px;
    line-height: 15px;
    padding-bottom: 15px;
    list-style: none;
    display: flex;
  }
`;

const StyledBellIcon = styled.div`
  float: right;
  svg {
    path {
      fill: #ff7474;
    }
  }
`;

// const StyledManualOverride = styled.div`
//     float: right;

//     .bell-icon {
//       margin-right: 5px;
//       path {
//         fill: #ff7474;
//       }
//     }
//   `;

const PositiveMetric = styled.div`
  position: relative;
`;

const Card = (props) => {
  const { children } = props;
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
Card.Header = Header;

const Body = ({ children }) => children;
Body.displayName = "Body";
Card.Body = Body;

const Footer = ({ children }) => children;
Footer.displayName = "Footer";
Card.Footer = Footer;

export default Card;
