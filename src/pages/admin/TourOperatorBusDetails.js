import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../../libs/_layouts/PrivateLayout";
import { Row, Col, Card, Tabs, Tab } from "react-bootstrap";
import SearchWithFilter from "../../libs/_components/_ui/admin/SearchWithFilter";
import TourOperatorCard from '../../libs/_components/PageChildComponents/admin/TourOperatorCard';
import Account from "../../assets/svg/account_circle_bg.svg";
import Call from "../../assets/svg/call.svg";
import Email from "../../assets/svg/email.svg";
import Bookingcomission from "../../assets/svg/booking-comission.svg";
import GradientCard from "../../libs/_components/_ui/admin/GradientCard";
import whiteBus from "../../assets/svg/whiteBus.svg";
import { EditIcon } from "../../assets/icons";
import { LoadMore } from "../../libs/_components/_ui/Buttons";
import Bus from "../../assets/bus.png";
import { useHistory } from "react-router-dom";
import Loader from "../../libs/_components/_ui/Loader";
import { StyledButton } from "../../libs/_components/_ui/Buttons";
import {
    Heading,
} from "./../_styles/Common.style";
import AddToBus from "../../libs/_components/_ui/AddToBus";
import TourOperatotBusDetailsCard from "../../libs/_components/PageChildComponents/admin/TourOperatotBusDetailsCard"

const MainContainer = styled.div` 
position:relative;
  height: auto;
  width: 100%;
  .card{
      margin-top:10px;
      
  }
  .amount{
    
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #FD6D03;
   
  }
  .p-details{
    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.6);
    letter-spacing: 0.25px;
   
  }
  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: #FFFFFF;
    background-color: #FD6D03;
    border-color: #dee2e6 #dee2e6 #fff;
    padding: 10px 93px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
 
 }
 .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 18px;
    margin-bottom: 0;
    list-style: none;
 }
 .nav-tabs .nav-link {
    margin-bottom: -1px;
    background:#FFFFFF;
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    padding: 10px 80px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
 }
 .nav-tabs {
    border-bottom: none;
 }
 .spinner-border.text-secondary {
     margin-top:25rem;
     /* position:absolute;
      left:0;
      right:0;
      margin-left:auto;
      margin-right:auto; */
 
  }
 
 `;
const StyledLoadMore = styled(LoadMore)` 
   margin-top:12px;
`
const ListDetailBox = styled.div` `;
const LowerRightSideBlock = styled.div` 
 display:inline-block;
`;
const StyledParagraph = styled.div` 
margin-top:-12px;
display:flex;
`;
const EditIconSection = styled.div`
svg{
position: relative;
 left: -11px;
  cursor: pointer;
}
`;
const HeadingStyle = styled.h1` 
 
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.015em;
color: rgba(0, 0, 0, 0.87);
;
`;
const Paragraph = styled.p`

font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: rgba(0, 0, 0, 0.6);
letter-spacing: 0.25px;
`

