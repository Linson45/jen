import React, { useState } from "react";
import styled from "styled-components";
import { Table as BSTable } from "react-bootstrap";
import { ViewIcon, Calender } from "../../../../assets/icons";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { Row, Col, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { camelCase } from "lodash";
import moment from "moment";
import {
  CalendarIcon,
  ArrowDownIcon,
  IconCross,
} from "../../../../assets/icons.js";
const TableWrapper = styled.div`
  /* margin-top:15px; */
  /* padding: 6px 10px; */
  .viewTourDetails{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #FD6D03;
    cursor:pointer;
    margin-top:-20px ;
    /* padding-left:-10px; */
    /* position: relative;
    left: 60px; */
    /* margin-left:15px; */
  }
  svg{
    position:relative;
    left:-3px; 
    margin-left:28px;
  }
  .styledNoRecord{
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    display:inline-table;
    top: 220px;
  }
  @media (max-width: 1300px) {
  .viewTourDetails {
    position: relative;
    left: 10px;
    top: 24px;
    font-size: 16px;
    display: block;
  }
  svg {
    position:absolute;
   left:555px;
  
  }
}
 
  `;
const StyledTable = styled(BSTable)`
   margin-top:10px;
  
    td {
    background: #FFFFFF;
    height: 40px;
    text-align:center;
   font-style: normal;
   font-size: 14px;
   line-height: 16px;
   color: #000000;
   font-weight: 400;
  
   /* letter-spacing: 0.01em; */
   /* position:relative;
   left:10px; */
   
  }
  th {
     height: 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    letter-spacing: 0.01em;
    text-align:left;
    color: #000000;
    
  }
th, td { width:76px }
td:first-child {
  text-align: start;
  }
  th:first-child {
    text-align: start;
  }
  /* @media (max-width: 350px) {
  .td {
    max-width: 280px;
    width: 100%;
    min-height: 400px;
  }
} */
`;
const TableHead = styled.thead`
 background: #F5F5F5;
 border:2px solid #FFFFFF;
 position:relative;
 top:10px;
 font-weight: 550;

    th:first-child(1){
      background:blue;
      padding-left: 20px;
    }
 
    th:last-child {
      padding-left: 9px;
    
    }
    th:nth-last-child(2){
      padding-left: 0px;
   }
    
    th:nth-last-child(4){
    padding-left: 44px;
    text-align: left;
   }
   th:nth-last-child(5){
    padding-left: 21px;
    text-align: center;
  }
  @media (max-width: 1300px) {
    th:nth-last-child(5){
    padding-left: 0px;
    padding-right: 0px;
  }
  th:nth-last-child(4){
    padding-left: 16px;
  }
  th:nth-last-child(3){
    padding-left: 0px;
    text-align: center;
  }
 
}
   th:nth-last-child(3){
    padding-right: 54px;
  
  }
`;
const StyledRow = styled.tr`
  
  border-bottom: 1px solid #E1E1E1;
  td:nth-last-child(5){
     padding-right:5px;
   
   }
  

 
`;
const Overflowscroll = styled.div`
  display:block;
  height:300px;
  overflow-y:scroll;
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
  const TableHeading=styled.p` 
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
  

  `;
 const StyledDateRangePicker = styled.div`
  display:flex;
  justify-content:end;
  color: black;
  background:white;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  height:34px;
  position:relative;
  top:-10px;
 .react-daterange-picker {
    width:100%;
    margin-left:5px;
  
   
  }
  .react-daterange-picker__button:enabled {
    cursor: pointer;
    position: relative;
    left: 0px;
    /* margin:-25px; */
    padding-left:0px;
  }
  .react-daterange-picker__wrapper {
    border: none;
    padding-left:15px;
    input {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.25px;
      text-transform: lowercase;
      margin:-1px;
    }
  }
  .react-daterange-picker__range-divider{
    position: relative;
    left:-2px;
  }
  svg {
    cursor: pointer;
    /* font-size: 16px; */
    margin-left:30px;
   }
  /* .react-calendar {
    width: 300px;
    background-color:white;
   
   
  } */
  .react-daterange-picker__calendar .react-calendar {
    padding: 14px;
    border:none;
    background: #FFFFFF;
    box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.25);
    margin-top:10px;
    font-weight:1px;
    font-size: 13px;
}

  .react-daterange-picker__calendar {
    width:310px;
    max-width: 100vw;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    margin-left:21px;
    
    .react-calendar__month-view__days__day--weekend{
      color:#45a0de;
    }
}
  .react-daterange-picker__inputGroup {
    flex-grow: 0;
   /* margin-left:0px; */
  }
  .react-daterange-picker__inputGroup__input:invalid {
    background:none;
}
.react-daterange-picker__inputGroup__input{
  outline:none !important;
}
@media only screen and (max-width:1028px) {
    width: 295px;
    margin-left:-85px;
    padding-left: 65px;
  svg {
    cursor: pointer;
    position:relative;
    left:-36px;
 
   }
    .react-daterange-picker__wrapper {
      margin-left: -82px;
      margin-right: 0px;
      padding:8px 23px;
    }
    .react-daterange-picker__button {
      padding: 8px 0px;
    }
  
  }

  `


function Table({ data, columns, scrollRef, adminBooking ,handleDate,adminTable,tourOPeratorData,tourAdminTable}) {
  var _ = require('lodash');
  let history=useHistory();
  const [value, setValue] = useState(
   ""
  );
  const handleDateValue = (data) => {
    handleDate(data)
    setValue(data)
  }

  const handleassignedBusString = (data)=>{
    console.log("trip type",data);
    let triptype="";
    if(data=="oneWay"){
      triptype="One Way"
    }if(data=="roundTrip"){
      triptype="Round Trip"
    }
    return triptype;
  }
 
  return (
    <>
      <TableWrapper>
        <Row>
          <Col sm="7">
            <TableHeading>Kommende turer</TableHeading>
          </Col>
          <Col sm="5">
         
            <StyledDateRangePicker>

              <DateRangePicker
                  onChange={handleDateValue}
                  value={value}
                  calendarIcon={<Calender />}
                  clearText="Clear"
                  cancelText="Cancel"
                  footer={()=>(<>test</>)}
                  clearable
                  format="dd/mm/yyyy"
                  // displayFormat="DD/MM/YYYY"
                  monthPlaceholder="mm"
                  dayPlaceholder="dd"
                  yearPlaceholder="yyyy"
                
                 
              />
             
            </StyledDateRangePicker>
          </Col>
        </Row>
        <StyledTable responsive borderless ref={scrollRef}>
          <TableHead>
            <StyledRow>
              {columns.map((column) => (
                <th style={{"fontWeight": 550}}>{column.Header}</th>
              ))}
            </StyledRow>
          </TableHead>
        </StyledTable>
        <Overflowscroll>
        <StyledTable responsive borderless ref={scrollRef}>
          <> 
          { adminTable?
            <tbody>
            {data.length>0?
              <>
            {
                 data.map((item) =>
                 <StyledRow>
                   {console.log(item.bookingId.split(""))}
                   <td>{item.bookingId.split("Tour-ID")[1]}</td>
                   <td>{item.tourOperatorName}</td>
                   <td>{moment(item.startDate).format("DD-MM-YYYY")}</td>
                   <td>{handleassignedBusString(item.tripType)}</td>
                   <td>{item.assignedBus?item.assignedBus:"No Bus Assigned"}</td>
                   <td style={{cursor:"pointer"}}  onClick={() => history.push({
                     pathname: '/admin/dashboard/tourview',
                     state: {
                       bookingId: item._id,
                     }},)}>
                       <ViewIcon/>
                       <span className="viewTourDetails" >Se turdetaljer</span>
                     
                     </td>
                 </StyledRow>
               )
                   }
                   </>:<p  className="styledNoRecord">Ingen opptak funnet</p>
             }
           </tbody>:""
      
          }
          {
            tourAdminTable?
            <tbody>
            {tourOPeratorData.length>0?
              <>
            { 
              tourOPeratorData.map((item) =>
                <StyledRow>
                  {console.log(item.bookingId)}
                  <td>{item.bookingId}</td>
                  <td>{item.tourOperatorName}</td>
                  <td>{moment(item.startDate).format("DD-MM-YYYY")}</td>
                  <td>{handleassignedBusString(item.tripType)}</td>
                  <td>{item.assignedBus?item.assignedBus:"No Bus Assigned"}</td>
                  <td style={{cursor:"pointer"}}  onClick={() => history.push({
                    pathname: '/tour-operator/dashboard/tourview',
                    state: {
                      bookingId: item._id,
                    }},)}><ViewIcon/><span className="viewTourDetails" >Se turdetaljer</span>
                    
                    </td>
                </StyledRow>
              )
            }
            </>:<p  className="styledNoRecord">Ingen opptak funnet</p>
            }
          </tbody>:""

          }
           
          </>
        </StyledTable>
        </Overflowscroll>
      </TableWrapper>
      
    </>

  )
 
}
export default Table;




