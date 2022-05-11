import React, { useEffect, useState, useRef, useContext } from "react";
import styled, { css } from "styled-components";


export const CheckBoxLabel = styled.label`
  /* position:absolute;
  right:30px; */
  width: 45px;
  height: 23px;
  border-radius: 35px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 40px;
    width: 15px;
    height: 15px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;


export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 40px;
  width: 20px;
  height: 10px;

  &:checked + ${CheckBoxLabel} {
    background: #1BBD2B;
    &::after {
      content: "";
      display: block;
      border-radius: 40px;
      width: 15px;
      height: 15px;
      margin-left: 26px;
      transition: 0.2s;
    }
  }
 
`;




