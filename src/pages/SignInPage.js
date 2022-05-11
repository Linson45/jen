import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button as Button } from "react-bootstrap";
import SampleImage from "../assets/image 5.svg";
import * as Yup from "yup";
import BgLayout from "../libs/_components/_ui/BgLayout.js";
import { Form, SignInInput, Formik } from "../libs/_components/_ui/forms";
import authenticationService from "../_services/authentication.services";
import { withRouter, useHistory, useLocation } from "react-router-dom";
import { currentUserSubject } from "../_services/sessionStorage.services";
import md5 from 'md5-hash'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeslash = <FontAwesomeIcon icon={faEyeSlash} />;
const ForgotPassword = styled.div` 
  display:flex;
  justify-content:center;
  span{
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #FD6D03;
    cursor:pointer;
    /* margin-top: 22px; */

   }
 `;

const Styleddiv = styled.div` 
position:"relative";
i{
  position: absolute;
  left:18rem;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display:inline-table;
  top:20px;
}
`;
const ErrorMessage = styled.div` 
     color:red;
     position:relative;
  
 `;
 const StyledButton=styled(Button)` 
 position:relative;


 `
 const Imagecontainer=styled.div`
 margin:16px;
 `;

const Login = () => {
  let history = useHistory();

  const [errormessage, setErrormessage] = useState('');
  const [showpassword, setshowpassword] = useState(false);
  const { push } = useHistory();

  const getUser = JSON.parse(localStorage.getItem('currentUser'));
  let isLoggedIn = getUser && getUser.data ? getUser.data.token : null;
  let referrer = window.location.href;
  // referrer = referrer.replace( window.location.origin, '' );
  

  const validate = Yup.object().shape({
    email: Yup.string()
      .email("Må være en gyldig e-postadresse")
      .max(100, "E-post må inneholde mindre enn 100 tegn")
      .required("Vennligst skriv inn gyldig e-post"),
    password: Yup.string().required("Vennligst skriv inn gyldig passord"),
  })

  let location = useLocation();
 

 useEffect(() => {
  if (isLoggedIn) {
   let role= getUser && getUser.data ? getUser.data.role: null;
   if(role=="tourOperator"){
    push("/tour-operator/dashboard");
   }else{
    push("/admin/dashboard");
   }
   
    window.location.reload();
 }
}, []);
  console.log(location.pathname);

const passwordRedirect=()=>{
  if(location.pathname == "/"){
    history.push("tour-operator/forgotpassword")
  }else{
    history.push("admin/forgotpassword")
  }
 
}

  return (
    <>
      <BgLayout>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validate}

          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("logi values", values);
            //values.password = md5(values.password);
            let loginDetails = {
              email: values.email,
              password:  md5(values.password)//should be changes
            }
            setSubmitting(true);
            if (location.pathname == "/") {
              authenticationService.login(loginDetails).then(
                (user) => {
                  console.log(user)
                  localStorage.setItem("currentUser", JSON.stringify(user.data));
                  currentUserSubject.next(user.data);
                  user && push("/tour-operator/dashboard");
                  window.location.reload();
                },
                // (error) => {
                //   setSubmitting(false)
                // }
              ).catch((error) => {
                setSubmitting(false)
                setErrormessage("Ugyldige legitimasjon")

                //  if(values.password !== password){
                //   alert("Invalid password")
                //       return <div style={{color:"red"}}>Array Is Greater Than 2</div>
                //     }
              })
            } else {
              authenticationService.loginAdmin(loginDetails).then(
                (user) => {
                  console.log(user)
                  localStorage.setItem("currentUser", JSON.stringify(user.data));
                  currentUserSubject.next(user.data);
                  user && push("/admin/dashboard");
                  window.location.reload();
                },
                // (error) => {
                //   setSubmitting(false)
                // }
              ).catch((error) => {
                setSubmitting(false)
                setErrormessage("Ugyldige legitimasjon")

                //  if(values.password !== password){
                //   alert("Invalid password")
                //       return <div style={{color:"red"}}>Array Is Greater Than 2</div>
                //     }
              })
            }


          }}
        >
          {({ errors, touched, handleSubmit, isSubmitting }) => (
            <>
              <Form onSubmit={handleSubmit}>

                <Imagecontainer>
                  <img className="profile-image" src={SampleImage} alt="sampleimage" />
                </Imagecontainer>
                <SignInInput name="email" type="text" placeholder="E -post" className="inputvalue" />
                <Styleddiv>
                  <SignInInput name="password" type={!showpassword ? "password" : "text"} placeholder="Passord" className="inputPassword" />
                  <i onClick={() => setshowpassword(!showpassword)}>{!showpassword ? eye : eyeslash}</i>
                </Styleddiv>
                {/* <span className={[styles.visibility, 'flaticon-eye', this.state.type === 'text' ? styles.is_visible : styles.is_hidden].join(' ')} onClick={this.showHide}></span> */}
                <ErrorMessage>{errormessage}</ErrorMessage>
                <StyledButton type="submit" disabled={isSubmitting}> Logg Inn</StyledButton>
                <ForgotPassword>
                  <span onClick={() => passwordRedirect()}>Glemt passord?</span>
                </ForgotPassword>

              </Form>
            </>
          )}
        </Formik>
      </BgLayout>

    </>
  )
}
export default withRouter(Login)