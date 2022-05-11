import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../../libs/_layouts/PrivateLayout";
import { Row, Col, Card, Tabs, Tab } from "react-bootstrap";
import SearchWithFilter from "../../libs/_components/_ui/admin/SearchWithFilter";
import TourOperatorCard from '../../libs/_components/PageChildComponents/admin/TourOperatorCard';
import Account from "../../assets/svg/account_circle_bg.svg";
import Call from "../../assets/svg/call.svg";
import Email from "../../assets/svg/email.svg";
import { ViewIcon } from "../../assets/icons";
import Bookingcomission from "../../assets/svg/booking-comission.svg";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "../../libs/_components/_ui/table";
import { LoadMore } from "../../libs/_components/_ui/Buttons";
import { useHistory } from "react-router-dom";
import Loader from "../../libs/_components/_ui/Loader"
import { StyledButton } from "../../libs/_components/_ui/Buttons";
import {
  Heading,
} from "../_styles/Common.style";
import AddToBus from "../../libs/_components/_ui/AddToBus";



const MainContainer = styled.div` 
  height: auto;
  width: 100%;
  .card{
    margin-top:10px;
    /* margin-bottom: 10px; */
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
    padding: 10px 90px;
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
const ListDetailBox = styled.div` 
  .span-details{

font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 36px;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 0.87);
   
  }
  .p-details{
    
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
letter-spacing: 0.0015em;
color: rgba(0, 0, 0, 0.5);
  }
  .h5-details{
    
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 36px;
color: rgba(0, 0, 0, 0.87);
  }
  .span-details {
    
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 36px;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 0.87);
 }
 `;
const LowerRightSideBlock = styled.div` 
 display:inline-block;
`;
const CheckBoxWrapper = styled.div`
 display:inline-block;
 justify-items:right;
 /* position:relative; */
 
 span{
   margin-left:-30px;
  
 }
 .side-span-details{
  
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.25px;
color: rgba(0, 0, 0, 0.6);
position:relative;
left:-30px;
 }
 `;
const CheckBoxLabel = styled.label`
 position:relative;
 bottom:20px;
 /* left:60px; */
 float:right;
 width: 40%;
 height: 26px;
 border-radius: 35px;
 background: #bebebe;
 cursor: pointer;
 &::after {
   content: "";
   display: block;
   border-radius: 40px;
   width: 18px;
   height: 18px;
   margin: 3px;
   background: #ffffff;
   box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
   transition: 0.2s;
 }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 40px;
  width: 22px;
  height: 16px;

  &:checked + ${CheckBoxLabel} {
    background: #1BBD2B;
    &::after {
      content: "";
      display: block;
      border-radius: 40px;
      width: 18px;
      height: 18px;
      margin-left: 26px;
      transition: 0.2s;
    }
  }
`;
const FilterSection = styled.div`
display:flex;
justify-content:end; 
outline:none;
position:relative;
top:15px;
`;
const AddToBussection = styled.div``
const StyledDropDown = styled(DropdownButton)` 

.dropdown-toggle{
  position: relative;
  top:-5px;
  left:0px;
  background: #FFFFFF;
  outline:none;
  color: rgba(33, 33, 33, 0.87);
  
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  border:1px solid #000000;
  padding:5px 17px;
}
`;
const StyledViewIcon = styled.div`
 
 font-style: normal;
 font-weight: bold;
 font-size: 14px;
 line-height: 16px;
 color: #FD6D03;
 letter-spacing: 0.01em;
  svg {
    font-size: 18px;
    cursor: pointer;
  }
`;

const TourOperatorBooking = () => {
  const [isloading, setLoading] = useState(false)
  const [key, setKey] = useState('Booking');
  const history = useHistory();
  const scrollRef = useRef(null)
  const data = React.useMemo(
    () => [

      { "college": "12131313", "language": "20-09-2021", "city": "20-09-2021" },
      { "college": "12131313", "language": "20-09-2021", "city": "20-09-2021" },
      { "college": "12131313", "language": "20-09-2021", "city": "20-09-2021" },
      { "college": "12131313", "language": "20-09-2021", "city": "20-09-2021" },
      { "college": "12131313", "language": "20-09-2021", "city": "20-09-2021" },
      { "college": "12131313", "language": "20-09-2021", "city": "20-09-2021" },
      { "college": "12131313", "language": "20-09-2021", "city": "20-09-2021" },
      { "college": "12131313", "language": "20-09-2021", "city": "20-09-2021" },


    ])
  const columns = React.useMemo(
    () => [
      {
        Header: "Tour ID",
        accessor: "college",
      },
      {
        Header: "Start Date",
        accessor: "language",
      },
      {
        Header: "End Date",
        accessor: "city",
      },

      {
        Header: "Action",
        Cell: (props) => (
          <StyledViewIcon>
            <ViewIcon />View Tour Detail
          </StyledViewIcon>
        ),
      },
    ],
    []
  );
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

  const handleSelect = (key) => {

    if (key === "Buses") {
      history.push("/admin/tour-operator/busdetails");
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
            <Col md="6"><AddToBussection onClick={() => history.push("/admin/tour-operator/add")}><StyledButton> + Legg til Turoperatør</StyledButton></AddToBussection> </Col>
            {/* <Col md="6"> <AddToBus AddTourOperator={true} /></Col> */}
          </Row>
          <Row>
            <Col sm="4">
              {/* <Card> */}
                <SearchWithFilter AdminSearchTourOperator={true} />
                <TourOperatorCard data={searchData} />
              {/* </Card> */}
            </Col>
            <Col xs sm="8">
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
                        <CheckBoxWrapper>
                          <span className="side-span-details" > Aktiv Turoperatør</span>
                          <CheckBox id="checkbox" type="checkbox" />
                          <CheckBoxLabel htmlFor="checkbox" />
                        </CheckBoxWrapper>
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
                        <Row>
                          <Col>
                            <FilterSection>
                              <label className="styled-labels">Filter By:</label>
                              <StyledDropDown
                                variant="none"
                                align="end"
                                title="Ongoing"
                              >
                                <Dropdown.Item>Upcoming</Dropdown.Item>
                                <Dropdown.Item> Completed </Dropdown.Item>
                              </StyledDropDown>
                            </FilterSection>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="12" className="mt-4">
                            <Table
                              columns={columns}
                              data={data}
                              scrollRef={scrollRef}
                              adminTourOperatorBooking={true}
                              isloading={isloading}
                            />
                          </Col>
                        </Row>
                        </>
                        }
                        <Row>
                          <Col md="4"> </Col>
                          <Col md="4">
                            <LoadMore >Last mer</LoadMore>
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
export default TourOperatorBooking