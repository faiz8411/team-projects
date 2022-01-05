import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Login from './component/Home/Login/Login';
import Register from './component/Home/Register/Register';
import AuthProvider from './context/AuthPrivider';
import AddService from './component/AddService/AddService';
import Navigation from './component/Sahred/Navigation/Navigation';
import HomePage from './component/Home/Home/HomePage';
import Details from './component/Home/Details/Details';
import PrivateRoute from './component/Home/Home/PrivateRoute/PrivateRoute';
import Dashboard from './component/Dashboard/Dashboard';
import Order from './component/Order/Order';
import AllUsers from './component/AllUsers/AllUsers';
import ManageOrder from './component/ManageOrder/ManageOrder';
import ManageAllOrders from './component/ManageAllOrders/ManageAllOrders';
import MakeSuperAdmin from './component/MakeSuperAdmin/MakeSuperAdmin';
import MakeAdmin from './component/MakeAdmin/MakeAdmin';
import Shop from './component/Home/Shop/Shop';
import Footer from './component/Home/Footer/Footer';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>

            <Route path="/login" element={<Login />}>

            </Route>
            <Route path="/register" element={<Register />}>

            </Route>
            <Route path="/addService" element={<AddService />}>

            </Route>
            <Route path="/order" element={<Order />}>

            </Route>
            <Route path="/shop" element={<Shop />}>

            </Route>
            <Route path="/details/:serviceId" element={<PrivateRoute>
              <Details></Details>
            </PrivateRoute>} />

            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path="/dashboard/order" element={<Order />}></Route>
              <Route path="/dashboard/AllUsers" element={<AllUsers />}></Route>

              <Route path="/dashboard/manageOrder" element={<ManageOrder></ManageOrder>}></Route>
              {/* <Route path="/dashboard/AllServiceManage" element={<AllServiceManage />}></Route> */}
              <Route path="/dashboard/Admin" element={<MakeAdmin />} />

              <Route path="/dashboard/superAdmin" element={<MakeSuperAdmin />}></Route>
              <Route path="/dashboard/manageAllOrders" element={< ManageAllOrders />} />


            </Route>

          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
