import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setEmail, setName, setPassword } from '../features/UserSlice';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

function Login() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const { name, email, password } = user; // Destructuring user properties

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name,
            email,
            password,
            loggedIn: true,
        }));
    };

    const handleNameChange = (e) => {
        dispatch(setName(e.target.value));
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        if (emailRegex.test(newEmail)) {
            dispatch(setEmail(newEmail));
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        if (passwordRegex.test(newPassword)) {
            dispatch(setPassword(newPassword));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login Here</h1>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={handleNameChange}
                /><br />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleEmailChange}
                /><br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;













// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, setEmail, setName, setPassword } from '../features/UserSlice';

// // Regular expression for validating email format
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// // Regular expression for validating password strength (at least 8 characters with at least one uppercase letter, one lowercase letter, and one digit)
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// function Login() {
//     const init = useSelector((state) => state.user);
//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(login({
//             name: init.name,
//             email: init.email,
//             password: init.password,
//             loggedIn: true,
//         }));
//     };

//     const handleNameChange = (e) => {
//         dispatch(setName(e.target.value));
//     };

//     const handleEmailChange = (e) => {
//         const newEmail = e.target.value;
//         if (emailRegex.test(newEmail)) {
//             dispatch(setEmail(newEmail));
//         }
//     };

//     const handlePasswordChange = (e) => {
//         const newPassword = e.target.value;
//         if (passwordRegex.test(newPassword)) {
//             dispatch(setPassword(newPassword));
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h1>Login Here</h1>
//                 <input
//                     type="text"
//                     placeholder="Enter Name"
//                     value={init.name}
//                     onChange={handleNameChange}
//                 /><br />
//                 <input
//                     type="email"
//                     placeholder="Enter Email"
//                     value={init.email}
//                     onChange={handleEmailChange}
//                 /><br />
//                 <input
//                     type="password"
//                     placeholder="Enter Password"
//                     value={init.password}
//                     onChange={handlePasswordChange}
//                 /><br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Login;








// import React from 'react'
// // import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { login, setEmail, setName, setPassword } from '../features/UserSlice'

// function Login() {
//     // const [name, setName] = useState("")
//     // const [email, setEmail] = useState("")
//     // const [password, setPassword] = useState("")

//     const init = useSelector((state) => {
//         return state.user
//     });
//     const dispatch = useDispatch()

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         dispatch(login({
//             name: init.name,
//             email: init.email,
//             password: init.password,
//             loggedIn: true,
//         }))
//     }
//     return (
//         <div>
//             <form onSubmit={(e) => handleSubmit(e)}>
//                 <h1>Login Here</h1>
//                 <input type='text'
//                     placeholder='Enter Name'
//                     value={init.name}
//                     onChange={(e) => dispatch(setName(e.target.value))} /><br />
//                 <input type='email'
//                     placeholder='Enter Email'
//                     value={init.email}
//                     onChange={(e) => dispatch(setEmail(e.target.value))} /><br />
//                 <input type='password'
//                     placeholder='Enter Password'
//                     value={init.password}
//                     onChange={(e) => dispatch(setPassword(e.target.value))} /><br />
//                 <button type='submit'>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Login