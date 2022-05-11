import {GoogleApiWrapper} from 'google-maps-react';
import {Map, InfoWindow, Marker} from 'google-maps-react';
import React, {Component} from "react";
import TourOperatorBooking from "../_services/touroperatorBooking.services";

export class MapContainer extends Component {
    state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {},

      mapCenter:{},
      latitude:10.00,
      longitude:10.00
    };
    MyCustomMarker = () => <span class="material-icons">place</span>;
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

    

    componentDidMount(){
      // this.getCurrentLocation(this.props.location.state.bookingid)
     
        TourOperatorBooking.getBookingByIdforMap(this.props.location.state.bookingid)
        .then((res) => {
          console.log(res.data.location.lat);
          this.setState({
           latitude:res.data.location.lat,
           longitude:res.data.location.long
          })
        })
  
        .catch((err) => {
          console.log(err);
        })
      
    }
    
   
    render() {
      console.log("this.state.latitude,",this.state.latitude);
      console.log("this.state.longitude,",this.state.longitude);
        return (
          <Map google={this.props.google}
          yesIWantToUseGoogleMapApiInternals
          center={{
                  lat:73.87868924,
                  lng:15.53187553,
              }}
              >
            <Marker 
             position={{
              lat:73.87868924,
              lng:15.53187553,
          }} 
          />
     
            {/* <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow> */}
          </Map>
      
      
      )
    }
  }


  export default GoogleApiWrapper({
    apiKey: ("AIzaSyBAbp0i9Uf5MeGrJHbGGyyB4gkP-kQh-II")
  })(MapContainer)
  