import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../../libs/_layouts/PrivateLayout";
import { Row, Col, Card, Button } from "react-bootstrap";
import Arrowdropdown from "../../assets/svg/arrow_drop_down.svg";
import Select from 'react-select';
import countryList from 'react-select-country-list';
import {
    Heading,
} from "../_styles/Common.style";
import { useHistory } from "react-router-dom";
import { Back } from "../../assets/icons";
import { Formik, Form, Input } from "../../libs/_components/_ui/forms";
import { SaveButton, CancelButton } from "../../libs/_components/_ui/Buttons";
import * as Yup from "yup";
import AdminTourOperator from "../../_services/adminTourOperator.services";
import swal from 'sweetalert'
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
    margin-top: 15px;
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
  const StyledHeading=styled(Heading)` 
  width:241px;
  `
  

const AddTourOperator = () => {
    const history = useHistory();
    const [value, setValue] = useState('')
    const options = React.useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value)
    }
   
    return (
        <>
            <PrivateLayout>
                <StyledHeading onClick={() => history.goBack()}><Back />Legge til Turoperatør</StyledHeading>
                <Card>
                    <Card.Body>
                        <MainContainer>
                            <Formik
                                initialValues={{ operatorName: "", contactName: "", email: "",commissionPerOrder:"",
                                cancellationFee:"",userName:"",ifscCode:"", accountNo:"",country:""}}
                                validationSchema={Yup.object().shape({
                                    operatorName: Yup.string().trim().required("navn kreves"),
                                    contactName: Yup.string().trim().required("Kontaktnavn er påkrevd"),
                                    email: Yup.string()
                                        .email("Må være en gyldig e-postadresse")
                                        .max(100, "E-post må inneholde mindre enn 100 tegn")
                                        .required("Vennligst skriv inn gyldig e-post"),
                                    // Telephone: Yup.string().required("PhoneNumber is required"),
                                    commissionPerOrder:Yup.string().trim().required("commissionPerOrder kreves"),
                                    cancellationFee:Yup.string().trim().required("avbestillingsgebyr kreves"),
                                    accountNo:Yup.string().trim().required("AccountNo kreves"),
                                    userName: Yup.string().trim().required("UserName kreves"),
                                    ifscCode:Yup.string().trim().required("IfscCode kreves"),
                                    country:Yup.object()
                                    .shape({
                                      id: Yup.string()
                                    .required('Country kreves'),
                                  }),
                                    city: Yup.string().trim().required("City kreves"),
                                    postcode: Yup.string().trim().required("Postcode kreves"),
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
                                            "city": values.city,
                                            "zipCode": values.postcode,
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
                                            // console.log(" tour succes",user);
                                            //  localStorage.setItem("currentUser", JSON.stringify(user.data));
                                            //   currentUserSubject.next(user.data);
                                            // user && history.push("/");
                                            // window.location.reload();
                                            // alert("Password:" + user.data.password +"\n"+
                                            //        "Message:Tour Operator created"
                                            // )

                                            swal({
                                                title: "Suksess",
                                                text: user.data.message,
                                                icon: "success",
                                                button: "Ok",
                                               
                                              
                        
                                              }).then((result) => {
                                                console.log(result);
                                                if (result) {
                                                    history.goBack()
                                                } else {
                                                  // not clicked
                                                }
                                              });
                                        },
                                        (error) => {
                                            setSubmitting(false);
                                            if (error.response.status === 400) {
                                                console.log(error.response,"error");
                                            swal({
                                                title: "Det oppsto feil1",
                                                text: error.response.data.message,
                                                icon: "warning",
                                                // button: "cancel",
                                                showCancelButton: true,
                                                confirmButtonColor: 'red',
                                                 
                                              });
                                            }else{
                                                swal({
                                                    title: "Det oppsto feil",
                                                    text: error.response.data.message,
                                                    icon: "warning",
                                                    // button: "cancel",
                                                    showCancelButton: true,
                                                    confirmButtonColor: 'red',
                                                     
                                                  });
                                            }
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

                                                <p className="Extra-contact">Ekstra kontakt</p>
                                                <Input name="email" type="email" placeholder="E-post-ID" />

                                                <p className="p-details">Adressedetaljer</p>
                                                <StyledSlectCountry>
                                                <Select
                                                   options={options}
                                                    placeholder="Landsstat"
                                                    className="selectContry"
                                                    name="country"
                                                    onChange={(value) => setFieldValue('country', value)}
                                                    onBlur={()=> setFieldTouched('country', true)}
                                                    value={values.country}
                                                    />
                                                    <span class="sc-fFeiMQ gRyqJQ">{values.country==""?errors.country ? errors.country.id : '':""}</span>
                                                    
                                                    </StyledSlectCountry>
                                                {/* <Input name="Select Country" type="text" placeholder="Landsstat" /> */}
                                                <Input name="city" type="text" placeholder="City" />
                                                <Input name="postcode" type="text" placeholder="Post kode" />
                                            </Col>
                                            <Col sm="1"></Col>
                                            <Col sm="5">
                                                <p className="p-details">Betalingsrelaterte detaljer</p>
                                                <Input name="commissionPerOrder" type="text" placeholder="% Provisjon per bestilling" />
                                                <Input name="cancellationFee" type="text" placeholder="% kanselleringsgebyrer for tur" />

                                                <p className="p-details">Bank informasjon</p>
                                                <Input name="accountNo" type="text" placeholder="Kontonummer" />
                                                <Input name="userName" type="text" placeholder="Brukernavn" />
                                                <Input name="ifscCode" type="text" placeholder="Ifsc-kode" />
                                            </Col>
                                        </Row>
                                        <hr />
                                        <div className="mb-5 float-end">
                                            <SaveButton type="submit" disabled={isSubmitting} >LAGRE</SaveButton>
                                            <CancelButton onClick={() => history.goBack()}> AVBRYT</CancelButton>
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
export default AddTourOperator;