import BaseService from "./baseClass.services";
import { currentUserSubject } from "./sessionStorage.services";

class adminTourBooking extends BaseService {
  login = (postData) => {
    return this.axios.post(`/admin/tour-operator`, postData);
  };

  AddTourOperator = (postData) => {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    console.log(token)
    return this.axios.post(`/admin/tour-operator`, postData, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        // 'Content-Type': 'multipart/form-data'
      }
    });
  };


  getTourOpList = (pageNo,FilterData='',tourType="",status="") => {
    // if(pageNo&&!Number.isInteger(pageNo)){
    //   FilterData=pageNo;
    //   pageNo=1;
    // }else{
    //   pageNo=1;
    // }
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    console.log(token)
    if(tourType=="" && status==""){
    return this.axios.get(`/admin/bookings?page=${pageNo}&size=5&searchString=${FilterData}`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      
    })
  } else if(tourType !==""){
    return this.axios.get(`/admin/bookings?searchString=${FilterData}&page=${pageNo}&size=6&tourType=${tourType}`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
  }else{
    return this.axios.get(`/admin/bookings?searchString=${FilterData}&page=${pageNo}&size=6&tourType=${tourType}&status=${status}`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
  }
  };


  getBookingById = (OpID) => {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    return this.axios.get(`/admin/booking/${OpID}`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  };


tourOPeratorUpdate = (payload,id) => {
  let user = JSON.parse(localStorage.getItem('currentUser'))
  let token = user?.data.token
  return this.axios.patch(`/admin/tour-operator/${id}`,payload,{
    headers: {
      "authorization": `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

};
export default new adminTourBooking();