const AddToBussection = styled.div` `
const Container = styled(Row)` 
width:100%;
height:auto;
margin:20px auto;
/* overflow:hidden; */
overflow-y:scroll;
height:350px;
`;
const TourOperatorBusDetails = () => {
    const [key, setKey] = useState('Buses');
    const [isloading, setIsLoading] = useState(false)
    const history = useHistory();
    const searchData = [
        {
            id: 1,
            tourName: "Richard Tours",
            adress: "Hagaløkkveien 26 Asker Tek Postbox 3 1371 Asker Norway",
            driver: "Sjåfør: 08",
            booking: "Bestilling: 10",

        },
        {
            id: 1,
            tourName: "Peter and sons Tours",
            adress: "Hagaløkkveien 26 Asker Tek Postbox 3 1371 Asker Norway",
            driver: "Sjåfør: 08",
            booking: "Bestilling: 10",
        },
        {
            id: 1,
            tourName: "VRL Logistics",
            adress: "Hagaløkkveien 26 Asker Tek Postbox 3 1371 Asker Norway",
            driver: "Sjåfør: 08",
            booking: "Bestilling: 10",
        },
        {
            id: 1,
            tourName: "Richard Tours",
            adress: "Hagaløkkveien 26 Asker Tek Postbox 3 1371 Asker Norway",
            driver: "Sjåfør: 08",
            booking: "Bestilling: 10",
        }
    ]
    const data = [
        {
            id: 1,
            busNo: "BS-1001",
            Seat: "Inntil 20 seter ",
            Amount: "12,000/-",

        },
        {
            id: 2,
            busNo: "BS-1002",
            Seat: "Inntil 20 seter ",
            Amount: "12,000/-",

        },
        {
            id: 3,
            busNo: "BS-1003",
            Seat: "Inntil 20 seter ",
            Amount: "12,000/-",

        },
        {
            id: 4,
            busNo: "BS-1004",
            Seat: "Inntil 20 seter ",
            Amount: "12,000/-",

        },
        {
            id: 4,
            busNo: "BS-1005",
            Seat: "Inntil 20 seter ",
            Amount: "12,000/-",

        },
        {
            id: 4,
            busNo: "BS-1005",
            Seat: "Inntil 20 seter ",
            Amount: "12,000/-",

        },
        {
            id: 4,
            busNo: "BS-1005",
            Seat: "Inntil 20 seter ",
            Amount: "12,000/-",

        },
        {
            id: 4,
            busNo: "BS-1005",
            Seat: "Inntil 20 seter ",
            Amount: "12,000/-",

        }

    ]
    const handleSelect = (key) => {

        if (key === "Booking") {
            history.push("/admin/tour-operator/booking");
        }

        else if (key === "Driver") {
            history.push("/admin/tour-operator");

        }
    }
    return (
        <>
            <PrivateLayout>
                <MainContainer>
                    <Row>
                        <Col md="6">
                            <Heading>Turoperatør</Heading>
                        </Col>
                        <Col md="6"><AddToBussection onClick={() => history.push("/admin/tour-operator/add")}><StyledButton> + Legg til Kunder</StyledButton></AddToBussection> </Col>
                    </Row>
                    <Row>
                        <Col sm="4">
                            <Card>
                                <SearchWithFilter AdminSearchTourOperator={true} />
                                <TourOperatorCard data={searchData} />
                            </Card>
                        </Col>
                        <Col xs sm="8" >
                            <Card>
                                <Card.Body style={{ minHeight: "600px" }}>

                                    <ListDetailBox>
                                        <Row>
                                            <Col md="1">
                                                <img src={Account} alt="tour" />
                                            </Col>
                                            <Col md="9">
                                                <h5 className="h5-details">Richard Tours</h5>
                                                <span className="span-details ">Richard Schwell</span>
                                                <p className="p-details">Hagaløkkveien 26 Asker Tek Postbox 3 1371 Asker Norway</p>
                                                <Row>
                                                    <LowerRightSideBlock>
                                                        <span className="Icon-Text"> <img src={Call} alt="Bookingcomission" />  090-900-92092  </span>
                                                        | <span>  <img src={Email} alt="email" /> richardswell@gmail.om </span>
                                                        |<span> <img src={Bookingcomission} alt="Bookingcomission" />  % Provisjon per bestilling: 20%</span>
                                                    </LowerRightSideBlock>
                                                </Row>
                                            </Col>
                                            <Col md="2">
                                                {/* <CheckBoxWrapper>
                                                    <span className="side-span-details" > Aktiv Turoperatør</span>
                                                    <CheckBox id="checkbox" type="checkbox" />
                                                    <CheckBoxLabel htmlFor="checkbox" />
                                                </CheckBoxWrapper> */}
                                            </Col>
                                        </Row>
                                    </ListDetailBox>
                                    <Row className="mt-4">
                                        <Tabs id="uncontrolled-tab-example" className="mb-3"
                                            activeKey={key}
                                            //  onSelect={(k) => setKey(k)}
                                            onSelect={handleSelect}
                                        >
                                            <Tab eventKey="Driver" title="Sjåfør: 08">
                                            </Tab>
                                            <Tab eventKey="Booking" title="Bestilling: 10">
                                            </Tab>
                                            <Tab eventKey="Buses" title="Busser: 08" >
                                            </Tab>
                                        </Tabs>
                                    </Row>
                                    {
                                        isloading ?
                                            <Loader /> :
                                            <>
                                                <Container>
                                                    <TourOperatotBusDetailsCard data={data} />
                                                </Container>


                                                {/* <Row style={{ margin: "8px -10px" }} >
                                                    <Col>
                                                        <Card>
                                                            <Card.Body style={{ padding: "6px", marginBottom: "-5px" }}>
                                                                <Row>
                                                                    <Col sm="4">
                                                                        <img src={whiteBus} alt="tour" />
                                                                    </Col>
                                                                    <Col sm="6" style={{ marginLeft: "18px" }}>
                                                                        <HeadingStyle>BS-1001</HeadingStyle>
                                                                        <Paragraph>Inntil 20 seter </Paragraph>
                                                                        <StyledParagraph>
                                                                            <h6>Fra </h6>
                                                                            <span className="amount" >12,000/-</span>
                                                                        </StyledParagraph>
                                                                    </Col>
                                                                    <Col sm="1">
                                                                        <EditIconSection>
                                                                            <EditIcon onClick={() => history.push("/admin/tour-operator/busdescription")} />
                                                                        </EditIconSection>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col>
                                                        <Card >
                                                            <Card.Body style={{ padding: "6px", marginBottom: "-5px" }}>
                                                                <Row>
                                                                    <Col sm="4">
                                                                        <img src={whiteBus} alt="tour" />
                                                                    </Col>
                                                                    <Col sm="6" style={{ marginLeft: "18px" }}>
                                                                        <HeadingStyle>BS-1001</HeadingStyle>
                                                                        <Paragraph>Inntil 20 seter </Paragraph>
                                                                        <StyledParagraph>
                                                                            <h6>Fra </h6>
                                                                            <span className="amount" >12,000/-</span>
                                                                        </StyledParagraph>
                                                                    </Col>
                                                                    <Col sm="1">
                                                                        <EditIconSection>
                                                                            <EditIcon onClick={() => history.push("/admin/tour-operator/busdescription")} />
                                                                        </EditIconSection>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col>
                                                        <Card >
                                                            <Card.Body style={{ padding: "6px", marginBottom: "-5px" }} >
                                                                <Row>
                                                                    <Col sm="4">
                                                                        <img src={whiteBus} alt="tour" />
                                                                    </Col>
                                                                    <Col sm="6" style={{ marginLeft: "18px" }}>
                                                                        <HeadingStyle>BS-1001</HeadingStyle>
                                                                        <Paragraph>Inntil 20 seter </Paragraph>
                                                                        <StyledParagraph>
                                                                            <h6>Fra </h6>
                                                                            <span className="amount" >12,000/-</span>
                                                                        </StyledParagraph>
                                                                    </Col>
                                                                    <Col sm="1">
                                                                        <EditIconSection>
                                                                            <EditIcon onClick={() => history.push("/admin/tour-operator/busdescription")} />
                                                                        </EditIconSection>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row> */}
                                                {/* <Row>
                                                    <Col>
                                                        <Card style={{ marginTop: "0px" }}>
                                                            <Card.Body style={{ padding: "6px", marginBottom: "-5px" }}>
                                                                <Row>
                                                                    <Col sm="4">
                                                                        <img src={whiteBus} alt="tour" />
                                                                    </Col>
                                                                    <Col sm="6" style={{ marginLeft: "18px" }}>
                                                                        <HeadingStyle>BS-1001</HeadingStyle>
                                                                        <Paragraph>Inntil 20 seter </Paragraph>
                                                                        <StyledParagraph>
                                                                            <h6>Fra </h6>
                                                                            <span className="amount" >12,000/-</span>
                                                                        </StyledParagraph>
                                                                    </Col>
                                                                    <Col sm="1">
                                                                        <EditIconSection>
                                                                            <EditIcon onClick={() => history.push("/admin/tour-operator/busdescription")} />
                                                                        </EditIconSection>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col >
                                                        <Card style={{ marginTop: "0px" }}>
                                                            <Card.Body style={{ padding: "6px", marginBottom: "-5px" }}>
                                                                <Row>
                                                                    <Col sm="4">
                                                                        <img src={whiteBus} alt="tour" />
                                                                    </Col>
                                                                    <Col sm="6" style={{ marginLeft: "18px" }}>
                                                                        <HeadingStyle>BS-1001</HeadingStyle>
                                                                        <Paragraph>Inntil 20 seter </Paragraph>
                                                                        <StyledParagraph>
                                                                            <h6>Fra </h6>
                                                                            <span className="amount" >12,000/-</span>
                                                                        </StyledParagraph>
                                                                    </Col>
                                                                    <Col sm="1">
                                                                        <EditIconSection>
                                                                            <EditIcon onClick={() => history.push("/admin/tour-operator/busdescription")} />
                                                                        </EditIconSection>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col >
                                                        <Card style={{ marginTop: "0px" }}>
                                                            <Card.Body style={{ padding: "6px", marginBottom: "-5px" }}>
                                                                <Row>
                                                                    <Col sm="4">
                                                                        <img src={whiteBus} alt="tour" />
                                                                    </Col>
                                                                    <Col sm="6" style={{ marginLeft: "18px" }}>
                                                                        <HeadingStyle>BS-1001</HeadingStyle>
                                                                        <Paragraph>Inntil 20 seter </Paragraph>
                                                                        <StyledParagraph>
                                                                            <h6>Fra </h6>
                                                                            <span className="amount" >12,000/-</span>
                                                                        </StyledParagraph>
                                                                    </Col>
                                                                    <Col sm="1">
                                                                        <EditIconSection>
                                                                            <EditIcon onClick={() => history.push("/admin/tour-operator/busdescription")} />
                                                                        </EditIconSection>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row> */}
                                                {/* <Row>
                                                    <Col sm="4">
                                                        <Card >
                                                            <Card.Body style={{ padding: "6px", marginBottom: "-5px" }}>
                                                                <Row>
                                                                    <Col sm="4">
                                                                        <img src={whiteBus} alt="tour" />
                                                                    </Col>
                                                                    <Col sm="6" style={{ marginLeft: "18px" }}>
                                                                        <HeadingStyle>BS-1001</HeadingStyle>
                                                                        <Paragraph>Inntil 20 seter </Paragraph>
                                                                        <StyledParagraph>
                                                                            <h6>Fra </h6>
                                                                            <span className="amount" >12,000/-</span>
                                                                        </StyledParagraph>
                                                                    </Col>
                                                                    <Col sm="1">
                                                                        <EditIconSection>
                                                                            <EditIcon onClick={() => history.push("/admin/tour-operator/busdescription")} />
                                                                        </EditIconSection>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col sm="4">
                                                        <Card  >
                                                            <Card.Body style={{ padding: "6px", marginBottom: "-5px" }}>
                                                                <Row>
                                                                    <Col sm="4">
                                                                        <img src={whiteBus} alt="tour" />
                                                                    </Col>
                                                                    <Col sm="6" style={{ marginLeft: "18px" }}>
                                                                        <HeadingStyle>BS-1001</HeadingStyle>
                                                                        <Paragraph>Inntil 20 seter </Paragraph>
                                                                        <StyledParagraph>
                                                                            <h6>Fra </h6>
                                                                            <span className="amount" >12,000/-</span>
                                                                        </StyledParagraph>
                                                                    </Col>
                                                                    <Col sm="1">
                                                                        <EditIconSection>
                                                                            <EditIcon onClick={() => history.push("/admin/tour-operator/busdescription")} />
                                                                        </EditIconSection>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col sm="4"></Col>
                                                </Row> */}

                                            </>
                                    }

                                    <Row>
                                        <Col md="4"> </Col>
                                        <Col md="4">
                                            <StyledLoadMore>Last mer</StyledLoadMore>
                                        </Col>
                                        <Col md="4"> </Col>

                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </MainContainer>
            </PrivateLayout>
        </>
    )
}
export default TourOperatorBusDetails
