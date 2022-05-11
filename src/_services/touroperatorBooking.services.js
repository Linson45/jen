import BaseService from "./baseClass.services";

class TourOperatorBooking extends BaseService {
  tourOPeratorBus = (postData) => {
    console.log(postData)
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    console.log(token)
    return this.axios.post(`tour-operator/bus`, postData, {

      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        "Content-Type": "multipart/form-data",
       
      },
    
    })

  };
  tourOperatorBookings = (pageNo,FilterData='',tourType="",status="") => {
      // if(pageNo&&!Number.isInteger(pageNo)){
      //   FilterData=pageNo;
      //   pageNo=1;
      // }else{
      //   pageNo=1;
      // }
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    let userId = user?.data.userId
    if(tourType=="" && status==""){
      return this.axios.get(`/tour-operator/${userId}/bookings?searchString=${FilterData}&page=${pageNo}&size=6`, {
        headers: {
          "authorization": `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
  
      })

    }
    else if(tourType !==""){
      return this.axios.get(`/tour-operator/${userId}/bookings?searchString=${FilterData}&page=${pageNo}&size=6&tourType=${tourType}`, {
        headers: {
          "authorization": `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
  
      })
    }
    else if(status !==""){
      return this.axios.get(`/tour-operator/${userId}/bookings?searchString=${FilterData}&page=${pageNo}&size=6&tourType=${tourType}&status=${status}`, {
        headers: {
          "authorization": `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
  
      })

    }
    

  };
  getBookingById = (bookingId) => {
    console.log(bookingId)
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    let userId = user?.data.userId

    return this.axios.get(`/tour-operator/${userId}/booking/${bookingId}`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
  };
  tourOperatorAssignDriver = (bookingid, driverid) => {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user.data.token
    return this.axios.post(`/tour-operator/booking/${bookingid}/driver/${driverid}`,{},{
      headers: {
        "authorization": `Bearer ${token}`,
      }

    })
  };
  bookingacceptorcancel = (bookingid, status) => {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user.data.token
    return this.axios.patch(`/tour-operator/booking/${bookingid}`,{status:status},{
      headers: {
        "authorization": `Bearer ${token}`,
      }

    })
  };
  removeAssigneddriver = (bookingid,driverid) => {
    console.log(driverid)
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    return this.axios.delete(`/tour-operator/booking/${bookingid}/driver/${driverid}`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
  };
  tourOPeratorDelete = (busId) => {
    console.log(busId)
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    return this.axios.delete(`/tour-operator/bus/${busId}`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
  };
  tourOPeratorStatus = (formData,busId) => {
    // console.log(busId)
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    return this.axios.patch(`/tour-operator/bus/${busId}/status`,formData, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
  };
  getBookingByIdforMap = (bookingId) => {
    console.log(bookingId)
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    let userId = user?.data.userId

    return this.axios.get(`/tour-operator/booking/${bookingId}`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
  };
}
export default new TourOperatorBooking();