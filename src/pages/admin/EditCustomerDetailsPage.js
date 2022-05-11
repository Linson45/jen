import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../../libs/_layouts/PrivateLayout";
import { useHistory } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { ArrowLeftIcon } from "../../assets/icons.js";
import { Input, Form, Formik, StyledDiv, StyledLabel } from "../../libs/_components/_ui/forms";
import { ErrorMessage } from 'formik';
import FormSelect from "../../libs/_components/_ui/admin/FormSelect";
import { SaveButton, CancelButton } from "../../libs/_components/_ui/Buttons";
import AdminCustomer from "../../_services/adminCustomer.services";
import { useParams } from "react-router-dom";
// import Select from 'react-select'
import * as Yup from "yup";
import {
  Heading,
} from "./../_styles/Common.style";
const MainContainer = styled.div`
    height: auto;
    width: 100%;
    .card{
    margin-top:10px;
    /* margin-bottom: 10px; */
  }
  .card .card-body{
    box-shadow: 0px 4px 6px -3px rgba(0,0,0,0.75);
  }
  .error{
   color:red;
   font-size: 13px;
   display: inline-block;
   display:flex;
   justify-content:left;
   border:none;

  }
  .cNSCPW .error {
    border: none;
}
  input:focus ~ label,input:valid ~ label{
  top:1.70rem;
  font-size:15px;
  padding:0 5px 0 5px;
  background-color:#fff;

 }
 .dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
`;
const HeadingStyle = styled.h1` 

font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: rgba(0, 0, 0, 0.6);
letter-spacing: 0.25px;
text-align:left;
`;
const AddToBussection = styled.div` `;
const StyledLevel = styled.h1` 

font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #FD6D03;
text-align:left;
`;
const StyledWorkType = styled.div` 
  width:100%;
 max-width:440px;
border: 1px solid #E6E6E6;
box-sizing: border-box;
border-radius: 3.5px;
background:white;
padding:10px;
/* margin-bottom:10px; */
height:fit-content;

`;



const EditCustomerDetailsPage = () => {
  let { id } = useParams();
  console.log(id)
  const [option, setOption] = useState()
  const [name, setName] = useState([])
  const [Email, setEmail] = useState([])
  const [telephone, setTelephone] = useState([])
  const [city,setCity]= useState([])
  const [country,setCountry]= useState([])
  const [zipCode,setZipCode]= useState([])
  const history = useHistory();

  function handleCity(event) {
    setCity(event.target.value)
  }
  function handleCountry(event) {
    setCountry(event.target.value)
  }
  function handleZipCode(event) {
    setZipCode(event.target.value)
  }
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  useEffect(() => {
    AdminCustomer.getCustomerByIdForEdit(id)
      .then((res) => {
        console.log(res.data.data.customerInfo)
        res.data.data.customerInfo.map((resp) => {
          // console.log("resp",resp)
          setName(resp.name)
          setEmail(resp.email)
          setTelephone(resp.mobile)
        })

      })
      .catch((err) => {

      })

  }, [id])

  return (
    <>
      <PrivateLayout>
        <MainContainer>
          <Row>
            <Col md="6">
              <Heading onClick={() => history.push('/admin/customer')}><ArrowLeftIcon />&nbsp;&nbsp; Tilbake</Heading>
            </Col>
          </Row>
          <Card>
            <Card.Body>
              <Formik
                initialValues={{ CustomerName: "", Email: "", Telephone: "", city: "", country: "", zipCode: "" }}
                validationSchema={Yup.object().shape({
                  // CustomerName: Yup.string().required("Please enter CustomerName"),
                  // Email: Yup.string().required("Please enter Email"),
                  // Telephone: Yup.string().required("Please enter HourlyRate"),
                  // Address: Yup.string().required("Please enter Address"),
                  // Type: Yup.string().required("Please enter Type"),

                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  values.CustomerName = name;
                  values.Email = Email;
                  values.Telephone = telephone;
                  values.city = city;
                  values.country = country;
                  values.zipCode = zipCode;
                  let payload = {

                    "customerName": name,
                    "email": Email,
                    "mobile": [
                      {
                        "number": telephone
                      },
                      {
                        "number": telephone
                      }
                    ],
                    "address": [
                      {
                        "city": city ,
                        "country":country ,
                        "zipCode": zipCode
                      }
                    ]

                  }
                  setSubmitting(true);
                  AdminCustomer.customerEdit(payload, id).then(
                    (customer) => {
                      console.log(customer)
                    }
                  )
                }}
              >
                {({ values, errors, touched, handleSubmit, isSubmitting }) => (
                  <Form onSubmit={(e) => handleSubmit(e)} className="mx-auto">
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col sm="9">
                            <StyledDiv>
                              <input
                                name="CustomerName"
                                type="text"
                                placeholder=" "
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required />
                              <StyledLabel className="CustomerName">Kundenavn</StyledLabel>
                              <span className='error'><ErrorMessage name="CustomerName" /></span>
                            </StyledDiv>
                          </Col>
                          <Col sm="9">
                            <StyledDiv>
                              <input
                                name="Email"
                                type="email"
                                placeholder=" "
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                              <StyledLabel className="CustomerName">E-post</StyledLabel>
                              <span className='error'><ErrorMessage name="Email" /></span>
                            </StyledDiv>
                          </Col>
                          <Col sm="9">
                            <StyledDiv>
                              <input
                                name="Telephone"
                                type="number"
                                placeholder=" "
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                                required />
                              <StyledLabel className="CustomerName">Telefon</StyledLabel>
                              <span className='error'><ErrorMessage name="Telephone" /></span>
                            </StyledDiv>
                          </Col>
                        </Row>

                      </Col>
                      <Col md={6}>
                        <HeadingStyle>Adresse</HeadingStyle>
                        <Row>
                          <Col sm="4">
                            <FormSelect assignedDriver={true} />
                          </Col>
                          <Col sm="8" style={{ marginTop: "-20px" }}>
                            <StyledDiv>
                              <input
                                name="city"
                                type="text"
                                placeholder=" "
                                value={city}
                                onChange={handleCity}
                                required
                              />
                              <StyledLabel className="CustomerName">City</StyledLabel>
                              <span className='error'><ErrorMessage name="city" /></span>
                            </StyledDiv>
                            <StyledDiv>
                              <input 
                              name="country"
                               type="text" 
                               placeholder=" "
                               value={country}
                                onChange={handleCountry}
                                required />
                              <StyledLabel className="CustomerName">state</StyledLabel>
                              <span className='error'><ErrorMessage name="state" /></span>
                            </StyledDiv>
                            <StyledDiv>
                              <input 
                              name="zipCode" 
                              type="text" 
                              placeholder=" " 
                              value={zipCode}
                                onChange={handleZipCode}
                              required />
                              <StyledLabel className="CustomerName">ZipCode</StyledLabel>
                              <span className='error'><ErrorMessage name="zipcode" /></span>
                            </StyledDiv>
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "30px" }}>
                          <StyledLevel>Ekstra kontakt</StyledLevel>
                        </Row>
                      </Col>

                    </Row>
                    <hr />
                    <div className=" float-end">
                      <SaveButton>LARGE</SaveButton>
                      <CancelButton> AVBRYT</CancelButton>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </MainContainer>
      </PrivateLayout>

    </>
  )
}
export default EditCustomerDetailsPage;