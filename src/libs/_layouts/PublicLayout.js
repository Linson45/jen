import React from "react";
import styled, { css } from "styled-components";
// import PublicNavbar from "./PublicNavbar";
import BackgroundImage from "../../assets/dashboard-bus.png";

const PageContainer = styled.div`
  position: relative;
 `;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${BackgroundImage});
  
`;
const CenterDiv = styled.div`
  background-color:#FFFFFF;
  position: relative;
  top: 13%;
  width:38%;
  height:395px;
  margin-left:466px;
  opacity: 1;
  position: relative;
  opacity: 1; 

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
