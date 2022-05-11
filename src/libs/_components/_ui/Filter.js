import React from "react";
import styled, { css } from "styled-components";
import { Popover as BSPopover, Form } from "react-bootstrap";
import { OverlayTrigger, Button } from "react-bootstrap";
import { FilterIcon } from "../../../assets/icons";

const Popover = styled(BSPopover)`
box-sizing: border-box;
box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.25);
border: 1px solid #FFFFFF;
border-radius: 4px;
margin-right:-12px;

  .popover-arrow {
    &:before {
      border-bottom-color: #FFFFFF;
    
    }
    &:after {
      border-bottom-color: #FFFFFF;
 
    }
  }
.selectionType{
    margin-top:40px;
}
.form-select {
height: 54px;
margin-top: 17px;
}
  
`;
const FilterSection = styled.div` 
background: #FD6D03;
border-radius: 5px;
width:90%;
text-align:center;
padding:16px 10px;
margin:6px;
top:-3px;
position:relative;
`;
const Paragraph = styled.p` 
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
display: flex;
justify-content:right;
letter-spacing: -0.015em;
color: #FD6D03;
margin-top:20px;

`;

const Filter = ({handleTypeTur,handleBookingType}) => {
 
    const popover = (
        <Popover id="popover-basic" style={{ marginTop: "22px", width: "32% ", height: "223px", maxWidth: "420px" }}>
            <Popover.Body>
                <div>
                  
                    <Form.Select aria-label="Default select example"  onClick={handleTypeTur}>
                        <option value="">Type tur</option>
                        <option value="oneWay">OneWay</option>
                        <option value="roundTrip">RoundTrip</option>
                       
                    </Form.Select>
                    <Form.Select aria-label="Default select example" className="selectionType" onClick={handleBookingType}>
                        <option value="">Bestillingstype</option>
                        <option value="ongoing">ongoing</option>
                        <option value="upcoming">upcoming</option>
                        <option value="completed">completed</option>
                        <option value="cancelled">cancelled</option>
                    </Form.Select>

                </div>
                <Paragraph>Søke om</Paragraph>
            </Popover.Body>
        </Popover>
    );
    return (
        <>
            <OverlayTrigger trigger="click" rootClose placement="bottom-end" overlay={popover}>
                <FilterSection><FilterIcon /></FilterSection>
            </OverlayTrigger>
        </>
    )
}
export default Filter;