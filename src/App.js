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
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
          <Route path="/login" element={<Login />}>

          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
