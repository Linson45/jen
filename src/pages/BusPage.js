import React, { useEffect, useState, useRef } from "react";
import { Row, Col, ListGroup, Card, Carousel, Form } from "react-bootstrap";
import styled, { css } from "styled-components";
import PrivateLayout from "../libs/_layouts/PrivateLayout";
import Bus from "../assets/bus.png";
import { EditIcon, DeleteIcon, WifiIcon, FeatureCharger, FeatureSeater, FeatureKitchen, AirCondition, Featurebathroom, Search } from "../assets/icons";
import { MDBCol } from "mdbreact";
import { useHistory } from "react-router-dom";
import SearchWithFilter from "../libs/_components/_ui/admin/SearchWithFilter";
import TourOPeratorBus from "../_services/tourOperatorBus.services";
import BusListCard from '../libs/_components/PageChildComponents/BusListCard';
import { CheckBoxLabel, CheckBox } from "../libs/_components/_ui/ToggleButton";
import Loader from "../libs/_components/_ui/Loader";
import wifi from "../assets/wifi.svg"
import { LoadMore } from "../libs/_components/_ui/Buttons";
import {
  Heading,
} from "./_styles/Common.style";
import AddToBus from "../libs/_components/_ui/AddToBus"

const MainContainer = styled.div`
height: auto;
width: 100%;
.list-group{
margin-top:8px;
}
.card{
border:none;
width:100%;
}
.card .card-body{
box-shadow: 0px 4px 6px -3px rgba(0,0,0,0.75);
}
.space-manage{
position:relative;
left:-5px;
}
.list-group-item {
border-bottom: none;
border-radius: 0px;
margin-top:-5px;
}
.card-body .search_box{
background-color: #E5E5E5;
}
.switch_button_box{
background-color: #E5E5E5;
margin: 0;
margin-top:27px;
height:50px;
}
.switch_button{
background-color: #E5E5E5;
margin: 0;
margin-top:8px;
height:50px;
}
.carousel-inner img{
width:100%;
}
/* .list-group-item{
&:hover{
background:rgba(253, 109, 3, 0.1);
}
} */
.overflow{
overflow:hidden;
overflow-y:scroll;
display:block;
height:439px;
margin-top:12px;
}
.styledNoRecord{
position: absolute;
left: 0;
right: 0;
margin-left: auto;
margin-right: auto;
display:inline-table;
top: 200px;
}
.No_Image{
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
margin-left:60px;
position:relative;
top:-50px;
}
.carouselItem{
  margin-top:30px;
}
`;

// const ButtonContainer = styled.button`
//   background-color: #ff6200;
//   border-radius: 30px;
//   width: max-content;
//   display: block;
//   height: fit-content;
//   color: #fff;
//   padding: 5px 10px;
//   box-shadow: 0 2px 5px #6d6d6d;
//   border:none;
//   float: right;
// `;
const ListDetailBox = styled.div`
padding-left:15px;
padding-right:15px;

p {
  margin-bottom:0px;
}
.p-detail {
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
}
.carousel-indicators {
 margin-bottom: 0;
  
}
.icon-manage{
  text-align: center;
}

.carousel-indicators [data-bs-target] {
box-sizing: content-box;
flex: 0 1 auto;
width: 6.37px;
height: 6.37px;
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

`;

const IconBox = styled.div`
p{
margin-bottom:0px;  
text-align: center;
  
}
.p-detail{
color: rgba(0, 0, 0, 0.6);
font-size: 14px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
}
`;
const ActiveBus = styled.p` 
color: rgba(0, 0, 0, 0.6);
font-size: 14px;
margin-top:17px;
`
const IconBoxShadow = styled.div`
/* box-shadow: 0 0 5px #ccc; */
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
min-height: 65px;
border-radius: 5px;
width:80px;
.icon_box_text{
font-size: 11px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.25px;
color: rgba(0, 0, 0, 0.6);
}
`;
const DataRow = styled.div`
margin-top:50px;
`;
const DescriptionBox = styled.div`
margin-top:30px;
p:first-child{
margin-bottom:10px;
}
`;
const FeatureBox = styled.div`
margin-top:30px;
p:first-child{
margin-bottom:10px;
}
`;

const StyleVehicleNumber = styled.h2` 
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 36px;
color: rgba(0, 0, 0, 0.87);
margin-top:20px;

`;

const HeadingStyle = styled.h1` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: rgba(0, 0, 0, 0.6);
letter-spacing: 0.25px;
`;
const Paragraph = styled.p`
font-style: normal;
font-weight:500;
font-size: 18px;
line-height: 16px;
letter-spacing:0.15px;
color: rgba(0, 0, 0, 0.87); 
`

