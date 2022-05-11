import React, { useEffect, useRef, useState } from "react";
// import { Row, Col, ListGroup, Card, Carousel, Button, Form, FloatingLabel } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";
import styled, { css } from "styled-components";
import { Input, Form, Formik, StyledDiv, Radio, TextAraa } from "../libs/_components/_ui/forms";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import PrivateLayout from "../libs/_layouts/PrivateLayout";
import { currentUserSubject } from "../_services/sessionStorage.services";
import { ErrorMessage, Field } from 'formik';
import {
  ArrowLeftIcon
} from "../assets/icons.js";
import Upload from "../assets/svg/cloud_upload.svg";
import TourOPeratorBus from "../_services/tourOperatorBus.services";
import { SaveButton, CancelButton } from "../libs/_components/_ui/Buttons";
import {
  Heading,
} from "./_styles/Common.style";
import  swal from 'sweetalert'
import { DeleteOrange } from '../assets/icons'

const MainContainer = styled.div`
height: auto;
width: 100%;
.card{
margin-top:20px;
border:none;
padding:10px;
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
img{
  position:relative;
  top:18px;
 }
.errormessage{
  color:red;
}
.TextDesign{
  width:421px;
  height:164px;
 padding-left:15px;
 padding-top:15px;
 /* border: 1px solid rgba(0, 0, 0, 0.4); */
 box-sizing: border-box;
 border-radius:5px;
 color: rgba(33, 33, 33, 0.87);
 font-size: 16px;
 outline: none;
 display:flex;
 justify-content:left;
 &:focus {
         border-style:1px ridge;
         border-color:#6200EE;
 }
}
.error{
   color:red;
   font-size: 13px;
   position:relative;
   right:230px;
   border:none;

  }
  
    .swal-button--success {
    background-color: red;
    color: #fff;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 24px;
    margin: 0;
    cursor: pointer;
}

  
 
 

`;
const Fileupload = styled.div` 
 background: rgba(253, 109, 3, 0.04);
  border: 1px dashed #FD6D03;
  box-sizing: border-box;
  border-radius: 10px;
  width: 148px;
  height: 93px;
  margin-top:20px;
  input[type="file"]{
   margin:20px;
    background-color: transparent;
    opacity: 0;
    position: relative;
    top: -31px;
    left: -21px;
    cursor: pointer;
  
}
.label{
letter-spacing: 0.04em;
text-transform: capitalize;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
margin-top: 13px;
color: #000000;
position: absolute;
left: 28px;
top:40px;
}
`;
const RadioButtons = styled.div` 
margin-top:22px;
display: flex;
align-items: center;
input[type="radio"] {
    -webkit-appearance: none; 
     -moz-appearance: none;
    appearance: none;
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    background-color: white;
    background-clip: content-box;
    padding: 5px;
    
    border:2px solid rgba(0, 0, 0, 0.6);
    &:checked {
      background-color: #FD6D03 ;
      border: 3px solid #FD6D03;
    }
  
  }
  span{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #000000;
    margin-left: 8px;
    margin-right: 20px;
    margin-top:-10px;
  }
`;
const CheckBox = styled.div` 
text-align:left;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

input[type="checkbox"] {
  -webkit-appearance: none;
    display: inline-block;
    width:24px;
    height: 24px;
    padding:6px;
    background: transparent;
    border: 2px solid rgba(0, 0, 0, 0.6);
    top:0;
    bottom:0;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
  &:checked {
  background:#FD6D03 ;
  border: 1px solid #FD6D03;
  padding:6px;
  width: 24px;
    height: 24px;
  &:after {
    content: "✓";
    color: white;
    font-size: 12px;
    position: relative;
    top: -9px;
    font-weight: 800;
    float:right;
    left:1px;
  }
}
     
  
  }

 
`;
const HeadingStyle = styled.h1` 
/* font-family: Roboto; */
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: rgba(0, 0, 0, 0.6);
letter-spacing: 0.25px;
text-align:left;
margin-top:8px ;
`;
const StyledLabel = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000;
letter-spacing: 0.15px;
margin-left:14px;
margin-right: 7px;
position:relative;
top:-6px;
left:-7px;

`;

const ImageSection = styled.div` 
  margin-top:37px;
  margin-bottom:10px;
  position: relative;
  width:100%;
  color: #ffffff;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 0px 2px 6px #0000000a;
  height: calc(100% - 45px);
  min-height:250px;
  overflow:hidden;
 
img{
 
    /* position:relative;
    top:-1px;
    left:-22px;
    margin-left:-8px;
    padding-left:7px;
    width:140%;
    margin-top:-13px;
    margin-bottom:-20px; */
   
}

