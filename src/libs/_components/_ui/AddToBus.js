import React  from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: #ff6200;
  border-radius: 50px;
  letter-spacing: 1.25px;
  width: max-content;
  display: block;
  height: fit-content;
  color: #FFFFFF;
  padding: 9px 12px;
  box-shadow:  0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);;
  border:none;
  float: right;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  /* line-height: 16px; */
  letter-spacing: 1.25px;
  text-transform: uppercase;
  

`;

const Addbuses=({AddToBus,AddTourOperator,AddToDriver})=>{
    return(
        <>
        {AddToBus?<ButtonContainer>+ Leg Till Buss</ButtonContainer>:null}
        {AddToDriver?<ButtonContainer>+ Leg Till SJÅFØR</ButtonContainer>:null}
        {AddTourOperator?<ButtonContainer>+ Legg til Turoperatør</ButtonContainer>:null}
        </>

    )
}
export default Addbuses