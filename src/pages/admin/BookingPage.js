import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../../libs/_layouts/PrivateLayout";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
import Account from "../../assets/svg/account_circle_bg.svg"
import Bus from "../../assets/bus.png";
import SearchWithFilter from "../../libs/_components/_ui/admin/SearchWithFilter";
import BookingCard from '../../libs/_components/PageChildComponents/admin/BookingCard';
import AccountIcon from '../../assets/svg/account_circle.svg'
import pin from '../../assets/svg/pin.svg';
import { EditIcon } from "../../assets/icons";
import cross from "../../assets/svg/cross.svg";
import callblack from "../../assets/svg/call-black.svg";
import bus from "../../assets/busicon.svg";
import email from "../../assets/emails.svg";
import { LoadMore, SaveButton, CancelButton } from "../../libs/_components/_ui/Buttons";
import { BusIcon, Email } from "../../assets/icons";
import callBack from "../../assets/svg/call-black.svg"
import Loader from "../../libs/_components/_ui/Loader";
// import { LoadMore } from "../libs/_components/_ui/Buttons";
import {
  Heading,
} from "../_styles/Common.style";
import AdminTourBooking from "../../_services/adminTourBooking.services";
import { useHistory, withRouter } from "react-router-dom";
import moment from "moment";
import Select, { components } from "react-select";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const MainContainer = styled.div` 
  width: 100%;
  height: auto;
  .card{
    margin-top:4px;
    border-left:none;
    border-right:none;
    border:none;
   
    }
   .card .card-body{
    box-shadow: 0px 4px 6px -3px rgba(0,0,0,0.75);
  }
  .leftsideblock{
    position: relative;
    left: 3px;
    top: -2px;
    }
   .head-details{
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.15px;
    color: #FD6D03;
   }
   .p-details{
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.015em;
    color: rgba(0, 0, 0, 0.87);
   }
   .large-btn{
    background-color:#FD6D03 !important;
    box-shadow: none;
    color: #fff;
    margin-right: 10px;
    padding:8px 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #FFFFFF;
    }
    .abv-btn{
    box-shadow: none;
    border: 1px solid #000 !important;
    padding:8px 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #000000;
  }
  
  .Tracking-tour{
    
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #000000;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 4px;
    padding:9px 9px;
  }
  .overflow{
  display: block;
  height: 420px;
  overflow-y: scroll;
  margin-top:10px;
 }
 .spinner-border.text-secondary {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
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
  
  `;
  const Drivernumber = styled.span` 
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  letter-spacing: 0.15px;
  `;