`;
const ImageDiv = styled.span`
   width:300px;
   height:300px;
   background-color:white;
   border-radius:70px;
   padding: 6px;
   position: relative;
    left: -35px;
    top:-10px;


`;
const Overflowscroll = styled.div`
  display:block;
  height:280px;
  overflow:hidden;
  overflow-y:scroll;
  img{
    padding:7px;
  }

  `;
const Styledfuel = styled.span` 
   font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000;
position:relative;
/* left:10px; */
  `;
const StyledInput = styled(Row)` 
  margin-top:-10px;
  `;
const StyledHeading = styled(Heading)` 
 position:relative;
 top:-6px;
 left:0px;
 margin-top:-17px;
  `;

function ManageBusPage() {
  const { push } = useHistory();
  const scrollRef = useRef(null)
  const [ischecked, setIsChecked] = useState(false)
  const [isairConditioning, setIsairConditioning] = useState(false)
  const [ischargingVolt, setIschargingVolt] = useState(false)
  const [iskitchen, setIskitchen] = useState(false)
  const [iswc, setIswc] = useState(false)
  const [multipleFile, setMultipleFile] = useState([])
  const [fuelPetrol, setFuelPetrol] = useState("")
  const [busNumber, setBusNumber] = useState()
  const [noOfSeats, setNoOfSeats] = useState()
  const [basePrise, setBasePrice] = useState()
  const [hourlyRate, setHourlyRate] = useState()
  const [description, setDescription] = useState()
  const [progress, setProgress] = useState(0)
  const [deletedBusImages, setDeletedBusImages] = useState([])
  const [deletedImages, setDeletedImages] = useState([])
  const [deleteUploadFile, setDeleteUploadFile] = useState([])
  const [multiImages, setMultiImages] = useState([])
  const handleChange = (e) => {
    let ischeckboxChecked = e.target.checked ? "true" : "false";
    setIsChecked(ischeckboxChecked)
  }
  const handleonChange = (e) => {
    let ischeckboxChecked = e.target.checked ? "true" : "false";
    setIsairConditioning(ischeckboxChecked)
  }
  const handleVoltChange = (e) => {
    let ischeckboxChecked = e.target.checked ? "true" : "false";
    setIschargingVolt(ischeckboxChecked)
  }
  const handleKitchenChange = (e) => {
    let ischeckboxChecked = e.target.checked ? "true" : "false";
    setIskitchen(ischeckboxChecked)
  }
  const handleWcChange = (e) => {
    let ischeckboxChecked = e.target.checked ? "true" : "false";
    setIswc(ischeckboxChecked)
  }
  const imageArray = (source) => {

    return source.map((photo) => {
      return <><img src={photo.path} key={photo} width="100px" height="90px" />
        <ImageDiv onClick={() => handleClick(photo)}><DeleteOrange /></ImageDiv>
      </>
    })

  }
  const imageArrayDelete = (source) => {
    return source.map((photo) => {
      return <><img src={photo} key={photo} width="100px" height="90px" />
        <ImageDiv onClick={() => handleClickOnClick(photo)}><DeleteOrange /></ImageDiv>
      </>
    })

  }
  const handleClickOnClick = (id) => {
    // console.log(id.path)
    const datas = multipleFile.findIndex((elem) => {
      console.log(elem)
      return elem === id
    })
    let imagess = multipleFile.splice(datas, 1)
    setDeleteUploadFile(imagess);
  }
  const handleClick = (id) => {
    console.log(id.path)

    setDeletedBusImages([id.path])

    const data = deletedImages.findIndex((elem) => {
      console.log(elem)
      return elem.id !== id.id
    })

    let images = deletedImages.splice(data, 1)

    setDeletedImages(images);

  }
  const multipleFileSelect = (e) => {
    console.log(e.target.files.length > 0 && e.target.files[0].type)
    // if(e.target.files.length>0&&e.target.files[0].type !==".png, .jpg, .jpeg"){
    //   alert("only image file")
    // }
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))

      setMultipleFile((img) => img.concat(fileArray))
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file)
      )
    }
    // const formdata = new FormData();
    // for (let i = 0; i < multipleFile.length; i++) {
    //     formdata.append("files", multipleFile[i])
    // }

    setMultiImages(e.target.files)
  }
  const handlePetrol = (e) => {
    let isPetrolChecked = e.target.value;
    setFuelPetrol(isPetrolChecked)
  }
  const handleBus = (e) => {
    let isDieselChecked = e.target.value;
    setBusNumber(isDieselChecked)
  }
  const handleNumberOfSeat = (e) => {
    let isDieselChecked = e.target.value;
    setNoOfSeats(isDieselChecked)
  }
  const handleBasePrice = (e) => {
    let isDieselChecked = e.target.value;
    setBasePrice(isDieselChecked)
  }
  const handleHourlyRate = (e) => {
    let isDieselChecked = e.target.value;
    setHourlyRate(isDieselChecked)
  }

  const handleDescription = (e) => {
    let isDieselChecked = e.target.value;
    setDescription(isDieselChecked)
  }
  const handleUpload = (progressLoad) => {
    //  const[loaded,total]=progressLoad
    //  let percent=Math.floor((loaded*100)/total)
    // console.log(`${loaded}kb of ${total}kb | ${percent}%`)
  }
  //  console.log(multipleFile)

  useEffect(() => {

  }, []);



  return (
    <>
   
      <PrivateLayout>
        <MainContainer>
          <StyledHeading onClick={() => push('/tour-operator/bus')}><ArrowLeftIcon />&nbsp;&nbsp; Legg til buss</StyledHeading>
          <Card>
            <Card.Body>
              <Formik
                initialValues={{
                  busNumber: "", noOfSeats: "", basePrice: "", hourlyRate: "", description: "",
                  wifi: "", airConditioning: "", chargingVolt: "", kitchen: "", wc: "", busImages: [],
                  fuelType: ""
                }}
                // enableReinitialize={true}
                validationSchema={Yup.object().shape({
                  busNumber: Yup.string().required("Vennligst skriv inn bussnummer").nullable(),
                  noOfSeats: Yup.string()
                  .min(1)
                  .max(999).required("skriv inn antall seter"),
                  basePrice: Yup.string()
                  .min(1)
                  .max(999).required("Vennligst skriv inn grunnpris"),
                  hourlyRate: Yup.string()
                  .min(1)
                  .max(999).required("Vennligst skriv inn timepris"),
                  fuelType: Yup.string().required("FuelType er påkrevd")


                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  values.wifi = ischecked;
                  values.airConditioning = isairConditioning;
                  values.chargingVolt = ischargingVolt;
                  values.kitchen = iskitchen;
                  values.wc = iswc;
                  values.busImages = multipleFile;
                  values.fuelType = fuelPetrol;
                  values.busNumber = busNumber;
                  var formData = new FormData();
                  formData.append('busDetails', JSON.stringify({
                    'name': "Nuo Travel",
                    'busNumber': busNumber,
                    'category': 'VIP',
                    'noOfSeats': noOfSeats,
                    'basePrice': basePrise,
                    'hourlyRate': hourlyRate,
                    'fuelType': fuelPetrol,
                    'description': description,
                    'features': {
                      'wifi': ischecked,
                      'airConditioning': isairConditioning,
                      'volts220': ischargingVolt,
                      'kitchen': iskitchen,
                      'wc': iswc
                    }
                  }));
                  for (let i = 0; i < multiImages.length; i++) {
                    formData.append("busImages", multiImages[i]);
                }
                  // formData.append("busImages", multiImages);
                  console.log(values)
                  setSubmitting(true);
                  TourOPeratorBus.tourOPeratorBus(formData).then(
                    (bus) => {
                      console.log(bus)
                      setSubmitting(false);
                      // localStorage.setItem("currentuser", JSON.stringify(user.data));
                      //   currentUserSubject.next(user.data);
                      // bus && push("/tour-operator/bus");
                      // window.location.reload();
                      swal({
                        title: "Suksess",
                        text: bus.data.message,
                        icon: "success",
                        button: "Ok",
                       
                      

                      }).then((result) => {
                        console.log(result);
                        if (result) {
                          push('/tour-operator/bus')
                        } else {
                          // not clicked
                        }
                      });
                    },
                    (error) => {
                      console.log(error.response.status)
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

                      }else{
                        swal({
                          title: "Det oppsto feil",
                          text: error.response.message,
                          icon: "warning",
                          // button: "cancel",
                          showCancelButton: true,
                          confirmButtonColor: 'red',
                           
                        });
                      }

                      setSubmitting(false);

                    }
                  )

                }}
              >
                {({ values, errors, touched, meta, handleSubmit, isSubmitting }) => (

                  <Form className="mx-auto" onSubmit={handleSubmit}>

                    <Row>
                      <Col md={5}>
                        <StyledInput>
                          <StyledDiv>
                            <Col sm="6">
                              <Input
                                name="busNumber"
                                type="text"
                                placeholder="BS-1001"
                                value={busNumber}
                                onChange={handleBus}
                              />
                            </Col>
                          </StyledDiv>
                          <StyledDiv>
                            <Col sm="11">
                              <Input
                                name="noOfSeats"
                                type="number"
                                placeholder="Antall seter"
                                value={noOfSeats}
                                onChange={handleNumberOfSeat}
                              />
                            </Col>
                          </StyledDiv>
                          <StyledDiv>
                            <Col sm={11}>
                              <Input
                                name="basePrice"
                                type="number"
                                placeholder="Grunnpris"
                                value={basePrise}
                                onChange={handleBasePrice}
                              />
                            </Col>
                          </StyledDiv>
                          <StyledDiv>
                            <Col sm={11}>
                              <Input
                                name="hourlyRate"
                                type="number"
                                placeholder="Timegebyr"
                                value={hourlyRate}
                                onChange={handleHourlyRate}
                              />
                            </Col>
                          </StyledDiv>
                          {/* <StyledDiv> */}
                          <Col>
                            <textarea
                              className="TextDesign"
                              name="description"
                              type="text"
                              placeholder="Beskrivelser:" id="txtArea"
                              rows="8"
                              cols="51"
                              inputProps={
                                { maxLength: 1000 }
                              }

                              style={{ marginTop: "14px" }}
                              value={description}
                              onChange={handleDescription}
                            />
                          </Col>
                          {/* </StyledDiv> */}
                        </StyledInput>
                      </Col>
                      <Col sm="1"></Col>


                      <Col md="6">

                        <HeadingStyle>Drivstoff type:</HeadingStyle>
                        <RadioButtons>
                          <StyledDiv>
                            <input
                              type="radio"
                              id="1"
                              name="fuelType"
                              // defaultChecked
                              checked={fuelPetrol === "petrol"}
                              value="petrol"
                              onChange={(e) => handlePetrol(e)}

                            />
                          </StyledDiv>
                          <Styledfuel for="1">Bensin</Styledfuel>

                          <StyledDiv>
                            <input
                              type="radio"
                              id="2"
                              name="fuelType"
                              checked={fuelPetrol === "diesel"}
                              value="diesel"
                              onChange={(e) => handlePetrol(e)}

                            />
                          </StyledDiv>

                          <Styledfuel for="2">Diesel</Styledfuel>
                        </RadioButtons>
                        <span className='error'><ErrorMessage name="fuelType" /></span>
                        <Row style={{ marginTop: "20px" }}>
                          <Col>
                            <HeadingStyle>Funksjoner:</HeadingStyle>
                            <CheckBox>
                              <input
                                type="checkbox"
                                id="1"
                                name="wifi"
                                // defaultChecked
                                value={ischecked}
                                onChange={handleChange}
                              />
                              <StyledLabel for="1">Wifi</StyledLabel>
                              <input
                                type="checkbox"
                                id="2"
                                name="airConditioning"
                                value={isairConditioning}
                                onChange={handleonChange}

                              />
                              <StyledLabel for="2">Klimaanlegg</StyledLabel>
                              <input
                                type="checkbox"
                                id="3"
                                name="chargingVolt"
                                value={ischecked}
                                onChange={handleChange}
                              />
                              <StyledLabel for="3">16 Seter</StyledLabel>
                              <input
                                type="checkbox"
                                id="4"
                                name="chargingVolt"
                                value={ischargingVolt}
                                onChange={handleVoltChange}
                              />
                              <StyledLabel for="4">220 Volt</StyledLabel>
                              <input
                                type="checkbox"
                                id="5"
                                name="kitchen"
                                value={iskitchen}
                                onChange={handleKitchenChange}
                              />
                              <StyledLabel for="5">Kjøkken</StyledLabel>
                              <input
                                type="checkbox"
                                id="6"
                                name="wc"
                                value={iswc}
                                onChange={handleWcChange}
                              />
                              <StyledLabel for="6">WC</StyledLabel>

                            </CheckBox>
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "25px" }}>
                          <Col sm={3}>
                            <HeadingStyle style={{ marginTop: "0px" }}>Last opp bilde:</HeadingStyle>
                            <Fileupload>
                              <img src={Upload} alt="upload" />
                              <label for="files" className="label">Last opp bilde</label>
                              <input
                                type="file"
                                multiple
                                accept=".png, .jpg, .jpeg"
                                // accept="image/*"
                                // value={multipleFile}
                                id="files"
                                name="busImages"
                                onChange={(e) => multipleFileSelect(e)}
                              />
                            </Fileupload>
                          </Col>
                          <Col sm="9">
                            <ImageSection ref={scrollRef}>
                              <Row>
                                <Overflowscroll>
                                  {imageArray(deletedImages)}
                                  {multipleFile.length > 0 ? imageArrayDelete(multipleFile) : null}
                                </Overflowscroll>
                              </Row>
                            </ImageSection>

                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <hr />
                    <div className="mb-5 float-end">
                      <SaveButton type="submit"  >LARGE</SaveButton>
                      <CancelButton onClick={() => push('/tour-operator/bus')}> AVBRYT</CancelButton>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </MainContainer>
      </PrivateLayout >
    </>
  );
}
export default ManageBusPage;
