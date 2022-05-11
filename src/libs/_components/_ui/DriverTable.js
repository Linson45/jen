import React from "react";
import styled from "styled-components";
import { Table as BSTable } from "react-bootstrap";
import { ViewIcon } from "../../../assets/icons";
import { useHistory } from "react-router-dom";
import Loader from "../../../libs/_components/_ui/table"
import moment from "moment";
const TableWrapper = styled.div`
 width:100%;
  height:auto;
  position:relative;
  .viewTourDetails{
    /* font-family: Roboto; */
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #FD6D03;
    padding-top:3px;
    cursor:pointer;
    position:relative;
    left:25px; 

    
  }
  svg{
    position:relative;
    left:15px; 
    margin-left:30px;
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
  .viewTourDetailsBooking{
    /* font-style: normal; */
     /* font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #FD6D03; */
  }
  `;
const StyledTable = styled(BSTable)`
   margin-top:-5px;
    td {
     padding:4px 52px;
    background: #F5F5F5;
    text-align:center;
   /* font-family: Roboto; */
   font-style: normal;
   font-weight: 700;
   font-size: 14px;
   line-height: 16px;
   letter-spacing: 0.01em;
   color: #000000;
   padding-top:8px;
   padding-left:25px;
  }
  th {
    height: 30px;
    /* font-family: Roboto; */
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    text-align:center;
    letter-spacing: 0.01em;
    padding-left:25px;
  }
  td:first-child {
    text-align: left;
  }
  th:first-child {
    text-align: left;
  }
 
  
 
`;
const TableHead = styled.thead`
 background: #F5F5F5;
 border:1px solid #FFFFFF;
 position:relative;
 top:17px;

 th:last-child{
      position:relative;
      display:flex;
      justify-content:space-around;
      margin-left:45px;
    
 }
 
 th:nth-last-child(2){

  padding-left:14px; 
}
th:nth-last-child(1){
/* padding-left:0px */
}
  
`;
const StyledRow = styled.tr`
  border:7px solid #FFFFFF;
   
  td:last-child{
      position:relative;
      padding-left:0px;
     text-align:end;
     margin-left:170px;
 }
  
`;
const Overflowscroll = styled.div`
  /* display:block;
  height:270px;
  overflow-y:scroll; */
  overflow:hidden;
overflow-y:scroll;
display:block;
height:270px;
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

function Table({ data,
    tableData,
    bookingData,
    columns,
    scrollRef,
    adminTourOperatorCustomer,
    tourOperatorDriver, isloading
}) {
    const history = useHistory();
    console.log(!isloading)
    console.log(bookingData)
    console.log(data)
    return (
        <>
            <TableWrapper>
                <StyledTable responsive borderless ref={scrollRef}>
                    <TableHead>
                        <StyledRow>
                            {columns?.map((column) => (
                                <th>{column.Header}</th>
                            ))}
                        </StyledRow>
                    </TableHead>
                </StyledTable>
                <Overflowscroll>
                    <StyledTable responsive borderless ref={scrollRef}>
                        {tourOperatorDriver ? <>
                            <tbody>
                                {tableData.length > 0 ?

                                    <>
                                        {
                                            tableData.map((item) =>
                                                <StyledRow>
                                                    {console.log("iten", item)}
                                                    <td>{item.bookingId}</td>
                                                    {/* <td>{item.bookingId}</td> */}
                                                    <td>{moment(item.startDate).format('DD-MM-YYYY')}</td>
                                                    <td>{moment(item.endDate).format('DD-MM-YYYY')}</td>
                                                    <td><ViewIcon /><span className="viewTourDetails" onClick={() => history.push({
                                                        pathname: '/tour-operator/driver/listing',
                                                        state: {
                                                            bookingId: item._id,
                                                            driverId: item.assignedDriverId
                                                        },
                                                    })}>
                                                        vis Turdetaljer</span></td>
                                                </StyledRow>
                                            )
                                        },
                                    </> : <p className="styledNoRecord">Ingen opptak funnet</p>
                                }
                            </tbody>
                        </> : null}

                        {adminTourOperatorCustomer ?

                            <>
                                {
                                    <tbody>
                                        {bookingData.length > 0 ?
                                            bookingData.map((item) =>
                                                <StyledRow>
                                                    {console.log(item)}
                                                    <td>{item.bookingId}</td>
                                                    <td>{moment(item.startDate).format('DD-MM-YYYY')}</td>
                                                    <td>{moment(item.endDate).format('DD-MM-YYYY')}</td>
                                                    <td><ViewIcon />
                                                        <span className="viewTourDetails" onClick={() => history.push("/admin/customerdetials/" + item._id)}>
                                                            vis Turdetaljer
                                                        </span>
                                                    </td>
                                                </StyledRow>
                                            )
                                            : <p className="styledNoRecord">Ingen opptak funnet</p>
                                        }
                                    </tbody>
                                }
                            </>
                            : null}



                    </StyledTable>
                </Overflowscroll>
            </TableWrapper>
        </>
    )
}
export default Table;




