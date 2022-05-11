import React, { useEffect, useState, useRef, Component } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../../libs/_layouts/PrivateLayout";
import { Row, Col, Card, Button } from "react-bootstrap";
import Arrowdropdown from "../../assets/svg/arrow_drop_down.svg";
import Select from 'react-select';
import countryList from 'react-select-country-list';
import {
    Heading,
} from "../_styles/Common.style";
import { useHistory, withRouter } from "react-router-dom";
import { Back } from "../../assets/icons";
import { Formik, Form, Input } from "../../libs/_components/_ui/forms";
import { SaveButton, CancelButton } from "../../libs/_components/_ui/Buttons";
import * as Yup from "yup";
import AdminTourOperator from "../../_services/adminTourOperator.services";
const MainContainer = styled.div` 
  height: auto;
  width: 100%;
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
  .Extra-contact{
    
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FD6D03;
    letter-spacing: 0.15px;
    text-align: left;
    display: block;
  }
  .p-details{
    display: block;
    text-align: left;
    
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.6);
    margin-top:25px;
  }
  `;
  const StyledSlectCountry=styled.div` 
  
  .css-b62m3t-container {
      position: relative;
      box-sizing: border-box;
      text-align: left;
      
       font-size: 16px;
       letter-spacing: 0.15px;
       line-height: 24px;
    
      
  }
  .css-1s2u09g-control{
      border:ridge;
      box-shadow:none;
      
  }
  .css-14el2xx-placeholder {
      text-align: left;
      /* padding:0 14px; */
     
  }
  .hMcXRr div {
      position: relative;
      text-align: right;
     
  }
  .css-319lph-ValueContainer{
      padding: 9px 20px;
  }
  
  
  `
class TourOperatorForm extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            options:[],
        }
    }

    componentDidMount() {
        // const isLoggedIn = JSON.parse(localStorage.getItem("loginDetails"))?.accessToken || false
        // // console.log('logged', isLoggedIn)
        // !isLoggedIn && this.props.history.push('/')
        this.setState({
            options:countryList().getData()
        });
    }

    render() {

        return (
            <PrivateLayout>
            <Heading><Back  onClick={()=>this.props.history.goBack()}/>Legge til Turoperatør</Heading>
            <Card>
                <Card.Body>
                    <MainContainer>
                        <Formik
                            initialValues={{ operatorName: "", contactName: "", email: "",commissionPerOrder:"",
                            cancellationFee:"",userName:"",ifscCode:"", accountNo:""}}
                            validationSchema={Yup.object().shape({
                                operatorName: Yup.string().required("name is required"),
                                contactName: Yup.string().required("Contactname is required"),
                                email: Yup.string()
                                    .email("Must be a valid email address")
                                    .max(100, "Email must be less than 100 characters")
                                    .required("Please enter valid email"),
                                // Telephone: Yup.string().required("PhoneNumber is required"),
                                commissionPerOrder:Yup.string().required("commissionPerOrder is required"),
                                cancellationFee:Yup.string().required("cancellationFee is required"),
                            })}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log("submited values",values);
                                setSubmitting(true);
                                let setPayload=
                                {
                                    "operatorName": values.operatorName,
                                    "contactName":  values.contactName,
                                    "email":  values.email,
                                    "address": [
                                      {
                                        "country": values.country.label,
                                        "city": values.City,
                                        "zipCode": values.Postcode,
                                      }
                                    ],
                                    "commissionPerOrder":values.commissionPerOrder,
                                    "cancellationFee": values.cancellationFee,
                                    "accountNo":values.accountNo,
                                    "userName": values.userName,
                                    "ifscCode":values.ifscCode
                                  }
                                AdminTourOperator.AddTourOperator(setPayload).then(
                                    (user) => {
                                        console.log(" tour succes",user);
                                       //   localStorage.setItem("currentUser", JSON.stringify(user.data));
                                        //   currentUserSubject.next(user.data);
                                        // user && history.push("/");
                                        // window.location.reload();
                                        // alert("Password:" + user.data.password +"\n"+
                                        //        "Message:Tour Operator created"
                                        // )
                                    },
                                    (error) => {
                                        setSubmitting(false);
                                    }
                                );
                            }}

                        >
                            {({ values, errors, touched, handleSubmit, isSubmitting,setFieldValue,setFieldTouched }) => (
                                <Form className="mx-auto" onSubmit={handleSubmit} >
                                     
                                    <Row>
                                        <Col sm="5">
                                            <Input name="operatorName" type="text" placeholder="Navn på operatøren" />
                                            <Input name="contactName" type="text" placeholder="Kontakt navn" />
                                            <Input name="Telephone" type="number" placeholder="Telefon" />

                                            <p className="Extra-contact">Extra contact</p>
                                            <Input name="email" type="email" placeholder="E-post-ID" />

                                            <p className="p-details">Address Details</p>
                                            <StyledSlectCountry>
                                            <Select
                                               options={this.state.options}
                                                placeholder="Landsstat"
                                                className="selectContry"
                                                name="country"
                                                onChange={(value) => setFieldValue('country', value)}
                                                onBlur={()=> setFieldTouched('country', true)}
                                                value={values.country}
                                                />
                                                </StyledSlectCountry>
                                            {/* <Input name="Select Country" type="text" placeholder="Landsstat" /> */}
                                            <Input name="City" type="text" placeholder="City" />
                                            <Input name="Postcode" type="text" placeholder="Post kode" />
                                        </Col>
                                        <Col sm="1"></Col>
                                        <Col sm="5">
                                            <p className="p-details">Payment-related details</p>
                                            <Input name="commissionPerOrder" type="text" placeholder="% Provisjon per bestilling" />
                                            <Input name="cancellationFee" type="text" placeholder="% kanselleringsgebyrer for tur" />

                                            <p className="p-details">Bank information</p>
                                            <Input name="accountNo" type="text" placeholder="Kontonummer" />
                                            <Input name="userName" type="text" placeholder="Brukernavn" />
                                            <Input name="ifscCode" type="text" placeholder="Ifsc-kode" />
                                        </Col>
                                    </Row>
                                    <hr />
                                    <div className="mb-5 float-end">
                                        <SaveButton type="submit" disabled={isSubmitting} >LARGE</SaveButton>
                                        <CancelButton> AVBRYT</CancelButton>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </MainContainer>
                </Card.Body>
            </Card>
        </PrivateLayout>
        );
    }
};
export default withRouter(TourOperatorForm) 

