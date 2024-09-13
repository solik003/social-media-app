import './Login.css';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { useContext, useRef } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';

const Login = () => {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            {email: email.current.value, password: password.current.value },
            dispatch
        );
    };
    console.log(user);
  return (
    <div className='login'> 
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginlogo">MySocial</h3>
                <span className="loginDesc">Connect with friends and the world around you on MySocial.</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                    <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password}/>
                    <button className="loginButton" type="submit" disabled={isFetching}>
                        {isFetching ? <CircularProgress color="white" size="20px" /> : 'Log in' }
                    </button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                        {isFetching ? <CircularProgress color="white" size="20px" /> : 'Create a New Account' }
                    </button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Login

