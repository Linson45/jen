import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../libs/_layouts/PrivateLayout";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import {
    Heading,
} from "./_styles/Common.style";
import Account from "../assets/svg/account_circle_bg.svg";
import Bus from "../assets/bus.png";
import { BusIcon, Email } from "../assets/icons";
import callBack from "../assets/svg/call-black.svg";
import { SaveButton, CancelButton } from "../libs/_components/_ui/Buttons";
import { useHistory } from "react-router-dom";
import { Back } from "../assets/icons";
import TourOperatorDriver from "../_services/tourOperatorDriver.services";
import moment from "moment";

const MainContainer = styled.div` 
  width: 100%;
  height: auto;
  padding: 0px 0px;
  .card{
      padding:13px;
      border:none;
      margin-left:-5px;
    
    }

.heading{
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
color: #FD6D03;
}
.stepper-stepper-vertical{
   color:red;
}
.completed{
    color:blue;
    
}
.large-btn{
    background-color:#FD6D03 !important;
    box-shadow: none;
    color: #fff;
    margin-right: 10px;
    }
    .abv-btn{
    box-shadow: none;
    border: 1px solid #000 !important;
  }
  .hrLine{
    opacity: 0.4;
    border: 1px solid rgba(0, 0, 0, 0.6);
    margin-top:7px;
  }
  .leftBlockStyle{
      margin-left:-60px;
      margin-top:10px;
  }
  .Turdetaljer{
      margin-top:10px;
  }

`;
const HeadingStyle = styled.h1` 
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: rgba(0, 0, 0, 0.6);
letter-spacing: 0.25px;
`;
const Paragraph = styled.p`
font-style: normal;
font-weight:500;
font-size: 18px;
line-height: 24px;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 0.87); 
`
const FuelType = styled.div` 
 margin-top:30px;
`;

const LeftSideBlock = styled.div` 
display:flex;
justify-content:start;
margin-left:-30px;
.label{
    position:relative;
    left:40px;
    font-style: normal;
    font-weight:700;
    font-size: 16px;
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
  width:26px;
  height:26px;
  border-radius:20px;
  padding:4px;
  font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #000000;
}
`;
const RightSideBlock = styled.div` 
border: 1px solid #E8DADA;
box-sizing: border-box;
border-radius: 5px;
width:560px;
height:103px;
padding:10px;
margin-left: 104px;

`;
const VerticalLine = styled.div` 
border-left:1px solid rgba(0, 0, 0, 0.2);
height: 222px;
position: relative;
left: 62px;


`;



const LowerRightSide = styled.div` 
margin-top:-10px;
  display:flex;
  justify-content:start;
  svg{
       margin:5px;
   }
   span{
      margin-right:10px;
   }
   .email{
    /* font-style: normal;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: -0.015em;
    color: #000000;
    margin-top:2px;
    letter-spacing: -0.015em; */
   }
 
 
`;
const DriverNo = styled.span` 
font-style: normal;
font-weight: 400;
font-size: 20px;
/* line-height: 36px; */
color: rgba(0, 0, 0, 0.87);
`;
const DriverName = styled.p` 
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.015em;
color: #000000;
`;

