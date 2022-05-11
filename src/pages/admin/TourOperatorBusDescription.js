import React, { useEffect, useState, useRef, useContext } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../../libs/_layouts/PrivateLayout";
import { useHistory } from "react-router-dom";
import { Back } from "../../assets/icons";
import { Row, Col, Card, Carousel } from "react-bootstrap";
import { FeatureCharger, FeatureSeater, FeatureKitchen, WifiIcon, AirCondition, Featurebathroom } from "../../assets/icons";
import Bus from "../../assets/bus.png";
import { useParams } from "react-router-dom";
import AdminTourOperator from "../../_services/adminTourOperator.services";
import { CheckBoxLabel, CheckBox } from "../../libs/_components/_ui/ToggleButton";

import {
    Heading,
} from "./../_styles/Common.style";
const MainContainer = styled.div` 
  height: auto;
  width: 100%;
  img {
  width:100%;
}
.card{
    margin-top:20px;
    margin-bottom: 100px;
    
  }
  .switch_button_box{
    background: rgba(253, 109, 3, 0.1);
    border: 1px dashed #FD6D03;
    box-sizing: border-box;
    padding: 18px 10px;
    margin: 0;
    margin-top: 10px;
}
 
  `;

const ListDetailBox = styled.div`
  padding-left:15px;
  padding-right:15px;
  .carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 10px;
  height: 10px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 1;
  transition: opacity .6s ease;
  border-radius: 70%;
}
.carousel-indicators .active {
  background-color: #FD6D03;
}
.carousel-indicators {
 margin-bottom: 0;
  
}
  `;
const DescriptionBox = styled.div`
  margin-top:30px;
  `;
const DataRow = styled.div`
 margin-top:50px;
 `;
const FeatureBox = styled.div`
 margin-top:30px;
 p:first-child{
   margin-bottom:10px;
 }
 `;
const IconBox = styled.div`
 p{
   margin-bottom:0px;  
   text-align: center;
   
 }
 .p-detail{
   color: rgba(0, 0, 0, 0.6);
   
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   line-height: 20px;
 }
 `;
const IconBoxShadow = styled.div`
 /* box-shadow: 0 0 5px #ccc;
 min-height: 65px;
 border-radius: 5px; */
 box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
min-height: 65px;
border-radius: 5px;
/* width:80px; */
 
 .icon_box_text{
    font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
 }
 `;
const StyledCheckBox = styled(CheckBox)`
 position:relative;
 display:flex;
 margin-right:30px;
 margin-top:-15px;
 `;


