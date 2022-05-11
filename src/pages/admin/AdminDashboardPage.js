import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../../libs/_layouts/PrivateLayout";
import { Row, Col, Card } from "react-bootstrap";
import Table from "../../libs/_components/_ui/admin/AdminTable";
import { ViewIcon } from "../../assets/icons";
import GradientCard from "../../libs/_components/_ui/admin/GradientCard";
import {
  Heading,
} from "../_styles/Common.style";
import Bestselling from "../../assets/Bestselling.svg";
import CustomerActive from "../../assets/svg/customer-active.svg";
import Right from "../../assets/right.svg";
import calenderBlue from "../../assets/calenderBlue.svg";
import Dashboardbus from "../../assets/dashboard-bus.png";
import { UpIcon } from "../../assets/icons";
import adminDashboard from "../../_services/adminDashboard.services";
import Loader from "../../libs/_components/_ui/Loader";
import BarChart from "../../chart/BarChart";
import { LoadMore } from "../../libs/_components/_ui/Buttons";

const MainContainer = styled.div` 
width: 100%;
height: auto;
@media only screen and (max-width:1028px){
width:97%;
}
.Dashboardbus{
width:fit-content;
img{
position:relative;
bottom:20px
}
}
.tableCard{
margin-top:-42px;
border:none;
width:99.5%;
min-height:500px;
position:relative;
left:2px;
}
.spinner-border.text-secondary {
position: absolute;
left: 0;
right: 0;
margin-left: auto;
margin-right: auto;
margin-top:200px;
}
.busimageSection{
margin-bottom:10px;
img{
position:relative;
top:35px;
margin-top:-115px;
}
}
.RevenueCard{
margin-top:-34px;
position:relative;
top:11px;
left:-9px;
width:102%;
}
.activeBus{
position:relative; 
/* top:5px;  */
left:-17px;
width:102%;
}
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
const TableSection = styled.div` 
margin-top:12px;
`;
const StyledLoadMore = styled.div`
display:flex;
justify-content:center;
margin-top:45px;
`;
const Fra = styled.small` 
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 0.87);
`;
const ImageDiv = styled.span` 
svg{
width:11px;
height:11px;
margin:2px;
 }
`;
const UpperCardSection = styled(Row)` 
 width:100%;
 position: relative;
 left: -3px;
 top:-5px;

