import React from 'react'
import styled from 'styled-components'
import { Row, Col, Card } from "react-bootstrap";
import AccountCircle from "../../../../assets/svg/account_circle.svg";
import { EditIcon, BusIcon } from "../../../../assets/icons";
import { useHistory } from "react-router-dom";

const StyledDiv = styled.div` 
    width: 33%;
    height:auto;
    background:#fff;
    margin:0px ;
    display:flex;
    position:relative;
  
    .card{
        height:100px;
        margin-bottom:-10px ;
        background:white;
        padding-bottom:-20px;
     /* min-height:120px; */
     /* height:20px; */
 
   }
   .card-body{
    height:100px;
     margin-top:0px;

    }
  `;

const DriverNo = styled.h1`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 1);
`;
const Paragraph = styled.p`
font-style: normal;
font-weight: normal;
font-size: 14.8px;
line-height:0px;
letter-spacing: 0.25px;
color: rgba(0, 0, 0, 0.6);

`;
const LowerLeftSide = styled.div` 
 margin-left:17px;
 /* top: -2px;
 position: relative; */
margin-top:0px;
 
 .Icon-Text{
    background-color: #1BBD2B;
    border-radius: 13px;
    padding:8px 20px;
    font-size:10px;
    margin-right:30px;
    color:white;
   
   }
  
    svg{
      position: relative;
      left:32px; 
   }
   
`

const TourOperatorDriverDetailsCard = ({ driverDetails }) => {
    console.log(driverDetails)
    const { push } = useHistory();

    return (

        driverDetails.map((res) => {

            return (
                <>
                    <StyledDiv>
                        <Card>
                            <Card.Body >

                                <Row>

                                    <Col md="3"><img src={AccountCircle} alt="tour" /></Col>

                                    <Col md="7">
                                        <DriverNo>Bs-1001</DriverNo>
                                        <Paragraph>{res.firstName}</Paragraph>
                                    </Col>
                                    <Col md="1">
                                        <EditIcon  onClick={() => push("admin/tour-operator/driverdetails")}/>
                                    </Col>
                                    <LowerLeftSide>
                                        {

                                            res.currentStatus === "onTour" ?
                                                <>

                                                    <BusIcon />&nbsp; &nbsp;<span className="Icon-Text">{res.currentStatus}</span>
                                                </>
                                                :
                                                res.currentStatus === "No Booking" ?
                                                    <>
                                                        <BusIcon />&nbsp; &nbsp;<span className="Icon-Text" style={{ background: "#808080" }}>{res.currentStatus}</span>
                                                    </>
                                                    :
                                                    <>
                                                        <BusIcon />&nbsp; &nbsp;<span className="Icon-Text" style={{ background: "#0385FD" }}>{res.currentStatus}</span>
                                                    </>
                                        }

                                    </LowerLeftSide>


                                </Row>

                            </Card.Body>
                        </Card>
                    </StyledDiv>

                </>
            )

        }
        )
    )
}
export default TourOperatorDriverDetailsCard