import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { EditIcon, DeleteIcon, BusIcon } from "../../../assets/icons";
import busblack from '../../../assets/svg/bus-black.svg';
import callBack from "../../../assets/svg/call-black.svg";
import AccountCircleSmall from "../../../assets/AccountCircleSmall.svg";
import Bus from "../../../assets/bus.png";
import { useHistory } from "react-router-dom";
import AccountCircle from "../../../assets/svg/account_circle.svg"
import deleteIcon from "../../../assets/deleteIcon.svg"
import  editIcon from "../../../assets/Edit.svg"
import  noBooking  from "../../../assets/NoBooking.svg"

const MainContainer = styled.div` 
width:100%;
height:auto;

.list-group-item{
    border:none;
    border-top:none;
    border-bottom:none;
    border-radius: 0px;
  
    margin-top:-2px;
    padding: .12rem 1rem;
    &:hover{
    background:rgba(253, 109, 3, 0.1);
   
   }
  }
  .list-group{
 margin-top:0px;

 }
  .driverImage{
      width:3em;
      height:3em;
  }
   svg{
      position:relative;
      top:0.9em !important;
   }
   .ActiveList{
    background:rgba(253, 109, 3, 0.1);
  }

`;
const LowerLeftSide = styled.div` 
 display:inline-block;
 margin-left:-12px;
 top:-5px;
 
 position: relative;
 margin-top:20px;
 margin-bottom:10px;
 left:-3px;
    .Icon-Text{
    background: #1BBD2B;
    border-radius: 13px;
    padding:4px 17px;
    font-size:10px;
    margin-right:-2px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    line-height: 12px;
 
   }
   svg{
       position: relative;
       right:183px;
       top:0.3em !important;
     
    }
    .No-Booking{
        background: #808080;
        border-radius: 40px;
        padding: 5px 14px;
        text-align: left;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 12px;
        color:white;
        margin-left:-19px;
    }
    .bus-Icon{
        background:"red";
    }
    img{
        position:relative;
       left:-1px;
       width:10.5px;
       height:10.5px;
    }
   
   
  `;
  const DriverStatus=styled.span` 
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.015em;
  color: #000000;
  img{
        position:relative;
       left:-1px;
       width:10.5px;
       height:10.5px;
    }
  `;

