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
  const { closeModal } = useModal();

const demoUser = async (e) => {
  e.preventDefault();
  let email = 'demo@aa.io'
  let password = 'password'
  const data = await dispatch(login(email, password));
  if (data) {
    setErrors(data);
  } else {
      closeModal()
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  return (
    <div style={{backgroundColor: 'rgb(76, 76, 76)'}}>
    <div className="login-modal">
    <img className="login-modal-gif" src="https://i.giphy.com/media/h2zhIZFmeueAw/giphy.webp" alt="" />
      <h1 style={{color: 'white', fontSize: '43px', fontFamily: 'trebuchet ms'}}>Spinterest</h1>
      <p style={{color: 'white', margin: "0px"}}>Welcome, you'll never be bored again.</p>
      <form className='login-modal-form' onSubmit={handleSubmit}>
        <ul className="errors-list">
          {errors.map((error, idx) => (
            <li className="errors" key={idx}>{error}</li>
          ))}
        </ul>
        <label className="login-modal-labels">
          <input
            className="login-modal-username"
            placeHolder='Email'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="login-modal-labels">
          <input
            className="login-modal-password"
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
