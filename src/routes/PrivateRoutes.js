import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from './routes';
import Loader from "../libs/_components/_ui/Loader";
import { UIContext } from "../_context/UIContext";
import googleMaps from "../pages/admin/googleMaps";


const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const BusPage = lazy(() => import("../pages/BusPage"));
const ManageBusPage = lazy(() => import("../pages/ManageBusPage"));
const DriverPage = lazy(() => import("../pages/DriverPage"));
const TourPage = lazy(() => import("../pages/TourPage"));
const DriverEdit = lazy(() => import("../pages/DriverEdit"))
const DriverAdd = lazy(() => import("../pages/ManageDriverPage"))
// const DriverEdit = lazy(() => import("../pages/ManageDriverPage"));
const DriverListing = lazy(() => import("../pages/DriverListingPage"));
const TourdetailsDashboard = lazy(() => import("../pages/TourdetailsDashboard"));
const EditBusPage = lazy(() => import("../pages/EditBusPage"));
/********************************* Admin Routes *********************************/
const TourOperatorPage = lazy(() => import("../pages/admin/TourOperatorPage"));
const TourOperatorDetails = lazy(() => import("../pages/admin/TourOperatorDetails"));
const TourOperatorDashboard = lazy(() => import("../pages/admin/TourOperatorDashboardView"));
const AdminDashBoardPage = lazy(() => import("../pages/admin/AdminDashboardPage"));
const Booking = lazy(() => import("../pages/admin/BookingPage"));
const AddTourOperator = lazy(() => import("../pages/admin/AddTourOperator"));
const EditTourOperator = lazy(() => import("../pages/admin/EditTourOperator"));
const TourOperatorBooking = lazy(() => import("../pages/admin/TourOperatorBooking"));
const TourOperatorBusDetails = lazy(() => import("../pages/admin/TourOperatorBusDetails"));
const TourOperatorBusDescription = lazy(() => import("../pages/admin/TourOperatorBusDescription"));
const AdminCustomerPage = lazy(() => import("../pages/admin/AdminCustomerPage"));
const CustomerTourDetailsPage = lazy(() => import("../pages/admin/CustomerTourDetailsPage"));
const EditCustomerDetailsPage = lazy(() => import("../pages/admin/EditCustomerDetailsPage"));
const DriverDetailsPage = lazy(() => import("../pages/admin/DriverDetailsPage"));
const MapPage = lazy(() => import("../pages/MapPage"));
const EditProfile = lazy(() => import("../pages/EditProfile"));

const UnAuthenicated = () => {
  return (
    <Router>
      <p>
        You are not logged in. Please login <Link to="/login">here</Link>
      </p>
    </Router>
  );
};

const Routes = () => {

  return (
    <Router>
      <Suspense fallback={<Loader displayCard={true} />} >
        <Switch>
          <UIContext.Provider value={{}}>
            <PrivateRoute
              path="/tour-operator/dashboard"
              exact
              component={DashboardPage}
            />{' '}
            <PrivateRoute
              path="/tour-operator/bus"
              exact
              component={BusPage}
            />{' '}
            <PrivateRoute
              path="/tour-operator/bus/add"
              exact
              component={ManageBusPage}
            />{' '}
            <PrivateRoute
              path="/tour-operator/bus/edit/:id"
              exact
              component={EditBusPage}
            />{' '}
            <PrivateRoute
              path="/tour-operator/driver/add"
              exact
              component={DriverAdd}
            />{' '}
            <PrivateRoute
              path="/tour-operator/driver"
              exact
              component={DriverPage}
            />{' '}
            <PrivateRoute
              path="/tour-operator/tour"
              exact
              component={TourPage}
            />{' '}
            <PrivateRoute 
              path="/tour-operator/driver/edit/:id"
              exact
              component={DriverEdit}
            />{' '}
            <PrivateRoute
              path="/tour-operator/driver/listing"
              exact
              component={DriverListing}
            />{' '}
            <PrivateRoute
            path="/tour-operator/dashboard/tourview"
            exact
            component={TourdetailsDashboard}
          />{' '}
           <PrivateRoute
            path="/admin/dashboard/tourview"
            exact
            component={TourOperatorDashboard}
          />{' '}
            <PrivateRoute
              path="/admin/tour-operator"
              exact
              component={TourOperatorPage}
            />{' '}
            <PrivateRoute
              path="/admin/dashboard"
              exact
              component={AdminDashBoardPage}
            />{' '}
            <PrivateRoute
              path="/admin/booking"
              exact
              component={Booking}
            />{' '}
            <PrivateRoute
              path="/admin/tour-operator/booking"
              exact
              component={TourOperatorBooking}
            />{' '}
             <PrivateRoute
              path="/admin/tour-operator/mapload"
              exact
              component={googleMaps}
            />{' '}
            <PrivateRoute
              path="/admin/tour-operator/add"
              exact
              component={AddTourOperator}
            />{' '}
            <PrivateRoute
              path="/admin/tour-operator/edit/:id"
              exact
              component={EditTourOperator}
            />{' '}
            <PrivateRoute
              path="/admin/tour-operator/details"
              exact
              component={TourOperatorDetails}
            />{' '}
            <PrivateRoute
              path="/admin/tour-operator/busdetails"
              exact
              component={TourOperatorBusDetails}
            />{' '}
            <PrivateRoute
              path="/admin/tour-operator/busdescription/:id1/details/:id"
              exact
              component={TourOperatorBusDescription}
            />{' '}
            <PrivateRoute
              path="/admin/customer"
              exact
              component={AdminCustomerPage}
            />{' '}
            <PrivateRoute
              path="/admin/customerdetials/:id"
              exact
              component={CustomerTourDetailsPage}
            />{' '}
            <PrivateRoute
              path="/admin/editcustomer/edit/:id"
              exact
              component={EditCustomerDetailsPage}
            />{' '}
              <PrivateRoute
              path="/map"
              exact
              component={MapPage}
            />{' '}
             <PrivateRoute
              path="/editprofile"
              exact
              component={EditProfile}
            />{' '}
             <PrivateRoute
              path="/admin/tour-operator/driverdetails"
              exact
              component={DriverDetailsPage}
            />{' '}
          </UIContext.Provider>
        </Switch>
      </Suspense>
    </Router>
  );
};

const PrivateRoutes = (props) => {
  return <Routes />;
};

export default PrivateRoutes;
