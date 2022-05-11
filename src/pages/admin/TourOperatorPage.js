import React, { useEffect, useState, useRef, useMemo } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../../libs/_layouts/PrivateLayout";
import { useHistory } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { ViewIcon } from "../../assets/icons";
import SearchWithFilter from "../../libs/_components/_ui/admin/SearchWithFilter";
import Tabs from "../../libs/_components/_ui/admin/Tabs";
import Panel from "../../libs/_components/_ui/admin/Panel";
import TourOperatorCard from '../../libs/_components/PageChildComponents/admin/TourOperatorCard';
import Account from "../../assets/svg/account_circle_bg.svg";
import Email from "../../assets/svg/email.svg";
import Bookingcomission from "../../assets/svg/booking-comission.svg";
import Call from "../../assets/svg/call.svg";
import { StyledButton,LoadMore } from "../../libs/_components/_ui/Buttons";
import Table from "../../libs/_components/_ui/table";
import Loader from "../../libs/_components/_ui/Loader";
import AdminTourOperator from "../../_services/adminTourOperator.services";
import "../../libs/_components/_ui/admin/styles_tab.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { CheckBoxLabel, CheckBox } from "../../libs/_components/_ui/ToggleButton";
import TourOperatotBusDetailsCard from "../../libs/_components/PageChildComponents/admin/TourOperatotBusDetailsCard"
import TourOperatorDriverDetailsCard from "../../libs/_components/PageChildComponents/admin/TourOperatorDriverDetailsCard"

import {
  Heading,
} from "./../_styles/Common.style";
import { camelCase } from "lodash";
var _ = require('lodash');

const MainContainer = styled.div`
position:relative;
height: auto;
width: 100%;
.card{
margin-top:4px;
border:none;
width:100%;
}
.card .card-body{
box-shadow: 0px 4px 6px -3px rgba(0,0,0,0.75);
}
.space-manage{
position:relative;
left:-7px;
}
.list-group-item {
border-bottom: 1px solid rgba(0,0,0,.125);
border-radius: 0px;
}
.card-body .search_box{
background-color: #E5E5E5;
height: 50px;
}
.switch_button_box{
background-color: #E5E5E5;
padding: 18px 10px;
margin: 0;
margin-top: 10px;
}
.carousel-inner img{
 width:100%;
   
}
.overflow{
display: block;
height: 440px;
overflow-y: scroll;
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
left: 0px;
right: 0;
margin-left: auto;
margin-right: auto;
display:inline-table;
top: 200px;
}
.styledNoRecordDriver{
position: absolute;
left: 0px;
right: 0;
margin-left:auto;
margin-right: auto;
display: inline-block;
top: 130px;
padding-left:304px;
}
`;
const MainDiv=styled(Row)` 
margin-top:-15px;
`;

const HeadingStyle = styled.h1` 

font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 20px;
color: rgba(0, 0, 0, 0.87);
letter-spacing: 0.25px;
`;
const Paragraph = styled.p`

font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.015em;
color: rgba(0, 0, 0, 0.87);

`
const ListDetailBox = styled.div` 
.span-details{

font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 36px;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 0.87);
   
}
.p-details{
position: relative;
top: -5px;  
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
letter-spacing: 0.0015em;
color: rgba(0, 0, 0, 0.5);
  }
.h5-details{
    
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 36px;
color: rgba(0, 0, 0, 0.87);
}
.span-details {
    
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 36px;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 0.87);
}
`;
const LowerRightSideBlock = styled.div` 
display:inline-block;
position: relative;
top: -6px;
`;
const StyledDropDown = styled(DropdownButton)` 

.dropdown-toggle{
position: relative;
top:-5px;
left:0px;
background: #FFFFFF;
outline:none;
color: rgba(33, 33, 33, 0.87);
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
border:1px solid #000000;
padding:5px 17px;
}
`;

const ActiveBus = styled.p` 
color: rgba(0, 0, 0, 0.6);
font-size: 14px;
margin-top:12px;
margin-left:-35px;
@media (max-width: 1300px) {
  margin-left:-56px;
  }
`

