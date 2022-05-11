import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../libs/_layouts/PrivateLayout";
import { Container, Row, Col, Card } from "react-bootstrap";
import tourBlack from "../assets/svg/tour-black.svg"
import AccountCircle from "../assets/svg/account_circle.svg"
import callBack from "../assets/svg/call-black.svg"
import Account from "../assets/svg/account_circle_bg.svg"
import { BusIcon, EditIcon, ViewIcon, FilterIcon, Email, Search } from "../assets/icons";
import Table from "../libs/_components/_ui/DriverTable";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router-dom";
import SearchWithFilter from "../libs/_components/_ui/admin/SearchWithFilter";
import TourOperatorDriver from "../_services/tourOperatorDriver.services";
import DriverListcard from '../libs/_components/PageChildComponents/DriverListcard';
import { CheckBoxLabel, CheckBox } from "../libs/_components/_ui/ToggleButton";
import Loader from "../libs/_components/_ui/Loader";
import noBooking from "../assets/NoBooking.svg"
import email from "../assets/email.svg"
import { LoadMore } from "../libs/_components/_ui/Buttons";
import {
  Heading,
} from "./_styles/Common.style";
import AddToBus from "../libs/_components/_ui/AddToBus"

const MainContainer = styled.div`
height:auto;
width: 100%;
.list-group{
 /* margin-top:-4px; */
}
.card{
margin-top:0px;
border:none;
width:100%;
}
.list-group-item {
/* border-bottom: 1px solid rgba(0,0,0,.125);
border-radius: 0px; */
}
.card{
border:none;
border-left:none;
border-right:none;
margin-bottom:5px;
}
.card .card-body{
box-shadow: 0px 4px 6px -3px rgba(0,0,0,0.75);
}
.space-manage{
position:relative;
left:-5px;
}
 
.form-control{
width: 100%;
height: 49px;
padding: 25px 50px;
box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14);
background: #FFFFFF;
}
.styled-labels{
position:relative;
top:10px;
left:-10px;
letter-spacing: 0.15px;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: rgba(33, 33, 33, 0.87);
}
.filter-type{
background: #FD6D03;
border-radius: 5px;
width:90%;
height:49px;
text-align:center;
padding:14px;
}
.list-group-item{
/* border-bottom: 1px solid rgba(0,0,0,.125);
border-radius: 0px;
border-left: none;
border-right: none;
padding: .12rem 1rem;
&:hover{
background:rgba(253, 109, 3, 0.1);
} */
}
.overflow{
overflow:hidden;
overflow-y:scroll;
display:block;
height:415px;
margin-top:5px;
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
const ListDetailBox = styled.div`
 margin-right:0;
p{
margin-bottom:0px;  
}
.p-detail{
color: rgba(0, 0, 0, 0.6);
font-size: 14px;
}

.lower-left-side-text{
width:71px;
height:20px;
background: #1BBD2B;
border-radius: 40px;
right:80px;
position:relative;
display:flex;
align-items:center;
font-size: 10px;
font-style: normal;
font-weight: bold;
line-height: 12px;
padding:10px;
top:25px;
}
`;

export const StyledViewIcon = styled.div`
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
color: #FD6D03;
letter-spacing: 0.01em;
svg {
font-size: 18px;
cursor: pointer;
}
`;
const StyledDropDown = styled(DropdownButton)` 
.dropdown-toggle{
position: relative;
left:0px;
background: #FFFFFF;
outline:none;
color: rgba(33, 33, 33, 0.87);
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
border-radius: 3.5px;
border:0.1px ridge #000000;
}
.dropdown-toggle::after {
display: inline-block;
margin-left: 2.255em;
vertical-align: .255em;
content: "";
border-top: .3em solid;
border-right: .3em solid transparent;
border-bottom: 0;
border-left: 0.3em solid transparent;
}
`;
const FilterSection = styled.div`
display:flex;
justify-content:end; 
outline:none;
margin-right:0px;
margin-top:10px;
`;
const LowerRightSide = styled.div`
margin-top:10px;
display:flex;
justify-content:start;
position:relative;
left:-16px;
.Icon-Text{
background: #1BBD2B;
border-radius: 40px;
padding:0px 10px;
margin-right:10px;
color: #FFFFFF;
font-style: normal;
font-weight: 700;
font-size:10px;
line-height: 12px;
margin-left: -6px;
height:20px;
}
svg{
margin:4px;
}
span{
margin-right:10px;
}
`;

const AddToBussection = styled.div` 
margin-top:-20px;
position:relative;
left:-10px;
top:-12px;
 `;
const StyledLoadMore = styled.div`
 display:flex;
 justify-content:center;
 margin-top:10px;
 `;
const StyledCheckBox = styled(CheckBox)`
position:relative;
display:flex;
left:10px;
margin-left:60px;
padding-left:30px;