const TourOperatorBusDescription = () => {
    let { id, id1 } = useParams();
    console.log(id, id1)
    const [isActive, setIsActive] = useState(true)
    const [busDescription, setBusDescription] = useState([])
    const history = useHistory();

    useEffect(() => {
        AdminTourOperator.getBusById(id1, id)
            .then((res) => {
                // console.log(res.data.data)
                setBusDescription([res?.data?.data])

            })
    }, [id1,id])
  

    const handleToggle = (id, e) => {
        let ischeckboxChecked = e.target.checked ? "false" : "true";
        setIsActive(ischeckboxChecked)
        const params = JSON.stringify({
            "active": isActive
        })
        AdminTourOperator.tourOPeratorBusStatus(params, id1, id)
            .then((res) => {
                console.log(res.data.message)
            })

    }
    console.log(busDescription.length>0&&busDescription[0][0].basePrice.$numberDecimal)
    return (
        <>
            <PrivateLayout>
                <MainContainer>
                    <Heading onClick={() =>history.push({ pathname: "/admin/tour-operator/",
                                            state: {
                                              activeTab:history?.location?.state?.activeTab,
                                              tid:history?.location?.state?.tid
                                            },
                                        })}>
                    <Back />Tilbake</Heading>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <ListDetailBox>
                                        <Row>
                                            <Col sm="8">
                                                <h2>{busDescription.length>0&&busDescription[0][0]?.vehicleId}</h2>
                                                <DataRow>
                                                    <Row>
                                                        <Col>
                                                            <h5>Antall seter:</h5>
                                                            <p>{busDescription.length>0&&busDescription[0][0]?.seaterSeats}</p>
                                                        </Col >
                                                        <Col >
                                                            <h5>Drivstoff type:</h5>
                                                            <p>{busDescription.length>0&&busDescription[0][0]?.fuelType}</p>
                                                        </Col>
                                                        <Col>
                                                            <h5>Grunnpris:</h5>
                                                            <p>{busDescription.length>0?busDescription[0][0].basePrice?.$numberDecimal:""}</p>
                                                            {/* <p>{busDescription.length>0&&
                                                                busDescription[0][0]?.basePrice?busDescription[0][0]?.basePrice:
                                                                parseInt(busDescription[0][0]?.basePrice?.$numberDecimal)}</p> */}
                                                        </Col>
                                                        <Col>
                                                            <h5>Timegebyr:</h5>
                                                            <p>Fra{busDescription.length>0&&busDescription[0][0].hourlyWaitCharges.$numberDecimal}</p>
                                                            {/* <p>Fra {busDescription.length>0&&
                                                                busDescription[0][0]?.hourlyWaitCharges?busDescription[0][0]?.hourlyWaitCharges:
                                                            parseInt(busDescription[0][0]?.hourlyWaitCharges)}</p> */}
                                                        </Col>
                                                    </Row>

                                                </DataRow>
                                                <DescriptionBox>
                                                    <p className='p-detail'>Beskrivelser:</p>
                                                    <p>{busDescription.length>0&&busDescription[0][0]?.description}</p>
                                                </DescriptionBox>
                                                <FeatureBox>
                                                    <p className='p-detail'>Funksjoner</p>
                                                    <IconBox>
                                                        <Row sm={4}>
                                                            {busDescription.length>0&&
                                                                busDescription[0][0]?.features?.airConditioning ?
                                                                    <Col sm="2">
                                                                        <IconBoxShadow>
                                                                            <p><AirCondition /></p>
                                                                            <p className='icon_box_text'>Klimaanlegg</p>
                                                                        </IconBoxShadow>
                                                                    </Col> : ""
                                                            }
                                                            {busDescription.length>0&&
                                                                busDescription[0][0]?.features?.wifi ?
                                                                    <Col sm={2}>
                                                                        <IconBoxShadow>
                                                                            <p><WifiIcon /></p>
                                                                            <p className='icon_box_text'>Wifi</p>
                                                                        </IconBoxShadow>
                                                                    </Col> : ""
                                                            }

                                                            {busDescription.length>0&&
                                                                busDescription[0][0]?.features?.volts220 ?
                                                                    <Col sm="2">
                                                                        <IconBoxShadow>
                                                                            <p><FeatureCharger /></p>
                                                                            <p className='icon_box_text'>220 Volt</p>
                                                                        </IconBoxShadow>
                                                                    </Col> : ""
                                                            }
                                                            {busDescription.length>0&&
                                                                busDescription[0][0]?.features?.kitchen ?
                                                                    <Col sm="2">
                                                                        <IconBoxShadow>
                                                                            <p><FeatureKitchen /></p>
                                                                            <p className='icon_box_text'>Kjøkken</p>
                                                                        </IconBoxShadow>
                                                                    </Col> : ""
                                                            }
                                                            {busDescription.length>0&&
                                                                busDescription[0][0]?.features?.wc ?
                                                                    <Col sm="2">
                                                                        <IconBoxShadow>
                                                                            <p><Featurebathroom /></p>
                                                                            <p className='icon_box_text'>WC</p>
                                                                        </IconBoxShadow>
                                                                    </Col> : ""
                                                            }


                                                        </Row>
                                                    </IconBox>
                                                </FeatureBox>
                                            </Col>

                                            <Col sm="4" style={{marginTop:"40px"}}>
                                            {busDescription.length>0&&
                                                        busDescription[0][0]?.images?.length>0?
                                                <Carousel>
                                                    {busDescription.length>0&&
                                                        busDescription[0][0]?.images?.map((image)=>{
                                                            return(
                                                                <Carousel.Item>
                                                                
                                                                <img  alt="Bus image" width="340px" height="235px" src={ "https://jenssen-images.s3.eu-north-1.amazonaws.com/"+ image.path}></img>
                                                            </Carousel.Item>

                                                            )
                                                            // {console.log("https://jenssen-images.s3.eu-north-1.amazonaws.com/"+ image.path)}
                                                           
                                                        })
                                                    }
                                                  
                                                    {/* <Carousel.Item>
                                                        <img alt="Jenssen Dashboard" src={Bus}></img>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img alt="Jenssen Dashboard" src={Bus}></img>
                                                    </Carousel.Item> */}
                                                </Carousel>
                                                :
                                                <>
                                               
                                                <div class="carousel slide" style={{width:"380.4px",height:"235px"}}>

                                               
                                                </div>
                                                <p className="No_Image">Ikke noe bilde</p>
                                                </>
                                                }
                                                <Row className='switch_button_box'>
                                                    <Col sm="8">
                                                        <p className='p-detail'>Aktiv buss</p>
                                                    </Col>
                                                    <Col sm="4">
                                                        <StyledCheckBox
                                                            id="checkbox"
                                                            type="checkbox"
                                                            // value={isActive}
                                                            onChange={(e) => handleToggle(id, e)} />
                                                        <CheckBoxLabel htmlFor="checkbox" />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </ListDetailBox>
                                </Card.Body>
                            </Card>

                        </Col>
                        {/* <Col sm="4"> </Col> */}
                    </Row>
                </MainContainer>
            </PrivateLayout>
        </>
    )
}
export default TourOperatorBusDescription;