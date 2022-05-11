import BaseService from "./baseClass.services";

class TourOPeratorBus extends BaseService {
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
  tourOPeratorBuses = (pageNo,FilterData='') => {
      // if(pageNo&&!Number.isInteger(pageNo)){
      //   FilterData=pageNo;
      //   pageNo=1;
      // }else{
      //   pageNo=1;
      // }
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token

    return this.axios.get(`/tour-operator/buses?searchString=${FilterData}&page=${pageNo}&size=5`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })

  };
  tourOPeratorBusById = (busId) => {
    console.log(busId)
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token

    return this.axios.get(`/tour-operator/bus/${busId}`, {
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
  tourOPeratorVipStatus = (formData,busId) => {
    // console.log(busId)
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    return this.axios.patch(`/tour-operator/bus/${busId}/isVIP`,formData, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
  };
}
export default new TourOPeratorBus();