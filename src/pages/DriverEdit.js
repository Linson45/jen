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
import { Formik, Form, Input, StyledLabel } from "../libs/_components/_ui/forms";
import * as Yup from "yup";
import { SaveButton, CancelButton } from "../libs/_components/_ui/Buttons";
import { useParams } from "react-router-dom";
import { values } from "lodash";
import swal from 'sweetalert'

const MainContainer = styled.div` 
  width: 100%;
  height: auto;
  /* padding: 0px 2px; */
     svg{
          cursor:pointer;
         
 }
 input:focus ~ label,input:valid ~ label{
  top:0.1rem;
  font-size:15px;
  padding:0 5px 0 5px;
  background-color:#fff;

 }
 label{
    transform:translateY(-50%);
    transition: 0.2s ease all;
    z-index:999;
    pointer-events: none;
    position:absolute;
    top:26px;
    left:15px;
    font-style: normal;
    letter-spacing: 0.15px;
font-weight: 400;
font-size: 16px;
line-height: 24px;

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

    `;
    const AddToBussection = styled.div` 
    margin-top:5px;
    position:relative;
    right:20px;
    top:-10px;
    `;


const ManageDriverPage = () => {
    let { id } = useParams();
    console.log(id)
    const history = useHistory();
    const [driverId, setDriverId] = useState([])
    const [driverName, setDriverName] = useState([])
    const [driverEmail, setDriverEmail] = useState([])
    const [driverPhoneNo, setDriverPhoneNo] = useState([])
    const [multipleFile,setMultipleFile]=useState([])
    // const [driverNumber, setDriverNumber] = useState()
    // const [driverName, setDriverName] = useState()
    // const [driverEmail, setDriverEmail] = useState()
    // const [phoneNo, setPhoneNo] = useState()

    // const handleDriver = (e) => {
    //     setDriverNumber(e.target.value)
    // }
    // const handleDriverName = (e) => {
    //     setDriverName(e.target.value)
    // }
    // const handleDriverEmail = (e) => {
    //     setDriverEmail(e.target.value)
    // }
    // const handlePhoneNo = (e) => {
    //     setPhoneNo(e.target.value)
    // }
    useEffect(() => {
        TourOperatorDriver.tourOPeratorGetDriverById(id)
            .then((res) => {
                console.log(res.data.data.driverInfo)
                let data = (res.data.data.driverInfo)
                data.map((res) => {
                    setDriverId(res.driverNumber)
                    setDriverEmail(res.email)
                    setDriverName(res.name)
                    setDriverPhoneNo(res.mobile)
                    console.log(res)
                    // res.phoneNo.map((value) => {
                    //     console.log(value.number)
                    //     setDriverPhoneNo(value.number)
                    // })

                })

            })
    }, [id])
    return (
        <>
            <PrivateLayout>
                <Heading onClick={() => history.push("/tour-operator/driver")}><AddToBussection><Back />Sjåfør</AddToBussection></Heading>
                <Card  style={{ height: "570px" }}>
                    <Card.Body>
                        <MainContainer>
                            <Formik
                                initialValues={{ firstName: "", email: "", number: "", driverImages: [] }}
                                validationSchema={Yup.object().shape({
                                    // id: Yup.string().required("id is required"),
                                    // firstName: Yup.string().required("name is required"),
                                    // email: Yup.string()
                                    //   .email("Must be a valid email address")
                                    //   .max(100, "Email must be less than 100 characters")
                                    //   .required("Please enter valid email"),
                                    // phoneNo: Yup.string().required("PhoneNumber is required"),
                                })}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    console.log(values)
                                    values.firstName = driverName;
                                    values.email = driverEmail;
                                    values.number = driverPhoneNo;
                                    values.driverImages =multipleFile ;
                                    var formData = new FormData();
                                    formData.append('driverDetails', JSON.stringify({
                                        'firstName': driverName,
                                        "phoneNo": [
                                            {
                                                "number": driverPhoneNo,
                                            }
                                        ],
                                        'email': driverEmail,
                                    }));
                                    
                                    // formData.append('driverImages', []);
                                    setSubmitting(true);
                                    TourOperatorDriver.tourOPeratorDriverEdit(formData,id).then(
                                        (driver) => {
                                            console.log(driver)
                                            // localStorage.setItem("currentUser", JSON.stringify(user.data));
                                            // currentUserSubject.next(user.data);
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
                                    <Form onSubmit={(e)=>handleSubmit(e)} className="mx-auto" >

                                        <Col sm="4">
                                            <input
                                                name="id"
                                                type="text"
                                                required
                                                value={driverId}
                                                onChange={(e) => setDriverId(e.target.value)}
                                                disabled
                                            />
                                            {/* <StyledLabel className="labels">D-1001</StyledLabel> */}
                                        </Col>
                                        <Col sm="6" >
                                            <input
                                                name="name"
                                                type="text"
                                                required
                                                value={driverName}
                                                onChange={(e) => setDriverName(e.target.value)}
                                            />
                                            <StyledLabel className="labels">Drivernavn</StyledLabel>
                                        </Col>
                                        <Col sm="6">
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                value={driverEmail}
                                                onChange={(e) => setDriverEmail(e.target.value)}
                                                disabled
                                            />
                                            {/* <StyledLabel className="labels">Epost id</StyledLabel> */}
                                        </Col>
                                        <Col sm="6">
                                            <input
                                                name="phoneNo"
                                                type="number"
                                                required
                                                value={driverPhoneNo}
                                                onChange={(e) => setDriverPhoneNo(e.target.value)}
                                                disabled
                                            />
                                            {/* <StyledLabel className="labels">Telefon</StyledLabel> */}
                                        </Col>
                                        <br /><br />

                                        <hr />
                                        <div className="mb-5 float-end">
                                            <SaveButton type="submit">LARGE</SaveButton>
                                            <CancelButton onClick={() => history.push('/tour-operator/driver')}> AVBRYT</CancelButton>
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