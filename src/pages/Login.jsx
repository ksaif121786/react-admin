import React,{useState} from 'react'
import axios from '../axios/axios';
import {useNavigate,Link} from 'react-router-dom';

export default function Login() {  
  const navigate = useNavigate(); 
  const [error,seterror] = useState("");


  const submitHandler = async(e) =>{
    e.preventDefault();
    var email    = e.target.email.value;
    var password = e.target.password.value;
    var config = {
      headers:{
        'Content-Type':'application/json'
      }
    }
    var result = await axios.post('/login',{email,password},config);
    if(result.data.status==true){
     localStorage.setItem('token',result.data.data.token);
     navigate('dashboard')
    }else{
      seterror(result.data.message)
    }
    
  }
  return (
    <div className="hold-transition login-page">
  <div className="login-box">
    <div className="card card-outline card-primary">
      <div className="card-header text-center">
        <Link
          style={{ fontWeight: 800, fontSize: 32 }}
          to="/"
          className="h1 text-decoration-none "
        >
          {" "}
          Admin Panel{" "}
        </Link>{" "}
      </div>
      <div className="card-body">
        <p className="login-box-msg">Sign in to start your session</p>
        {error ? <p className="login-box-msg alert alert-danger">{error}</p>:''}
        <form  method="post" onSubmit={submitHandler}>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email id"
              value="john@mailinator.com"
              name='email'
              required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                {" "}
                <span className="fas fa-envelope" />{" "}
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            {" "}
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name='password'
              required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                {" "}
                <span className="fas fa-lock" />{" "}
              </div>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-dark btn-block">
              Sign In
            </button>{" "}
          </div>
        </form>
        <h6 className="forgot_sec text-center">
          {" "}
          <a href="#"> Forgot Password? </a>{" "}
        </h6>
      </div>
    </div>
  </div>
</div>

  )
}
