import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import  {EditIcon}  from "../../../../assets/icons";
import busblack from '../../../../assets/svg/bus-black.svg';
import callBack from "../../../../assets/svg/call-black.svg";
import AccountCircleSmall from "../../../../assets/AccountCircleSmall.svg";


const MainContainer = styled.div` 
width:100%;
height:auto;

.list-group-item{
    border-bottom: 1px solid rgba(0,0,0,.125);
    border-radius: 0px;
    border-left: none;
    border-right: none;
    padding: .12rem 1rem;
  /* padding: */
  
    &:hover{
    background:rgba(253, 109, 3, 0.1);
   
   }

  }
  .list-group{
 margin-top:0px;
 .ActiveList{
    background:rgba(253, 109, 3, 0.1);
  }
  }

`;

const ListBox = styled.div` 
  
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
const LowerSideSection = styled.div` 
display:inline-block;
position: relative;
top:-13px;
img{
   /* position:relative; */
   /* top:-0.1em; */
   font-size:0.2em;
  }
`;

  
const BookingNo = styled.span` 
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
const BookingType = styled.span`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: #000000;
letter-spacing: 0.25px;
position: relative;

 `;
const BusIcon=styled.img` 

`;
const Busid=styled.span` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color:red;
letter-spacing: 0.25px;
color: rgba(0, 0, 0, 0.6);
`;
const Agend =styled.span`
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 18px;
letter-spacing: 0.0015em;
color: rgba(0, 0, 0, 0.6);

`;
const Booking=styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.25px;
color: rgba(0, 0, 0, 0.6); 

`;
const BookingCard = (props) => {
  console.log("props",props);
  const data = props.data;
  const scrollRef= props.scrollRef;
  const searchById=props.searchById;
  const [searchedId,setsearchedId]=useState("");
  const SearchAndSetid=(itemid)=>{
    searchById(itemid);
    setsearchedId(itemid);
  }
  return (
    data.map((item) => {
      console.log(searchedId,"searchedId")
      console.log(item._id,"item.id")
      return (
        < >
          <MainContainer>
            {/* <BookCardWrapper key={item.id}> */}
            <ListGroup>
              <ListGroup.Item onClick={()=>SearchAndSetid(item._id)}  ref={scrollRef} className={
                  item._id==searchedId?"ActiveList":"test"
                }>
                <ListBox>
                  <Row>
                    {/* <Col md="1"> </Col> */}
                    <Col md="10" >
                      {console.log("item",item)}
                      <BookingNo>{item.bookingId}</BookingNo>
                      <Name>{item.customerName}</Name>
                      <Booking> Bestillingstype: <BookingType>{item.tripType}</BookingType></Booking>
                      <LowerSideSection>
                      <span> <BusIcon src={busblack}/>  
                      <Busid>{item.vehicleRegistrationNumber}</Busid> </span>|
                      <span> <img src={AccountCircleSmall} alt=" "/>  
                      <Agend>{item.operatorName}</Agend></span>
                      </LowerSideSection>
                     </Col>
                    <Col md="2"><EditIcon style={{cursor:"pointer"}}/>
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

export default BookingCard;
