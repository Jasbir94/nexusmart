import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [auth,setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  //form function
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/login',
      {email,password}
        );
      if(res.data && res.data.success){
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        })
        localStorage.setItem("auth",JSON.stringify(res.data))
        navigate(location.state || "/");
      }else{
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error)
    }
};
  return (
    <Layout title="Login - Ecommerce App">
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <h4 className="title">Login Form</h4>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="mb-3">
        <button type="button" className="btn btn-primary"
        onClick={()=> {
          navigate("/forgot-password")
        }}>
          FORGOT PASSWORD
        </button>
        </div>
        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  </Layout>
  )
}
export default Login;
