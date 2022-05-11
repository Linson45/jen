import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { EditIcon, DeleteIcon } from "../../../assets/icons";
import busblack from '../../../assets/svg/bus-black.svg';
import callBack from "../../../assets/svg/call-black.svg";
import AccountCircleSmall from "../../../assets/AccountCircleSmall.svg";
import Bus from "../../../assets/bus.png";
import { useHistory } from "react-router-dom";
import { PrivateRoute } from '../../../routes/routes';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import deleteIcon from "../../../assets/deleteIcon.svg"
import editIcon from "../../../assets/Edit.svg"
import imageNotFound from "../../../assets/photo-placeholder.png"
const MainContainer = styled.div` 
width:100%;
height:auto;

.detailsDiv{
margin-top:10px;
margin-left:-30px;
}
.list-group-item{
border:none;
border-radius: 0px;
border-left: none;
border-right: none;
/* padding: .12rem 1rem; */
margin-top:0px;

&:hover{
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
margin-top:-10px;
margin-bottom:-10px;
border:none;
border-bottom: 1px ridge rgba(0,0,0,0.115);
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
const Fare = styled.p` 
font-size: 14px;
color: rgba(0, 0, 0, 0.6);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
letter-spacing: 0.25px;
color: rgba(0, 0, 0, 0.6);
  /* margin-bottom:20px; */
span{
    color: #FD6D03;
}

`;
const BusId = styled.span` 
  /* font-family: Roboto; */
font-style: normal;
font-weight:500;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 0.87);
`;
const Seat = styled.span`
color: rgba(0, 0, 0, 0.6);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
color: rgba(0, 0, 0, 0.6);
letter-spacing: 0.25px;
 
`;
const VIPtag=styled.div` 
width: 35px;
height: 16px;
background: #FD6D03;
border-radius: 56px;
/* font-family: 'Montserrat'; */
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
color: #FFFFFF;
position:relative;
top:-53px;
left:42px;
padding-top:4px ;
padding-left:8px;

`

const BusListCard = ({ data, searchById, deleteById,scrollRef }) => {

  const { push } = useHistory();
  const [searchedId,setsearchedId]=useState("");
  const SearchAndSetid=(itemid)=>{
    searchById(itemid);
    setsearchedId(itemid);
  }
  return (
    data.map((item,i) => {
      // console.log(data) 
      // const onError= (onError)=>{
      //   console.log("image",onError)
      //   console.log(item.basePrice)
      // }
      return (
        < >
          <MainContainer key={item.id} ref={scrollRef}>
            <ListGroup  ref={scrollRef}>
              <ListGroup.Item onClick={() => SearchAndSetid(item.id)}
                className={
                  item.id==searchedId?"ActiveList":""
                }
              >
                <ListBox>
                  <Row>
                    <Col sm="4">
                    
                      {
                        item.category==="VIP"  ?
                        <>
                        <img alt="busImage" src={item.image} onError={(e) => { e.target.onError = null; e.target.src = imageNotFound }}
                        width="80px" height="65px" style={{position:"relative",top:"7px",bottom:"8px"}} /> <VIPtag>{ item.category}</VIPtag></>||
                        <img alt="busImage" src={item.image} onError={(e) => { e.target.onError = null; e.target.src = imageNotFound }}
                        width="80px" height="65px" />
                        :  <img width="80px" height="70px" src={imageNotFound} alt="tour" style={{position:"relative",top:"0px"}} ></img>
                      
                      }
                    
                      {/* {
                        item.image ?
                          <img alt="busImage" src={item.image} onError={(e) => { e.target.onError = null; e.target.src = item.image }}
                            width="80px" height="60px" /> : <span>No Image</span>
                      } */}

                    </Col>
                    <Col sm="6" className='detailsDiv'>
                      <BusId>{item.name}</BusId><br />
                      <Seat>Opp til {item.noOfSeats} seter</Seat>
                      <Fare>Fra <span>{item.basePrice}</span></Fare>
                    </Col>
                    <Col sm="1">
                      <img src={editIcon} alt="tour" onClick={() => push("/tour-operator/bus/edit/" + item.id)}
                        style={{ cursor: "pointer",position:"relative",left:"1.1rem" }}
                      />
                    </Col>
                    <Col sm="1">
                      <img src={deleteIcon} alt="tour" onClick={() => deleteById(item.id)}
                        style={{ cursor: "pointer",position:"relative",left:"1.5rem"  }}
                      />

                    </Col>
                  </Row>

                </ListBox>
              </ListGroup.Item>
            </ListGroup>
          </MainContainer>
        </>
      )
    })
  )
}

export default BusListCard;
