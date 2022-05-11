import styled, { css } from "styled-components";

const baseStyles = css`
  color: ${(props) => props.textColor || "#FFFFFF"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  text-align: center;
  margin: 0px 5px;
  font-family: Montserrat Alternates-Bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: none;
  &:hover {
    color: #ffffff;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  ${baseStyles}
  width:auto;
  padding: 10px 20px;
  background:${(props) =>
    props.background ||
    "transparent linear-gradient(270deg, #33c2df 0%, #0081c5 100%)"};
`;

export const BasicButtonOld = styled.button`
  ${baseStyles}
  background:${(props) =>
    props.background ||
    "transparent linear-gradient(270deg, #33c2df 0%, #0081c5 100%)"};
`;

export const BasicButton = styled.button`
  background:${(props) => props.background || "ff6200"};
  border-radius: 30px;
  width: max-content;
  display: block;
  height: fit-content;
  color: #fff;
  padding: 5px 10px;
  box-shadow: 0 2px 5px #6d6d6d;
`;
export const SaveButton = styled.button`
  background-color:#FD6D03 !important;
    box-shadow: none;
    color: #fff;
    margin-right: 10px;
    border:none;
    padding:11px 21px;
    border-radius: 4px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    width:109px;
    height:45px;
`;
export const CancelButton = styled.button`
    box-shadow: none;
    border: 1px solid #000 !important;
    padding:10px 19px;
    border:none;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 4px;
    font-style: normal;
   font-weight: 700;
   font-size: 14px;
   line-height: 16px;
   color: #000000;
   width:109px;
    height:45px;
`;
export const LoadMore = styled.button`
 font-style: normal;
 font-weight:700;
 font-size: 14px;
 line-height: 16px;
 letter-spacing: 1.25px;
 text-transform: uppercase;
 color: #000000;
 background: #FFFFFF;
 padding: 9px 15px;
 border: 1px solid #000000;
 box-sizing: border-box;
 border-radius: 4px;
 cursor: pointer;
 text-decoration: none;  
 width: 145px;
 height: 45px;
`;
export const StyledButton = styled.button`
 background-color: #ff6200;
  border-radius: 30px;
  width: max-content;
  display: block;
  height: fit-content;
  color: #FFFFFF;
  padding: 12px 7px;
  box-shadow: 0 2px 5px #6d6d6d;
  border:none;
  float: right;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;

`;

