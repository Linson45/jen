import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../libs/_layouts/PrivateLayout";
import { useHistory } from "react-router-dom";
import {
  Heading,
} from "./_styles/Common.style";
import callBack from "../assets/svg/call-black.svg"
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import SearchWithFilter from "../libs/_components/_ui/admin/SearchWithFilter";
import TurCard from '../libs/_components/PageChildComponents/TurCard';
import MapPage from './MapPage';
import Account from "../assets/svg/account_circle_bg.svg";
import { BusIcon, EditIcon, Email, Search } from "../assets/icons";
import Bus from "../assets/bus.png";
import AccountIcon from '../assets/tourAccount.svg';
import EditTour from '../assets/EditTour.svg';
import callblack from "../assets/phoneTour.svg";
import cross from "../assets/crossTour.svg";
import { SaveButton, CancelButton, LoadMore } from "../libs/_components/_ui/Buttons";
import pin from '../assets/svg/pin.svg';
import TourOperatorBooking from "../_services/touroperatorBooking.services";
import TourOperatorDriver from "../_services/tourOperatorDriver.services";
import Loader from "../libs/_components/_ui/Loader";
import moment from "moment";
import Select, { components } from "react-select";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const MainContainer = styled.div`
height: auto;
width: 100%;
.card {
border:none;

}
.card .card-body{
box-shadow: 0px 4px 6px -3px rgba(0,0,0,0.75);
}
.space-manage{
padding-left:5px;
}
.head-details{
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.15px;
color: #FD6D03;
}
.head-details-bustYpe{
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FD6D03;
letter-spacing: 0.15px;
}
.p-details{
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.015em;
color: rgba(0, 0, 0, 0.87);
}
.Tracking-tour{
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 4px;
/* padding:7px 7px; */
width: 184px;
height: 45px;
position: relative;
top: -8px;
}
.overflow{
overflow:hidden;
overflow-y:scroll;
display:block;
height:450px;
margin-top:10px;
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
.leftSideCol{
  position:relative;
  top:0px;
}
.float-end{
  position:relative;
  top: -8px;

}
.Topclumn{
  position:relative;
  left:-5px;
  top:-2px;
}

`;
const LowerRightSide = styled.div` 
.Icon-Text{

}
`;
const StyledLabel = styled.p` 
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
position:relative;
top:-5px;
margin-bottom:0.2rem;
`;

const HeadingStyle = styled.h1` 
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: rgba(0, 0, 0, 0.6);
letter-spacing: 0.25px;
`;
const Paragraph = styled.p`
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 0.87); 
`
const LeftSideBlock = styled.div` 
display:flex;
justify-content:start;
position:relative;
left:-30px;
.label{
position:relative;
left:40px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
letter-spacing: 0.0025em;
color: #000000;
}
.Upperlabel{
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.25px;
color: rgba(0, 0, 0, 0.6);
position:relative;
left:13px;
}
.circle{
position:relative;
background: rgba(253, 109, 3, 0.1);
width:60px;
height:60px;
border-radius:20px;
padding:4px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #000000;
}
`;
const Vertical = styled.div` 
border-left: 1px dashed rgba(0, 0, 0, 0.6);;;
height:30px;
margin-left:10px;
margin-top:-20px;
`;
const VerticalLine = styled.div` 
border-left: 1px ridge rgba(0, 0, 0, 0.2);
height: 300px;
position:relative;
top:-18px;
min-height:341px;
`;
const AssignDriver = styled.div` 
display:${props => props.ShouldDisplay ? "block" : "none"};
width:106%;
max-width:440px;
border: 1px solid #E6E6E6;
box-sizing: border-box;
border-radius: 3.5px;
background:white;
padding:10px;
margin-bottom:10px;
position:relative;
left:-36px;
.form-select{
width:100%;
max-width:400px;
border:none;
margin-top:-28px;
}
.assign-driver{
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 24px;
letter-spacing: 0.15px;
color: rgba(33, 33, 33, 0.87);
position:relative;
top:-20px;
   
}
 `;
const DriverName = styled.span` 
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.15px;
color: #000000;
 `
