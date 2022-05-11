import BaseService from "./baseClass.services";
class AdminCustomer extends BaseService {
    getCustomerList = (pageNo, FilterData = "") => {
        console.log(FilterData, pageNo)
        let user = JSON.parse(localStorage.getItem('currentUser'))
        let token = user?.data.token
        console.log(token)
        return this.axios.get(`/admin/customers?searchString=${FilterData}&page=${pageNo}&size=5`, {
            headers: {
                "authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })

    };

    getCustomerById = (cid, status) => {
        console.log(cid, status)
        let user = JSON.parse(localStorage.getItem('currentUser'))
        let token = user?.data.token
        console.log(token)
        return this.axios.get(`/admin/customer/${cid}?status=${status}`, {
            headers: {
                "authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })

    };
    
    getCustomerByIdForEdit = (cid) => {
        console.log(cid)
        let user = JSON.parse(localStorage.getItem('currentUser'))
        let token = user?.data.token
        console.log(token)
        return this.axios.get(`/admin/customer/${cid}`, {
            headers: {
                "authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })

    };
    getCustomerBookingInfoById = (bid) => {
        let user = JSON.parse(localStorage.getItem('currentUser'))
        let token = user?.data.token
        console.log(token)
        return this.axios.get(`/admin//booking/${bid}`, {
            headers: {
                "authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })

    };
    customerEdit = (payload,cusId) => {
        let user = JSON.parse(localStorage.getItem('currentUser'))
        let token = user?.data.token
        console.log(token)
        return this.axios.patch(`/admin/customer/${cusId}`,payload, {
            headers: {
                "authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
    };



}
export default new AdminCustomer();