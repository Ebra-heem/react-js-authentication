import { useState ,useEffect} from "react";
import AuthUser from "./AuthUser";


function Dashboard() {
    const {user,http}=AuthUser();
    const [userdetail,setUserdedatail]= useState('');
    useEffect(()=>{
      fetchUserDetail();
    },[]);
    const fetchUserDetail=()=>{
      http.post('/me').then((res)=>{
        setUserdedatail(res.data)
      })
    }

  function renderElement(){
    if(userdetail){
      return <div>
        <h4>Name</h4>
        <p>{userdetail.name}</p>
        <h4>Email</h4>
        <p>{userdetail.email}</p>
      </div>
    }else{
      return <p>Loading.....</p>
    }
  }
  return (
    <div>
       {renderElement()}
    </div>
  )
}

export default Dashboard;