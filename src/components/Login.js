import {useState} from 'react'
import AuthUser from './AuthUser';

function Login() {
    //variable create for set email and password
   const [email,setEmail] = useState(); 
   const [password,setPassword] = useState(); 
   //api call data
   const {http,setToken}=AuthUser();

   const submitForm=()=>{
    // console.log(email +' '+password);
    //api call
    http.post('/login',{email:email,password:password}).then((res)=>{
         console.log(res.data);
        setToken(res.data.user,res.data.access_token);
    })
   }
  return (
    <div className="row justify-content-center pt-5">
        <div className="col-sm-6">
            <div className="card p-4">
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
            <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login;