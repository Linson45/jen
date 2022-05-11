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
    let { id } = useParams();
    const [customerBookingInfo, setCustomerBookingInfo] = useState([])
    console.log(id)
    const history = useHistory();

    useEffect(() => {
        AdminCustomer.getCustomerBookingInfoById(id)
            .then((res) => {
                console.log("res", res);
                res.data.data.map((res) => {
                    setCustomerBookingInfo(res)
                })
            })
    }, [id])


    console.log(customerBookingInfo)
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
                                        <h1>{customerBookingInfo.vehicleNumber}</h1>
                                        <p>{customerBookingInfo.customerName}</p>
                                        <LowerRightSide>
                                            <span className="Icon-Text">  <BusIcon />{customerBookingInfo.status} </span>
                                            <span> |   <img src={callBack} alt="tour" /> {customerBookingInfo.customerMobile ? customerBookingInfo?.customerMobile[0]?.number : ""} </span>
                                            | <Email /> {customerBookingInfo.customerEmail}
                                        </LowerRightSide>
                                    </Col>
                                    <Col sm="5"></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col>
                                        <HeadingStyle>Tour-ID</HeadingStyle>
                                        <Paragraph>{customerBookingInfo.bookingId}</Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Bestillingstype</HeadingStyle>
                                        <Paragraph>{customerBookingInfo.tripType}</Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Bestillingsdato</HeadingStyle>
                                        <Paragraph>{moment(customerBookingInfo?.bookingDate).format('MM/DD/YYYY')}</Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Bestillingsdato</HeadingStyle>
                                        <Paragraph>{moment(customerBookingInfo?.bookingDate).format('h:mm a')}</Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Reisedetaljer</HeadingStyle>
                                        {
                                            customerBookingInfo?.tripType == "oneWay" ?
                                            <>
                                            <Paragraph>Adults: {customerBookingInfo?.oneWayPassengers?.adults}</Paragraph>
                                            <Paragraph>Children: {customerBookingInfo?.oneWayPassengers?.children}</Paragraph>
                                            <Paragraph>Infants: {customerBookingInfo?.oneWayPassengers?.infants}</Paragraph></>:
                                            <>
                                            <Paragraph>Adults: {customerBookingInfo?.roundTripPassengers?.adults}</Paragraph>
                                            <Paragraph>Children: {customerBookingInfo?.roundTripPassengers?.children}</Paragraph>
                                            <Paragraph>Infants: {customerBookingInfo?.roundTripPassengers?.infants}</Paragraph></>
                                        }
                                       
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm="5">
                                        <Paragraph style={{ marginLeft: "30px" }}>Turdetaljer</Paragraph>
                                        <LeftSideBlock>
                                            <div class="row mt-1">
                                                <div class="col-md-12">
                                                    {
                                                        customerBookingInfo.tripType === "oneWay" ?
                                                            <ul className="stepper stepper-vertical">
                                                                <span class="circle">01</span>
                                                                <span class="Upperlabel">Reise fra({moment(customerBookingInfo.oneWayStartDate).format('MM/DD/YYYY')})</span><br />
                                                                <span class="label">{customerBookingInfo.itinerary ? customerBookingInfo?.itinerary[0]?.address : ""}</span>
                                                                <Vertical></Vertical>
                                                                <span class="circle">02</span>
                                                                <span class="Upperlabel">Reise til</span>
                                                                <span class="label">{customerBookingInfo.itinerary ? customerBookingInfo?.itinerary[1]?.address : ""}</span>
                                                                <Vertical></Vertical>
                                                                <span class="circle">03</span>
                                                                <span class="Upperlabel">Reise fra({moment(customerBookingInfo.oneWayEndDate).format('MM/DD/YYYY')})</span>
                                                                <span class="label">{customerBookingInfo.itinerary ? customerBookingInfo?.itinerary[2]?.address : ""}</span>
                                                            </ul> :
                                                            <ul className="stepper stepper-vertical">
                                                                <span class="circle">01</span>
                                                                <span class="Upperlabel">Reise fra({moment(customerBookingInfo.roundTripStartDate).format('MM/DD/YYYY')})</span><br />
                                                                <span class="label">{customerBookingInfo.itinerary ? customerBookingInfo?.itinerary[0]?.address : ""}</span>
                                                                <Vertical></Vertical>
                                                                <span class="circle">02</span>
                                                                <span class="Upperlabel">Reise til</span>
                                                                <span class="label">{customerBookingInfo.itinerary ? customerBookingInfo?.itinerary[1]?.address : ""}</span>
                                                                <Vertical></Vertical>
                                                                <span class="circle">03</span>
                                                                <span class="Upperlabel">Reise fra({moment(customerBookingInfo.roundTripEndDate).format('MM/DD/YYYY')})</span>
                                                                <span class="label">{customerBookingInfo.itinerary ? customerBookingInfo?.itinerary[2]?.address : ""}</span>
                                                            </ul>

                                                    }

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
                                                    <img alt="bus image" width="85px" height="85px" src={customerBookingInfo?.vehicleImages ? "https://jenssen-images.s3.eu-north-1.amazonaws.com/" + customerBookingInfo.vehicleImages[0].path : ""}></img>
                                                </Col>
                                                <Col sm="4">
                                                    <h className="heading">{customerBookingInfo?.vehicleNumber}</h>
                                                    <HeadingStyle>Antall seter</HeadingStyle>
                                                    <Paragraph>{customerBookingInfo?.vehicleCapacity}</Paragraph>
                                                </Col>
                                                <Col sm="4">
                                                    <FuelType>
                                                        <HeadingStyle>Drivstoff types</HeadingStyle>
                                                        <Paragraph>{customerBookingInfo?.vehicleFuelType}</Paragraph>
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