const VerticalLine = styled.div` 
 border-left: 2px ridge rgba(0, 0, 0, 0.6);
  height: 260px;
`;
const StyledHeading = styled.p` 

font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
color: #000000;
letter-spacing: 0.0025em;

`;
const BusTypeSection = styled.div` 
    width :100%;
    /* height :103px; */
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    border-radius: 5px;
    float:right;
    padding:8px;
`;
const FuelType = styled.div` 
    margin-top:30px;
`
const BusType = styled.div` 
  position:relative;
  left:30px;
`;
const ListBox = styled.div``
const ButtonSection = styled.div` 
display:flex;
justify-content:end;
`;
const LeftSideBlock = styled.div` 
display:flex;
justify-content:start;
.label{
    position:relative;
    left:40px;
    
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;
    color: #000000;
}
.circle{
  position:relative;
   background: rgba(253, 109, 3, 0.1);
  width:60px;
  height:60px;
  border-radius:20px;
  padding:4px;
  /* top:10px; */
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
`;
const Vertical = styled.div` 
 border-left: 1px dashed rgba(0, 0, 0, 0.6);
  height:47px;
  margin-left:10px;
  margin-top:-20px;
`
const ListDetailBox = styled.div` `
const AssignDriverSection = styled.div` 
   width:100%;
   /* height:77px; */
   border: 1px solid #E6E6E6;
   box-sizing: border-box;
   border-radius: 5px;
   float:right;
   padding:8px;
`;
const LowerRightSideDiv = styled.div` 
display:inline-block;
position:relative;
top:-10px;
`;
const StyledLoadMore = styled.div`
margin-top:13px;
 display:flex;
justify-content:center;
 /* a{
 
 font-style: normal;
 font-weight: bold;
 font-size: 14px;
 line-height: 16px;
 letter-spacing: 1.25px;
 text-transform: uppercase;
 color: #000000;
 background: #FFFFFF;
 padding: 3px ;
 border: 1px solid #000000;
 box-sizing: border-box;
 border-radius: 4px;
 cursor: pointer;
 text-decoration: none;
 } */
`;
const LowerRightSideBlock = styled.div` 
  display:flex;
  justify-content:start;
  position:relative;
  top:-10px;
  .Icon-Text{
    background: #1BBD2B;
    border-radius: 40px;
    padding:3px 10px;
    font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 12px;
    margin-right:10px;
    width:71px;
    height:20px;
    color: #FFFFFF;
   }
   svg{
       /* margin:5px; */
   }
   span{
      margin-right:10px;
   }
 
`;
const CheckBoxWrapper = styled.div`
display:inline-block;
justify-items:left;

/* position:relative; */

span{
  margin-left:-30px;
 
}
`;
const StyledSelect = styled(Select)`
margin-top:-30px;
border:1px solid black;
&:focus{

}
`;
const CheckBoxLabel = styled.label`
  position:absolute;
  right:5px;
  width: 50px;
  height: 26px;
  border-radius: 35px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 40px;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 40px;
  width: 22px;
  height: 16px;

  &:checked + ${CheckBoxLabel} {
    background: #1BBD2B;
    &::after {
      content: "";
      display: block;
      border-radius: 40px;
      width: 18px;
      height: 18px;
      margin-left: 26px;
      transition: 0.2s;
    }
  }
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
font-weight: bold;
font-size: 16px;
line-height: 16px;
letter-spacing: -0.015em;
color: rgba(0, 0, 0, 0.87); 

`
const AssignDriver = styled.div` 
 display:${props => props.ShouldDisplay ? "block" : "none"};
 width:100%;
 max-width:440px;
border: 1px solid #E6E6E6;
box-sizing: border-box;
border-radius: 3.5px;
background:white;
padding:10px;
margin-bottom:10px;
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
const BookingIds = styled.h5` 
 font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 36px;
color: rgba(0, 0, 0, 0.87);


 `;
const BookingCustomer = styled.p` 
 font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #000000;
position: relative;
    top: -7px;
 `;
const HeadingBooking = styled(Heading)` 
position:relative;
top: -21px;
left: 0px;
 `;

const MobileSection = styled.span` 
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #000000;
`;
const Emailsection = styled.span` 
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #000000;
`;
const VerticalLineMobile = styled.span` 
border-left: 1px solid rgba(0, 0, 0, 0.5);
height:13px;
position:absolute;
top:1px;
left:90px;
`;
const VerticalLineEmail = styled.span` 
border-left: 1px solid rgba(0, 0, 0, 0.5);
height:13px;
position:absolute;
top:1px;
left:150px;
`;
const OverFlow = styled.div` 
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
const Border = styled.p` 
position:relative;
top:-5px;
`;
const DriverName = styled.span` 
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.15px;
color: #000000;
 `
const searchData = [
  //   {
  //     id: 1,
  //     bookno: 1234567,
  //     name: "Richard Swell",
  //     BookingType: "BookingType-Outstation",
  //     busid: "BS-1001",
  //     agend: "Peter Travelers"

  //   },
  //   {
  //     id: 1,
  //     bookno: 1234567,
  //     name: "Richard Swell",
  //     BookingType: "BookingType-Outstation",
  //     busid: "BS-1001",
  //     agend: " Richard Tours"
  //   },
  //   {
  //     id: 1,
  //     bookno: 1234567,
  //     name: "Richard Swell",
  //     BookingType: "BookingType-Outstation",
  //     busid: "BS-1001",
  //     agend: "Richard Tours"
  //   },
  //   {
  //     id: 1,
  //     bookno: 1234567,
  //     name: "Richard Swell",
  //     BookingType: "BookingType-Outstation",
  //     busid: "BS-1001",
  //     agend: "Richard Tours"
  //   }
]