const BusTypeSection = styled.div` 
width :106%;
border: 1px solid #E6E6E6;
box-sizing: border-box;
border-radius: 5px;
float:right;
padding:8px;
position:relative;
left:-10px;
`;
const FuelType = styled.div` 
margin-top:30px;
`
const BusType = styled.div` 
position:relative;
left:30px;
`;
const AssignDriverSection = styled.div` 
width:106%;
border: 1px solid #E6E6E6;
box-sizing: border-box;
border-radius: 5px;
float:right;
padding:8px;
position:relative;
left:-10px;
`;
const LowerRightSideDiv = styled.div` 
display:inline-block;
position:relative;
top:-10px;
`;
const StyledLoadMore = styled.div`
display:flex;
justify-content:center;
margin-top:10px;
`;

const StyledSelect = styled(Select)`
margin-top:-30px;
border:1px solid black;
&:focus{

}
`;
const Styledtur = styled(Heading)` 
position:relative;
top: -21px;
left: 0px;
`;
const Drivernumber = styled.span` 
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #000000;
letter-spacing: 0.15px;
`;
const StyleFuelType = styled.h1` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.25px;
color: rgba(0, 0, 0, 0.6);
position:relative;
top:-3px;
`;
const StyleParagraph = styled.p` 
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.0025em;
color: #000000;
`;
const StyleEditTour = styled.div` 
img{
  cursor:pointer;
   float:right;
   position:relative;
   left:9px;
   width:13.5px;
   height:13.5px;
}
`;
const HorizontalLine = styled.span` 
position:relative;
top:-10px;
`;
const TrackingTour = styled.span` 
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #000000;
`;
const ImageAccount = styled.div` 
img{
  width:51px;
  height:51px;
  top:-6px;
  position:relative;

}
`
const MobileNumber = styled.span` 
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #000000;
position: relative;
top:-1px;
`;
const IconText = styled.span` 
background: #1BBD2B;
border-radius: 13px;
padding:5px 10px;
font-size:10px;
margin-right:-2px;;
color:white;
svg{
  position:relative;
  left:-0.5rem;
}
`
const EmailDiv=styled.span` 
svg{
  width:13.33px;
  height:10.67px;
}
`
const CallImage=styled.span` 
img{
  width:10.05px;
  height:10.05px;
}
`;
const OverFlow=styled.div` 
overflow:hidden;
overflow-y:scroll;
display:block;
height:439px;
margin-top:10px;

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
const TourPage = () => {
  const history = useHistory();
  const scrollRef = useRef(null)
  const [activeAssignDriver, setActiveAssignDriver] = useState(false)
  const [busType, setBusType] = useState(false)
  const [pageNo, setPageNo] = useState(1)
  const [isloading, setLoading] = useState(false)
  const [selectedValue, setSelectedValue] = useState([])
  const [tourBooking, setTourData] = useState([
    // {
    //   _id: 0,
    //   bookingId: "Tour-123",
    //   customerName: "Linson Lorance",
    //   tripType: "Oneway",
    //   vehicleRegistrationNumber: "BS-123",
    //   customerMobile: {
    //     number: "8830591644",
    //   }
    // },
    // {
    //   _id: 1,
    //   bookingId: "Tour-123",
    //   customerName: "Linson Lorance",
    //   tripType: "Oneway",
    //   vehicleRegistrationNumber: "BS-123",
    //   customerMobile: {
    //     number: "8830591644",
    //   }
    // },
    // {
    //   _id: 2,
    //   bookingId: "Tour-123",
    //   customerName: "Linson Lorance",
    //   tripType: "Oneway",
    //   vehicleRegistrationNumber: "BS-123",
    //   customerMobile: {
    //     number: "8830591644",
    //   }
    // }
  ]);
  const [bookingData, setBookingData] = useState([]);
  const [driverList, setDriverList] = useState([]);
  const [driverId, setdriverId] = useState([]);
  const [assignedDriverId, setassignedDriverId] = useState([]);
  const [showMore, setShowMore] = useState(false)
  const [total, setTotal] = useState(0)
  const [DriverImageHide, setDriverImageHide] = useState(false)

  useEffect(() => {
    getTourBookingList()

  }, [pageNo]);


  useEffect(() => {
     getDriverList()

  }, [assignedDriverId]);

  const getDriverList = () => {
    // setLoading(true);
    TourOperatorDriver.tourOperatorGetAllDriver()
      .then((res) => {
        console.log(res.data.data);
        console.log("assignedDriverId", assignedDriverId);

        let result = res.data.data;
        let records = [...result];
        let driverAssignedOld = records.filter(e => e.id == assignedDriverId)
        console.log("driverAssignedOld", driverAssignedOld);
        setdriverId(...driverAssignedOld);
        setDriverList(records)
        // scrollRef.current.scrollIntoView(
        //   {
        //     behavior: 'smooth',
        //     block: 'end',
        //     inline: 'nearest'
        //   })
        setLoading(false);
        // setShowMore(false);
        // setTotal(res.data.totalRecords);
        // if(res.data.totalRecords > 5 && result.length > 0) {
        //   setShowMore(true);
        // }

      })

      .catch((err) => {
        console.log(err);
      })
  }
  const getTourBookingList = () => {
    setLoading(true)
    TourOperatorBooking.tourOperatorBookings(pageNo)
      .then((res) => {
        console.log("res", res);
        // setTourData(res?.data?.data)
        let result = res?.data?.data;
        let records = [...tourBooking, ...result];
        setTourData(records)
        setLoading(false)
        setShowMore(false);
        let totalRecords = 100
        setTotal(totalRecords);
        if (totalRecords > 3 && result.length > 0) {
          setShowMore(true);
        }
        scrollRef.current.scrollIntoView(
          {
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
          })
        searchById(records[0]._id)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const searchById = (values, i) => {
    // console.log(values, i)
  TourOperatorBooking.getBookingById(values)
      .then((res) => {
        let recordid = res.data.data;
        setBookingData(res.data.data)
        console.log("recordid.driverInfo._id", recordid.driverInfo._id)
        setassignedDriverId(recordid.driverInfo._id)


      })
      .catch((err) => {
        console.log(err);
      })

  }
  const searching = (FilterData) => {
    console.log(FilterData)
    TourOperatorBooking.tourOperatorBookings(1, FilterData)
      .then((res) => {
        console.log(res)
        setTourData(res?.data?.data)
      })
  }
  const handleTypeTur = (e) => {
    let selectValue = e.target.value
    setSelectedValue(e.target.value)
    TourOperatorBooking.tourOperatorBookings(1, " ", selectValue)
      .then((res) => {
        console.log(res)
        setTourData(res?.data?.data)
      })
  }
  const handleBookingType = (e) => {
    let selectBookingValue = e.target.value
    TourOperatorBooking.tourOperatorBookings(1, "", "", selectBookingValue)
      .then((res) => {
        console.log(res)
        setTourData(res?.data?.data)
      })
  }
  const assignDriverId = (e) => {
    console.log("driverid", e);
    setdriverId(e);
    
    //   let selectBookingValue=e.target.value
    // TourOperatorBooking.tourOperatorBookings(1,"","",selectBookingValue)
    //   .then((res)=>{
    //     console.log(res)
    //     setTourData(res?.data?.data)
    //   })
    setDriverImageHide(false)
    handlesavenewdriver()
  }
  const handlesavenewdriver = () => {
    TourOperatorBooking.tourOperatorAssignDriver(bookingData.bookingResult[0]._id, driverId.id)
      .then((res) => {
        console.log(res.data)
        setActiveAssignDriver(!activeAssignDriver)
        setassignedDriverId("")
        swal({
          title: "Suksess",
          text: res.data.message,
          icon: "success",
          button: "Ok",

        })
        // getTourBookingList()
        // getDriverList()
        //setTourData(res?.data?.data)
        searchById(bookingData.bookingResult[0]._id)
      })
  }

  const handlesBookingAccept = (status) => {
    TourOperatorBooking.bookingacceptorcancel(bookingData.bookingResult[0]._id,status)
      .then((res) => {
        console.log(res.data)
        setActiveAssignDriver(!activeAssignDriver)
        setassignedDriverId("")
        swal({
          title: "Suksess",
          text: res.data.message,
          icon: "success",
          button: "Ok",

        })
        searchById(bookingData.bookingResult[0]._id)
        //setTourData(res?.data?.data)
      })
  }

  const handleremovedriver = (bookingid,driverid) => {
    setActiveAssignDriver("")
    setassignedDriverId("")
    setDriverImageHide(true);
    TourOperatorBooking.removeAssigneddriver(bookingid,driverid)
    .then((res)=>{
      console.log(res.data)
      setActiveAssignDriver(!activeAssignDriver)
      setassignedDriverId("")
      swal({
        title: "Suksess",
        text: res.data.message,
        icon: "success",
        button: "Ok",

    })
    searchById(bookingData.bookingResult[0]._id)
      //setTourData(res?.data?.data)
    })
  }
  const CaretDownIcon = () => {
    return <FontAwesomeIcon icon={faCaretDown} />;
  };
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };
  return (
    <>
      <PrivateLayout>
        <MainContainer>
          <Styledtur>Tur</Styledtur>
          <Row>
            <Col md="4" >
              <SearchWithFilter
                handleBookingType={handleBookingType}
                handleTypeTur={handleTypeTur}
                TurType={searching}
                SearchTur={true}
              />
              <OverFlow>
              {/* <Card className="overflow"> */}
                {/* {isloading ? */}
                {false?
                  <Loader /> : (
                    <>
                      {tourBooking.length > 0 ?
                        <TurCard
                          scrollRef={scrollRef}
                          searchById={searchById}
                          data={tourBooking}
                        /> : <p className="styledNoRecord">Ingen opptak funnet</p>
                      }</>
                  )
                }
              {/* </Card> */}
              </OverFlow>
            
              {showMore && tourBooking.length > 3 &&
                <StyledLoadMore>
                  <LoadMore onClick={(e) => { e.preventDefault(); setPageNo(pageNo + 1) }}>Last mer</LoadMore>
                </StyledLoadMore>
              }
            </Col>
            <Col md="8" className="space-manage" >
              <Card>
                <Card.Body style={{ minHeight: "540px", padding: "28px" }}>
                  {isloading ?
                    <Loader /> : (
                      <>
                      {/* {console.log("bookingData",bookingData)} */}
                        { bookingData ?
                          <>
                            <Row hidden={bookingData?.driverInfo?false:true}>
                              <Col sm="1">
                                <ImageAccount>
                                  <img src={Account} alt="tour" />
                                </ImageAccount>
                              </Col>
                              <Col sm="8" className="Topclumn">
                                <HeadingStyle>{bookingData?.driverInfo?.driverId}</HeadingStyle>
                                <StyledLabel>{bookingData?.driverInfo?.name}</StyledLabel>
                                <LowerRightSide>
                                  {/* Icon to be changed according to status */}
                                  <IconText> <BusIcon className="busIcon" />{bookingData?.driverInfo?.currentStatus}</IconText>&nbsp;
                                  | <CallImage><img src={callBack} alt="tour" /> <MobileNumber>{bookingData?.driverInfo?.mobile.length > 0 && bookingData?.driverInfo?.mobile[0].number}</MobileNumber>&nbsp;</CallImage>
                                  | <EmailDiv><Email />&nbsp;<MobileNumber> {bookingData?.driverInfo?.email}</MobileNumber></EmailDiv>
                                </LowerRightSide>
                              </Col>

                            </Row>
                            <hr />
                            <Row>
                              <Col>
                                <HeadingStyle>Tour-ID</HeadingStyle>
                                <Paragraph>{bookingData?.bookingResult?.length > 0 && bookingData?.bookingResult[0].bookingId}</Paragraph>
                              </Col>
                              <Col>
                                <HeadingStyle>Bestillingstype</HeadingStyle>
                                <Paragraph>{bookingData?.bookingResult?.length > 0 && bookingData?.bookingResult[0].tripType}</Paragraph>
                              </Col>
                              <Col>
                                <HeadingStyle>Bestillingsdato</HeadingStyle>
                                <Paragraph>{bookingData?.bookingResult?.length > 0 && moment(bookingData?.bookingResult[0].bookingDate).format("DD/MM/YYYY")}</Paragraph>
                              </Col>
                              <Col>
                                <HeadingStyle>Bestillingstid</HeadingStyle>
                                <Paragraph>{bookingData?.bookingResult?.length > 0 && moment(bookingData?.bookingResult[0].bookingDate).format("hh:mm a")}</Paragraph>
                              </Col>
                              <Col>
                                <HeadingStyle>Totalt passasjer</HeadingStyle>
                                <Paragraph>{bookingData?.bookingResult?.length > 0 && bookingData?.bookingResult[0].oneWayPassengers}</Paragraph>
                              </Col>
                            </Row>
                            <hr style={{ position: "relative", top: "-20px" }} />
                            <Row>
                              <Col sm="5" className="leftSideCol">
                                <StyleParagraph>Turdetaljer</StyleParagraph>
                                <LeftSideBlock>
                                  <div className="row mt-1">
                                    <div className="col-md-12">
                                      <ul>
                                        <span className="circle">01</span>
                                        <span className="Upperlabel">Reise fra ({bookingData?.bookingResult?.length > 0 && moment(bookingData?.bookingResult[0].oneWayStartDate).format('DD/MM/YYYY')})</span><br />
                                        <span className="label">{bookingData?.bookingResult?.length > 0 && bookingData?.bookingResult[0].itinerary[0].address}</span>
                                        <Vertical></Vertical>
                                        <span className="circle">02</span>
                                        <span className="Upperlabel">Reise til</span>
                                        <div className="step-content grey lighten-3">

                                          <span class="label">{bookingData?.bookingResult?.length > 0 && bookingData?.bookingResult[0].itinerary[1].address}</span>
                                        </div>
                                        <Vertical></Vertical>
                                        <span className="circle">03</span>
                                        <span className="Upperlabel">Reise fra ({bookingData?.bookingResult?.length > 0 && moment(bookingData?.bookingResult[0].oneWayEndDate).format('DD/MM/YYYY')})</span>
                                        <span className="label">{bookingData?.bookingResult?.length > 0 && bookingData?.bookingResult[0].itinerary[2]?.address}</span>
                                      </ul>
                                    </div>
                                  </div>

                                </LeftSideBlock>
                              </Col>
                              <Col sm="1"><VerticalLine></VerticalLine>
                              </Col>
                              <Col sm="6" className="leftSideCol">
                                <Row>
                                  <Col sm="4">
                                    <StyleParagraph style={{ position: "relative", left: "-35px" }}>Busstype</StyleParagraph>
                                  </Col>
                                  {/* <Col sm="6"></Col>
                        <Col sm="2"><EditIcon style={{ cursor: "pointer" }}
                          onClick={() => setBusType(!busType)}
                        /></Col> */}
                                </Row>
                                {/* <Row>
                        <Col>
                          <AssignDriver ShouldDisplay={busType}>
                            <p className="assign-driver">Select Bus Type label</p>
                            <Form.Select aria-label="Default select example" >
                              <option>Type tur</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </AssignDriver>
                        </Col>
                      </Row> */}
                                <BusTypeSection>
                                  <Row>
                                    <Col sm="4">
                                      <img alt="bus" src={Bus}></img>
                                    </Col>
                                    <Col sm="4">
                                      <BusType>
                                        <h5 className="head-details-bustYpe">{bookingData?.bookingResult?.length > 0 && bookingData?.bookingResult[0].vehicleRegistrationNumber}</h5>
                                        <HeadingStyle>Antall seter</HeadingStyle>
                                        <p className="p-details">{bookingData?.bookingResult?.length > 0 && bookingData?.bookingResult[0].vehicleCapacity}</p>
                                      </BusType>
                                    </Col>
                                    <Col sm="4">
                                      <FuelType>
                                        <StyleFuelType>Drivstoff type</StyleFuelType>
                                        <p className="p-details">{bookingData?.bookingResult?.length > 0 && bookingData?.bookingResult[0].vehicleFuelType}</p>
                                      </FuelType>
                                    </Col>
                                  </Row>

                                </BusTypeSection>
                                <Row>
                                  <Col sm="8" className="mt-3"></Col>
                                  <Row>
                                    <Col sm="4">
                                      <StyleParagraph style={{ position: "relative", left: "-35px" }}>Tilordne sjåfør</StyleParagraph>
                                    </Col>
                                    <Col sm="6"></Col>
                                    <Col sm="2">
                                      <StyleEditTour>
                                        <img alt="Jenssen Dashboard" src={EditTour}
                                          onClick={() => setActiveAssignDriver(!activeAssignDriver)}
                                          hidden={bookingData?.bookingResult?.length > 0 && (bookingData?.bookingResult[0].status == "ongoing" || bookingData?.bookingResult[0].status == "completed")}
                                        />
                                      </StyleEditTour>
                                    </Col>
                                  </Row>
                                  <Col sm="2"> </Col>
                                  <Col sm="2"> </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <AssignDriver ShouldDisplay={activeAssignDriver}>
                                      <p className="assign-driver">Velg Driver</p>
                                      {/* {console.log("driverList",driverList.filter(e=>e.id!=driverId.id))} */}
                                      <StyledSelect title={"assignedDriverId"} value={assignedDriverId}
                                        options={driverList.filter(e => e.id != driverId?.id)}
                                        getOptionLabel={(option) => option.name}
                                        getOptionValue={(option) => option.id}
                                        onChange={assignDriverId}
                                        components={{
                                          DropdownIndicator,
                                          IndicatorSeparator: () => null
                                        }}
                                      >
                                        {/* <option>Type tur</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option> */}
                                      </StyledSelect>
                                    </AssignDriver>
                                  </Col>
                                </Row>
                                <AssignDriverSection>
                                  <Row hidden={DriverImageHide}>
                                    <Col sm="2">
                                      <img alt="Jenssen Dashboard" src={AccountIcon} style={{ width: "27.5px", height: "27.5px", position: "relative", top: "7px" }}></img>
                                    </Col>
                                    <Col sm="8">
                                      <p className="head-details">{driverId?.driverNumber}</p>
                                      <LowerRightSideDiv><DriverName>{driverId?.name}</DriverName> |  <img alt="pin" src={callblack} style={{ width: "10.5px", height: "10.5px" }}></img> <Drivernumber >{driverId?.phoneNo?.length > 0 && driverId.phoneNo[0].number}</Drivernumber> </LowerRightSideDiv>
                                    </Col>
                                    <Col sm="2">
                                      <img alt="cross" 
                                        // hidden={DriverImageHide}
                                        style={{ width: "14px", height: "14px", position: "relative", top: "13px", left: "15px" }}
                                        src={cross} onClick={() => handleremovedriver(bookingData?.bookingResult[0]?._id,driverId.id)} 
                                        hidden={bookingData?.bookingResult?.length > 0 && (bookingData?.bookingResult[0].status == "ongoing" || bookingData?.bookingResult[0].status == "completed")}
                                        ></img>
                                        
                                    </Col>
                                  </Row>
                                </AssignDriverSection>
                              </Col>
                            </Row>
                            <HorizontalLine>
                              <hr /></HorizontalLine>
                            <Row>
                              <Col sm="4">
                                <Button className="Tracking-tour" variant="default" size="sm" type="submit" 
                                 onClick={() =>history.push({ pathname: "/map",
                                            state: {
                                              bookingid:bookingData?.bookingResult[0]._id
                                            },
                                        })}
                                  >
                                  <img alt="pin" src={pin}></img>
                                  <TrackingTour> Sporingstur</TrackingTour>
                                </Button>{' '}
                              </Col>
                              <Col sm="4"></Col>
                              {bookingData?.bookingResult?.length > 0 && (bookingData?.bookingResult[0].status == "ongoing" || bookingData?.bookingResult[0].status == "completed") ?
                                ""
                                :
                                <Col sm="4" >
                                  <div className=" float-end">
                                    <SaveButton onClick={()=>handlesBookingAccept("accept")}>LARGE</SaveButton>
                                    <CancelButton onClick={()=>handlesBookingAccept("cancel")}> AVBRYT</CancelButton>
                                  </div>
                                </Col>
                              }

                            </Row>
                          </> : <p className="styledNoRecord">Ingen opptak funnet</p>
                        }
                      </>
                    )
                  }
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </MainContainer>
      </PrivateLayout>
    </>
  )
}
export default TourPage

