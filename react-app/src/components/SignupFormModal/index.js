import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import { FcGoogle } from "react-icons/fc";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const ENV = process.env.REACT_APP_ENV;
	const OAUTH_URL =
	  ENV === "development"
		? "http://localhost:5000/api/auth/oauth_login"
		: "https://spinterest.onrender.com";

		
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};
	
	return (
		<div style={{backgroundColor: 'rgb(76, 76, 76)'}}>
		<div className="signup-modal">
		<img className="signup-modal-gif" src="https://i.giphy.com/media/h2zhIZFmeueAw/giphy.webp" alt="" />
		<h1 style={{color: 'white', fontSize: '43px', fontFamily: 'trebuchet ms'}}>Spinterest</h1>
		<p style={{color: 'white', margin: "0px"}}>Welcome, you'll never be bored again.</p>
			<form className='signup-modal-form' onSubmit={handleSubmit}>
				<div className="errors-list">
					{Object.values(errors).map((error, idx) => (
						<div className="signup-errors" key={idx}>{error}</div>
					))}
				</div>
				<label className="signup-modal-labels">
					<input
						className="signup-modal-username"
						placeHolder=' Email'
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				{console.log('--ERRORS', errors)}
				<label className="signup-modal-labels">
					<input
						className="signup-modal-username"
						placeHolder=' Username'
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				<label className="signup-modal-labels">
					<input
						className="signup-modal-password"
						placeHolder=' Password'
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<label className="signup-modal-labels">
					<input
						className="signup-modal-confirm-password"
						placeHolder=' Confirm Password'
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<button type="submit" className="signup-modal-button">Sign Up</button>
			</form>
			<a className="efghj3" href={OAUTH_URL} style={{marginTop: '0px', marginBottom: '10px'}}>
          <button className="oauth-button">
            <div className="efghj1">
              <FcGoogle size={26} />
            </div>
            <div className="efghj2">Sign up with Google</div>
          </button>
        </a>
			</div>
		</div>
	);
}

export default SignupFormModal;