const BookingPage = (props) => {
  const [activeAssignDriver, setActiveAssignDriver] = useState(false)
  const [pageNo, setPageNo] = useState(1)
  const [busType, setBusType] = useState(false)
  const [selectedValue, setSelectedValue] = useState([])
  const [dataSet, setDataSet] = useState([]);
  const [bookId, setBookingId] = useState("");
  const { push } = useHistory();
  const [isloading, setLoading] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const scrollRef = React.useRef(null)
  const [bookingData, setBookingData] = useState([]);
  const [driverList, setDriverList] = useState([]);
  const [driverId, setdriverId] = useState([]);
  const [assignedDriverId, setassignedDriverId] = useState([]);
  const [total, setTotal] = useState(0)
  const [DriverImageHide, setDriverImageHide] = useState(false)
  var _ = require('lodash');
  useEffect(() => {
    getTourBookingList()
  }, [pageNo]);



  const getTourBookingList = () => {
    setLoading(true);
    AdminTourBooking.getTourOpList(pageNo)
      .then((res) => {
        console.log("res", res);
        let result = res?.data?.data;
        let records = [];
        if (pageNo > 1) {
          records = [...dataSet, ...result];
        }
        else {
          records = [...result];

        }
        setDataSet(records)
        setLoading(false);
        let totalRecords = 100
        setTotal(totalRecords);
        if (totalRecords > 3 && result.length > 0) {
          setShowMore(true);
        }
        searchById(records[0]._id)
        scrollRef.current.scrollIntoView(
          {
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const searchById = (values) => {
    AdminTourBooking.getBookingById(values)
      .then((res) => {
        setBookingId(res.data.data[0])
      })
      .catch((err) => {
        console.log(err);
      })

  }

  const handleTypeTur = (e) => {
    let selectValue = e.target.value
    setSelectedValue(e.target.value)
    AdminTourBooking.getTourOpList(1, " ", selectValue)
      .then((res) => {
        console.log(res)
        setDataSet(res?.data?.data)
      })
  }
  const handleBookingType = (e) => {
    let selectBookingValue = e.target.value
    AdminTourBooking.getTourOpList(1, "", "", selectBookingValue)
      .then((res) => {
        console.log(res)
        setDataSet(res?.data?.data)
      })
  }
  const SearchBookingCust = (FilterData) => {
    console.log(FilterData)
    AdminTourBooking.getTourOpList(pageNo, FilterData)
      .then((res) => {
        console.log(res.data.data)
        setDataSet(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const assignDriverId = (e) => {
    console.log("driverid", e);
    setdriverId(e);
    
    //   let selectBookingValue=e.target.value
    // AdminTourBooking.tourOperatorBookings(1,"","",selectBookingValue)
    //   .then((res)=>{
    //     console.log(res)
    //     setTourData(res?.data?.data)
    //   })
    setDriverImageHide(false)
    handlesavenewdriver()
  }
  const handlesavenewdriver = () => {
    AdminTourBooking.tourOperatorAssignDriver(bookingData.bookingResult[0]._id, driverId.id)
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
    AdminTourBooking.bookingacceptorcancel(bookingData.bookingResult[0]._id,status)
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
    AdminTourBooking.removeAssigneddriver(bookingid,driverid)
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
          <Row>
            <Col md="6">
              <HeadingBooking>Bestilling</HeadingBooking>
            </Col>
            <Col md="6"> </Col>
          </Row>
          <Row>
            <Col md="4" className="leftsideblock">

              <SearchWithFilter SearchBooking={true} SearchBookingCust={SearchBookingCust}
                handleBookingType={handleBookingType}
                handleTypeTur={handleTypeTur}
              />
              <OverFlow>
                {/* <Card className="overflow"> */}
                {
                  isloading ?
                    <Loader /> : (
                      <>

                        {dataSet.length > 0 ?
                          <BookingCard scrollRef={scrollRef} data={dataSet} searchById={searchById} />
                          : <p className="styledNoRecord">Ingen opptak funnet</p>
                        }
                      </>
                    )
                }


                {/* </Card> */}
              </OverFlow>
              {
                showMore && dataSet.length > 3 &&
                <StyledLoadMore>
                  <LoadMore onClick={(e) => { e.preventDefault(); setPageNo(pageNo + 1) }}>Last mer</LoadMore>
                </StyledLoadMore>
              }

            </Col>
            <Col xs md="8">
              <Card style={{ minHeight: "550px" }}>
                <Card.Body style={{ padding: "28px" }}>
                  {isloading ?
                    <Loader /> : (
                      <>
                        {dataSet.length > 0 ?
                          // {true ?
                          <>
                            <ListDetailBox>
                              <Row>
                                <Col md="1">
                                  <img src={Account} alt="tour" style={{ width: "51.67px", height: "51.67px" }} />
                                </Col>
                                <Col md="8">
                                  <BookingIds>{bookId?.bookingId}</BookingIds>
                                  <BookingCustomer>{bookId?.customerName}</BookingCustomer>
                                  <Row>
                                    <LowerRightSideBlock>
                                      <span className="Icon-Text"><img src={bus} alt="tour" style={{ width: "12px", height: "14.25px", position: "relative", left: "-4px" }} />{_.startCase(_.toLower(bookId?.tripType))}</span>
                                      <Border>|</Border> &nbsp; <MobileSection> <img src={callBack} alt="tour" style={{ width: "10.5px", height: "10.5px" }} /> {bookId ? bookId.customerMobile[0]?.number : ""}</MobileSection>
                                      <Border>|</Border> &nbsp;&nbsp;<Emailsection> <img src={email} alt="tour" style={{ width: "13.33px", height: "10.67px", position: "relative" }} />&nbsp;&nbsp;{bookId?.customerEmail}</Emailsection>
                                    </LowerRightSideBlock>
                                  </Row>
                                </Col>
                                {/* <Col md="2">
                        <CheckBoxWrapper>
                          <span>  Aktiv Sjåfør</span>
                          <CheckBox id="checkbox" type="checkbox" />
                          <CheckBoxLabel htmlFor="checkbox" />
                        </CheckBoxWrapper>
                      </Col> */}
                              </Row>
                            </ListDetailBox>
                            <hr style={{position:"relative",top:"-25px"}}/>
                            <Row  style={{position:"relative",top:"-20px"}}>
                              <Col>
                                <HeadingStyle>Bestillingstype</HeadingStyle>
                                <Paragraph>{_.startCase(_.toLower(bookId?.tripType))}</Paragraph>
                              </Col>
                              <Col>
                                <HeadingStyle>Bestillingsdato</HeadingStyle>
                                <Paragraph>{moment(bookId?.bookingDate).format("DD/MM/YYYY")}</Paragraph>
                              </Col>
                              {
                              (bookId?.tripType=="oneWay")?
                              <Col>
                              <HeadingStyle>Reisedetaljer</HeadingStyle>
                              <Paragraph>Adults : {bookId?.oneWayPassengers?.adults}</Paragraph>
                              <Paragraph>Children : {bookId?.oneWayPassengers?.children}</Paragraph>
                              <Paragraph>Infants :{bookId?.oneWayPassengers?.infants}</Paragraph>
                            </Col>
                             :
                             <>
                             <Col>
                              <HeadingStyle>Reisedetaljer</HeadingStyle>
                              <Paragraph>Adults : {bookId?.roundTripPassengers?.adults}</Paragraph>
                              <Paragraph>Children : {bookId?.roundTripPassengers?.children}</Paragraph>
                              <Paragraph>Infants :{bookId?.roundTripPassengers?.infants}</Paragraph>
                            </Col>
                             </> 
                              
                              }
                              
                              <Col>
                                <HeadingStyle>Betalingsinformasjon</HeadingStyle>
                                <Paragraph> <span style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "14px" }}>Fra</span> {bookId ? bookId?.finalChargesInfo?.totalPriceWithTax : ""} /-</Paragraph>
                              </Col>
                            </Row>
                            <hr style={{position:"relative",top:"-20px"}}/>
                            <Row>
                              <Col sm="5">
                                <StyledHeading style={{ marginLeft: "30px" }}>Turdetaljer</StyledHeading>
                                <LeftSideBlock>
                                  <div class="row mt-1">
                                    <div class="col-md-12">
                                      <ul className="stepper stepper-vertical">
                                        <span class="circle">01</span>
                                        <span class="Upperlabel">Reise fra ({moment(bookId?.oneWayStartDate).format("DD/MM/YYYY")})</span><br />
                                        <span class="label">{bookId?.itinerary?.length > 0 && bookId?.itinerary[0]?.address}</span>

                                        <Vertical></Vertical>
                                        <span class="circle">02</span>
                                        <span class="Upperlabel">Reise til</span>
                                        {/* <div class="step-content grey lighten-3"> */}
                                        <span class="label">{bookId?.itinerary?.length > 0 && bookId?.itinerary[1]?.address}</span>
                                        {/* </div> */}
                                        <Vertical></Vertical>
                                        <span class="circle">04</span>
                                        <span class="Upperlabel">Reise fra ({moment(bookId?.oneWayEndDate).format("DD/MM/YYYY")})</span>
                                        <span class="label">{bookId?.itinerary?.length > 0 && bookId?.itinerary[2]?.address}</span>
                                      </ul>
                                    </div>
                                  </div>
                                </LeftSideBlock>
                              </Col>
                              <Col sm="1"><VerticalLine></VerticalLine></Col>
                              <Col sm="6">
                                <Row>
                                  <Col sm="4">
                                    <StyledHeading>Busstype</StyledHeading>
                                  </Col>
                                  <Col sm="6"></Col>

                                </Row>
                                <BusTypeSection>
                                  <Row>
                                    <Col sm="4">
                                      <img alt="bus" src={Bus}></img>
                                    </Col>
                                    <Col sm="4">
                                      <BusType>
                                        <h5 className="head-details">BS-1001</h5>
                                        <span className="book-info">Antall seter</span>
                                        <p className="p-details">20</p>
                                      </BusType>
                                    </Col>
                                    <Col sm="4">
                                      <FuelType>
                                        <h6 className="book-info">Drivstoff type</h6>
                                        <p className="p-details">Bensin</p>
                                      </FuelType>
                                    </Col>
                                  </Row>

                                </BusTypeSection>
                                <Row>
                                  <Col sm="8" className="mt-3"></Col>
                                  <Row>
                                    <Col sm="4">
                                      <StyledHeading>Tilordne sjåfør</StyledHeading>
                                    </Col>
                                    <Col sm="6"></Col>
                                    <Col sm="2">
                                      <EditIcon style={{ cursor: "pointer", float: "right" }}
                                        onClick={() => setActiveAssignDriver(!activeAssignDriver)}
                                      />
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
                            <hr />
                            <Row>
                              <Col sm="4">
                                <Button className="Tracking-tour" variant="default" size="sm" onClick={() => push('/admin/googleMaps')}>
                                  <img alt="pin" src={pin}></img>
                                  <span> Tracking tour</span>
                                </Button>{' '}
                              </Col>
                              <Col sm="4"></Col>
                              <Col sm="4">
                                <div className=" float-end">
                                  <SaveButton>LAGRE</SaveButton>
                                  <CancelButton> AVBRYT</CancelButton>
                                </div>
                              </Col>
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
export default withRouter(BookingPage);