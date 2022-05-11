import BaseService from "./baseClass.services";
import { currentUserSubject } from "./sessionStorage.services";

class TourOperatorDriver extends BaseService {
  tourOperatorDriver = (postData) => {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    console.log(token)
    return this.axios.post(`/tour-operator/driver`, postData, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    });
  };
  tourOperatorGetAllDriver = (pageNo,FilterData = "") => {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    console.log(token)
    if(pageNo){
      return this.axios.get(`/tour-operator/drivers?searchString=${FilterData}&page=${pageNo}&size=5`,{
        headers: {
          "authorization": `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    }else{
      return this.axios.get(`/tour-operator/drivers`,{
        headers: {
          "authorization": `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    }
    
  };
  tourOperatorGetDriverTourDetails = (bookingId,driverId) => {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    console.log(token)
    return this.axios.get(`/tour-operator/driver/${driverId}/booking/${bookingId}`,{
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  };
  tourOPeratorDriverDelete = (busId) => {
    console.log(busId)
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    return this.axios.delete(`/tour-operator/driver/${busId}`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
  };
  tourOPeratorDriverStatus = (formData,busId) => {
    // var data={"active":true};
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    return this.axios.patch(`/tour-operator/driver/${busId}/status`,formData, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
     })
  };
  tourOPeratorDriverEdit = (formData,driverId) => {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    return this.axios.patch(`/tour-operator/driver/${driverId}`,formData, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
     })
  };
  tourOPeratorGetDriverById = (driverId,status,tablePageNo) => {
    console.log("driverId",driverId);
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    return this.axios.get(`/tour-operator/driver/${driverId}?status=${status}&page=${tablePageNo}&size=6`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
     })
  };
}
export default new TourOperatorDriver();