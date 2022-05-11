import React from "react";
import styled, { css } from "styled-components";


import {
  Form as FForm,
  Formik,
  useField,
  Field,

} from "formik";

export const Form = styled(FForm)`
  width: 100%;
  text-align:center;
  padding: 0;
  margin: 0;
   
  .required:after {
    content: "*";
    color: red;
  }

  .form-field {
    margin-bottom:4px;

 }
   input:not([type="radio"]){
     /* border:1px  solid; */
     width:92%;
     padding:12px;
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     letter-spacing: 0.15px;
     line-height: 24px;
     color: rgba(33, 33, 33, 0.87);
     margin-top:18px;
     border-radius: 3.5px;
     outline: none;
     display:flex;
     justify-content:left;
     border-radius: 3.5px;
      &:focus { 
        font-style: normal;
       font-weight: 400;
       font-size: 16px;
       line-height: 24px;
         border-style:1px ridge;
         border-color:#6200EE;
      &::placeholder{
       color:transparent;
       font-style: normal;
       font-weight: 400;
       font-size: 16px;
       line-height: 24px;
      
     }
    
     }
  }
 
 input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
.error {
    border: 20px solid #ff6565;
   }
 .styled-input{
        margin-left:-50px;
        &:focus{
        border-style:ridge;
        border-color:#6200EE;;
        outline: none;
     }
   }

   div{
    position:relative;
   
   }

  label{
    transform:translateY(-50%);
    transition: 0.2s ease all;
    z-index:999;
    pointer-events: none;
    position:absolute;
    top:40px;
    left:15px;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

  }
  
  .inputs:focus ~ .labels,.inputs:valid ~ .labels{
  top:1.10rem;
  /* top:0.1rem;; */
  font-size:15px;
  padding:0 5px 0 5px;
  background-color:#fff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(33, 33, 33, 0.87)

 }
 .textArealabels{
  transform:translateY(-50%);
    transition: 0.2s ease all;
    z-index:999;
    pointer-events: none;
  
 }

 .teaxtarea:focus ~ .labels,.teaxtarea:valid ~ .labels{
  top:1.70rem;
  font-size:15px;
  padding:0 5px 0 5px;
  background-color:#fff;

 }

 `;

export const ErrorMessage = styled.span`
  color:red ;
  font-size: 13px;
  /* padding-left:0px; */
  display: inline-block;
  display:flex;
  justify-content:left;
 
`;
export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
    console.log(props)
    console.log(field, meta)
  return (
    <div className="form-field ">
      <>
        <input
          {...field} {...props} className={props.className}
        />
        {meta.touched && meta.error ? (
          <ErrorMessage>{meta.error}</ErrorMessage>
        ) : null}
      </>
    </div>
  );
};
const StyledSignInDiv=styled.div` 
 input:not([type="radio"]){
     border:1px solid;
     width:326px;
     padding:14px;
     font-size: 16px;
     letter-spacing: 0.15px;
     line-height: 24px;
     color: rgba(33, 33, 33, 0.87);
     margin-top:15px;
     border-radius: 3.5px;
     outline: none;
     position: relative;
     left: 68px;
      &:focus {
         border-style:1px ridge;
         border-color:#6200EE;
      &::placeholder{
       color:transparent;
      
     }
    
     }
  }

`;
export const ErrorMessageSignIn = styled.span`
  color:red ;
  font-size: 13px;
  padding-left:75px;
  display: inline-block;
  display:flex;
  justify-content:left;
 
`;
export const  SignInInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
    console.log(props)
    console.log(field, meta)
  return (
    <StyledSignInDiv>
      <>
        <input
          {...field} {...props} className={props.className}
        />
        {meta.touched && meta.error ? (
          <ErrorMessageSignIn>{meta.error}</ErrorMessageSignIn>
        ) : null}
      </>
    </StyledSignInDiv>
  );
};


export const Radio = ({ label, ...props }) => {
  console.log(props)
  const [field, meta] = useField(props);
  console.log(field, meta)
  return (
    <div className="form-field">
   <input {...field} {...props} className={props.className}/>
         {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </div>
  );
};

export const TextAraa = ({ label, ...props }) => {
  console.log(props)
  const [field, meta] = useField(props);
 
  return (
    <div className="form-field">
   <input {...field} {...props} className={props.className} />
     {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </div>
  );
};

export const StyledLabel = ({ label, ...props }) => {

  const [field, meta] = useField(props);
  return (

    <>
      <label   {...field} {...props} className={props.className}

      />

    </>

  );
};
export const StyledDiv = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (

    <>
      <div {...field} {...props} className={props.className}></div>
    </>
  );
};



export { Formik, useField, Field };