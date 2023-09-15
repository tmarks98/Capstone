import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isErrors, setIsErrors] = useState(false)
  const { closeModal } = useModal();

const demoUser = async (e) => {
  e.preventDefault();
  let email = 'demo@aa.io'
  let password = 'password'
  const data = await dispatch(login(email, password));
  if (data) {
    setErrors('Invalid credentials, please try again.');
  } else {
      closeModal()
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors('Invalid credentials');
    } else {
        closeModal()
    }
  };

  const emailRed = errors.length > 0 ? "login-modal-email-red" : "login-modal-username"
  const passwordRed = errors.length > 0 ? "login-modal-password-red" : "login-modal-password"


  return (
    <div style={{backgroundColor: 'rgb(76, 76, 76)'}}>
    <div className="login-modal">
    <img className="login-modal-gif" src="https://i.giphy.com/media/h2zhIZFmeueAw/giphy.webp" alt="" />
      <h1 style={{color: 'white', fontSize: '43px', fontFamily: 'trebuchet ms'}}>Spinterest</h1>
      <p style={{color: 'white', margin: "0px"}}>Welcome, you'll never be bored again.</p>
      <form className='login-modal-form' onSubmit={handleSubmit}>
        <div className="errors-message">
          {errors}
        </div>
        <label className="login-modal-labels">
          <input
            className={emailRed}
            placeHolder='Email'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="login-modal-labels">
          <input
            className={passwordRed}
            placeHolder=' Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className='login-modal-button' type="submit">Log In</button>
        <p onClick={demoUser} className="login-modal-demoUser">Demo User</p>
      </form>
      </div>
    </div>
  );
}

export default LoginFormModal;
