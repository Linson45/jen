import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../libs/_layouts/PrivateLayout";
import { Row, Col, Card, Button } from "react-bootstrap";
import TourOperatorDriver from "../_services/tourOperatorDriver.services";
import {
  Heading,
} from "./_styles/Common.style";
import { Back } from "../assets/icons";
import { useHistory } from "react-router-dom";
import { Formik, Form, Input, StyledDiv } from "../libs/_components/_ui/forms";
import * as Yup from "yup";
import { SaveButton, CancelButton } from "../libs/_components/_ui/Buttons";
import swal from 'sweetalert'

const MainContainer = styled.div` 
  width: 100%;
  height: auto;

    svg{
          cursor:pointer;
         
      }
   .card{
        height:600px;
      }

      
 .large-btn{
    background-color:#FD6D03 !important;
    box-shadow: none;
    color: #fff;
    margin-right: 10px;
    }
    .abv-btn{
    box-shadow: none;
    border: 1px solid #000 !important;
  }
  input:not([type="radio"]){
    width:418px;
    height:54px;
    padding:13px;
    margin-top:9px;
  }
 

    `;
const AddToBussection = styled.div` 
/* margin-top:5px; */
position:relative;
top:-10px;
left:-19px;
svg{
  /* position: relative;
    left: -22px;
    top: 24px; */
}
`;

const ManageDriverPage = () => {
  const history = useHistory();
  const [driverNumber, setDriverNumber] = useState()
  const [driverName, setDriverName] = useState()
  const [driverEmail, setDriverEmail] = useState()
  const [phoneNo, setPhoneNo] = useState()
  const [multipleFile, setMultipleFile] = useState([])
  const handleDriver = (e) => {
    setDriverNumber(e.target.value)
  }
  const handleDriverName = (e) => {
    setDriverName(e.target.value)
  }
  const handleDriverEmail = (e) => {
    setDriverEmail(e.target.value)
  }
  const handlePhoneNo = (e) => {
    setPhoneNo(e.target.value)
  }
  return (
    <>
      <PrivateLayout>
        <Heading onClick={() => history.push("/tour-operator/driver")}><AddToBussection><Back /><span>Sjåfør</span></AddToBussection></Heading>
        <Card style={{ height: "589px" }}>
          <Card.Body>
            <MainContainer>
              <Formik
                initialValues={{id:"", firstName: "", email: "", number: "", driverImages: [] }}
                validationSchema={Yup.object().shape({
                  firstName: Yup.string().required("navn kreves"),
                  email: Yup.string()
                    .email("Må være en gyldig e-postadresse")
                    .max(100, "E-post må inneholde mindre enn 100 tegn")
                    .required("Vennligst skriv inn gyldig e-post"),
                    number: Yup.string()
                    .min(1)
                    .max(12)
                    .required("Telefonnummer er påkrevd"),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  console.log(values)
                  values.firstName = driverName;
                  values.email = driverEmail;
                  values.number = phoneNo;
                  // values.number = phoneNo;
                  var formData = new FormData();
                  formData.append('driverDetails', JSON.stringify({
                    'firstName': driverName,
                    // 'lastName': driverName?.split("")[1],
                    "phoneNo": [
                      {
                        "number": phoneNo,
                      }
                    ],
                    'email': driverEmail,
                  }));
                  //formData.append('driverImages', []);
                  setSubmitting(true);
                  TourOperatorDriver.tourOperatorDriver(formData).then(
                    (driver) => {
                      console.log(driver)
                      // localStorage.setItem("currentUser", JSON.stringify(user.data));
                      // currentUserSubject.next(user.data);
                      // driver && history.push("/tour-operator/driver");
                      // window.location.reload();
                      swal({
                        title: "Success",
                        text: driver.data.message,
                        icon: "success",
                        button: "Ok",

                      }).then((result) => {
                        console.log(result);
                        if (result) {
                          history.push('/tour-operator/driver')
                        } else {
                          // not clicked
                        }
                      });

                    },
                    (error) => {
                      setSubmitting(false);
                    }
                  );
                }}

              >
                {({ values, errors, touched, handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit} className="mx-auto" >
                    {/* <Row className="m-1">
                     
                      <StyledDiv>
                      <Col>
                        <Input
                          name="id"
                          type="text"
                          placeholder="D-1001"
                          value={driverNumber}
                          onChange={handleDriver}
                          style={{width:"206px",height:"54px"}}
                        />
                        </Col>
                    </StyledDiv>
                      
                    </Row> */}
                    <Row className="m-1">
                      <Col sm="6" >
                        <StyledDiv>
                          <Input
                            name="firstName"
                            type="text"
                            placeholder="Drivernavn"
                            value={driverName}
                            onChange={handleDriverName}
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
                            placeholder="Epost id"
                            value={driverEmail}
                            onChange={handleDriverEmail}
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
                            value={phoneNo}
                            onChange={handlePhoneNo}
                          />
                        </StyledDiv>
                      </Col>
                    </Row>
                    <br /><br />
                    <hr />
                    <div className="mb-5 float-end">
                      <SaveButton>LARGE</SaveButton>
                      <CancelButton  onClick={() => history.push("/tour-operator/driver")}> AVBRYT</CancelButton>
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
export default ManageDriverPage