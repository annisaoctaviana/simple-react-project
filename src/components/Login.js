import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        navigate("/home");
        
    }

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email" name="email"></input>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" id="password" name="password"></input>
                <button type="submit"  onClick={handleSubmit}>Log In</button>
            </form>
        </div>  
    )
}