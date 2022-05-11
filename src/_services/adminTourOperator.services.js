import BaseService from "./baseClass.services";
import { currentUserSubject } from "./sessionStorage.services";

class adminTourOperator extends BaseService {
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


  getTourOpList = (pageNo,filter="") => {
    // if(pageNo&&!Number.isInteger(pageNo)){
    //   FilterData=pageNo;
    //   pageNo=1;
    // }else{
    //   pageNo=1;
    // }
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    console.log(token)
    return this.axios.get(`/admin/tour-operators?page=${pageNo}&size=5&searchString=${filter}`, {
      headers: {
        "authorization": `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })

  };


  tourOPeratorGetOpById = (OpID,type,status,pagenumber) => {
    console.log("OpID,type,pagenumber,status",OpID,type,pagenumber,status)
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user?.data.token
    if(type=="booking"){
      
      return this.axios.get(`/admin/tour-operator/${OpID}` + `?type=${type}`+`&status=${status}` , {
        headers: {
          "authorization": `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
    return this.axios.get(`/admin/tour-operator/${OpID}` + `?type=${type}&page=${pagenumber}&size=6` , {
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
 getBusById = (tourId,busId) => {
  let user = JSON.parse(localStorage.getItem('currentUser'))
  let token = user?.data.token
  return this.axios.get(`/admin/tour-operator/${tourId}/bus/${busId}/view`,{
    headers: {
      "authorization": `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
getTourOperatorStatus=(formData,tid)=>{
  let user = JSON.parse(localStorage.getItem('currentUser'))
  let token = user?.data.token
  return this.axios.patch(`/admin/tour-operator/${tid}/status`,formData,{
    headers: {
      "authorization": `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

}
tourOPeratorBusStatus=(formData,tid,bId)=>{
  let user = JSON.parse(localStorage.getItem('currentUser'))
  let token = user?.data.token
  return this.axios.patch(`/admin/tour-operator/${tid}/bus/${bId}/status`,formData,{
    headers: {
      "authorization": `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

}
};
export default new adminTourOperator();