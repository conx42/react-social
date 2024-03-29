import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const Navigate = useNavigate();

  const handleClick = async (e) =>{
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {

      passwordAgain.current.setCustomValidity("Password don't match!") ;
      
    }else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try {
         await axios.post("/auth/register", user);

        Navigate("/login");

        
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required  ref={username} className="loginInput" />
            <input placeholder="Email" required type="email" ref={email}  className="loginInput" />
            <input placeholder="Password" required type="password"  ref={password} className="loginInput" />
            <input placeholder="Password Again"  required type="password" ref={passwordAgain} className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}