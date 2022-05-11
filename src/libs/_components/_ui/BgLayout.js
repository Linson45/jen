import React from "react";
import styled, { css } from "styled-components";
// import BackgroundImage from "../../../assets/dashboard-bus.png";
import BackgroundImage from "../../../assets/jensen-bg.png";


const PageContainer = styled.div`
  position: relative;
 `;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position-y: 456px;
  background-image: url(${BackgroundImage});
`;
const CenterDiv = styled.div`
  background-color:#FFFFFF;
  position: relative;
  top: 13%;
  width:508px;
  margin: auto;
  padding: 25px;
  opacity: 1;
  button {
    align-items:center;
    width:328px;
    height: 45px;
    border:none;
    /* border: 2px solid #0000000d; */
    border-radius: 4px;
    font-size: 14px;
    line-height: 16px; 
    color: #ffffff;
    background: #FD6D03;
    font-weight:bold;
    font-style:normal;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    margin:17px;
    &:focus,
    &:hover,
    &:active,
    &:disabled
    {
      border:none;
      background:#FD6D03;
      
    }

 }
  @media (max-width: 600px) {
    width: 90%;
  }

`;


const PublicLayout = (props) => {
  return (
    <>
      <PageContainer>
         <Container>
          <CenterDiv>{props.children}</CenterDiv>
        </Container>
         </PageContainer>
    </>
  );
};
export default PublicLayout;
