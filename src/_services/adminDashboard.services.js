import BaseService from "./baseClass.services";
import moment from "moment";

class adminDashboard extends BaseService {
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
  adminDashboard = (pageNo,date) => {
    
      // console.log("date",date);
      const fromDate = 
        date && date[0]
          ? moment(date[0]).format("YYYY-MM-DD")
          : "";
      const toDate =
        date && date[1]
          ? moment(date[1]).format("YYYY-MM-DD")
          : "";
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    // let userId = user.data.userId

    return this.axios.get(`/admin/dashboard?page=${pageNo}&size=6&startDate=${fromDate}&endDate=${toDate}`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })

  };
  tourOperatorBookingById = (BookingId) => {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token

    return this.axios.get(`/admin/booking/${BookingId}`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
  };
  tourOPeratorEdit = (formData, busId) => {
    console.log(busId)
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    return this.axios.patch(`/tour-operator/bus/${busId}`, formData, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
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
}
export default new adminDashboard();