const StyledCheckBox = styled(CheckBox)`
position:relative;
display:flex;
 
 `;

const FilterSection = styled.div`
display:flex;
justify-content:end; 
outline:none;
position:relative;
margin-top:10px;
left:-10px;
`;
const StyledLoadMore = styled.div`
margin-top:10px;
display:flex;
justify-content:center;
`;

const Container = styled(Row)` 
width:100%;
height:auto;
overflow-y:scroll;
margin-bottom:30px;
height:230px;
position:relative;

`;
const AddToBussection = styled.div`  
position:relative;
left:-7px;
top:-30px;
`;
const StyledViewIcon = styled.div`
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
const TabSection = styled(Row)` 
margin-top:35px;
`;
const HeadingTourOPerator=styled(Heading)` 
    position: relative;
    top: -23px;
    left: 0px;
`;
const EmailText=styled.span` 
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #000000;
`
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
function TourOperatorPage() {
  const [isloading, setLoading] = useState(false)
  const [tabActive, setTab] = useState("driver")
  const [tourOpId, SetTourOpId] = useState("");
  const [OpId, SetOpId] = useState("");
  const [bookingStatusFilter, setBookFilter] = useState("ongoing");
  const history = useHistory();
  const scrollRef = useRef(null)
  const [dataSet, setDataSet] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [pagenumber, setPagenumber] = useState(1)
  const [driverDetails, setDriverDetails] = useState([])
  const [tid, setId] = useState([])
  const [busDetails, setBusDetails] = useState([])
  const [bookingdetails, setbookingdetails] = useState([])
  const [isActive, setIsActive] = useState(true)
  const [TotalCount, setTotalCount] = useState([])
  const [selectedActiveTab, setSelectedActiveTabs] = useState()
  const [showMore, setShowMore] = useState(false)
  const [total, setTotal] = useState(0)
  //console.log("tabActive", history.location.state.activeTab);
  // console.log("tabActive", history.location.state.tid);
  // selectedActiveTab=history.location.state.activeTab


  const getTourOpList = (opid) => {
    setLoading(true);
    AdminTourOperator.getTourOpList(pageNo)
      .then((res) => {
        console.log("res", res);
        let result = res?.data?.data;
        let records = [...dataSet, ...result];
        console.log(records)
        setDataSet(records);
        setShowMore(false);
        let totalRecords=100
        setTotal(totalRecords);
        if (totalRecords > 4 && result.length > 0) {
          setShowMore(true);
        }
        setLoading(false);
        scrollRef.current.scrollIntoView(
          {
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
          })
        // setDataSet(res?.data?.data)
        if (!opid) {
        SetOpId(records[0]._id)
        searchById(records[0]._id)
        
      }
      })
      .catch((err) => {
        console.log(err);
      })

  }
  const searchById = (values) => {
    console.log("time 2");
    SetOpId(values)
    setId(values)
    AdminTourOperator.tourOPeratorGetOpById(values, tabActive, bookingStatusFilter)
      .then((res) => {
        
        console.log("res", res.data.data);
        // console.log("tabActive", tabActive);
        let result = res?.data?.data;
        let records = result;
        setDriverDetails([...records])
        if (tabActive === "vehicle") { setBusDetails([...records]) }
        if (tabActive === "booking") {
          console.log("tabActive", tabActive);

          setbookingdetails([...records])
        }
        setTotalCount({
          totalDriver: res.data.totalDriver,
          totalBuses: res.data.totalBuses,
          totalBooking: res.data.totalBooking
        })
        SetTourOpId(res.data)
        history.replace()
      })
      .catch((err) => {
        console.log(err);
      })
    // if (history?.location?.state?.activeTab && history?.location?.state?.tid) {
    //   history.replace()
    // }

  }


  const SearchTourOp = (FilterData) => {
    console.log(FilterData)
    AdminTourOperator.getTourOpList(pageNo, FilterData)
      .then((res) => {
        console.log(res.data.data)
        setDataSet(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }


  const handleToggle = (id, e) => {
    let ischeckboxChecked = e.target.checked ? "false" : "true";
    setIsActive(ischeckboxChecked)
    const params = JSON.stringify({
      "active": isActive
    })
    AdminTourOperator.getTourOperatorStatus(params, id)
      .then((res) => [
        console.log(res)
      ])

  }

  useEffect(() => {
    if (history?.location?.state?.activeTab && history?.location?.state?.tid) {
      let myPromise = new Promise(function(myResolve, myReject) {
        // "Producing Code" (May take some time)
        {
          console.log("time");
          setSelectedActiveTabs(history?.location?.state?.activeTab)
          setTab(history?.location?.state?.activeTab)
          //SetOpId(history?.location?.state?.tid)
          searchById(history?.location?.state?.tid);
          // setDriverDetails([])
          // setBusDetails([])
          //getTourOpList(history?.location?.state?.tid)
        }
          myResolve(history.replace() ); // when successful
          myReject();  // when error
        });

      myPromise.then(
          function(value) { 
            searchById(history?.location?.state?.tid);
            
          },
          function(error) { /* code if some error */ }
        );
      

      // history.replace() 
    } else {
      setDriverDetails([])
      setBusDetails([])
      //searchById(OpId);
      
    }
 }, [tabActive, pagenumber, bookingStatusFilter,pageNo]);
  useEffect(() => {

       getTourOpList()



  }, [tabActive]);

 
  console.log(tabActive)
  const columns = React.useMemo(
    () => [
      {
        Header: "Bestillings-ID",
        accessor: "bookingId",
      },
      {
        Header: "Startdato",
        accessor: "startDate",
      },
      {
        Header: "Sluttdato",
        accessor: "endDate"
      },

      {
        Header: "Handling",
        Cell: (props) => (
          <StyledViewIcon>
            <ViewIcon />View Tour Detail
          </StyledViewIcon>
        ),
      },
    ],
    []
  );

  return (
    console.log("tabActive",tabActive),
    <>
      <PrivateLayout>
        <MainContainer>
          {/* Tour Operator Page */}
          <Row>
            <Col md="6">
              <HeadingTourOPerator >Turoperatør</HeadingTourOPerator>
            </Col>
            <Col md="6"><AddToBussection onClick={() => history.push("/admin/tour-operator/add")}><StyledButton> + Legg til Turoperatør</StyledButton></AddToBussection> </Col>
          </Row>
          <MainDiv>
            <Col md="4" >
              <SearchWithFilter AdminSearchTourOperator={true} SearchTourOp={SearchTourOp} />
              <OverFlow>
              {/* <Card className="overflow"> */}
                {isloading ?
                  <Loader /> : (
                    <>
                      {dataSet.length > 0 ?
                        <TourOperatorCard
                          scrollRef={scrollRef}
                          searchById={searchById}
                          data={dataSet}
                        /> : <p className="styledNoRecord">Ingen opptak funnet</p>
                      }
                    </>
                  )
                }
              {/* </Card> */}
              </OverFlow>
              {console.log(showMore)}
              {
                showMore && dataSet.length > 4 &&
                <StyledLoadMore>
                <LoadMore onClick={(e) => { e.preventDefault(); setPageNo(pageNo + 1) }}>Last mer</LoadMore>
              </StyledLoadMore>
             }
              

            </Col>
            <Col xs md="8" >
              <Card style={{ height: "550px" }} className="space-manage">
                <Card.Body style={{ padding:"23px" }}>
                  <ListDetailBox>
                    <Row>
                      <Col sm="1">
                        <img src={Account} alt="tour" style={{width:"51.67px",height:"51.67px"}}/>
                      </Col>
                      <Col sm={8}>
                        <HeadingStyle style={{ marginTop: "6px" }}>{tourOpId?.tourDetails?.tourName}</HeadingStyle>
                        <Paragraph>{tourOpId?.tourDetails?.name}</Paragraph>
                        <p className="p-details">{tourOpId?.tourDetails?.address[0]?.city} {tourOpId?.tourDetails?.address[0]?.country} {tourOpId?.tourDetails?.address[0]?.zipCode}</p>
                        <Row>
                          <LowerRightSideBlock>
                            {/* {console.log("tourOpId?.tourDetails?.mobile?.number", tourOpId)} */}
                            {tourOpId ? tourOpId.tourDetails?.mobile.length > 0 ? <EmailText> <img src={Call} alt="Bookingcomission"  style={{width:"10.5px",height:"10.5px"}}/>123456789{tourOpId.tourDetails.mobile[0].number} &nbsp; | </EmailText> : "" : ""}
                            <EmailText><img src={Email} alt="email" style={{width:"13.33px",height:"10.67px"}} />{tourOpId ? tourOpId?.tourDetails.email : ""}</EmailText> &nbsp;
                            |<EmailText> <img src={Bookingcomission} alt="Bookingcomission"  style={{width:"9.33px",height:"12px"}}/>  % Provisjon per bestilling:  {tourOpId ? tourOpId?.tourDetails.commissionPerBooking : ""}</EmailText>
                          </LowerRightSideBlock>
                        </Row>
                      </Col>
                      <Col sm="2">
                        <Row >
                          <Col sm={8} >
                            <ActiveBus> AktivTuroperatør</ActiveBus>
                          </Col>
                          <Col sm={1}>
                            <StyledCheckBox
                              id="checkbox"
                              type="checkbox"
                              onChange={(e) => handleToggle(tid, e)}
                            />
                            <CheckBoxLabel htmlFor="checkbox" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </ListDetailBox>
                  <TabSection>

                    <Tabs id="uncontrolled-tab-example" className="mb-3"
                      setTab={setTab} TotalCount={TotalCount} 
                      selected={selectedActiveTab=="driver"?0:selectedActiveTab=="booking"?1:2}
                    >
                      <Panel title="Driver" >

                        <Container>
                          {isloading ?
                            <Loader /> : (
                              <>
                                {driverDetails?.length > 0 ?
                                  <TourOperatorDriverDetailsCard driverDetails={driverDetails} />
                                  :
                                  <span className="styledNoRecordDriver">Ingen opptak funnet</span>
                                }
                              </>
                            )
                          }
                        </Container>

                      </Panel>
                      <Panel title="Booking">
                        <Row>
                          <Col>
                            <FilterSection>
                              <label className="styled-labels">Filter By:</label>
                              <StyledDropDown
                                variant="none"
                                align="end"
                                title={bookingStatusFilter === "upcoming" ? "Kommende" : bookingStatusFilter === "completed" ? "Fullført" : "Pågående"}
                                onSelect={function (evt) { setBookFilter(evt) }}
                              >
                                <Dropdown.Item eventKey="upcoming">Kommende</Dropdown.Item>
                                <Dropdown.Item eventKey="completed"> Fullført </Dropdown.Item>
                                <Dropdown.Item eventKey="ongoing"> Pågående </Dropdown.Item>

                              </StyledDropDown>
                            </FilterSection>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="12" className="mt-1">
                            {/* {console.log("bookingdetails", bookingdetails)} */}
                            <Table
                              columns={columns}
                              data={bookingdetails}
                              scrollRef={scrollRef}
                              adminTourOperatorBooking={true}
                              isloading={isloading}
                            />
                          </Col>
                        </Row>
                      </Panel>
                      <Panel title="Busses" >
                        <Container >
                          {isloading ?
                            <Loader /> : (
                              <>
                                {busDetails.length > 0 ?
                                  <TourOperatotBusDetailsCard busDetails={busDetails} id={OpId} pushDetails={tabActive} />
                                  : <span className="styledNoRecordDriver">Ingen opptak funnet</span>
                                }

                              </>
                            )

                          }
                        </Container>
                      </Panel>
                    </Tabs>
                  </TabSection>
                  <Row>
                    <Col md="4"> </Col>
                    <Col md="4">
                      {/* <StyledLoadMore >
                        <a href="#" onClick={(e) => { e.preventDefault(); setPagenumber(pagenumber + 1) }}>Last mer</a>
                      </StyledLoadMore> */}
                    </Col>
                    <Col md="4"> </Col>
                  </Row>
                </Card.Body>
              </Card>

            </Col>
          </MainDiv>

        </MainContainer>

      </PrivateLayout>
    </>
  );
}
export default TourOperatorPage;
