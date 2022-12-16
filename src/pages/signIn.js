import React from "react";
import '../css/sign.css'
import { BlackLogo, Logo } from "../img/svg";

export function SignIn() {

  return(
    <div className="signIn">
      <div className="signIn-header">
        <a href="/"><Logo /></a>
      </div>
      <div className="signIn-content col-3">
      <a href="/"><BlackLogo /> </a>
        <h2 className="signIn-content_title">Welcome back</h2>
        <form className="signIn-content-form">
          <div className="signIn-content-form-block">
            <p className="signIn-content-form-block_name">Email</p>
            <input  
            className="signIn-content-form-block_inpt"
              placeholder="Insert your email"
              type='email'
            ></input>
          </div>
          <div className="signIn-content-form-block hide-icon">
            <p className="signIn-content-form-block_name ">Password</p>
            <input 
            className="signIn-content-form-block_inpt"

              placeholder="Insert your password"
              type='password'
            ></input>
          </div>
          <div className="signIn-content-form-checkBlock">
            <input 
              id="singIn-checkbox"
              className="signIn-content-form-checkBlock_inpt"
              type='checkbox'
            ></input>
            <label for="singIn-checkbox" className="signIn-content-form-checkBlock_label">Remember me</label>
          </div>
          <button className="signIn-content-form_btn">Sign In</button>
        </form>
        <div className="signIn-content-footer">
            <p className="signIn-content-footer_txt">Don’t have an account?</p>
            <a className="signIn-content-footer_btn" href="/signUp">sign up</a>
          </div>
      </div>
      <div className="signIn-img">
        <h1 className="signIn-img_txt">feel the music</h1>
      </div>
    </div>
  )
}