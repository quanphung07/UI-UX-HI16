import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import logo
import Home from './layout/Home/home';
import Dash from './layout/Dash/dash';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dash' element={<Dash />} />
      </Routes>
    </Router>
  );
}

export default App;
