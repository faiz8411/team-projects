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
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>

            </Route>
            <Route path="/login" element={<Login />}>

            </Route>
            <Route path="/register" element={<Register />}>

            </Route>

          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
