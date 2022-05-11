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
import TourOperatorDashboard from "../_services/tourOpDashboard.services";
import moment from "moment";
import Loader from "../libs/_components/_ui/Loader";
const MainContainer = styled.div` 
  width: 100%;
  height: auto;
  padding: 0px 2px;
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
font-weight: bold;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.015em;
color: rgba(0, 0, 0, 0.87); 
`
const FuelType = styled.div` 
 margin-top:20px;
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
  
}
`;
const RightSideBlock = styled.div` 
border: 1px solid #E8DADA;
box-sizing: border-box;
border-radius: 5px;
width:100%;
padding:10px;

`;
const VerticalLine = styled.div` 
 border-left: 2px solid rgba(0, 0, 0, 0.6);;;
  height: 200px;
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

const LowerLeftSide = styled.div` 
  display:flex;
  justify-content:start;
  .Icon-Text{
    background: #1BBD2B;
    border-radius: 40px;
    padding:0px 9px;
   }
   .label{
       padding:3px;
   }
   `
const Vertical = styled.div` 
 border-left: 1px dashed rgba(0, 0, 0, 0.6);;;
  height:30px;
  margin-left:10px;
  margin-top:-20px;
`
const TourdetailsDashboard = () => {
    const [isloading, setLoading] = useState(false)
    const history = useHistory();

    const [bookingId, setBookingId] = useState(history.location.state?.bookingId);
    //const [driverId,setDriverId] = useState(history.location.state?.driverId);

    const [driverTourdetails, setdriverTourdetails] = useState([])

    useEffect(() => {
        getDriverList(bookingId)

    }, [bookingId]);


    const getDriverList = (bookingId) => {
        setLoading(true);
        console.log("data", bookingId);
        // console.log("data",driverId);

        TourOperatorDashboard.tourOperatorBookingById(bookingId)
            .then((res) => {
                console.log(res.data.data);
                let result = res.data.data[0];
                // let records = [...driverList, ...result];
                setdriverTourdetails(result)
                setLoading(false);
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
                    <Heading onClick={() => history.goBack()}><Back />Tur</Heading>
                    <Row>
                        {isloading?
                         <Loader />:(
                            <>
                                <Card>
                                    <Card.Body>
                                        <Row>
                                            <Col sm="1">
                                                <img src={Account} alt="tour" /></Col>
                                            <Col sm="6">
                                                <h1>{driverTourdetails.driverId}</h1>
                                                <p>{driverTourdetails.driverName}</p>
                                                <Row>
                                                    <LowerRightSide>
                                                        <span className="Icon-Text">  <BusIcon />{driverTourdetails.driverStatus}</span>
                                                        <span> |   <img src={callBack} alt="tour" /> {driverTourdetails.driverMobile?.length > 0 && driverTourdetails.driverMobile[0].number} </span>
                                                        | <Email />  {driverTourdetails.driverEmail}
                                                    </LowerRightSide>
                                                </Row>
                                            </Col>
                                            <Col sm="5">
                                            </Col>
                                        </Row>

                                    </Card.Body>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <HeadingStyle>Tour-ID</HeadingStyle>
                                            <Paragraph>{driverTourdetails.bookingId}</Paragraph>
                                        </Col>
                                        <Col>
                                            <HeadingStyle>Bestillingstype</HeadingStyle>
                                            <Paragraph>{driverTourdetails.tripType}</Paragraph>
                                        </Col>
                                        <Col >
                                            <HeadingStyle>Bestillingsdato</HeadingStyle>
                                            <Paragraph>{moment(driverTourdetails.bookingDate).format('DD/MM/YYYY')}</Paragraph>
                                        </Col>
                                        <Col >
                                            <HeadingStyle>Bestillingsdato</HeadingStyle>
                                            <Paragraph>{moment(driverTourdetails.bookingDate).format("hh:mm a")}</Paragraph>
                                        </Col>
                                        <Col>
                                            <HeadingStyle>Reisedetaljer</HeadingStyle>
                                            <Paragraph>{driverTourdetails.oneWayPassengers}</Paragraph>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col sm="5">
                                            <Paragraph style={{ marginLeft: "30px" }}>Turdetaljer</Paragraph>
                                            <LeftSideBlock>
                                                <div className="row mt-1">
                                                    <div className="col-md-12">
                                                        <ul>
                                                            <span className="circle">01</span>
                                                            <span className="Upperlabel">Reise fra ({moment(driverTourdetails.oneWayStartDate).format('DD/MM/YYYY')})</span><br />
                                                            <span className="label">{driverTourdetails.itinerary?.length > 0 && driverTourdetails.itinerary[0]?.address}</span>
                                                            <Vertical></Vertical>
                                                            <span className="circle">02</span>
                                                            <span className="Upperlabel">Reise til</span>
                                                            <div className="step-content grey lighten-3">
                                                                {/* <p className="label">Nørreport Station, Nørre Voldgade, Copenhagen, Denmark</p> */}
                                                                <span class="label"> {driverTourdetails.itinerary?.length > 0 && driverTourdetails.itinerary[1]?.address}</span>
                                                            </div>
                                                            <Vertical></Vertical>
                                                            <span className="circle">04</span>
                                                            <span className="Upperlabel">Reise fra ({moment(driverTourdetails.oneWayEndDate).format('DD/MM/YYYY')})</span>
                                                            <span className="label">{driverTourdetails.itinerary?.length > 0 && driverTourdetails.itinerary[2]?.address}</span>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </LeftSideBlock>
                                        </Col>
                                        <Col sm="1">
                                            <VerticalLine>

                                            </VerticalLine>
                                        </Col>
                                        <Col sm="5">
                                            <Paragraph>Busstype</Paragraph>
                                            <RightSideBlock>
                                                <Row >
                                                    <Col sm="4">
                                                        <img alt="Jenssen Dashboard" src={Bus}></img>
                                                    </Col>
                                                    <Col sm="4">
                                                        <h className="heading">{driverTourdetails.vehicleNumber}</h>
                                                        <HeadingStyle>Antall seter</HeadingStyle>
                                                        <Paragraph>{driverTourdetails.vehicleCapacity}</Paragraph>
                                                    </Col>
                                                    <Col sm="4">
                                                        <FuelType>
                                                            <HeadingStyle>Drivstoff types</HeadingStyle>
                                                            <Paragraph>{driverTourdetails.vehicleFuelType}</Paragraph>
                                                        </FuelType>
                                                    </Col>
                                                </Row>
                                            </RightSideBlock>
                                        </Col>
                                    </Row>
                                    <hr />
                                    {/* <Row>
                                <Col sm="4"></Col>
                                <Col sm="6"></Col>
                                <Col sm="2">
                                    <div className="mb-5 float-end">
                                        <SaveButton>LARGE</SaveButton>
                                        <CancelButton> AVBRYT</CancelButton>
                                    </div>
                                </Col>

                            </Row> */}
                                </Card>
                            </>)
                        }
                    </Row>
                </MainContainer>
            </PrivateLayout>

        </>
    )
}

export default TourdetailsDashboard