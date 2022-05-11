import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Form } from "react-bootstrap";
const AssignDriver = styled.div`
width:100%;
max-width:440px;
border: 1px solid #E6E6E6;
box-sizing: border-box;
border-radius: 3.5px;
background:white;
padding:8px;
.form-select{
    border:none;
    margin-top:-40px;
}

`;
const Paragraph = styled.p` 
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 24px;
letter-spacing: 0.15px;
color: rgba(33, 33, 33, 0.87);
position:relative;
top:-20px;
left:-45px;

`;
const FormSelect = ({assignedDriver,SelectCountry}) => {
    return (
        <>
           {assignedDriver? <AssignDriver>
                <Paragraph>Stikkord</Paragraph>
                <Form.Select aria-label="Default select example" >
                    <option>Type tur</option>
                    <option value="1">Work</option>
                    <option value="2">Home</option>
                  
                </Form.Select>
            </AssignDriver>:null}

        </>
    )
}
export default FormSelect