import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import PrivateLayout from "../../libs/_layouts/PrivateLayout";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Formik, Form, Input, StyledDiv, StyledLabel, PlaceHolderInput, BeautyDiv } from "../../libs/_components/_ui/forms";
import { ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Back } from "../../assets/icons";
import { SaveButton, CancelButton } from "../../libs/_components/_ui/Buttons";
import FormSelect from "../../libs/_components/_ui/admin/FormSelect";
import Select from 'react-select';
import { CountryDropdown } from "react-country-region-selector";
import countryList from 'react-select-country-list';
import AdminTourOperator from "../../_services/adminTourOperator.services";
import {
    Heading,
} from "../_styles/Common.style";
import { useHistory, useParams } from "react-router-dom";
const MainContainer = styled.div` 
  height: auto;
  width: 100%;
  
  
  input:focus ~ label,input:valid ~ label{
  top:1.70rem;
  font-size:15px;
  padding:0 5px 0 5px;
  background-color:#fff;

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
  .Extra-contact{
    
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 24px;
    color: #FD6D03;
    letter-spacing: 0.15px;
    text-align: left;
    display: block;
    position:relative;
    top:20px;
  }
  .p-details{
    display: block;
    text-align: left;
    
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.6);
    position:relative;
    top:20px;
    
  }
  .adress-details{
    color: rgba(0, 0, 0, 0.6);
    
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 20px;
    margin-top:20px;
    text-align:left;
  }
  .error{
   color:red;
   font-size: 13px;
   display: inline-block;
   text-align:left;
   display:flex;
   justify-content:left;
   border:none;

  }
  `;

const StyledSlectCountry = styled.div` 
  
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
.countryDropDn{
    padding:10px;
    width:100%;
}

`;