`;
const StyledHeading = styled(Heading)` 
position:relative;
top:-22px;
left:3px;
`;

const DashBoardPage = () => {
  const [isloading, setLoading] = useState(false)
  const [tripInfo, setTripInfo] = useState([])
  const [boardInfo, setBoardInfo] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [showMore, setShowMore] = useState(false)
  const [total, setTotal] = useState(0)
  const scrollRef = useRef(null)
  useEffect(() => {
    getbusList()
  }, [pageNo]);
  const handleDate = (value) => {
    console.log("value", value);
    setLoading(true);
    // getbusList(value)
    adminDashboard.adminDashboard(1, value)
      .then((res) => {
        console.log("res.data", res.data);
        setTripInfo(res.data.tripInfo);

        setBoardInfo({
          tourActiveBusesCount: res.data.tourActiveBuses,
          tourCompletedCount: res.data.tourCompletedCount,
          tourUpcomingCount: res.data.tourUpcomingCount,
          tourBookingCount: res.data.tourBookingCount,
          totalTourOperatorCount: res.data.totalTourOperator
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })

  }
  const getbusList = () => {
    setLoading(true);
    adminDashboard.adminDashboard(pageNo)
      .then((res) => {
        console.log("res.data", res.data);
        let result = res.data.tripInfo;
        let records = [...tripInfo, ...result];
        setTripInfo(records)

        // setTripInfo(res.data.tripInfo);
        setBoardInfo({
          tourActiveBusesCount: res.data.tourActiveBuses,
          tourCompletedCount: res.data.tourCompletedCount,
          tourUpcomingCount: res.data.tourUpcomingCount,
          tourBookingCount: res.data.tourBookingCount,
          totalTourOperatorCount: res.data.totalTourOperator
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

      },
      {
        Header: "Turoperatør",

      },
      {
        Header: "Startdato",

      },
      {
        Header: "Type tur",

      },
      {
        Header: "Tildelt buss",

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

  return (
    <>
      <PrivateLayout>
        <MainContainer>
          <StyledHeading>Dashbaord</StyledHeading>
          <UpperCardSection>
            <Col sm="3"> {console.log(isloading)}
              <GradientCard
                gradientStart={"#FFFFFF"}
                gradientEnd={"#FFFFFF"}
              >
                <GradientCard.Header> Total bestilling </GradientCard.Header>
                <GradientCard.Body>{boardInfo ? boardInfo.tourBookingCount : 0}
                  <div className="imageSection" style={{ background: "rgba(98, 0, 238, 0.09)" }}>
                    <img src={Bestselling} alt="" />
                  </div>
                </GradientCard.Body>
              </GradientCard>
            </Col>
            <Col sm="3">
              <GradientCard
                gradientStart={"#FFFFFF"}
                gradientEnd={"#FFFFFF"}
              >
                <GradientCard.Header>Totalt turoperatører</GradientCard.Header>
                <GradientCard.Body>{boardInfo ? boardInfo.totalTourOperatorCount : 0}
                  <div className="imageSection" style={{ background: "rgba(253, 109, 3, 0.1)" }}>
                    <img src={CustomerActive} alt="" />
                  </div>
                </GradientCard.Body>
              </GradientCard>
            </Col>
            <Col sm="3">
              <GradientCard
                gradientStart={"#FFFFFF"}
                gradientEnd={"#FFFFFF"}
              >
                <GradientCard.Header>Gjennomførte turer </GradientCard.Header>
                <GradientCard.Body>{boardInfo ? boardInfo.tourCompletedCount : 0}
                  <div className="imageSection" style={{ background: "#BBF8C1" }}>
                    <img src={Right} alt="" />
                  </div>
                </GradientCard.Body>
              </GradientCard>
            </Col>
            <Col sm="3" className="mb-5">
              <GradientCard
                gradientStart={"#FFFFFF"}
                gradientEnd={"#FFFFFF"}
              >
                <GradientCard.Header>Kommende turer </GradientCard.Header>
                <GradientCard.Body>{boardInfo ? boardInfo.tourUpcomingCount : 0}
                  <div className="imageSection" style={{ background: "rgba(3, 133, 253, 0.12)" }}>
                    <img src={calenderBlue} alt="" />
                  </div>
                </GradientCard.Body>
              </GradientCard>
            </Col>
          </UpperCardSection>
          <Row>
            <Col sm="9" >
              <Card className="tableCard">
                <Card.Body >
                  {/* {
                    isloading ?
                      <Loader /> : */}
                  <>
                    <TableSection>
                      <Col className="p-0">

                        <Table
                          scrollRef={scrollRef}
                          columns={columns}
                          data={tripInfo}
                          handleDate={handleDate}
                          adminTable={true}
                        >
                        </Table> </Col>

                    </TableSection>
                    {
                      showMore && tripInfo.length > 5 &&
                      <StyledLoadMore>
                        <LoadMore onClick={(e) => { e.preventDefault(); setPageNo(pageNo + 1) }}>Last mer</LoadMore>
                      </StyledLoadMore>

                    }

                  </>
                  {/* } */}
                </Card.Body>
              </Card>
            </Col>
            <Col md="3" >
              <Row>
                <Col className="mb-4 RevenueCard" >
                  <GradientCard
                    className="RevenueCard"
                    gradientStart={"#FFFFFF"}
                    gradientEnd={"#FFFFFF"}
                  >
                    <GradientCard.Header> Inntekter </GradientCard.Header>
                    <GradientCard.Body>
                      <div style={{ position: "relative", top: "5px" }}>
                        <Fra>Fra</Fra> 200,00  &nbsp;
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
              </Row>
              {/* <Row> */}
              <Col>
                <GradientCard
                  className="activeBus"
                  gradientStart={"#FFFFFF"}
                  gradientEnd={"#FFFFFF"}
                >
                  <GradientCard.Header>Active Buses</GradientCard.Header>
                  <GradientCard.Body >{boardInfo ? boardInfo.tourActiveBusesCount : 0}
                    <div className="busimageSection">
                      <img src={Dashboardbus} alt="" />
                    </div>
                  </GradientCard.Body>
                </GradientCard>
              </Col>
              {/* </Row> */}
            </Col>
          </Row>
        </MainContainer>
      </PrivateLayout>
    </>
  )
}
export default DashBoardPage;