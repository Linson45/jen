import React from 'react'
import styled from 'styled-components'
import { Row, Col, Card } from "react-bootstrap";
import whiteBus from "../../../../assets/svg/whiteBus.svg";
import { EditIcon } from "../../../../assets/icons";
import { useHistory } from "react-router-dom";
import imageNotFound from "../../../../assets/photo-placeholder.png"
const StyledDiv = styled.div` 
    width: 33%;
    height:auto;
    background:#fff;
    margin:-4px;
    display:flex;
    
   .card{
  
    height:88px;
    }
    .card-body{
        height:88px;
     padding-left:33px;
     padding-right: -50px;
    
    }
    img{
        position:relative;
         top:-0.4em;
         right:1.8em;

    }
   svg{
    cursor: pointer;
     
   }
`;
const StyledParagraph = styled.div` 
margin-top:-15px;
display:flex;
.amount{
    color:#FD6D03;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.25px;
margin-left:15px;
}
.P-details{
    color: rgba(0, 0, 0, 0.87);
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;
margin-left: 72px;
}

`;
const HeadingStyle = styled.h1` 
font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 12px;
color: rgba(0, 0, 0, 0.87);
letter-spacing: 0.25px;
position: relative;
top:12px;
left:10px;

`;
const Paragraph = styled.p`
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 16px;
letter-spacing: -0.015em;
color: rgba(0, 0, 0, 0.87);
position: relative;
top:5px;
left:10px;

`;
const TourOperatotBusDetailsCard = ({ busDetails, id ,pushDetails}) => {
    const { push } = useHistory();
    console.log(busDetails, id)
    let data = [];
    if (busDetails) {
        data = busDetails
    }
  console.log(pushDetails)
    return (
        data?.map((res) => {
            console.log(res)
            return (

                <>
                    <StyledDiv>
                        <Card>
                            <Card.Body >
                                <Row>
                                    <Col md="4">
                                        {
                                            res?.images?.length > 0?
                                            <img width="70px" height="70px" src={res?.images?.length > 0 && "https://jenssen-images.s3.eu-north-1.amazonaws.com/" + res?.images[0]?.path} alt="tour" />:
                                            <img width="60px" height="60px" src={imageNotFound} alt="tour" style={{position:"relative",top:"-2px"}} ></img>
                                        
                                        }
                                        
                                        
                                    </Col>
                                    <Col md="6" >
                                        <HeadingStyle >{res.vehicleId}</HeadingStyle>
                                        <Paragraph >Inntil {res.seaterSeats} seter </Paragraph>
                                        <StyledParagraph>
                                            <h6 style={{ fontSize: "12px", position: "relative", top: "5px", left: "10px" }}>Fra </h6>
                                            <span className="amount" >{res.basePrice}</span>
                                        </StyledParagraph>
                                    </Col>
                                    <Col md="1">
                                        <EditIcon onClick={() => push({
                                            pathname: "/admin/tour-operator/busdescription/"+ id +"/details/" + res._id,
                                            state: {
                                              activeTab:pushDetails,
                                              tid:id
                                            },
                                        })}

                                        // {()=>push("/admin/tour-operator/busdescription/"+ id +"/details/" + res._id )} 
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </StyledDiv>

                </>

            )

        })
    )
}
export default TourOperatotBusDetailsCard;