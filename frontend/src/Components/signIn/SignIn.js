import '../signIn/SignIn.css'
import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch,useSelector } from 'react-redux';
import { userAuthorThunk } from '../../Redux/slices/userAuthorslice';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { RiUser6Fill } from "react-icons/ri";
import { MdPassword } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
function SignIn() {
    let {register,handleSubmit,formState:{errors}}=useForm()      
    let {isLogin,errOccurred,errMes,currentUser}=useSelector(state=>state.userAuthorLoginSlice)
    let navigate=useNavigate();
    let dispatch=useDispatch()
    function onSignINFormSubmit(obj){
      
      dispatch(userAuthorThunk(obj))     
    }
    useEffect(()=>{
      if(isLogin==true){
        if(currentUser.userType==="user"){
          navigate('/userprofile')
        }
        if(currentUser.userType==="author"){
          navigate('/authorprofile')
        }
      }
      
    },[isLogin])
  return (
    <div
      className=" Signin-body d-flex justify-content-center align-items-center "
      style={{ height: "88vh" }}
    >
      <div className="container m-auto">
        <div className="row justify-content-center align-items-center  ">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card shadow">
              {errOccurred === true && (
                <div className="text-center text-danger">
                  <h6>{errMes}</h6>
                </div>
              )}
              <form onSubmit={handleSubmit(onSignINFormSubmit)} className="m-1">
                <div className="m-2 card-title">
                  <label htmlFor="" className="form-check-label me-3">
                    Login As
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      id="author"
                      value="author"
                      {...register("userType",{required:true})}
                    />
                    <label htmlFor="author" className="form-check-label me-3">
                      author
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      id="user"
                      value="user"
                      {...register("userType",{required:true})}
                    />
                    <label htmlFor="user" className="form-check-label me-3">
                      user
                    </label>
                  </div>
                  {errors.userType?.type === "required" && (
                    <p className="text-danger p-1 text-center">
                      UserType required
                    </p>
                  )}
                </div>
                <div className="card-body">
                  <div className='form-floating mb-3'>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="username"
                      {...register("username")}
                    />
                    <label htmlFor="username" className="form-check-label">
                      Username
                      <RiUser6Fill style={{margin:"0px 0px 3px 3px"}}/>
                    </label>
                  </div>
                  <div className='form-floating'>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="password"
                      {...register("password")}
                    />
                    <label htmlFor="password" className="form-check-label">
                      Password
                      <MdPassword style={{marginLeft:"3px"}}/>
                    </label>
                  </div>
                </div>
                <div className="text-center card-footer ">
                  <button
                    type="submit"
                    className="border-success border-4 rounded"
                  >
                    Login
                    <CiLogin />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default SignIn