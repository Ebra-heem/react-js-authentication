
import {Routes,Route,Link} from 'react-router-dom'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import AuthUser from '../components/AuthUser'
function Auth() {
    const {token,logout}=AuthUser();
    const logoutUser=()=>{
        if(token!=undefined){
            logout();
        }
    }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </>
  );
}

export default Auth;