const EditTourOperator = () => {
    let { id } = useParams();
    const history = useHistory();
    const [value, setValue] = useState('')
    const options = React.useMemo(() => countryList().getData(), [])
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [Country, setCountry] = useState([])
    const [accNo, setAccNo] = useState([])
    const [iFscCode, setIfscCode] = useState([])
    const [userName, setUserName] = useState([])
    const [commissionPerOrder, setCommissionPerOrder] = useState([])
    const [cancellationCharge, setCancellationCharge] = useState([])
    const [City, setCity] = useState([])
    const [tourName, setTourName] = useState([])
    const [ZipCode, setZipCode] = useState([])

    useEffect(() => {
        AdminTourOperator.tourOPeratorGetOpById(id)
            .then((res) => {
                console.log("tour op", res.data);
                let a = [res.data]
                a.map((res) => {
                    console.log(res);
                    setName(res.tourDetails.name);
                    setEmail(res.tourDetails.email)
                    setTourName(res.tourDetails.tourName)
                    res.tourDetails.address.map((resp) => {
                        console.log(resp)
                        setCountry(resp.country)
                        setCity(resp.city)
                        setZipCode(resp.zipCode)

                    })
                    setAccNo(res.tourDetails.accountDetails.accountNo)
                    setIfscCode(res.tourDetails.accountDetails.ifscCode)
                    setUserName(res.tourDetails.accountDetails.userName)
                    setCommissionPerOrder(res.tourDetails.commissionPerBooking)
                    setCancellationCharge(res.tourDetails.tourCancelltionCharge)
                })
            })
            .catch((err) => {
                console.log(err);
            })

    }, [id]);
    console.log(Country)
    return (
        <>
            <PrivateLayout>
                <Heading onClick={() => history.goBack()}><Back />Redigere Turoperatør</Heading>
                <Card>
                    <Card.Body>
                        <MainContainer>
                            <Formik
                                initialValues={{
                                    name: "", Contactname: "", EmailId: "", Telephone: "", SelectCountry: "", City: "",
                                    Postcode: "", Commissionperorder: "", cancellationFeesForTrip: "", AccountNumber: "",
                                    Username: "", IfscCode: ""
                                }}
                                validationSchema={Yup.object().shape({
                                    // name: Yup.string().required("name is required"),
                                    // Contactname: Yup.string().required("Contactname is required"),
                                    // EmailId: Yup.string()
                                    //     .email("Must be a valid email address")
                                    //     .max(100, "Email must be less than 100 characters")
                                    //     .required("Please enter valid email"),
                                    // Telephone: Yup.string().required("PhoneNumber is required"),
                                    // SelectCountry: Yup.string().required("Country is required"),
                                    // City: Yup.string().required("City is required"),
                                    // Postcode: Yup.string().required("Postcode is required"),
                                    // Commissionperorder: Yup.string().required("Commissionperorder is required"),
                                    // cancellationFeesForTrip: Yup.string().required("cancellationFeesForTrip is required"),
                                    // AccountNumber: Yup.string().required("AccountNumber is required"),
                                    // Username: Yup.string().required("Username is required"),
                                    // IfscCode: Yup.string().required("IfscCode is required"),
                                })}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    values.name = name;
                                    values.Contactname = tourName;
                                    values.EmailId = email;
                                    values.Telephone = "123456";
                                    values.SelectCountry = Country;
                                    values.Postcode = ZipCode;
                                    values.Commissionperorder = commissionPerOrder;
                                    values.cancellationFeesForTrip = cancellationCharge;
                                    values.AccountNumber = accNo;
                                    values.Username = userName;
                                    values.IfscCode = iFscCode;
                                    values.City = City;
                                    let payload = {

                                        "operatorName": name,
                                        "contactName": tourName,
                                        "mobile": "123456",
                                        "address": [
                                            {
                                                "country": Country,
                                                "city": City,
                                                "zipCode": ZipCode,
                                            }
                                        ],
                                        "commissionPerOrder": commissionPerOrder,
                                        "cancellationFee": cancellationCharge,
                                        "accountNo": accNo,
                                        "userName": userName,
                                        "ifscCode": iFscCode

                                    }

                                    setSubmitting(true);
                                    AdminTourOperator.tourOPeratorUpdate(payload, id).then(
                                        (driver) => {
                                            console.log(driver)
                                            // localStorage.setItem("currentUser", JSON.stringify(user.data));
                                            // currentUserSubject.next(user.data);


                                        },
                                        (error) => {
                                            setSubmitting(false);
                                        }
                                    );
                                }}

                            >
                                {({ values, errors, touched, handleSubmit, isSubmitting, handleChange,
                                    handleBlur, }) => (
                                    <Form className="mx-auto" onSubmit={handleSubmit}>
                                        <Row>
                                            <Col sm="5">
                                                <StyledDiv>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        placeholder=" "
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required />
                                                    <StyledLabel className="labels">Navn på operatøren</StyledLabel>
                                                    <span className='error'><ErrorMessage name="name" /></span>
                                                </StyledDiv>
                                                <StyledDiv>
                                                    <input
                                                        name="Contactname"
                                                        type="text"
                                                        placeholder=" "
                                                        value={tourName}
                                                        onChange={(e) => setTourName(e.target.value)}
                                                        required />
                                                    <StyledLabel className="labels">Kontakt navn</StyledLabel>
                                                    <span className='error'><ErrorMessage name="Contactname" /></span>
                                                </StyledDiv>
                                                <StyledDiv>
                                                    <input name="Telephone" type="number" required />
                                                    <StyledLabel className="labels">kontakt telefon</StyledLabel>
                                                    <span className='error'><ErrorMessage name="Telephone" /></span>
                                                </StyledDiv>
                                                <p className="Extra-contact">Ekstra kontakt</p>
                                                <StyledDiv>
                                                    <input
                                                        name="EmailId"
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required />
                                                    <StyledLabel className="labels">Kontakt e-post-ID</StyledLabel>
                                                    <span className='error'><ErrorMessage name="EmailId" /></span>
                                                </StyledDiv>
                                                <p className="adress-details">AdresseDetaljer</p>
                                                <StyledSlectCountry>
                                                    <CountryDropdown
                                                        name="country"
                                                        label="Country"
                                                        value={Country}
                                                        onChange={(_, e) => { handleChange(e); setCountry(e.target.value) }}
                                                        onBlur={handleBlur}
                                                        className="countryDropDn"
                                                    />
                                                </StyledSlectCountry>
                                                <StyledDiv>
                                                    <input
                                                        name="City"
                                                        type="text"
                                                        value={City}
                                                        onChange={(e) => setCity(e.target.value)}
                                                        required />
                                                    <StyledLabel className="labels">City</StyledLabel>
                                                    <span className='error'><ErrorMessage name="City" /></span>
                                                </StyledDiv>
                                                <StyledDiv>
                                                    <input
                                                        name="Postcode"
                                                        type="text"
                                                        value={ZipCode}
                                                        onChange={(e) => setZipCode(e.target.value)}
                                                        required />
                                                    <StyledLabel className="labels">Post kode</StyledLabel>
                                                    <span className='error'><ErrorMessage name="Postcode" /></span>
                                                </StyledDiv>
                                            </Col>
                                            <Col sm="1"></Col>
                                            <Col sm="5">
                                                <p className="p-details">Betalingsrelaterte detaljer</p>
                                                <StyledDiv>
                                                    <input
                                                        name="Commissionperorder"
                                                        type="text"
                                                        value={commissionPerOrder}
                                                        onChange={(e) => setCommissionPerOrder(e.target.value)}
                                                        required />
                                                    <StyledLabel className="labels">% Provisjon per bestilling</StyledLabel>
                                                    <span className='error'><ErrorMessage name="Commissionperorder" /></span>
                                                </StyledDiv>
                                                <StyledDiv>
                                                    <input
                                                        name="cancellationFeesForTrip"
                                                        type="text"
                                                        value={cancellationCharge}
                                                        onChange={(e) => setCancellationCharge(e.target.value)}
                                                        required />
                                                    <StyledLabel className="labels">% kanselleringsgebyrer for tur</StyledLabel>
                                                    <span className='error'><ErrorMessage name="cancellationFeesForTrip" /></span>
                                                </StyledDiv>
                                                <p className="p-details">Bankinformasjon</p>
                                                <StyledDiv>
                                                    <input
                                                        name="AccountNumber"
                                                        type="number"
                                                        value={accNo}
                                                        onChange={(e) => setAccNo(e.target.value)}
                                                        required />
                                                    <StyledLabel className="labels">Kontonummer</StyledLabel>
                                                    <span className='error'><ErrorMessage name="AccountNumber" /></span>
                                                </StyledDiv>
                                                <StyledDiv>
                                                    <input
                                                        name="Username"
                                                        type="text"
                                                        value={userName}
                                                        onChange={(e) => setUserName(e.target.value)}
                                                        required />
                                                    <StyledLabel className="labels">Brukernavn</StyledLabel>
                                                    <span className='error'><ErrorMessage name="Username" /></span>
                                                </StyledDiv>
                                                <StyledDiv>
                                                    <input
                                                        name="IfscCode"
                                                        type="text"
                                                        value={iFscCode}
                                                        onChange={(e) => setIfscCode(e.target.value)}
                                                        required />
                                                    <StyledLabel className="labels">Ifsc-kode</StyledLabel>
                                                    <span className='error'><ErrorMessage name="IfscCode" /></span>
                                                </StyledDiv>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <div className="mb-5 float-end">
                                            <SaveButton type="submit">LARGE</SaveButton>
                                            <CancelButton> AVBRYT</CancelButton>
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
export default EditTourOperator;