`;
const DriverNo = styled.span` 
font-style: normal;
font-weight: 400;
font-size: 20px;
color: rgba(0, 0, 0, 0.87);
position:relative;
left:-10px;
`;
const DriverName = styled.p` 
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.015em;
color: #000000;
position:relative;
left:-10px;
`;

const ActiveBus = styled.p` 
 color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-top:13px;
  position:relative;
  left:45px;
  line-height: 20px;
  font-weight: 700;
`
const StyledDriver=styled(Heading)` 
position:relative;
top:-23px;
left:-3px;
`;

const NoBookingDiv=styled.span` 
background: #808080;
border-radius:30px;
text-align: left;
font-style: normal;
font-weight: bold;
font-size: 10px;
color:white;
padding:6px;
padding-right:6px;
padding-top:3px;
height:20px;
position: relative;
    left: 7px;
    top: 0px;
svg{
  width:12.5px;
  height:12.5px;
  position:relative;
  top:0rem;

}
`;
const EmailSection=styled.p` 
font-style: normal;
font-weight: 700;
font-size: 12px;
letter-spacing: -0.015em;
color: #000000;
margin-top:1px;
img{
  width:13.33px;
  height:10.67px;
  position:relative;
  top: -2px;;
}
`;
const EmailDiv=styled.span` 
position:relative;
left:-3px;
top: -1px;
img{
  width:10.5px;
  height:10.5px;
  position: relative;
    top: -1px;
    left:6px;
}
`;
const VerticalLineEmail=styled.span` 
border-left: 1px solid rgba(0, 0, 0, 0.5);
height:13px;
position:absolute;
top:3px;
left:205px;
`;
const VerticalLine = styled.span` 
border-left: 1px solid rgba(0, 0, 0, 0.5);
height:13px;
position:absolute;
top:3px;
left:96px;
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
const Border=styled.p` 
position:relative;
top:-5px;
`;
function TourPage() {
  const { push } = useHistory();
  const scrollRef = useRef(null)
  const [isloading, setLoading] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const [driverList, setDriverList] = useState([
  //   {
  //   id:"qweqweqweqweqwe12",
  //   driverNumber:"D-1001",
  //   name:"Linson Lorance",
  //   status:"onTour",
  //   phoneNo:[
  //     {number:"123123"}
  //   ]
  // },
  // {
  //   id:"qweqweqweqweqwe21",
  //   driverNumber:"D-1002",
  //   name:"Sunny Wayne",
  //   status:"No Booking",
  //   phoneNo:[
  //     {number:"123123"}
  //   ]
  // },
  // {
  //   id:"qweqweqweqweqwe31",
  //   driverNumber:"D-1003",
  //   name:"Abrid Shine",
  //   status:"onTour",
  //   phoneNo:[
  //     {number:"123123"}
  //   ]
  // }, {
  //   id:"qweqweqweqweqwe43",
  //   driverNumber:"D-1004",
  //   name:"Fahad Fazil",
  //   status:"onTour",
  //   phoneNo:[
  //     {number:"123123"}
  //   ]
  // }

])
  const [ids, setIds] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [tablePageNo, setTablePageNo] = useState(1)
  const [driverId, setDriverId] = useState([])
  const [tableData, setTable] = useState([])
  const [selectedClient, setSelectedClient] = useState("upcoming");
  const [id, setId] = useState([])
  const [showMore, setShowMore] = useState(false)
  const [total, setTotal] = useState(0)
  const data = React.useMemo(
    () => [

      { "college": "Tour-ID00026", "Start Date": "20-09-2021", "End date": "20-09-2021" },
      { "college": "Tour-ID00026", "Start Date": "20-09-2021", "End date": "20-09-2021" },
      { "college": "Tour-ID00026", "Start Date": "20-09-2021", "End date": "20-09-2021" },
      { "college": "Tour-ID00026", "Start Date": "20-09-2021", "End date": "20-09-2021" },
      { "college": "Tour-ID00026", "Start Date": "20-09-2021", "End date": "20-09-2021" },
      { "college": "Tour-ID00026", "Start Date": "20-09-2021", "End date": "20-09-2021" },
      { "college": "Tour-ID00026", "Start Date": "20-09-2021", "End date": "20-09-2021" },
      { "college": "Tour-ID00026", "Start Date": "20-09-2021", "End date": "20-09-2021" },


    ])
  const columns = React.useMemo(
    () => [
      {
        Header: "Tur-ID",
        accessor: "college",
      },
      {
        Header: "Startdato",
        accessor: "Start Date",
      },
      {
        Header: "Sluttdato",
        accessor: "End date",
      },

      {
        Header: "Handling",
        Cell: (props) => (
          <StyledViewIcon>
            <ViewIcon />Se turdetaljer
          </StyledViewIcon>
        ),
      },
    ],
    []
  );
  useEffect(() => {
     getDriverList()
  }, [pageNo]);
  // useEffect(() => {

  //   searchById(id)
  // }, [tablePageNo]);

  const getDriverList = () => {
    setLoading(true);
    TourOperatorDriver.tourOperatorGetAllDriver(pageNo)
      .then((res) => {
        console.log(res.data.data,"res");
        let result = res.data.data;
        let records = [...driverList, ...result];
        setDriverList(records)
        setLoading(false);
        setShowMore(false);
        console.log(records,"records[0]");
        
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
        setId(records[0].id)
        let a = [res.data.data]
        a.map((data) => {
          return (data.map((data) => {
            console.log(data.id)
            setIds(data.id)
          }))
        })
      })

      .catch((err) => {
        console.log(err);
      })
  }

  const searchById = (values) => {
    TourOperatorDriver.tourOPeratorGetDriverById(values, selectedClient, tablePageNo)
      .then((res) => {
        console.log(res.data.data)
        setDriverId(res.data.data.driverInfo[0])
        let result = res.data.data.bookingsData;
        let records = [...result];
        setTable(records)
        // setTable(res.data.data.bookingsData)
        // console.log(res.data.data.driverInfo[0].name)
      })
      .catch((err) => {
        console.log(err);
      })

  }

  const deleteById = (deletevalue) => {
    console.log(deletevalue)
    TourOperatorDriver.tourOPeratorDriverDelete(deletevalue)
      .then((res) => {
        setDriverList([res.data.data])
        // return TourOperatorDriver.tourOperatorDriver();
      })
      .then((res) => {
      })

  }
  const updateListData = (FilterData) => {
    console.log(FilterData)

    TourOperatorDriver.tourOperatorGetAllDriver(1, FilterData)
      .then((res) => {
        console.log(res.data.data)
        setDriverList([...res.data.data])
      })


  }



  const handleToggle = (id, e) => {
    let ischeckboxChecked = e.target.checked ? "false" : "true";
    setIsActive(ischeckboxChecked)
    const params = JSON.stringify({
      "active": isActive
    })
    TourOperatorDriver.tourOPeratorDriverStatus(params, id)
      .then((res) => {
        console.log(res.data.message)
      })

  }
  const handleSelectChange = (event) => {
    console.log("event", event);
    setSelectedClient(event);
    TourOperatorDriver.tourOPeratorGetDriverById(driverId._id, event)
      .then((res) => {
        console.log(res.data.data.bookingsData)
        setTable(res.data.data.bookingsData)
      })
  }
  return (
    <>
      <PrivateLayout>
        <MainContainer>
          <Row>
            <Col md="6">
              <StyledDriver>Sjåfør</StyledDriver>
            </Col>
            <Col md="6"> <AddToBussection onClick={() => push("/tour-operator/driver/add")}><AddToBus AddToDriver={true} /></AddToBussection></Col>
          </Row>
          <Row>
            <Col md="4" >
              {/* <Card style={{marginTop:"3px"}}> */}
              <SearchWithFilter
                DriverType={updateListData}
                SearchDriver={true}
              />
             <OverFlow>
              {/* <Card className="overflow"> */}
                {/* {isloading ? */}
                {false?
                  <Loader /> : (
                    <>
                      {driverList.length > 0 ?
                        <DriverListcard
                          scrollRef={scrollRef}
                          searchById={searchById}
                          data={driverList}
                          deleteById={deleteById}
                        /> : <p className="styledNoRecord">Ingen opptak funnet</p>
                      }

                    </>
                  )
                }
                </OverFlow>
              {/* </Card> */}
              {showMore && driverList.length > 3 &&
                <StyledLoadMore>
                  <LoadMore onClick={(e) => { e.preventDefault(); setPageNo(pageNo + 1) }}>Last mer</LoadMore>
                </StyledLoadMore>
               } 

            </Col>

            <Col xs md="8"  className="space-manage">

              <Card>
                <Card.Body style={{ minHeight: "560px",padding:"28px" }}>
                  {isloading ?
                    <Loader /> :
                    <>
                      {driverList.length > 0 ?
                        <>
                          <ListDetailBox>
                            <Row>
                              <Col sm="1" style={{ marginRight: "10px" }}>
                                {
                                  <img src={Account} alt="tour" style={{ width:"51px", height: "51px" }} />}
                              </Col>
                              <Col sm={7}>
                                <DriverNo>{driverId?.driverNumber}</DriverNo>
                                <DriverName>{driverId?.name}</DriverName>
                                {/* <Row > */}
                                  <LowerRightSide>
                                    {driverId.currentStatus === "onTour" ?
                                      <span className="Icon-Text">  <BusIcon />&nbsp;On Tour   </span> :
                                      <NoBookingDiv>  <img src={noBooking}/>&nbsp;No Booking </NoBookingDiv>
                                    }
                                   {driverId.status ? <Border>|</Border> :<Border>|</Border>} &nbsp; <EmailDiv>{driverId.mobile&&driverId.mobile ?
                                     <EmailSection><img src={callBack} alt="mobile" />&nbsp;&nbsp; {driverId.mobile}</EmailSection>  : ""} </EmailDiv>
                                    <Border>|</Border> &nbsp; <EmailSection><img src={email} alt="tour" />&nbsp; {driverId.email ?
                                      driverId.email : ""}</EmailSection>
                                  </LowerRightSide>
                                {/* </Row> */}
                              </Col>
                              <Col sm="3">
                                <Row>
                                  <Col sm={8} style={{ marginLeft: "33px" }}>
                                    <ActiveBus>  Aktiv Sjåfør</ActiveBus>
                                  </Col>
                                  <Col sm={2}>

                                    <StyledCheckBox
                                      id="checkbox"
                                      type="checkbox"
                                      // value={isActive}
                                      onChange={(e) => handleToggle(ids, e)} />
                                    <CheckBoxLabel htmlFor="checkbox" />
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </ListDetailBox>
                          <hr style={{position:"relative",top:"5px"}} />
                          <Row>
                            <Col>
                              <FilterSection>
                                <label className="styled-labels">Filtrer etter:</label>
                                <StyledDropDown
                                  variant="none"
                                  align="end"
                                  title={selectedClient == "upcoming" ? "Kommende" : selectedClient == "completed" ? "Fullført" : "Pågående"} onSelect={(evt) => handleSelectChange(evt)}
                                >
                                  <Dropdown.Item eventKey="upcoming">Kommende</Dropdown.Item>
                                  <Dropdown.Item eventKey="completed">Fullført</Dropdown.Item>
                                  <Dropdown.Item eventKey="ongoing">Pågående</Dropdown.Item>
                                </StyledDropDown>
                              </FilterSection>
                            </Col>
                          </Row>
                          <Row style={{width:"105%",marginLeft:"-20px"}}> 

                            <Col sm="12">
                              <Table
                                columns={columns}
                                tableData={tableData}
                                //tableData={data}
                                scrollRef={scrollRef}
                                tourOperatorDriver={true}
                              />

                            </Col>
                          </Row>
                          <Row>
                            <Col md="4"> </Col>
                            <Col md="4">
                              {/* {
                                tableData.length > 0 ?
                                  <LoadMoreDriver >
                                    <a href="#" onClick={(e) => { e.preventDefault(); setTablePageNo(tablePageNo + 1) }}>Last mer</a>
                                  </LoadMoreDriver> :
                                  <></>
                              } */}

                            </Col>
                            <Col md="4"> </Col>

                          </Row>
                        </> : <p className="styledNoRecord">Ingen opptak funnet</p>
                      }
                    </>

                  }
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </MainContainer>
      </PrivateLayout>
    </>
  );
}
export default TourPage;
