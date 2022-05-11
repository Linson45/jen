import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { EditIcon } from "../../../assets/icons";
import busblack from '../../../assets/svg/bus-black.svg';
import callBack from "../../../assets/svg/call-black.svg";
// import AccountCircleSmall from "../../../../assets/AccountCircleSmall.svg";


const MainContainer = styled.div` 
width:100%;
height:auto;

.list-group-item{
    border-top:none;
    border-bottom:none;
    border-radius: 0px;
    border-left: none;
    border-right: none;
    padding: .12rem 1rem;
    margin-top:-2px;
    &:hover,
    &:active
   {
    background:rgba(253, 109, 3, 0.1);
   
   }
  }
  .list-group{
   margin-top:0px;
  }
  .ActiveList{
    background:rgba(253, 109, 3, 0.1);
  }
 
`;

const ListBox = styled.div` 
margin-top:6px;
   border-bottom: 1px solid rgba(0,0,0,.115);
  .row {
    flex-direction: row;
    vertical-align: text-bottom;
    align-content: center;
    align-items: center;
    
  }
  svg{
     float:right;
     position:relative;
     top:-1em;

  }
`;
const LowerLeftSide = styled.div` 
display:inline-block;
position: relative;
top:-13px;
img{
   font-size:0.2em;
  }
`;


const TourNo = styled.span` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.15px;
color: #FD6D03;
`;
const Name = styled.h1`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.25px;
color: rgba(0, 0, 0, 0.6);

`;
const BookingType = styled.p`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: rgba(0, 0, 0, 0.6);
letter-spacing: 0.25px;
position: relative;
bottom:7px;
 `;

const TurCard = ({ data, searchById, scrollRef }) => {
  console.log("props", data);
const [searchedId,setsearchedId]=useState("");
const SearchAndSetid=(itemid,i)=>{
  searchById(itemid, i);
  setsearchedId(itemid);
}
  // const data = props.
  return (
    data.map((item, i) => {
      console.log("tour", item)
      return (
        < >
          <MainContainer key={item._id}>
          
            {/* <BookCardWrapper key={item.id}> */}
            {console.log(searchedId,"searchedId")}
            <ListGroup ref={scrollRef}>
              <ListGroup.Item onClick={() => SearchAndSetid(item._id, i)}
                className={
                  item._id==searchedId?"ActiveList":""
                }
              >
                {console.log(data[0])}
                <ListBox >
                  <Row>
                    {/* <Col md="1"> </Col> */}
                    <Col md="9" >
                      <TourNo>{item.bookingId}</TourNo>
                      <Name>{item.customerName}</Name>
                      <BookingType>Bestillingstype: <span style={{fontWeight:"700"}}>{item.tripType}</span></BookingType>
                      <LowerLeftSide>
                        <img src={busblack} alt="tour" />&nbsp;&nbsp; <span className="Icon-Text"> {item.vehicleRegistrationNumber}</span>
                        <span> |   <img src={callBack} alt="tour" /> <a href={"tel:" + item.customerMobile?.length > 0 && item.customerMobile[0].number}>{item.customerMobile?.length > 0 && item.customerMobile[0].number}</a> </span>
                      </LowerLeftSide>
                    </Col>
                    <Col md="1"> </Col>
                    <Col md="2"><EditIcon style={{ cursor: "pointer" }} />
                    </Col>
                  </Row>
                </ListBox>
              </ListGroup.Item>
            </ListGroup>
            {/* </BookCardWrapper> */}
          </MainContainer>

        </>
      )
    })
  )

}

export default TurCard;
