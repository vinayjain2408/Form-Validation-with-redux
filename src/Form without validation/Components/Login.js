import React from 'react';
import "./Login.css"
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setName, setPassword, login ,setPara,setparaEmail,setSubmit, setnamePara} from '../features/UserSlice';

function Login() {
    const init = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/

    const handleNameChange = (e) => {
        dispatch(setName(e.target.value));
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        dispatch(setEmail(newEmail));
        if ( emailRegex.test(newEmail)) {
            console.log("Email success");
            dispatch(setparaEmail("Email is correct"))
        } else {
            console.log("Email fail");
            dispatch(setparaEmail("Give a correct Email "))
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        dispatch(setPassword(newPassword));

        if ( passwordRegex.test(newPassword)) {
            console.log("Password success");
            dispatch(setPara("password Success"))
        } else {
            console.log("Password fail");
            dispatch(setPara("Give a correct password"))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!init.name || !init.email || !init.password) {
            dispatch( setnamePara("required"));
            dispatch(setparaEmail("Required"));
            dispatch(setPara("Required"));
        }
        // if(!init.name){
        //     dispatch(setnamePara("requires"))
        // }
        // if(!init.email){
        //     dispatch(setnamePara("requires"))
        // }
        // if(!init.password){
        //     dispatch(setnamePara("requires"))
        // }
        else{
            dispatch(setSubmit(`${init.name} your form is submitted`));
            dispatch(setEmail(''));
            dispatch(setName(''));
            dispatch(setPassword(''));
            dispatch(setPara(''))
            dispatch(setparaEmail(''))
        }

        
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Login Here</h1>
                <input
                    type='text'
                    placeholder='Enter Name'
                    value={init.name}
                    onChange={handleNameChange}
                /><br />
                  {init.namePara && <p>{init.namePara}</p>}
                <input
                    type='email'
                    placeholder='Enter Email'
                    value={init.email}
                    onChange={handleEmailChange}
                /><br />
                  {init.paraEmail && <p>{init.paraEmail}</p>}
                <input
                    type='password'
                    placeholder='Enter Password'
                    value={init.password}
                    onChange={handlePasswordChange}
                /><br />
               {init.para && <p>{init.para}</p>}


                <button type='submit'>Submit</button>
            {init.submit && <h3>{init.submit}</h3>}
            </form>
            
        </div>
    );
}

export default Login;