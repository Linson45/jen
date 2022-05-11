import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { EditIcon, DeleteIcon } from "../../../../assets/icons";
import AccountCircle from "../../../../assets/svg/account_circle.svg"
import { useHistory } from "react-router-dom";
import editIcon from "../../../../assets/Edit.svg"
import Loader from "../../../../libs/_components/_ui/Loader";
 import ReactTooltip from "react-tooltip";

const MainContainer = styled.div` 
width:100%;
height:auto;
.ActiveList{
    background:rgba(253, 109, 3, 0.1);
  }
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
const Adress = styled.p` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.25px;
color: rgba(0, 0, 0, 0.6);
`;
const Driver = styled.span` 
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 18px;
color: rgba(0, 0, 0, 0.6);

`;
const Booking = styled.span` 
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 18px;
color: rgba(0, 0, 0, 0.6);
`;
const LowerSideSection = styled.div` 
display:flex;
`
const DriverCount=styled.span` 
color: #000000;
`;
const Overflowscroll = styled.div`
  display: block;
  height: 40px;
  overflow-y: scroll;
`;

const TourOperatorCard = ({ data, searchById,scrollRef }) => {
  const { push } = useHistory();
  const [searchedId,setsearchedId]=useState("");
  const SearchAndSetid=(itemid)=>{
    searchById(itemid);
    setsearchedId(itemid);
  }
  return (
    data.map((res) => {
      console.log(res)
      console.log(res?.address[0]?.country)
      return (
        <>
          <MainContainer>

            <ListGroup key={res.id}  ref={scrollRef}>
              <ListGroup.Item onClick={() => SearchAndSetid(res._id)} className={
                                        res._id==searchedId?"ActiveList":""
                                    }>
                <ListBox>
                  <Row>
                    <Col sm="2">
                      <span> <img className="profile-image" src={AccountCircle} alt="tour" /></span>
                    </Col>
                    <Col sm="8"  style={{marginLeft: "-20px"}}>
                      <TourName>{res.title}</TourName>
                      <Adress>{res?.address[0]?.city} {res?.address[0]?.country} {res?.address[0]?.zipCode}</Adress>
                      <LowerSideSection>
                        <span><Driver>Sjåfør:<DriverCount>{res.driverCount}</DriverCount></Driver></span> &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span><Booking>Bestilling:<DriverCount>{res.bookingCount}</DriverCount></Booking></span>
                      </LowerSideSection>
                    </Col>
                    <Col sm="1">
                    
                      {/* <EditIcon style={{ cursor: "pointer" }} onClick={() => push("/admin/tour-operator/edit/" + res._id)} /> */}
                    </Col>
                    <Col sm="1">
                    <img src={editIcon} alt="tour"data-tip data-for="happyFace" style={{cursor: "pointer"}} onClick={() => push("/admin/tour-operator/edit/" + res._id)} />
                    <ReactTooltip id="happyFace" aria-haspopup="Edit">
                    Edit
                  </ReactTooltip>
                    
                   
                      {/* <EditIcon style={{ cursor: "pointer" }} onClick={() => push("/admin/tour-operator/edit/" + res._id)} /> */}
                    </Col>
                  </Row>
                </ListBox>
              </ListGroup.Item>
            </ListGroup>
          </MainContainer>
        </>
      )
    })

    // const { push } = useHistory();
    // console.log(" props.data", props);
    //   const data = props.data[0]
    //   return(
    //       data!==""?
    //       data.map((item) => {
    //           console.log("item",item)
    //           return (
    //               < >
    //                 <MainContainer>
    //                   {/* <BookCardWrapper key={item.id}> */}
    //                   <ListGroup>
    //                     <ListGroup.Item>
    //                       <ListBox>
    //                         <Row>
    //                           <Col md="2"> 
    //                           <span> <img className="profile-image" src={AccountCircle} alt="tour" /></span>
    //                           </Col>
    //                           <Col md="9" >
    //                            <TourName>{item.title}</TourName>
    //                             <Adress>{item.address}</Adress>
    //                            <LowerSideSection>
    //                             <span><Driver>Sjåfør:{item.driverCount}</Driver></span>|
    //                              <span><Booking>Bestilling:{item.bookingCount}</Booking></span>
    //                             </LowerSideSection>
    //                            </Col>
    //                           <Col md="1"><EditIcon style={{cursor:"pointer"}} onClick={() => push("/admin/tour-operator/edit/"+item._id)} />
    //                          </Col>
    //                         </Row>
    //                       </ListBox>
    //                     </ListGroup.Item>
    //                   </ListGroup>
    //                   {/* </BookCardWrapper> */}
    //                 </MainContainer>

    //               </>
    //             )}

    //   ):<></>
  )
}
export default TourOperatorCard