import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "../index.css"
export const AuthForm = () => {
    
// https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}
    
// https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to=http://www.yourapp.com/approved

const navigate = useNavigate();

const [token, setToken] = useState({})

const [user, setUser] = useState({})

const auth_url=`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=e62c23c6a89f44bb94e028fd9db54528`;

const token_url =`https://api.themoviedb.org/3/authentication/token/new?api_key=e62c23c6a89f44bb94e028fd9db54528`;

const generateToken = async(url)=>{
    const req = await fetch(url)
    const {request_token} = await req.json()
 return request_token
}

const generateUser = async(url)=>{
    const req = await fetch(url)
    const {guest_session_id} = await req.json()
    console.log("guest session id",guest_session_id)
    return {guest_session_id}
}

// useEffect(() => {
//     generateToken(token_url)
//     .then(token=>setToken(token))
// console.log("token:",token)
// }, [token,token_url])

const handleLogin = async()=>{
generateUser(auth_url)
.then(userId => setUser(userId))
console.log("user",user)
navigate('/',{replace:true})
}
  return (
<div className='container-fluid p-4'>
    <div id="login" className='d-flex g-3 mx-3 justify-content-center align-items-center bg-light border rounded'>
        <button className='btn btn-danger text-white' onClick={handleLogin}>Login as Guest</button>
    </div>
</div>
  )
}
