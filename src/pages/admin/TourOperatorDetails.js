import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../../libs/_layouts/PrivateLayout";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Back } from "../../assets/icons";
import { useHistory } from "react-router-dom";
import Account from "../../assets/svg/account_circle_bg.svg";
import { BusIcon, Email } from "../../assets/icons";
import callBack from "../../assets/svg/call-black.svg";
import Bus from "../../assets/bus.png";
import { SaveButton, CancelButton } from "../../libs/_components/_ui/Buttons";
import {
    Heading,
} from "../_styles/Common.style";
const MainContainer = styled.div` 
  width: 100%;
  height: auto;
  .heading{
   
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
color: #FD6D03;
}

`;
const HeadingStyle = styled.h1` 
     
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 20px;
     color: rgba(0, 0, 0, 0.6);
     letter-spacing: 0.25px;
  `
const Paragraph = styled.p` 
  
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.015em;
color: rgba(0, 0, 0, 0.87);

  `;
const LowerRightSide = styled.div` 
  display:flex;
  justify-content:start;
  .Icon-Text{
    background: #1BBD2B;
    border-radius: 40px;
    padding:0px 10px;
    font-size:15px;
    margin-right:10px;
   }
   svg{
       margin:5px;
   }
   span{
      margin-right:10px;
   }
 
`;
const VerticalLine = styled.div` 
 border-left: 2px ridge rgba(0, 0, 0, 0.6);
  height: 250px;
`;
const LeftSideBlock = styled.div` 
display:flex;
justify-content:start;

  .label{
    position:relative;
    left:40px;
    
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;
    color: #000000;
}
.Upperlabel{
  
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
  position:relative;
  left:13px;
}
  .circle{
  position:relative;
   background: rgba(253, 109, 3, 0.1);
  width:60px;
  height:60px;
  border-radius:20px;
  padding:4px;
  /* top:10px; */
}

`;
const Vertical = styled.div` 
 border-left: 1px dashed rgba(0, 0, 0, 0.6);
  height:47px;
  margin-left:10px;
  margin-top:-20px;
`

const RightSideBlock = styled.div` 
border: 1px solid #E8DADA;
box-sizing: border-box;
border-radius: 5px;
width:100%;
padding:10px;

`;
const RouteSection = styled.div` 
  position: relative;
  left:30px;
  top:-35px;


`
const FuelType = styled.div` 
 margin-top:20px;
`;
const TourOperatorBooking = () => {
    const history = useHistory();
    return (
        <>
            <PrivateLayout>
                <MainContainer>
                    <Heading onClick={() => history.goBack()}><Back />Tilbake</Heading>
                    <Row>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm="1">
                                        <img src={Account} alt="tour" />
                                    </Col>
                                    <Col sm="6">
                                        <h1>D-1001</h1>
                                        <p>Richard Swell</p>
                                        <LowerRightSide>
                                            <span className="Icon-Text">  <BusIcon />On Tour   </span>
                                            <span> |   <img src={callBack} alt="tour" /> 090-900-92092 </span>
                                            | <Email /> richardswell@gmail.om
                                        </LowerRightSide>
                                    </Col>
                                    <Col sm="5"></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col>
                                        <HeadingStyle>Tour-ID</HeadingStyle>
                                        <Paragraph>12131313</Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Bestillingstype</HeadingStyle>
                                        <Paragraph>Rundfahrt</Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Bestillingsdato</HeadingStyle>
                                        <Paragraph>20/03/2021</Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Bestillingsdato</HeadingStyle>
                                        <Paragraph>08:30 Am</Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Reisedetaljer</HeadingStyle>
                                        <Paragraph>10</Paragraph>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm="5">
                                        <Paragraph style={{ marginLeft: "30px" }}>Turdetaljer</Paragraph>
                                        <LeftSideBlock>
                                            <div class="row mt-1">
                                                <div class="col-md-12">
                                                    <ul className="stepper stepper-vertical">
                                                        <span class="circle">01</span>
                                                        <span class="Upperlabel">Reise fra (oktober 21/11/2021)</span><br />
                                                        <span class="label">Norway</span>
                                                        <Vertical></Vertical>
                                                        <span class="circle">02</span>
                                                        <span class="Upperlabel">Reise til</span>
                                                        <span class="label">Nørreport Station, Nørre Voldgade,<br />Copenhagen, Denmark</span>
                                                        <Vertical></Vertical>
                                                        <span class="circle">04</span>
                                                        <span class="Upperlabel">Reise fra (oktober 21/11/2021)</span>
                                                        <span class="label">Norway</span>
                                                    </ul>
                                                </div>
                                            </div>
                                        </LeftSideBlock>
                                    </Col>
                                    <Col sm="1">
                                        <VerticalLine></VerticalLine>
                                    </Col>
                                    <Col sm="5">
                                        <Paragraph>Busstype</Paragraph>
                                        <RightSideBlock>
                                            <Row >
                                                <Col sm="4">
                                                    <img alt="Jenssen Dashboard" src={Bus}></img>
                                                </Col>
                                                <Col sm="4">
                                                    <h className="heading">BS-1001</h>
                                                    <HeadingStyle>Antall seter</HeadingStyle>
                                                    <Paragraph>20</Paragraph>
                                                </Col>
                                                <Col sm="4">
                                                    <FuelType>
                                                        <HeadingStyle>Drivstoff types</HeadingStyle>
                                                        <Paragraph>Bensin</Paragraph>
                                                    </FuelType>
                                                </Col>
                                            </Row>
                                        </RightSideBlock>
                                    </Col>
                                </Row>
                                <hr />
                                <div className="mb-5 float-end">
                                    <SaveButton>LARGE</SaveButton>
                                    <CancelButton> AVBRYT</CancelButton>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                </MainContainer>
            </PrivateLayout>
        </>
    )
}
export default TourOperatorBooking