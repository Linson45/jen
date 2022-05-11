import React, { useEffect, useState, useRef, useContext } from "react";
// import { Row, Col, ListGroup, Card, Carousel, Button, Form, FloatingLabel } from "react-bootstrap";
import { Row, Col, ListGroup, Card, Carousel, Button, FloatingLabel } from "react-bootstrap";
import styled, { css } from "styled-components";
import { Input, Form, Formik, StyledDiv, StyledLabel, EditInput } from "../libs/_components/_ui/forms";
import { ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PrivateLayout from "../libs/_layouts/PrivateLayout";
import {
    ArrowLeftIcon
} from "../assets/icons.js";
import { DeleteOrange } from '../assets/icons'
import Upload from "../assets/svg/cloud_upload.svg";
import Bus from "../assets/bus.png";
import Delete from "../assets/svg/delete.svg";
import TourOPeratorBus from "../_services/tourOperatorBus.services";
import { SaveButton, CancelButton } from "../libs/_components/_ui/Buttons";
import { useParams } from "react-router-dom";
import swal from 'sweetalert'


import {
    Heading,
} from "./_styles/Common.style";

const MainContainer = styled.div`
  /* margin-top: 45px; */
  height: auto;
  width: 100%;
  /* margin-top:10px;
  margin-left:-30px; */
  .card{
    margin-bottom: 10px;
    border:none;
    padding:10px;
    /* margin-top:20px;
    margin-left:-20px; */
  }
  .card-body .form-control {
    background-color: #FFF;
  }
  form p{
    color: rgba(0, 0, 0, 0.6);
    margin:0;
    font-size:12px
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
  .col input[type="radio"]:checked {
    background-color: #FD6D03 ;
    border:2px solid #FD6D03 ;
    box-shadow: none;
   
}
.col input[type="checkbox"]:checked {
  /* background-color: #FD6D03 ;
  border: none;
  box-shadow: none; */
}

.form-check-style{
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 24px;
color: #000000;
letter-spacing: 0.15px;
}

img{
  position:relative;
  top:16px;
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
  top:1.10rem;
  font-size:15px;
  padding:0 5px 0 5px;
  background-color:#fff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(33, 33, 33, 0.87)
       

 }
 input:not([type="radio"]){
     width:418px;
     height:54px;
     margin-top:18px;
}


 textarea:focus ~ label,textarea:valid ~ label{
  top:1.70rem;
  font-size:15px;
  padding:0 5px 0 5px;
  background-color:#fff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(33, 33, 33, 0.87)

 }
 .styledTextArea{
    /* padding:px; */
    width:421px;
    height:164px;
    padding-left:10px;
    padding-top:14px;
     /* font-size: 16px;
     letter-spacing: 0.15px;
     line-height: 24px;
     color: rgba(33, 33, 33, 0.87);
     width:100%; */
     border: 1px solid rgba(0, 0, 0, 0.4);
     box-sizing: border-box;
     border-radius: 5px;
    
  }
 .labels{
    transform:translateY(-50%);
    transition: 0.2s ease all;
    z-index:999;
    pointer-events: none;
    position:absolute;
    top:45px;
    left:25px;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.15px;
color: rgba(33, 33, 33, 0.87);
 }
 .textArealabels{
    transform:translateY(-50%);
    transition: 0.2s ease all;
    z-index:999;
    pointer-events: none;
    position:absolute;
    top:40px;
    left:25px;

 }

 

`;
const Fileupload = styled.div` 
 background: rgba(253, 109, 3, 0.04);
  border: 1px dashed #FD6D03;
  box-sizing: border-box;
  border-radius: 10px;
  width: 148px;
  height: 93px;
  margin-top:25px;
  /* display:flex; */
  input[type="file"]{
   margin:20px;
    background-color: transparent;
    opacity: 0;
    position: relative;
    top: -7px;
    left: -10px;
    cursor: pointer;
  
}
.label{
letter-spacing: 0.04em;
text-transform: capitalize;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
margin-top: 10px;
color:#000000;
position: absolute;
left: 28px;
top:40px;
}
 /* img{
     position:relative;
   top:16px;
  left:55px;

 } */
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
    /* -webkit-appearance: none; 
     -moz-appearance: none;
    appearance: none;
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    background-color: white;
    background-clip: content-box;
    padding: 2px;
    border: 2px solid rgba(0, 0, 0, 0.6);
    &:checked {
      background-color: #FD6D03 ;
      border: 3px solid #FD6D03;
    } */
  
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
  }
`;
const CheckBox = styled.div` 
text-align:left;
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
     
    /* -webkit-appearance: none;
    display: inline-block;
    width: 24px;
    height:24px;
    padding:6px;
    background: transparent;
    border: 2px solid rgba(0, 0, 0, 0.6);
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
    top: -12px;
    font-weight: 800;
    float:right;
    left:4px;
  }
} */
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
margin-top:10px;
`;
const ImageSection = styled.div` 
  margin-top:37px;
  /* margin-bottom:10px; */
  position: relative;
  width:100%;
  color: #ffffff;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 0px 2px 6px #0000000a;
  height: calc(100% - 45px);
  min-height:250px;
  overflow:hidden;
  margin-left:30px;

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
    left: -40px;
    top:-20px;


`;



const LabelStyle = styled.span`
font-style: normal;
font-weight: normal;
font-size: 16px;
color: #000000;
letter-spacing: 0.15px;
line-height: 24px;
margin-left:10px;
margin-right:32px;
position:relative;
top:-7px;

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

  `;
const StyledHeading = styled(Heading)` 
  position:relative;
  top: -25px;
  left: -1px;
  `;

function ManageBusPage() {
    let { id } = useParams();
    console.log(id)
    const [userData, setUserData] = useState({});
    const { push } = useHistory();
    const scrollRef = useRef(null)
    const [ischecked, setIsChecked] = useState(false)
    const [isairConditioning, setIsairConditioning] = useState(false)
    const [ischargingVolt, setIschargingVolt] = useState(false)
    const [iskitchen, setIskitchen] = useState(false)
    const [iswc, setIswc] = useState(false)
    const [multipleFile, setMultipleFile] = useState([])
    // const [fuelPetrol, setFuelPetrol] = useState("")
    const [busNumber, setBusNumber] = useState()
    // const [noOfSeats, setNoOfSeats] = useState()
    // const [basePrise, setBasePrice] = useState()
    const [hourlyRate, setHourlyRate] = useState([])
    const [description, setDescription] = useState([])
    const [deletedBusImages, setDeletedBusImages] = useState([])
    const [editValue, setEditValue] = useState([])
    const [baseValue, setBaseValue] = useState([])
    const [fuelType, setFuelType] = useState()
    const [WifiChecked, setWifiChecked] = useState(false)
    const [airConditioning, setAirConditioning] = useState([])
    const [kitchen, setKitchen] = useState([])
    const [volts220, setVolts220] = useState([])
    const [wc, setWc] = useState([])
    const [deletedImages, setDeletedImages] = useState([])
    const [deleteUploadFile, setDeleteUploadFile] = useState([])
    const [multiImages, setMultiImages] = useState([])

    function splitImagePath(path) {
        console.log("path param", path);

        let idpath = path;
        let p = path.split('/busImage-', 3);
        console.log("path", p[1]);
        return 'busImages/busImage-' + p[1];
    }
    const multipleFileSelect = (e) => {
        console.log("files", e.target.files);
        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))

            setMultipleFile((img) => img.concat(fileArray))
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            )
        }
        if (e.target.files.length >= 1) {
            setMultiImages(e.target.files)
        } else {
            setMultiImages(e.target.files[0])
        }


    }
    const imageArray = (source) => {

        return source.map((photo) => {
            console.log("photo", photo)
            return <><img src={photo.path} key={photo} width="100px" height="90px" />
                <ImageDiv onClick={() => handleClick(photo)}><DeleteOrange /></ImageDiv>
            </>
        })

    }
    const imageArrayDelete = (source) => {
        console.log("source", typeof (source))
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
            return elem == id
        })
        let imagess = multipleFile.splice(datas, 1)
        setDeleteUploadFile(imagess);
    }

    const handleClick = (id) => {
        let dimage = [id.path];
        dimage = dimage.map(splitImagePath);
        const newState = [...deletedBusImages, ...dimage];
        setDeletedBusImages(newState);
        //setDeletedBusImages(prevState => [...prevState,dimage]);

        const data = deletedImages.filter((elem) => {
            console.log(elem)
            return elem.id !== id.id
        })
        console.log("any data", data);
        setDeletedImages(data);
        console.log("deletedBusImages", deletedBusImages);

    }



    useEffect(() => {
        TourOPeratorBus.tourOPeratorBusById(id)
            .then((res) => {
                console.log(res)
                const busEditData = [res.data.data]
                busEditData.map((res) => {
                    setEditValue(res.noOfSeats)
                    setBaseValue(res.basePrice)
                    setHourlyRate(res.hourlyRate)
                    setFuelType(res.fuelType)
                    setDescription(res.description)
                    setWifiChecked(res.features.wifi)
                    setAirConditioning(res.features.airConditioning)
                    setKitchen(res.features.kitchen)
                    setVolts220(res.features.volts220)
                    setWc(res.features.wc)
                    setBusNumber(res.vehicleNumber)
                    setDeletedImages(res.images)
                })

            })
            .catch((err) => {
                console.log(err);
            })

    }, [id]);



    return (

        <>

            <PrivateLayout>
                <MainContainer>

                    <StyledHeading onClick={() => push('/tour-operator/bus')}><ArrowLeftIcon />&nbsp;&nbsp; Legg til buss</StyledHeading>
                    <Card>
                        <Card.Body>
                            <Formik
                                initialValues={{
                                    noOfSeats: "", basePrice: "", hourlyRate: "", description: "",
                                    wifi: "", airConditioning: "", chargingVolt: "", kitchen: "", wc: "", busImages: [],
                                    fuelType: "", deletedBusImages: []
                                }}
                                validationSchema={Yup.object().shape({
                                    // NumberOfSeats: Yup.string().required("Please enter NumberOfSeats"),
                                    // BasePrice: Yup.string().required("Please enter BasePrice"),
                                    // HourlyRate: Yup.string().required("Please enter HourlyRate"),
                                    // Descriptions: Yup.string().required("Please enter Descriptions "),

                                })}
                                onSubmit={(values, { setSubmitting, resetForm }) => {

                                    values.wifi = ischecked;
                                    values.airConditioning = isairConditioning;
                                    values.chargingVolt = ischargingVolt;
                                    values.kitchen = iskitchen;
                                    values.wc = iswc;
                                    values.busImages = multipleFile;
                                    values.fuelType = fuelType;
                                    values.noOfSeats = editValue;
                                    values.basePrice = baseValue;
                                    values.hourlyRate = hourlyRate;
                                    values.description = description;
                                    values.busNumber = busNumber;
                                    var formData = new FormData();
                                    formData.append('busDetails', JSON.stringify({
                                        'name': "Muo Travel",
                                        'busNumber': busNumber,
                                        'category': 'VIP',
                                        'noOfSeats': editValue,
                                        'basePrice': baseValue,
                                        'hourlyRate': hourlyRate,
                                        'fuelType': fuelType,
                                        'description': description,
                                        'features': {
                                            'wifi': WifiChecked,
                                            'airConditioning': airConditioning,
                                            'volts220': volts220,
                                            'kitchen': kitchen,
                                            'wc': wc
                                        },
                                        "deletedBusImages": deletedBusImages
                                    }));
                                    for (let i = 0; i < multiImages.length; i++) {
                                        formData.append("busImages", multiImages[i]);
                                    }
                                    //formData.append("busImages", multiImages);
                                    console.log(values)
                                    setSubmitting(true);
                                    TourOPeratorBus.tourOPeratorEdit(formData, id).then(
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

                                            })
                                                .then((result) => {
                                                    console.log(result);
                                                    if (result) {
                                                        push('/tour-operator/bus')
                                                    } else {
                                                        // not clicked
                                                    }
                                                });

                                        },
                                        (error) => {
                                            console.log(error)
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
                                {({ values, errors, touched, handleSubmit, isSubmitting }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <Row>
                                                    <Col>
                                                        <input
                                                            type="text"
                                                            name="busNumber"
                                                            placeholder="BS-1001"
                                                            style={{width:"206px",height:"54px"}}
                                                            value={busNumber}
                                                            onChange={(e) => setBusNumber(e.target.value)}
                                                            disabled
                                                        />
                                                    </Col>
                                                    <Col sm="9">

                                                        <input
                                                            name="noOfSeats"
                                                            type="text"
                                                            placeholder=" "
                                                            required
                                                            value={editValue}
                                                            onChange={(e) => setEditValue(e.target.value)}
                                                            className="inputStyle"

                                                        />
                                                        <StyledLabel className="labels">Antall seter</StyledLabel>

                                                    </Col>
                                                    <Col sm="9">

                                                        <input
                                                            name="basePrice"
                                                            type="text"
                                                            placeholder=" "
                                                            value={baseValue}
                                                            onChange={(e) => setBaseValue(e.target.value)}
                                                            required />
                                                        <StyledLabel className="labels">Grunnpris</StyledLabel>

                                                    </Col>
                                                    <Col sm="9">

                                                        <input
                                                            name="hourlyRate"
                                                            type="number"
                                                            required
                                                            value={hourlyRate}
                                                            onChange={(e) => setHourlyRate(e.target.value)}
                                                        />
                                                        <StyledLabel className="labels">Timegebyr</StyledLabel>

                                                    </Col>
                                                    <Col sm="8">

                                                        <textarea
                                                            className="styledTextArea"
                                                            name="description"
                                                            id="txtArea"
                                                            rows="8"
                                                            cols="51"
                                                            style={{ marginTop: "19px" }}
                                                            required
                                                            value={description}
                                                            onChange={(e) => setDescription(e.target.value)}
                                                        />
                                                        <StyledLabel className="textArealabels">Beskrivelser:</StyledLabel>


                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md={6}>
                                                <HeadingStyle>Drivstoff type:</HeadingStyle>
                                                <RadioButtons>
                                                    <input
                                                        type="radio"
                                                        id="1"
                                                        name="petrol"
                                                        value="petrol"
                                                        checked={fuelType === "petrol"}
                                                        onChange={(e) => setFuelType(e.target.value)}
                                                    />
                                                    <Styledfuel for="1">Bensin</Styledfuel>
                                                    <input
                                                        type="radio"
                                                        id="2"
                                                        name="petrol"
                                                        value="diesel"
                                                        checked={fuelType === "diesel"}
                                                        onChange={(e) => setFuelType(e.target.value)}
                                                    />
                                                    <Styledfuel for="1">Diesel</Styledfuel>
                                                </RadioButtons>
                                                <Row style={{ marginTop: "25px" }}>
                                                    <Col>
                                                        <HeadingStyle>Funksjoner:</HeadingStyle>
                                                        <CheckBox>
                                                            <input
                                                                type="checkbox"
                                                                id="1"
                                                                name=" Wifi"
                                                                // defaultChecked
                                                                checked={WifiChecked}
                                                                onChange={() => setWifiChecked(!WifiChecked)}
                                                            />
                                                            <LabelStyle for="1">Wifi</LabelStyle>

                                                            <input
                                                                type="checkbox"
                                                                id="2"
                                                                name=" airConditioning"
                                                                checked={airConditioning}
                                                                onChange={() => setAirConditioning(!airConditioning)}
                                                            />
                                                            <LabelStyle for="2">Klimaanlegg</LabelStyle>

                                                            <input
                                                                type="checkbox"
                                                                id="4"
                                                                name="chargingVolt"
                                                                checked={volts220}
                                                                onChange={() => setVolts220(!volts220)}
                                                            />
                                                            <LabelStyle for="4">220 Volt</LabelStyle>

                                                            <input
                                                                type="checkbox"
                                                                id="5"
                                                                name="kitchen"
                                                                checked={kitchen}
                                                                onChange={() => setKitchen(!kitchen)}
                                                            />
                                                            <LabelStyle for="5">Kjøkken</LabelStyle>

                                                            <input
                                                                type="checkbox"
                                                                id="6"
                                                                name="wc"
                                                                checked={wc}
                                                                onChange={() => setWc(!wc)}
                                                            />
                                                            <LabelStyle for="6">WC</LabelStyle>

                                                        </CheckBox>
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: "25px" }}>
                                                    <Col sm={3}>
                                                        <HeadingStyle style={{ marginTop: "0px" }}>Last opp bilde:</HeadingStyle>
                                                        <Fileupload>

                                                            <img src={Upload} alt="upload"  style={{ marginTop: "0px" }}/>

                                                            <label for="files" className="label">Last opp bilde</label>
                                                            <input
                                                                accept=".png, .jpg, .jpeg"
                                                                type="file"
                                                                multiple
                                                                id="files"
                                                                onChange={(e) => multipleFileSelect(e)}
                                                            />

                                                        </Fileupload>
                                                    </Col>
                                                    <Col sm={9}>

                                                        <ImageSection ref={scrollRef}>
                                                            <Row>
                                                                <Overflowscroll>
                                                                    {imageArray(deletedImages)}
                                                                    {imageArrayDelete(multipleFile)}
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
            </PrivateLayout>
        </>
    )
    // }) )
}
export default ManageBusPage;
