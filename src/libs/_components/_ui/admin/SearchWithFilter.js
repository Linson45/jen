import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Row, Col, Card } from "react-bootstrap";
import { MDBCol } from "mdbreact";
import { Search, FilterIcon } from "../../../../assets/icons";
import Serach from "../../../../assets/svg/search.svg";
import Filter from "../Filter";
const MainContainer = styled.div` 
width:100%;
height:auto;
.card{
border:none;
width:100%;
background:transparent;
}
.card .card-body{
height:92px;
min-height:0px;
padding:0px 10px ;
}
.searchIcon{
position: relative; 
left:0.59em;
top: -2.6em;
width:17.49px;
height:17.49px;
}
`;
const SearchSections = styled.div`
display:flex;
justify-content:center;
background:white;
margin-bottom:5px;
height:92px;
border-radius: none;
box-shadow:  0px 8px 10px rgba(0, 0, 0, 0.14);
.form-control{
background: #FFFFFF;
padding:18px 50px;
width:100%;
box-shadow:  0px 8px 10px rgba(0, 0, 0, 0.14);
margin-top:14px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border:none;
::placeholder {
color: rgba(0, 0, 0, 0.87);
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.15px;
}
&:focus {
outline: none;
::placeholder {
/* color: transparent; */
}
}
}
img{
position:relative;
top:-38px;
margin-left: 8px;
}
.form-control-Driver{
background: rgba(33, 33, 33, 0.08);
padding:18px 50px;
width:100%;
margin-top:14px;
border:none;
::placeholder {
color: rgba(0, 0, 0, 0.87);
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.15px;
}
&:focus {
outline: none;
::placeholder {
color: transparent;
}
}
}

.searchDriver{
position:relative;
top:-40px;
margin-left:19px;
width:17.49px;
height:17.49px;
}
`;
const FilterSection = styled.div` 
top:12px;
position:relative;
`;

const SearchWithFilter = ({
  SearchDriver,
  SearchBooking,
  AdminSearchTourOperator,
  SearchBuses,
  BusType,
  DriverType,
  SearchTur,
  SearchCustomer,
  AdminSearchCustomer,
  SearchTourOp,
  SearchBookingCust,
  TurType,
  handleTypeTur,
  handleBookingType
}) => {

  return (
    <>
      <MainContainer>
        <Row>
          <Card>
            <Card.Body>
              <Row>
                <SearchSections>
                  {SearchDriver ?
                    <>
                      <MDBCol md="12">
                        <input
                          style={{ height: "58px" }}
                          className="form-control"
                          type="text"
                          placeholder="Search Sjåfør"
                          aria-label="Search"
                          onChange={(e) => DriverType(e.target.value)}
                        />
                        <img src={Serach} alt="" className="searchDriver" />
                      </MDBCol>
                      {/* <Col md="2"> */}
                      {/* <FilterSection> <Filter /> </FilterSection> */}
                      {/* </Col> */}
                    </> : null}

                  {SearchBooking ?
                    <>
                      <MDBCol md="10">
                        <input
                          style={{ height: "58px" }}
                          className="form-control"
                          type="text"
                          placeholder="Search Bestilling"
                          aria-label="Search"
                          onChange={(e) => SearchBookingCust(e.target.value)}
                        />
                        <img src={Serach} alt=""  style={{ position: "relative", left: "0.8em", top: "-2.4em" }} />
                      </MDBCol>
                      <Col md="2">
                        <FilterSection><Filter handleTypeTur={handleTypeTur} handleBookingType={handleBookingType} /></FilterSection>
                      </Col></> : null}

                  {AdminSearchTourOperator ?
                    <>
                      <MDBCol md="12">
                        <input
                         style={{paddingLeft:"68px"}}
                          className="form-control"
                          type="text"
                          placeholder="Search Turoperatør"
                          aria-label="Search"
                          onChange={(e) => SearchTourOp(e.target.value)}
                        />
                        <img src={Serach} alt="" className='searchIcon'/>
                      </MDBCol>
                    </> : null}
                  {AdminSearchCustomer ?
                    <>
                      <MDBCol md="12">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search Turoperatør"
                          aria-label="Search"
                          onChange={(e) => SearchCustomer(e.target.value)}
                        />
                        <img src={Serach} alt="" className='searchIcon' />
                      </MDBCol>
                    </> : null}

                  {SearchBuses ?
                    <>
                      <MDBCol md="12">
                        <input
                          className="form-control"
                          type="text"
                          placeholder={"Search Busser"}
                          aria-label="Search"
                          onChange={(e) => BusType(e.target.value)}

                        />
                        <img src={Serach} alt="" className='searchIcon' />
                      </MDBCol>
                    </> : null}

                  {SearchTur ?
                    <>
                      <MDBCol md="10">
                        <input
                          style={{ height: "58px", marginTop: "14px" }}
                          className="form-control"
                          type="text"
                          placeholder="Search Tur"
                          aria-label="Search"
                          onChange={(e) => TurType(e.target.value)}

                        />
                        <img src={Serach} alt="" style={{ position: "relative", left: "0.59em", top: "-2.4em",width:"17.49px",height:"17.49px" }} />
                      </MDBCol>
                      <Col md="2">
                        <FilterSection><Filter handleTypeTur={handleTypeTur} handleBookingType={handleBookingType} /></FilterSection>
                      </Col>
                    </> : null}
                </SearchSections>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </MainContainer>
    </>
  )
}
export default SearchWithFilter