const ButtonEdit = styled.div`
background-color: #000000;
border-radius: 4px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 1.25px;
color: #fff;
padding: 10px 25px;
text-transform: uppercase;
cursor:pointer;
float: right;
`;
const StyledCheckBox = styled(CheckBox)`
position:relative;
display:flex;
margin-right:20px;
margin-top:2px;

`;
const StyledLoadMore = styled.div`
display:flex;
justify-content:center;
margin-top:9px;
`;
const AddToBussection = styled.div` 
margin-top:-32px;
position:relative;
left:-10px;
`;
const VIPtag = styled.div` 
width: 35px;
height: 16px;
background: #FD6D03;
border-radius: 56px;
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
color: #FFFFFF;
position:relative;
bottom:138px;
left:182px;
padding-top:4px ;
padding-left:8px;

`
const Description = styled.p` 
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
color: #000000;
letter-spacing: 0.01em;
`;
const StyleBus=styled(Heading)` 
position:relative;
top:-20px;
left:-2px;
`;
const OverFlow=styled.div` 
overflow:hidden;
overflow-y:scroll;
display:block;
height:439px;
margin-top:12px;

  ::-webkit-scrollbar {
    width:7px;
    background:white;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background:  #888;
  }
`;
function BusPage() {
  const { push } = useHistory();
  const [isloading, setLoading] = useState(false)
  const [busList, setBusList] = useState([
  // {
  //   category:"VIP",
  //   image:"https://media.istockphoto.com/photos/white-passenger-bus-picture-id135327019?k=20&m=135327019&s=612x612&w=0&h=YJneXYFReSVuKSIFOy5wGIygeLeb1UquX4BWLk-MluI=",
  //   name:"BS-1001",
  //   noOfSeats:"25",
  //   basePrice:"1200",
  //   id:"asdfasdfasdf1"
  // },
  // {
  //   category:"",
  //   image:"https://media.istockphoto.com/photos/white-passenger-bus-picture-id135327019?k=20&m=135327019&s=612x612&w=0&h=YJneXYFReSVuKSIFOy5wGIygeLeb1UquX4BWLk-MluI=",
  //   name:"BS-1002",
  //   noOfSeats:"25",
  //   basePrice:"1200",
  //   id:"asdfasdfasdf2"
  // },
  // {
  //   category:"VIP",
  //   image:"https://media.istockphoto.com/photos/white-passenger-bus-picture-id135327019?k=20&m=135327019&s=612x612&w=0&h=YJneXYFReSVuKSIFOy5wGIygeLeb1UquX4BWLk-MluI=",
  //   name:"BS-1003",
  //   noOfSeats:"25",
  //   basePrice:"1200",
  //   id:"asdfasdfasdf"
  // },{
  //   category:"",
  //   image:"https://media.istockphoto.com/photos/white-passenger-bus-picture-id135327019?k=20&m=135327019&s=612x612&w=0&h=YJneXYFReSVuKSIFOy5wGIygeLeb1UquX4BWLk-MluI=",
  //   name:"BS-1004",
  //   noOfSeats:"25",
  //   basePrice:"1200",
  //   id:"asdfasdfasdf3"
  // },
  // {
  //   category:"",
  //   image:"https://media.istockphoto.com/photos/white-passenger-bus-picture-id135327019?k=20&m=135327019&s=612x612&w=0&h=YJneXYFReSVuKSIFOy5wGIygeLeb1UquX4BWLk-MluI=",
  //   name:"BS-1004",
  //   noOfSeats:"25",
  //   basePrice:"1200",
  //   id:"asdfasdfasdf3"
  // },
  // {
  //   category:"",
  //   image:"https://media.istockphoto.com/photos/white-passenger-bus-picture-id135327019?k=20&m=135327019&s=612x612&w=0&h=YJneXYFReSVuKSIFOy5wGIygeLeb1UquX4BWLk-MluI=",
  //   name:"BS-1004",
  //   noOfSeats:"25",
  //   basePrice:"1200",
  //   id:"asdfasdfasdf3"
  // }
]
)
  const scrollRef = useRef(null)
  const [busId, setBusId] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [isActive, setIsActive] = useState(true)
  const [isVip, setVip] = useState(true)
  const [showMore, setShowMore] = useState(false)
  const [total, setTotal] = useState(0)


  useEffect(() => {
     getbusList()
  }, [pageNo]);
  const getbusList = () => {
    setLoading(true);
    TourOPeratorBus.tourOPeratorBuses(pageNo)
      .then((res) => {
        console.log(res.data)
        let result = res?.data?.data;
        let records = [...busList, ...result];
        setBusList(records)
        setShowMore(false);
        setTotal(res.data.totalRecords);
        if (res.data.totalRecords > 3 && result.length > 0) {
          setShowMore(true);
        }
        
        scrollRef.current.scrollIntoView(
          {
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
          })

        searchById(records[0].id)

      })

      .catch((err) => {
        console.log(err);
      })

  }

  const searchById = (values) => {
    TourOPeratorBus.tourOPeratorBusById(values)
      .then((res) => {
        setBusId(res.data.data)
        setIsActive(res.data.data.active)
        setVip(res.data.data.category)
      })
      .catch((err) => {
        console.log(err);
      })

  }
  console.log(busId)
  const updateListData = (FilterData) => {
    console.log("filter data", FilterData)
    TourOPeratorBus.tourOPeratorBuses(1, FilterData)
      .then((res) => {
        setBusList(res.data.data)
        searchById(res.data.data[0].id)
      })

  }
  const deleteById = (deletevalue) => {
    console.log(deletevalue)
    const data = busList.filter((elem) => {
      console.log(elem)
      return deletevalue !== elem.id
    })
    setBusList(data);
    TourOPeratorBus.tourOPeratorDelete(deletevalue)
      .then((res) => {
        getbusList()
      })
  }
  const handleToggle = (id, e,busprop) => {
    console.log("eee",e.target.checked);
    console.log("busprop",busprop);
    let ischeckboxChecked = e.target.checked==true ? true : false;
    console.log("ischeckboxChecked",ischeckboxChecked);
    if(busprop=="bus"){
      setIsActive(ischeckboxChecked)
    const params = JSON.stringify({
      "active": ischeckboxChecked
    })
    TourOPeratorBus.tourOPeratorStatus(params, id)
      .then((res) => {
        console.log(res.data.message)
      })
    }else{
      setVip(ischeckboxChecked)
    const params = JSON.stringify({
      "isVIP": ischeckboxChecked
    })
    TourOPeratorBus.tourOPeratorVipStatus(params, id)
      .then((res) => {
        console.log(res.data.message)
      })
    }
    
  }

  return (
    <>

      <PrivateLayout>
        <MainContainer>
          <Row>
            <Col md="6">
              <StyleBus>Busser</StyleBus>
            </Col>
            <Col md="6"> <AddToBussection onClick={() => push("/tour-operator/bus/add")}><AddToBus AddToBus={true} /></AddToBussection></Col>
          </Row>
          <Row>
            <Col md="4">

              <SearchWithFilter
                BusType={updateListData}
                SearchBuses={true}
              />
              <OverFlow>
             {/* <Card  className="overflow"> */}

                {/* {isloading ? */}
                {false ?
                  <Loader /> : (
                    <>
                      {/* {busList.length > 0 ? ( */}
                      {true ? (
                        <BusListCard
                          scrollRef={scrollRef}
                          searchById={searchById}
                          data={busList}
                          deleteById={deleteById}
                        />) : <p className="styledNoRecord">Ingen opptak funnet</p>
                      }
                    </>
                  )
                }

              {/* </Card> */}
              </OverFlow>
              {showMore && busList.length > 3 &&
                <StyledLoadMore>
                  <LoadMore onClick={(e) => { e.preventDefault(); setPageNo(pageNo + 1) }}>Last mer</LoadMore>
                </StyledLoadMore>

             } 

            </Col>
            <Col xs md="8"  className="space-manage">
              <Card style={{ minHeight: "500px", height: "550px" }}>
                <Card.Body>

                  <>
                    {/* {busList.length > 0 ? */}
                    {busList.length > 0  ?
                      <>
                        <ListDetailBox>
                          <Row>


                            <Col md="8"><StyleVehicleNumber>{busId.vehicleNumber}</StyleVehicleNumber>
                              <DataRow>
                                <Row>
                                  <Col md="3">
                                    <HeadingStyle>Antall seter:</HeadingStyle>
                                    <Paragraph>{busId.noOfSeats}</Paragraph>

                                  </Col>
                                  <Col md="3">
                                    <HeadingStyle>Drivstoff type:</HeadingStyle>
                                    <Paragraph>{busId.fuelType}</Paragraph>
                                  </Col>
                                  <Col md="3">
                                    <HeadingStyle>Grunnpris:</HeadingStyle>
                                    <Paragraph>Fra{busId.basePrice}/-</Paragraph>
                                  </Col>
                                  <Col md="3">
                                    <HeadingStyle>Timegebyr:</HeadingStyle>
                                    <Paragraph>Fra{busId.hourlyRate}/-</Paragraph>
                                  </Col>

                                </Row>
                              </DataRow>
                              <DescriptionBox>
                                <p className='p-detail'>Beskrivelser</p>
                                <Description>{busId.description}</Description>
                              </DescriptionBox>
                              <FeatureBox>
                                <p className='p-detail'>Funksjoner:</p>
                                <IconBox>
                                  <Row sm={4}>
                                    {busId?.features?.wifi ?

                                      <Col sm={2}  >
                                        <IconBoxShadow>
                                          <p> <img src={wifi} alt="wifi" style={{ position: "relative", top: "4px" }}></img></p>
                                          <p className='icon_box_text' >wifi</p>
                                        </IconBoxShadow>
                                      </Col>
                                      : ""}
                                    {busId?.features?.airConditioning ?
                                      <Col sm={2} >
                                        <IconBoxShadow>
                                          <p><AirCondition /></p>
                                          <p className='icon_box_text'> Klimaanlegg</p>
                                        </IconBoxShadow>

                                      </Col >
                                      : ""}
                                    {busId?.noOfSeats ?
                                      <Col sm={2} >

                                        <IconBoxShadow>
                                          <p><FeatureSeater /></p>
                                          <p className='icon_box_text'>{busId?.noOfSeats} Seater</p>
                                        </IconBoxShadow>
                                      </Col>
                                      : ""}
                                    {busId?.features?.volts220 ?
                                      <Col sm={2} >

                                        <IconBoxShadow>
                                          <p><FeatureCharger /></p>
                                          <p className='icon_box_text'>220 Volt</p>
                                        </IconBoxShadow>
                                      </Col> : ""
                                    }


                                    {busId?.features?.kitchen ?
                                      <Col sm={2} >
                                        <IconBoxShadow>
                                          <p><FeatureKitchen /></p>
                                          <p className='icon_box_text'>Kjøkken</p>
                                        </IconBoxShadow> </Col> : ""
                                    }
                                    {busId?.features?.wc ?
                                      <Col sm={2} >

                                        <IconBoxShadow>
                                          <p><Featurebathroom /></p>
                                          <p className='icon_box_text'>WC</p>
                                        </IconBoxShadow> </Col> : ""
                                    }

                                  </Row>
                                </IconBox>
                              </FeatureBox>
                            </Col>
                            <Col md="4" className="carouselItem">
                              {busId?.images?.length > 0 && busId?.category === "VIP" ?
                                <>
                                  <Carousel>
                                    {busId?.images?.map(e =>
                                      <Carousel.Item>
                                        <img alt="Jenssen Dashboard" src={e.path}></img>
                                        <VIPtag>{busId.category}</VIPtag>
                                      </Carousel.Item>
                                    )}

                                  </Carousel>
                                </>
                                ||
                                <>
                                  < Carousel>
                                    {busId?.images?.map(e =>
                                      <Carousel.Item>
                                        <img alt="Jenssen Dashboard" src={e.path}></img>
                                      </Carousel.Item>
                                    )}

                                  </Carousel>
                                </> :
                                <>
                                  <div style={{ width: "239.15px", height: "135.16px" }}>
                                  </div>
                                  <p className="No_Image">Ikke noe bilde</p>
                                </>
                              }
                              <Row className='switch_button_box'>
                                <Col sm="8">
                                  <ActiveBus>Aktiv buss</ActiveBus>
                                </Col>
                                <Col sm="3">

                                  <div className='custom-control custom-switch'>

                                    <StyledCheckBox
                                      id="checkbox"
                                      type="checkbox"
                                      checked={isActive}
                                      onChange={((e) => handleToggle(busId.id, e,"bus"))} />
                                    <CheckBoxLabel htmlFor="checkbox" />

                                  </div>
                                </Col>
                              </Row>
                              <Row className='switch_button'>
                                <Col sm="8">
                                  <ActiveBus>Vip buss</ActiveBus>
                                </Col>
                                <Col sm="3">
                                  <div className='custom-control custom-switch'>

                                    <StyledCheckBox
                                      id="checkboxs"
                                      type="checkbox"
                                      checked={isVip}
                                      onChange={((e) => handleToggle(busId.id, e,"vip"))}
                                    />
                                    <CheckBoxLabel htmlFor="checkboxs" />

                                  </div>
                                </Col>
                              </Row>

                            </Col>

                          </Row>
                        </ListDetailBox><br />
                        <hr />
                        <ButtonEdit onClick={() => push("/tour-operator/bus/edit/" + busId.id)}>Redigere</ButtonEdit>
                      </> : <p className="styledNoRecord">Ingen opptak funnet</p>
                    }
                  </>

                </Card.Body>
              </Card>
            </Col>
          </Row>

        </MainContainer>
      </PrivateLayout>
      {/* */}
    </>
  );
}
export default BusPage;
