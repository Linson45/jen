import axiosInstance from "../libs/_helpers/axios";

class BaseService {
  constructor() {
    this.axios = axiosInstance;
  }
}

export default BaseService;
