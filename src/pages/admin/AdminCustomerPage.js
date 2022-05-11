import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../../libs/_layouts/PrivateLayout";
import { useHistory } from "react-router-dom";
import { Row, Col, Card, Tabs, Tab } from "react-bootstrap";
import { StyledButton } from "../../libs/_components/_ui/Buttons";
import SearchWithFilter from "../../libs/_components/_ui/admin/SearchWithFilter";
import CustomerCard from '../../libs/_components/PageChildComponents/admin/CustomerCard';
import Account from "../../assets/svg/account_circle_bg.svg";
import Email from "../../assets/svg/email.svg";
import Bookingcomission from "../../assets/svg/booking-comission.svg";
import Call from "../../assets/svg/call.svg";
import DropdownButton from "react-bootstrap/DropdownButton";
import Table from "../../libs/_components/_ui/DriverTable";
import Dropdown from "react-bootstrap/Dropdown";
import { ViewIcon } from "../../assets/icons";
import { LoadMore } from "../../libs/_components/_ui/Buttons";
import AdminCustomer from "../../_services/adminCustomer.services";
import Loader from "../../libs/_components/_ui/Loader";
import {
    Heading,
} from "./../_styles/Common.style";

const MainContainer = styled.div`
height: auto;
width: 100%;
.card{
margin-top:10px;
border:none;
}
.overflow{
overflow:hidden;
overflow-y:scroll;
display:block;
height:410px;
margin-top:7px;
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
.leftSideBlock{
    position: relative;
    left: 1px;
    top: -24px;
    
}
.RightSideBlock{
    position: relative;
    left:-5px;
    top: -24px;

}

`;
const AddToBussection = styled.div` 
position:relative;
top:-33px;
left:-7px;
`;
const LowerRightSideBlock = styled.div` 
 display:inline-block;
`;
const HeadingStyle = styled.h1` 
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 36px;
color: rgba(0, 0, 0, 0.87);
`;
const FilterSection = styled.div`
display:flex;
justify-content:end; 
outline:none;
position:relative;
top:15px;
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
const StyledLoadMore = styled.div`
 display:flex;
justify-content:center;
margin-top:12px;
 a{
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
 }