const ListBox = styled.div` 
margin-top:-12px;
margin-bottom:0px;
border-top:none;
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
     top:1em;

  }
 

  `;
  const DriverNO=styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  position:relative;
  top:26px;
  left:-5px;
  `;
    const DriverName=styled.p` 
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    position:relative;
    top:21px;
    left:-5px;
 `;
 const ImageBus=styled.span`
 svg{
     position:relative;
     left:-140px;
     width:12px;
     height:14.25px;
     top: 6px !important;
 } 
 `
const VerticalLine = styled.span` 
border-left: 1px solid rgba(0, 0, 0, 0.5);
height:13px;
position:absolute;
top:6px;
/* left:96px; */
`;

const DriverListCard = ({ data, searchById, deleteById,scrollRef }) => {
    const { push } = useHistory();
    const [searchedId,setsearchedId]=useState("");
const SearchAndSetid=(itemid)=>{
  searchById(itemid);
  setsearchedId(itemid);
}
    return (
        console.log("driverLIst", data),
        data.map((item,i) => {
            // return (item.map((value) => {
            // console.log(value?.phoneNo[0]?.number)
            return (
                < >
                    <MainContainer key={item.id}>
                        <ListGroup ref={scrollRef}>
                            <ListGroup.Item  onClick={() => SearchAndSetid(item.id)}
                className={
                  item.id==searchedId?"ActiveList":""
                }
                            >
                                <ListBox >
                                    <Row>
                                        <Col sm="2">
                                            <img src={AccountCircle} alt="tour"  style={{position:"relative",top:"-12px"}}/>
                                            {/* {item.image ?

                                                    <img alt="Jenssen Dashboard" src={"https://jenssen-images.s3.eu-north-1.amazonaws.com/driverImage/driverImage-1642742499883.png"} className="driverImage"></img>
                                                    : <img alt="Jenssen Dashboard" src={"https://jenssen-images.s3.eu-north-1.amazonaws.com/driverImage/driverImage-1642742499883.png"} className="driverImage"></img>} */}

                                        </Col>
                                        <Col sm="8" style={{marginLeft:"-8px"}}>
                                            <DriverNO>{item?.driverNumber}</DriverNO>
                                            <DriverName>{item?.name}</DriverName>
                                            {/* {item?.status === "onTour" ? */}
                                                <LowerLeftSide>
                                                {item.status==="onTour"?<ImageBus><BusIcon/></ImageBus>:<img src={noBooking} style={{width:"12.5px",height:"12.5px",position:"relative",left:"8px",top:"1px"}}/>}&nbsp;&nbsp;&nbsp;<DriverStatus className={item.status==="onTour"?"Icon-Text":"No-Booking"}>{item.status==="onTour"?"On Tour":"No Booking"}</DriverStatus>&nbsp;&nbsp;
                                                    {item?.status ? <> <VerticalLine></VerticalLine></> : ""}&nbsp;&nbsp;<DriverStatus><img src={callBack} alt="tour" /> {item?.phoneNo&&item?.phoneNo[0].number} </DriverStatus>
                                                </LowerLeftSide> 
                                                {/* <LowerLeftSide> */}
                                                    {/* <img src={noBooking} className="noBookingImage"/> &nbsp;&nbsp;<span className="No-Booking">No Booking</span> {" "} */}
                                                    {/* |<span><img src={callBack} alt="tour" /> {item?.phoneNo[0]?.number} </span> */}
                                                {/* </LowerLeftSide> */}

                                            {/* } */}

                                        </Col><br/>

                                        <Col sm="1">

                                            {/* <DeleteIcon onClick={() => deleteById(item.id)} /> */}
                                            {/* <img src={editIcon} alt="tour" onClick={() => push("/tour-operator/driver/edit/" + item.id)} 
                                             style={{cursor:"pointer"}}
                                            /> */}
                                            {/* <EditIcon onClick={() => push("/tour-operator/driver/edit/" + item.id)}  */}
                                           
                                            {/* /> */}
                                        

                                        </Col>
                                        <Col sm="1">
                                        <img src={editIcon} alt="tour" onClick={() => push("/tour-operator/driver/edit/" + item.id)} 
                                             style={{cursor:"pointer"}}
                                            />
                                            {/* <img src={deleteIcon} alt="tour" onClick={() => deleteById(item?.id)}
                                             style={{cursor:"pointer"}}
                                            /> */}

                                        </Col>
                                    </Row>
                                </ListBox>
                            </ListGroup.Item>
                        </ListGroup>
                    </MainContainer>
                </>
            )
            // console.log(value.name)
            // }))
            // return (
            //     < >
            //         <MainContainer key={item.id}>
            //             <ListGroup>
            //                 <ListGroup.Item>
            //                     <ListBox >
            //                         <Row>
            //                             <Col sm="2">
            //                                 <img alt="Jenssen Dashboard" src={item.image} className="driverImage"></img>
            //                             </Col>
            //                             <Col sm="8">
            //                                 {/* <p>D-1001</p> */}
            //                                 <p>{item.name}</p>
            //                                 <LowerLeftSide>
            //                                 <BusIcon />&nbsp;&nbsp; <span className="Icon-Text">   {item.status}</span>
            //                                     <span> |   <img src={callBack} alt="tour" /> {item.phoneNo} </span>
            //                                 </LowerLeftSide>
            //                             </Col>
            //                             <Col sm="2">
            //                                 <div className="image-container">
            //                                     <EditIcon onClick={() => push("/tour-operator/driver/edit")} />
            //                                 </div>
            //                             </Col>
            //                         </Row>
            //                     </ListBox>
            //                 </ListGroup.Item>
            //             </ListGroup>
            //         </MainContainer>
            //     </>
            // )
        })
    )
}

export default DriverListCard;
