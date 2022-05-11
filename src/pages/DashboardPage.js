import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../libs/_layouts/PrivateLayout";
import { Row, Col, Card } from "react-bootstrap";
import Table from "../libs/_components/_ui/admin/AdminTable";
import { ViewIcon } from "../assets/icons";
import GradientCard from "../libs/_components/_ui/admin/GradientCard";
import {
  Heading
} from "./_styles/Common.style";
import Bestselling from "../assets/Bestselling.svg";
import CustomerActive from "../assets/svg/customer-active.svg";
import Right from "../assets/right.svg";
import calenderBlue from "../assets/calenderBlue.svg";
// import Polygons from "../assets/angle.svg";
import Dashboardbus from "../assets/dashboard-bus.png";
import { UpIcon } from "../assets/icons";
import TourOperatorDashboard from "../_services/tourOpDashboard.services";
import Loader from "../libs/_components/_ui/Loader";
import BarChart from "../chart/BarChart"
import {LoadMore } from "../libs/_components/_ui/Buttons";

const MainContainer = styled.div` 
width: 100%;
height: auto;
@media only screen and (max-width:1028px){
width:98%;
}
 .bar-graph{
  position: relative;
  top: 35px;
  width:100%;
  /* background:red; */
  margin:0px;
 }
  .Dashboardbus{
    width:fit-content;
  }
  .tableCard{
    margin-top:-210px;
    border:none;
    width:100%;
    min-height:480px;
    @media only screen and (max-width:1028px){
      margin-top:-150px;
    }
  }
  .ActiveBusCard{
    margin-top:-20px;
    margin-left:-7px;
    width:100%;
  
  }
  .spinner-border.text-secondary {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .imageSection{
    position:relative;
    top:-7px;
  }
  .Inntekter{
    position:relative;
    left:1.5px;
    @media only screen and (max-width:1028px){
      width:100%;
    }

  }
 
 `;
const StyledViewIcon = styled.div`
 /* font-family: Roboto; */
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
const StyledLoadMore = styled.div`
 display:flex;
justify-content:center;
margin-top:90px;

`;
const TableSection = styled.div` 
position:relative;
top:15px;