`;
const HeadingCustomer=styled(Heading)` 
position: relative;
    top: -23px;
    left: 0px;
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
const ListDetailBox = styled.div` `
const AdminCustomerPage = () => {
    const [customerListDetails, setCustomerListDetails] = useState([])
    const [customerByid, setCustomerByid] = useState([])
    const [bookingData, setBookingData] = useState([])
    const [selectedClient, setSelectedClient] = useState("upcoming");
    const [pageNo, setPageNo] = useState(1)
    const [isloading, setLoading] = useState(false)
    const [id, setId] = useState([])
    const history = useHistory();
    const [showMore, setShowMore] = useState(false)
    const [total, setTotal] = useState(0)
    const scrollRef = useRef(null)
    const columns = React.useMemo(
        () => [
            {
                Header: "Tur-ID",

            },
            {
                Header: "Startdato",

            },
            {
                Header: "Sluttdato",

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
         customerList();
}, [pageNo]);
const customerList = () => {
        setLoading(true)
        AdminCustomer.getCustomerList(pageNo)
            .then((res) => {
                console.log(res.data.data)
                // setCustomerListDetails(res.data.data)
                let result = res?.data?.data;
                let records = [...customerListDetails, ...result];
                setCustomerListDetails(records)
                setLoading(false)
                let totalRecords = 100
                setTotal(totalRecords);
                if (totalRecords > 4 && result.length > 0) {
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

    const searchById = (value) => {
        setId(value)
        AdminCustomer.getCustomerById(value, selectedClient)
            .then((res) => {
                console.log(res.data.data.bookingsData)
                setBookingData(res.data.data.bookingsData)
                console.log(res.data.data.customerInfo)
                const customerInfo = res?.data?.data?.customerInfo
                // console.log(customerInfo)
                customerInfo?.map((res) => {
                    console.log(res)
                    setCustomerByid(res)
                })

            })

    }


    const SearchCustomer = (FilterData) => {
        console.log(FilterData)
        AdminCustomer.getCustomerList(1, FilterData)
            .then((res) => {
                console.log(res.data.data)
                setCustomerListDetails(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSelectChange = (event) => {
        setSelectedClient(event.target.value);
        AdminCustomer.getCustomerById(id, event.target.value)
            .then((res) => {
                console.log(res.data.data.bookingsData)
                setBookingData(res.data.data.bookingsData)
            })
    }
    console.log(selectedClient)
    return (
        <>
            <PrivateLayout>
                <MainContainer>
                    <Row>
                        <Col md="6">
                            <HeadingCustomer>Kunder</HeadingCustomer>
                        </Col>
                        {/* <Col md="6"><AddToBussection onClick={() => history.push("/admin/customerdetials")}><StyledButton> + Legg til Kunder</StyledButton></AddToBussection> </Col> */}
                    </Row>
                    <Row>
                        <Col md="4" className="leftSideBlock" >

                            <SearchWithFilter AdminSearchCustomer={true}
                                SearchCustomer={SearchCustomer}
                            />
                            <OverFlow>
                            {/* <Card className="overflow"> */}
                                {
                                    isloading ?
                                        <Loader /> : (
                                            <>
                                                {
                                                    customerListDetails.length > 1 ?
                                                        <CustomerCard
                                                            scrollRef={scrollRef}
                                                            customerListDetails={customerListDetails}
                                                            searchById={searchById}
                                                        /> : <p className="styledNoRecord">Ingen opptak funnet</p>
                                                }</>
                                        )
                                }

                            {/* </Card> */}
                            </OverFlow>
                            {
                                 showMore && customerListDetails.length > 4 && 
                                 <StyledLoadMore>
                                 <LoadMore onClick={(e) => { e.preventDefault(); setPageNo(pageNo + 1) }}>Last mer</LoadMore>
                             </StyledLoadMore>
                         } 

                        </Col>
                        <Col xs md="8" className="RightSideBlock">
                            <Card style={{ minHeight: "550px" }}>
                                <Card.Body style={{padding:"28px"}}>
                                    {isloading ?
                                        <Loader /> : (
                                            <>
                                                {/* {customerListDetails.length > 0 ? */}
                                                {true?
                                                    <>
                                                        <ListDetailBox>
                                                            <Row>
                                                                <Col md="1">
                                                                    <img src={Account} alt="tour" style={{ width:"51px", height: "51px" }}/>
                                                                </Col>
                                                                <Col md="9">
                                                                    {
                                                                        customerByid ?
                                                                            <>
                                                                                <HeadingStyle>{customerByid?.name}</HeadingStyle>
                                                                                <Row>
                                                                                    <LowerRightSideBlock>
                                                                                        <span className="Icon-Text"> <img src={Call} alt="Bookingcomission" /> {customerByid?.mobile}  </span>
                                                                                        | <span>  <img src={Email} alt="email" /> {customerByid?.email}</span>
                                                                                        |<span> <img src={Bookingcomission} alt="Bookingcomission" />Bestilling: {customerByid?.bookingCount}</span>
                                                                                    </LowerRightSideBlock>
                                                                                </Row>
                                                                            </> :
                                                                            <>
                                                                            </>
                                                                    }

                                                                </Col>
                                                                <Col md="2"></Col>
                                                            </Row>
                                                        </ListDetailBox>
                                                        <hr />
                                                        <Row>
                                                            <Col>
                                                                <FilterSection>
                                                                    <label className="styled-labels">Filter By:</label>
                                                                    <select   title={selectedClient == "upcoming" ? "Kommende" : selectedClient == "completed" ? "Fullført" : "Pågående"} onChange={handleSelectChange}> 
                                                                        <option value="upcoming">Kommende</option>
                                                                        <option value="ongoing">Pågående</option>
                                                                        <option value="completed">Fullført</option>
                                                                    </select>

                                                                </FilterSection>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col sm="12" className="mt-4">
                                                                <Table
                                                                    columns={columns}
                                                                    bookingData={bookingData}
                                                                    scrollRef={scrollRef}
                                                                    adminTourOperatorCustomer={true}
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="4"> </Col>
                                                            <Col md="4">
                                                                {/* <LoadMore >Last mer</LoadMore> */}
                                                            </Col>
                                                            <Col md="4"> </Col>
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
export default AdminCustomerPage;