import BaseService from "./baseClass.services";
import { currentUserSubject } from "./sessionStorage.services";

class authenticationService extends BaseService {
  login = (postData) => {
    return this.axios.post(`tour-operator/login`, postData);
  };
  loginAdmin = (postData) => {
    return this.axios.post(`admin/login`, postData);
  };

  logout = () => {
    localStorage.removeItem("currentUser");
    currentUserSubject.next(null);
  };
  forgotPassword=(postData)=>{
    return this.axios.post(`tour-operator/forget-password`, postData);
  }
  forgotAdminPassword=(postData)=>{
    return this.axios.post(`admin/forget-password`, postData);
  }
}
export default new authenticationService();
