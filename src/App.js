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
            <Route path="/details/:serviceId" element={<PrivateRoute>
              <Details></Details>
            </PrivateRoute>} />

          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
