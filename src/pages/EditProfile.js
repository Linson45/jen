import React, { useEffect, useState } from "react";
import { Row, Col, Card,  } from "react-bootstrap";
import styled, { css } from "styled-components";
import PrivateLayout from "../libs/_layouts/PrivateLayout";
import { Formik, Form, Input, StyledDiv } from "../libs/_components/_ui/forms";
import { useHistory } from "react-router-dom";
import { Back } from "../assets/icons";
import { SaveButton, CancelButton } from "../libs/_components/_ui/Buttons";
import * as Yup from "yup";
import {
    Heading,
  } from "./_styles/Common.style";

const AddToBussection = styled.div` 
top:-7px;
position:relative;

`;
const MainContainer = styled.div` 
  width: 100%;
  height: auto;
  `;

function Editprofile(){
    const { push } =useHistory();
    return(
        <>
        <PrivateLayout>
        <Heading onClick={() => push("/tour-operator/dashboard")}><AddToBussection><Back />Rediger profil</AddToBussection></Heading>
        <Card style={{ height: "570px" }}>
          <Card.Body>
              <MainContainer>
                  <Formik 
                   initialValues={{ firstName: "",lastName: "", email: "", number: "" }}
                   validationSchema={Yup.object().shape({
                     firstName: Yup.string().required("fornavn is required"),
                     lastName: Yup.string().required("etternavn is required"),
                     email: Yup.string()
                       .email("Must be a valid email address")
                       .max(100, "Email must be less than 100 characters")
                       .required("Please enter valid e-post"),
                     number: Yup.string()
                       .min(1)
                       .max(12)
                       .required("Telefon is required"),
                   })}
                  >

                  {({ values, errors, touched, handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit} className="mx-auto" >
                    <Row className="m-1">
                      <Col sm="4">
                      <StyledDiv>
                        <Input
                          name="firstName"
                          type="text"
                          placeholder="fornavn"
                         
                        />
                    </StyledDiv>
                      </Col>
                    </Row>
                    <Row className="m-1">
                      <Col sm="6" >
                        <StyledDiv>
                          <Input
                            name="lastName"
                            type="text"
                            placeholder="etternavn"
                           
                          />
                        </StyledDiv>
                      </Col>
                    </Row>

                    <Row className="m-1">
                      <Col sm="6">
                        <StyledDiv>
                          <Input
                            name="email"
                            type="email"
                            placeholder="e-post"
                           
                          />
                        </StyledDiv>
                      </Col>
                    </Row>
                    <Row className="m-1">
                      <Col sm="6">
                        <StyledDiv>
                          <Input
                            name="number"
                            type="number"
                            placeholder="Telefon"
                          
                          />
                        </StyledDiv>
                      </Col>
                    </Row>
                    <br /><br />
                    <hr />
                    <div className="mb-5 float-end">
                      <SaveButton>LARGE</SaveButton>
                      <CancelButton  onClick={() =>push("/tour-operator/dashboard")}> AVBRYT</CancelButton>
                    </div>
                  </Form>
                )}
                  </Formik>
              </MainContainer>
              
          </Card.Body>
          </Card>
        </PrivateLayout>
        </>
    )
}
export default Editprofile