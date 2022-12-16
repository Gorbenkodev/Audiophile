import React from "react";
import '../css/sign.css'
import { BlackLogo, Logo } from "../img/svg";

export function SignUp() {

  return(
    <div className="signUp">
      <div className="signUp-header">
        <a href="/"><Logo /></a>
      </div>
      <div className="signUp-content col-3">
        <a href="/"><BlackLogo /> </a>
        <h2 className="signUp-content_title">create your account</h2>
        <form className="signUp-content-form">
          <div className="signUp-content-form-block">
            <p className="signUp-content-form-block_name">Email</p>
            <input className="signUp-content-form-block_inpt"
            type='email'
            placeholder="Insert your email"
            ></input>
          </div>
          <div className="signUp-content-form-block hide-icon">
            <p className="signUp-content-form-block_name">Password</p>
            <input className="signUp-content-form-block_inpt"
            type='password'
            placeholder="Insert your password"
            ></input>
          </div>
          <div className="signUp-content-form-block hide-icon">
            <p className="signUp-content-form-block_name">Confirm password</p>
            <input className="signUp-content-form-block_inpt"
            type='password'
            placeholder="Insert your password again"
            ></input>
          </div>
          <button className="signUp-content-form_btn">Sign Up</button>
        </form>
        <div className="signUp-content-footer">
          <p className="signUp-content-footer_txt">Already have an account?</p>
          <a className="signUp-content-footer_btn" href="/signIn">sign in</a>
        </div>
      </div>
      <div className="signUp-img">
        <h1 className="signUp-img_txt">Hear it. Feel it</h1>
      </div>
    </div>
  )
}