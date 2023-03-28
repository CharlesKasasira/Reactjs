import React from "react";
import Logo from "../src/images/login-img.png";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { RiLock2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="login">
      <section className="login-section1">
        <h1 className="">
          <RiLock2Fill size={32} /> Login
        </h1>
        <button>
          <div className="btn-group">
            <MdEmail size={22} />
            <p>With email</p>
          </div>
          <HiArrowRight />
        </button>
        <button>
          <div className="btn-group">
            <MdOutlinePhoneIphone size={22} />
            <p>With phone</p>
          </div>
          <HiArrowRight />
        </button>
        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="#">Create Account</a>
        </div>
      </section>
      <section className="login-section2">
        <img src={Logo} />
        <div className="notes">
          <h5>Lorem ipsum dolor sit.</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            sit nam, fuga maxime dolores quas?
          </p>
        </div>

        <div className="circle-group">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </section>
    </main>
  );
}

export default Login;