const Vertical = styled.div` 
 border-left: 1px dashed rgba(0, 0, 0, 0.6);;;
  height:30px;
  margin-left:10px;
  margin-top:-20px;
`
const StyledHeader=styled(Heading)` 
position:relative;
top:-23px;
left:2px;
`;
const IconText=styled.div` 
  background: #1BBD2B;
    border-radius: 40px;
    letter-spacing: -0.015em;
    margin-right:10px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size:10px;
    line-height: 12px;
    padding-top:0px;
    padding-right:5px;
    height:24px;
    svg{
        width:12px;
        height:14.25px;
    }

`;
const Moblile=styled.span` 
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
letter-spacing: -0.015em;
color: #000000;
margin-top:5px;
 img{
     width:10.05px;
     height:10.5px;
     /* position:relative;
     top:2px; */
 }
`;
const EmailSection=styled.p` 
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
letter-spacing: -0.015em;
color: #000000;
margin-top:2px;
.email{
    position:relative;
    left:-5px;
}

svg{
    width:13.33px;
    height:10.67px;
}

`;
const VerticalLineUpperSection = styled.div` 
border-left: 1px solid rgba(0, 0, 0, 0.5);
height:13px;
position:absolute;
top:86px;
left:160px;
`;
const VerticalLineLeftSide=styled.div` 
border-left: 1px solid rgba(0, 0, 0, 0.5);
height:13px;
position:absolute;
top:86px;
left:240px;

`;
const TopHeading=styled.p` 
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.0025em;
color: #000000;
`;
const DriverListing = () => {

    const history = useHistory();

    const [bookingId, setBookingId] = useState(history.location.state?.bookingId);
    const [driverId, setDriverId] = useState(history.location.state?.driverId);

    const [driverTourdetails, setdriverTourdetails] = useState([])

    useEffect(() => {
        getDriverList(bookingId, driverId)

    }, [bookingId, driverId]);


    const getDriverList = (bookingId, driverId) => {
        // setLoading(true);
        console.log("data", bookingId);
        console.log("data", driverId);

        TourOperatorDriver.tourOperatorGetDriverTourDetails(bookingId, driverId)
            .then((res) => {
                console.log(res.data.data);
                let result = res.data.data[0];
                // let records = [...driverList, ...result];
                setdriverTourdetails(result)
                // setLoading(false);
                // searchById(records[0].id)
                // let a = [res.data.data]
                // a.map((data) => {
                //   return (data.map((data) => {
                //     console.log(data.id)
                //     setIds(data.id)
                //   }))
                // })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <PrivateLayout>
                <MainContainer>
                    <Row>
                        <Col >
                            <StyledHeader onClick={() => history.goBack()}><Back />Driver</StyledHeader>
                        </Col>
                    </Row>
                    {/* <Row> */}
                        <Card>
                            <Card.Body>
                                <Row >
                                      <Col sm="1">
                                        <img src={Account} alt="tour" style={{width:"51px",height:"51px"}} /></Col>
                                      <Col sm="10" style={{ marginLeft: "-40px" }}>
                                        <DriverNo>{driverTourdetails?.driverId}</DriverNo>
                                        <DriverName>{driverTourdetails?.driverName}</DriverName>

                                        <LowerRightSide>
                                            <IconText>  <BusIcon />{driverTourdetails?.driverStatus}</IconText>
                                            <VerticalLineUpperSection></VerticalLineUpperSection><Moblile>  <img src={callBack} alt="tour" />{driverTourdetails?.driverMobile?.length > 0 && driverTourdetails.driverMobile[0].number} </Moblile>
                                            <VerticalLineLeftSide></VerticalLineLeftSide><EmailSection><Email /><span className="email">{driverTourdetails?.driverEmail}</span></EmailSection>
                                        </LowerRightSide>

                                    </Col>

                                </Row>


                                <hr className="hrLine" />
                                <Row>
                                    <Col>
                                        <HeadingStyle>Tour-ID</HeadingStyle>
                                        <Paragraph>{driverTourdetails?.bookingId}</Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Bestillingstype</HeadingStyle>
                                        <Paragraph>{driverTourdetails?.tripType}</Paragraph>
                                    </Col>
                                    <Col >
                                        <HeadingStyle>Bestillingsdato</HeadingStyle>
                                        <Paragraph>{moment(driverTourdetails?.bookingDate).format('DD/MM/YYYY')}</Paragraph>
                                    </Col>
                                    <Col >
                                        <HeadingStyle>Bestillingsdato</HeadingStyle>
                                        <Paragraph>{moment(driverTourdetails?.bookingDate).format("hh:mm a")}</Paragraph>
                                    </Col>
                                    <Col>
                                        <HeadingStyle>Reisedetaljer</HeadingStyle>
                                        <Paragraph>{driverTourdetails?.oneWayPassengers}</Paragraph>
                                    </Col>
                                </Row>
                                <hr style={{ marginTop: "5px" }} className="hrLine" />
                                <Row>
                                    <Col sm="5" className="Turdetaljer">
                                        <TopHeading >Turdetaljer</TopHeading>
                                        <LeftSideBlock>
                                            <div className="row mt-1">
                                                <div className="col-md-12">
                                                    <ul>
                                                        <span className="circle">01</span>
                                                        <span className="Upperlabel">Reise fra ({moment(driverTourdetails?.oneWayStartDate).format('DD/MM/YYYY')})</span><br />
                                                        <span className="label">{driverTourdetails?.itinerary?.length > 0 && driverTourdetails?.itinerary[0]?.address}</span>
                                                        <Vertical></Vertical>
                                                        <span className="circle">02</span>
                                                        <span className="Upperlabel">Reise til</span>
                                                        <div className="step-content grey lighten-3">
                                                           
                                                            <span class="label"> {driverTourdetails?.itinerary?.length > 0 && driverTourdetails?.itinerary[1]?.address}</span>
                                                        </div>
                                                        <Vertical></Vertical>
                                                        <span className="circle">04</span>
                                                        <span className="Upperlabel">Reise fra ({moment(driverTourdetails?.oneWayEndDate).format('DD/MM/YYYY')})</span>
                                                        <span className="label">{driverTourdetails?.itinerary?.length > 0 && driverTourdetails?.itinerary[2]?.address}</span>
                                                    </ul>
                                                </div>
                                            </div>

                                        </LeftSideBlock>
                                    </Col>
                                    <Col sm="1">
                                        <VerticalLine>

                                        </VerticalLine>
                                    </Col>
                                    <Col sm="5" className="leftBlockStyle">
                                        <TopHeading style={{position:"relative",left:"100px"}}>Busstype</TopHeading>
                                        <RightSideBlock>
                                            <Row >
                                                <Col sm="3">
                                                    <img alt="Jenssen Dashboard" src={Bus}></img>
                                                </Col>
                                                <Col sm="3">
                                                    <h className="heading">  {driverTourdetails?.vehicleNumber}</h>
                                                    <HeadingStyle style={{marginTop:"5px"}}>Antall seter</HeadingStyle>
                                                    <Paragraph>{driverTourdetails?.vehicleCapacity}</Paragraph>
                                                </Col>
                                                <Col sm="4">
                                                    <FuelType>
                                                        <HeadingStyle >Drivstoff types</HeadingStyle>
                                                        <Paragraph>{driverTourdetails?.vehicleFuelType}</Paragraph>
                                                    </FuelType>
                                                </Col>
                                            </Row>
                                        </RightSideBlock>
                                    </Col>
                                   
                                </Row>
                                <hr className="hrLine" />
                                <Row>
                                    <Col sm="4"></Col>
                                    <Col sm="4"></Col>
                                    <Col sm="4">
                                        <div className="mb-5 float-end">
                                            <SaveButton>LARGE</SaveButton>
                                            <CancelButton> AVBRYT</CancelButton>
                                        </div>
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card>
                    {/* </Row> */}
                </MainContainer>
            </PrivateLayout>

        </>
    )
}

export default DriverListing