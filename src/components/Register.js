import {useState} from 'react'
import AuthUser from './AuthUser';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate=useNavigate();
    //variable create for set email and password
   const [email,setEmail] = useState(); 
   const [password,setPassword] = useState(); 
   const [name,setName] = useState(); 
   //api call data
   const {http,setToken}=AuthUser();

   const submitForm=()=>{
    // console.log(email +' '+password);
    //api call
    http.post('/register',{name:name,email:email,password:password}).then((res)=>{
         console.log(res.data);
         navigate('/login');
    })
   }
  return (
    <div className="row justify-content-center pt-5">
        <div className="col-sm-6">
            <div className="card p-4">
            <div className="mb-3 mt-3">
                <label  className="form-label">Name:</label>
                <input type="text" className="form-control"
                onChange={e=>setName(e.target.value)} 
                id="name" placeholder="Enter Name" />
            </div>
            <div className="mb-3 mt-3">
                <label  className="form-label">Email:</label>
                <input type="email" className="form-control"
                onChange={e=>setEmail(e.target.value)} 
                id="email" placeholder="Enter email" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Password:</label>
                <input type="password" className="form-control" 
                onChange={e=>setPassword(e.target.value)}
                id="pwd" placeholder="Enter password" />
            </div>
            <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
            </div>
        </div>
    </div>
  )
}

export default Register;