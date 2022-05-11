import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { EditIcon } from "../../../../assets/icons";
import AccountCircle from "../../../../assets/svg/account_circle.svg";
import Callblack from "../../../../assets/svg/call-black.svg"
import { useHistory } from "react-router-dom";

const MainContainer = styled.div` 
width:100%;
height:auto;
.list-group-item{
    border-bottom: 1px solid rgba(0,0,0,.125);
    border-radius: 0px;
    border-left: none;
    border-right: none;
    padding: .1rem 1rem;
    &:hover{
    background:rgba(253, 109, 3, 0.1);
   
   }
   
}
.ActiveList{
    background:rgba(253, 109, 3, 0.1);
  }
`;
const ListBox = styled.div` 
padding:10px;
`;
const TourName = styled.span` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 0.87);
`;

const Driver = styled.span` 
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 18px;
color: #000000;

`;
const Booking = styled.span`
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 18px;
color: #000000;
`;
const LowerSideSection = styled.div` 
display:flex;
position: relative;
top:px;
`

const TourOperatorCard = ({customerListDetails,searchById,scrollRef}) => {
    const { push } = useHistory();
    const [searchedId,setsearchedId]=useState("");
    const SearchAndSetid=(itemid)=>{
      searchById(itemid);
      setsearchedId(itemid);
    }
    // const data = props.data
    return (
        customerListDetails.map((item) => {
            console.log(item)
            return (
                < >
                    <MainContainer>
                        {/* <BookCardWrapper key={item.id}> */}
                        <ListGroup>
                            <ListGroup.Item onClick={() => SearchAndSetid(item._id)} ref={scrollRef} className={
                                        item._id==searchedId?"ActiveList":""
                                    }>
                                <ListBox>
                                    <Row>
                                        <Col md="2">
                                            <span> <img className="profile-image" src={AccountCircle} alt="tour" /></span>
                                        </Col>
                                        <Col md="9" >
                                            <TourName>{item.name}</TourName>
                                            <LowerSideSection>
                                            <span> <img  src={Callblack} alt="Call" /></span>&nbsp;
                                                <span><Driver>{item?.mobile[0]?.number}</Driver></span> &nbsp;&nbsp; | &nbsp;&nbsp;
                                                <span>   <Booking>{item.bookingCount}</Booking></span>
                                            </LowerSideSection>
                                        </Col>
                                        <Col md="1"><EditIcon style={{ cursor: "pointer" }} onClick={() => push("/admin/editcustomer/edit/" + item._id)} />
                                        </Col>
                                    </Row>
                                </ListBox>
                            </ListGroup.Item>
                        </ListGroup>
                        {/* </BookCardWrapper> */}
                    </MainContainer>

                </>
            )
        }

        ))
}
export default TourOperatorCard