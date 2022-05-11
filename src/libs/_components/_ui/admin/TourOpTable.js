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
  padding: 6px 10px;
  .viewTourDetails{
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.01em;
    color: #FD6D03;
    cursor:pointer;
  }
  svg{
    position:relative;
    left:-8px; 
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
  `;
const StyledTable = styled(BSTable)`
   margin-top:0px;
  
    td {
    background: #FFFFFF;
    height: 40px;
    text-align:left;
   font-style: normal;
   font-size: 13px;
   line-height: 16px;
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
    text-align:start;
    
  
  
}
th, td { width:70px }


`;
const TableHead = styled.thead`
 background: #F5F5F5;
 border:2px solid #FFFFFF;
position:relative;
top:10px;

    th:first-child{
      padding-left:20px;
    }
 
    th:last-child {
      text-align:left;
  
    }
    th:nth-last-child(4){
padding-right:8px

 
}
th:nth-last-child(3){

padding-right:55px

 
}
th:nth-last-child(2){

padding-right:55px

 
}
 
  
`;
const StyledRow = styled.tr`
  border-bottom: 1px solid #E1E1E1;

 

`;
const Overflowscroll = styled.div`
  display:block;
  height:190px;
  overflow-y:scroll;
  `;
const StyledDateRangePicker = styled.div`
  display:flex;
  justify-content:center;
  color: black;
  background:white;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  width:100%;
  height:34px;
 
 .react-daterange-picker {
    /* width:100%; */
    margin-left:5px;
  
   
  }
  .react-daterange-picker__wrapper {
    border: none;
    padding-left:5px;
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
    left:0px;
  }
  svg {
    cursor: pointer;
    /* font-size: 16px; */
    margin-left:-6px;
   }
  .react-calendar {
    width: 300px;
    background-color:white;
   
   
  }
  .react-daterange-picker__inputGroup {
    flex-grow: 0;
   /* margin-left:0px; */
  }
  .react-daterange-picker__inputGroup__input:invalid {
    background:none;
}
  `;


function Table({ data, columns, scrollRef, adminBooking ,handleDate}) {
  var _ = require('lodash');
  let history=useHistory();
  const [value, setValue] = useState(
   ""
  );
  const handleDateValue = (data) => {
    handleDate(data)
    setValue(data)
  }
 
  return (
    <>
      <TableWrapper>
        <Row>
          <Col sm="8">
            <p>Kommende turer</p>
          </Col>
          <Col sm="4">
         
            <StyledDateRangePicker>
           
              <DateRangePicker
                  onChange={handleDateValue}
                  value={value}
                  calendarIcon={<Calender />}
                  clearIcon={<IconCross/>}
                  dayPlaceholder="DD"
                  monthPlaceholder="MM"
                  yearPlaceholder="YYYY"
                  minDate={moment(data[0].startDate).toDate()}
              />
             
            </StyledDateRangePicker>
          </Col>
        </Row>
        <StyledTable responsive borderless ref={scrollRef}>
          <TableHead>
            <StyledRow>
              {columns.map((column) => (
                <th>{column.Header}</th>
              ))}
            </StyledRow>
          </TableHead>
        </StyledTable>
        <Overflowscroll>
        <StyledTable responsive borderless ref={scrollRef}>
          <>
            <tbody>
              {data.length>0?
                <>
              {
                data.map((item) =>
                  <StyledRow>
                     {console.log(item.bookingId.split("Tour-ID")[1])}
                    <td>{item.bookingId.split("Tour-ID")[1]}</td>
                    <td>{item.tourOperatorName}</td>
                    <td>{moment(item.startDate).format("DD-MM-YYYY")}</td>
                    <td>{_.startCase(camelCase(item.tripType)).replace(/ /g, '')}</td>
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
            </tbody>
          </>
        </StyledTable>
        </Overflowscroll>
      </TableWrapper>
      
    </>

  )
 
}
export default Table;




