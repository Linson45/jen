import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import BgLayout from "../libs/_components/_ui/BgLayout.js";
import { useHistory, useLocation } from "react-router-dom";
import { Form, SignInInput, Formik } from "../libs/_components/_ui/forms";
import authenticationService from "../_services/authentication.services";
import swal from "sweetalert";


const StyledDiv = styled.div` 

   input{
     margin-top:10px;
   }
   button {
    margin-top: 25px;
  }
`;
const UpperSection = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content:center;
    letter-spacing: 0.15px;
    color: #212121;
    margin-top:20px;
  
 `;
const ReturnLoginSection = styled.div`
 display:flex;
 justify-content:center;
    span{
    /* margin-top:15px; */
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #FD6D03;
    cursor:pointer;
   }
 `;
  const StyledButton=styled(Button)` 
  position:relative;
  bottom:8px;
 
  `

const ForgotPasswordPage = () => {
  const { push } = useHistory();
  let location = useLocation();
  const getUser = JSON.parse(localStorage.getItem('currentUser'));
  let isLoggedIn = getUser && getUser.data ? getUser.data.token : null;
  const validate = Yup.object().shape({
    email: Yup.string().required("Vennligst skriv inn gyldig e-post")
  })

  const passwordRedirect=()=>{
    if(location.pathname == "/tour-operator/forgotpassword"){
      push("/")
    }else{
      push("/adminlogin")
    }
   
  }
  useEffect(() => {
    if (isLoggedIn) {
      push("/tour-operator/dashboard");
      window.location.reload();
   }
  }, []);

  
  return (
    <>
      <BgLayout>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validate}

          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values)
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
            if (location.pathname == "/tour-operator/forgotpassword") {
              authenticationService.forgotPassword(values).then(
                (user) => {
                  console.log(user)
                  // localStorage.setItem("currentUser", JSON.stringify(user.data));
                  // currentUserSubject.next(user.data);
                  // user && push("/tour-operator/dashboard");
                  // window.location.reload();
                },
                // (error) => {
                //   setSubmitting(false)
                // }
              ).catch((error) => {
                // setSubmitting(false)
                // setErrormessage("Ugyldige legitimasjon")

                //  if(values.password !== password){
                //   alert("Invalid password")
                //       return <div style={{color:"red"}}>Array Is Greater Than 2</div>
                //     }
              })
            } else {
              authenticationService.forgotAdminPassword(values).then(
                (user) => {
                  console.log(user)
                  // localStorage.setItem("currentUser", JSON.stringify(user.data));
                  // currentUserSubject.next(user.data);
                  // user && push("/admin/dashboard");
                  // window.location.reload();
                  swal({
                    title: "Suksess",
                    text: user.data.message,
                    icon: "success",
                    button: "Ok",
                  })
                  setSubmitting(false)
                },
                // (error) => {
                //   setSubmitting(false)
                // }
              ).catch((error) => {
                if (error.response.status === 400) {
                  //  alert(error.response.data.message)

                  swal({
                    title: "Feil oppstår",
                    text: error.response.data.message,
                    icon: "warning",
                    // button: "cancel",
                    showCancelButton: true,
                    confirmButtonColor: 'red',
                     
                  });
                  setSubmitting(false)
                }else{
                  swal({
                    title: "Det oppsto feil",
                    text: error.response.message,
                    icon: "warning",
                    // button: "cancel",
                    showCancelButton: true,
                    confirmButtonColor: 'red',
                     
                  });
                  setSubmitting(false)
                }
              })
            }

          }}
        >
          {({ errors, touched, handleSubmit,isSubmitting }) => (
            <>
            <Form onSubmit={handleSubmit}>
              <UpperSection>
                <p>Vennligst skriv inn e-postadressen din til  <br />be om tilbakestilling av passord</p>
              </UpperSection>
              <StyledDiv>
                <SignInInput name="email" type="email" placeholder="E -post" className="inputvalue" />
                <StyledButton block type="submit" disabled={isSubmitting}>Sende inn</StyledButton>
                <ReturnLoginSection>
                  <span onClick={() => passwordRedirect()}>Gå tilbake til pålogging</span>
                </ReturnLoginSection>
              </StyledDiv>
           </Form>
           </>
          )}
        </Formik>
      </BgLayout>
    </>
  )
}
export default ForgotPasswordPage