`;
const DashboardCards = styled(Row)` 
margin-top:10px;
position:relative;
left:-3px;
width:100%;
`;
const Fra = styled.small` 
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 0.87);
`
const ImageDiv = styled.span` 
 svg{
  width:11px;
 height:11px;
 margin:2px;
 }

 `;
 const StyledHeading=styled(Heading)` 
   position:relative;
   top:-7px;
   left:0px;
   margin-top:-13px;
 `;

const DashBoardPage = () => {
  const [tripInfo, setTripInfo] = useState([])
  const [boardInfo, setBoardInfo] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [isloading, setLoading] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [total, setTotal] = useState(0)
  const scrollRef = React.useRef(null)
  // const [date,setDate]=useState(true)

  const data = React.useMemo(
    () => [

      { "bookingId": "12131313", "tourOperatorName": "Richard Travelers", "startDate": "25-09-2021", "tripType": "Round Way", "assignedBus": "BS-1010" },
      { "bookingId": "12131313", "tourOperatorName": "Richard Travelers", "startDate": "25-09-2021", "tripType": "Round Way", "assignedBus": "BS-1010" },
      { "bookingId": "12131313", "tourOperatorName": "Richard Travelers", "startDate": "25-09-2021", "tripType": "Round Way", "assignedBus": "BS-1010" },
      { "bookingId": "12131313", "tourOperatorName": "Richard Travelers", "startDate": "25-09-2021", "tripType": "Round Way", "assignedBus": "BS-1010" },
      { "bookingId": "12131313", "tourOperatorName": "Richard Travelers", "startDate": "25-09-2021", "tripType": "Round Way", "assignedBus": "BS-1010" },
      { "bookingId": "12131313", "tourOperatorName": "Richard Travelers", "startDate": "25-09-2021", "tripType": "Round Way", "assignedBus": "BS-1010" },
      { "bookingId": "12131313", "tourOperatorName": "Richard Travelers", "startDate": "25-09-2021", "tripType": "Round Way", "assignedBus": "BS-1010" },
      { "bookingId": "12131313", "tourOperatorName": "Richard Travelers", "startDate": "25-09-2021", "tripType": "Round Way", "assignedBus": "BS-1010" },
      { "bookingId": "12131313", "tourOperatorName": "Richard Travelers", "startDate": "25-09-2021", "tripType": "Round Way", "assignedBus": "BS-1010" },


    ])
  const columns = React.useMemo(
    () => [
      {
        Header: "Tur-ID",
        accessor: "bookingId",
      },
      {
        Header: "Turoperatør",
        accessor: "tourOperatorName",
      },
      {
        Header: "Startdato",
        accessor: "startDate",
      },
      {
        Header: "Type tur",
        accessor: "tripType",
      },
      {
        Header: "Tildelt buss",
        accessor: "assignedBus",
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
  useEffect(() => {
    getbusList()
  }, [pageNo]);
  const handleDate = (value) => {
    console.log("value", value);
    // getbusList(value)

    TourOperatorDashboard.TourOperatorDashboard(1, value)
      .then((res) => {
        console.log("res.data", res.data);
        setTripInfo(res.data.tripInfo);
        setBoardInfo({
          tourActiveBusesCount: res.data.tourActiveBuses,
          tourCompletedCount: res.data.tourCompletedCount,
          tourUpcomingCount: res.data.tourUpcomingCount,
          tourBookingCount: res.data.tourBookingCount
        });

      })
      .catch((err) => {
        console.log(err);
      })


  }
  const getbusList = () => {
    //setLoading(true);
    TourOperatorDashboard.TourOperatorDashboard(pageNo)
      .then((res) => {
        console.log("res.data", res.data);
        let result = res.data.tripInfo;
        let records = [...tripInfo, ...result];
        setTripInfo(records)
        setBoardInfo({
          tourActiveBusesCount: res.data.tourActiveBuses,
          tourCompletedCount: res.data.tourCompletedCount,
          tourUpcomingCount: res.data.tourUpcomingCount,
          tourBookingCount: res.data.tourBookingCount,
          tourRevenue: res.data.tourRevenueCount
        });
        setLoading(false);
        let totalRecords = 100
        setTotal(totalRecords);
        if (totalRecords > 5 && result.length > 0) {
          setShowMore(true);
        }

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
  return (
    <>
      <PrivateLayout>
        <MainContainer>
          <StyledHeading>Dashbord</StyledHeading>
          <DashboardCards>
            <Col sm="3">
              <GradientCard
                gradientStart={"#FFFFFF"}
                gradientEnd={"#FFFFFF"}
              >

                <GradientCard.Header> Total bestilling </GradientCard.Header>
                <GradientCard.Body>
                  {boardInfo ? boardInfo?.tourBookingCount : 0}
                  <div className="imageSection" style={{ background: "rgba(98, 0, 238, 0.09)" }}>
                    <img src={Bestselling} alt="" />
                  </div>

                </GradientCard.Body>
              </GradientCard>
            </Col>
            {/* <Col sm="3">
              <GradientCard
                gradientStart={"#FFFFFF"}
                gradientEnd={"#FFFFFF"}
              >
                <GradientCard.Header>Totalt turoperatører</GradientCard.Header>
                <GradientCard.Body>400
                  <div className="imageSection" style={{ background: "rgba(253, 109, 3, 0.1)" }}>
                    <img src={CustomerActive} alt="" />
                  </div>
                </GradientCard.Body>
              </GradientCard>
            </Col> */}
            <Col sm="3">
              <GradientCard
                gradientStart={"#FFFFFF"}
                gradientEnd={"#FFFFFF"}
              >
                <GradientCard.Header>Gjennomførte turer </GradientCard.Header>

                <GradientCard.Body>
                  {boardInfo ? boardInfo.tourCompletedCount : 0}
                  <div className="imageSection" style={{ background: "#BBF8C1" }}>
                    <img src={Right} alt="" />
                  </div>
                </GradientCard.Body>

              </GradientCard>
            </Col>
            <Col sm="3">
              <GradientCard
                gradientStart={"#FFFFFF"}
                gradientEnd={"#FFFFFF"}
              >
                <GradientCard.Header>Kommende turer </GradientCard.Header>
                <GradientCard.Body>
                  {boardInfo ? boardInfo.tourUpcomingCount : 0}
                  <div className="imageSection" style={{ background: "rgba(3, 133, 253, 0.12)" }}>
                    <img src={calenderBlue} alt="" />
                  </div>
                </GradientCard.Body>
              </GradientCard>
            </Col>
            <Col className="mb-5 Inntekter">
              <GradientCard
                className="Inntekter"
                gradientStart={"#FFFFFF"}
                gradientEnd={"#FFFFFF"}
              >
                <GradientCard.Header> Inntekter </GradientCard.Header>
                <GradientCard.Body>
                  <div style={{ position: "relative", top: "5px" }}>
                  {boardInfo ? <><Fra>Fra</Fra>  &nbsp; {boardInfo.tourUpcomingCount}</> :  <><Fra>Fra</Fra>  &nbsp;{boardInfo.tourUpcomingCount}</>}
                   
                    <ImageDiv> <UpIcon /></ImageDiv>
                    <small style={{
                      fontSize: "14px", fontStyle: "normal", fontWeight: "400"
                      , letterSpacing: "0.25px", color: "rgba(0, 0, 0, 0.6)",
                      position: "relative", top: "-1px", left: "2px"
                    }}>
                      24% denne måneden</small>
                  </div>
                  <div className="bar-graph">
                    <BarChart
                      width={"90%"}
                    // height={200}
                    />
                  </div>
                </GradientCard.Body>
              </GradientCard>
            </Col>


          </DashboardCards>
          <Row>
            <Col sm="9" >
              <Card className="tableCard">
                <Card.Body>
                  {
                    isloading ?
                      <Loader /> :
                      <>
                        <TableSection>
                          <Col className="p-0">
                            <Table
                              scrollRef={scrollRef}
                              columns={columns}
                              // tourOPeratorData={data}
                              tourOPeratorData={tripInfo}
                              handleDate={handleDate}
                              tourAdminTable={true}
                            />
                          </Col>

                        </TableSection>

                        {showMore && tripInfo.length > 5 &&
                          <StyledLoadMore>
                            <LoadMore onClick={(e) => { e.preventDefault(); setPageNo(pageNo + 1) }}>Last mer</LoadMore>
                          </StyledLoadMore>
                         }  
                      </>
                  }
                </Card.Body>
              </Card>
            </Col>
            {/* <Col md="3">
              <Row> */}
            {/* <Col  className="mb-5">
            <GradientCard
                gradientStart={"#FFFFFF"}
                gradientEnd={"#FFFFFF"}
              >
                <GradientCard.Header> Revenue </GradientCard.Header>
                <GradientCard.Body>Fra 200,00 <small style={{fontSize:"10px"}}>
                  <UpIcon/>
                  24% this month</small>
                </GradientCard.Body>
              </GradientCard>
              </Col> */}

            {/* </Row> */}
            {/* <Row> */}
            <Col className="ActiveBusCard">
              <GradientCard
                className="ActiveBusCard"
                gradientStart={"#FFFFFF"}
                gradientEnd={"#FFFFFF"}
              >
                <GradientCard.Header>Aktive busser</GradientCard.Header>
                <GradientCard.Body>
                  {boardInfo ? boardInfo.tourActiveBusesCount : 0}
                  <div className="Dashboardbus">
                    <img src={Dashboardbus} alt="" />
                  </div>
                </GradientCard.Body>
              </GradientCard>
            </Col>

            {/* </Row> */}
            {/* </Col> */}
          </Row>
        </MainContainer>
      </PrivateLayout>
    </>
  )
}
export default DashBoardPage;