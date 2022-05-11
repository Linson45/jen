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
import { useParams } from "react-router-dom";
import { SaveButton, CancelButton } from "../../libs/_components/_ui/Buttons";
import AdminCustomer from "../../_services/adminCustomer.services";
import moment from "moment";
import {
    Heading,
} from "../_styles/Common.style";
const MainContainer = styled.div` 
position:relative;
  width: 100%;
  height: auto;
  margin-left:9px;
  .heading{
   
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
color: #FD6D03;
}
.card{
margin-top:4px;
border:none;
width:98%;
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
const Divstyle=styled(Heading)` 
 position:relative;
 top:-8px;

`;
const TourOperatorBooking = () => {
const history = useHistory();
return (
        <>
            <PrivateLayout>
                <MainContainer>
                    <Divstyle onClick={() => history.goBack()}><Back />Driverdetaljer-side</Divstyle>
                    
                    {/* <Row> */}
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm="1">
                                        <img src={Account} alt="tour" />
                                    </Col>
                                    <Col sm="6">
                                        <h1></h1>
                                        <p></p>
                                        <LowerRightSide>
                                            <span className="Icon-Text">  <BusIcon /> </span>
                                            <span> |   <img src={callBack} alt="tour" />  </span>
                                            | <Email />
                                        </LowerRightSide>
                                    </Col>
                                    <Col sm="5"></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col>
                                        <HeadingStyle>Tour-ID</HeadingStyle>
                                        <Paragraph></Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Bestillingstype</HeadingStyle>
                                        <Paragraph></Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Bestillingsdato</HeadingStyle>
                                        <Paragraph></Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Bestillingsdato</HeadingStyle>
                                        <Paragraph></Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Reisedetaljer</HeadingStyle>
                                        <Paragraph></Paragraph>

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
                                                        <span class="Upperlabel">Reise fra</span><br />
                                                        <span class="label"></span>
                                                        <Vertical></Vertical>
                                                        <span class="circle">02</span>
                                                        <span class="Upperlabel">Reise til</span>
                                                        <span class="label"></span>
                                                        <Vertical></Vertical>
                                                        <span class="circle">03</span>
                                                        <span class="Upperlabel">Reise fra</span>
                                                        <span class="label"></span>
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
                                                  
                                                </Col>
                                                <Col sm="4">
                                                    <h className="heading"></h>
                                                    <HeadingStyle>Antall seter</HeadingStyle>
                                                    <Paragraph></Paragraph>
                                                </Col>
                                                <Col sm="4">
                                                    <FuelType>
                                                        <HeadingStyle>Drivstoff types</HeadingStyle>
                                                        <Paragraph></Paragraph>
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
                    {/* </Row> */}
                </MainContainer>
            </PrivateLayout>
        </>
    )
}
export default TourOperatorBooking