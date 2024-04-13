// import React from 'react'
// import "./Login.css"
// export default function Login() {
//     return (
//         <div className='main-container1'>
//             <div className='login-container'>


//                 <div className="input-container ">
//                     <input type="text" id="date-input1" className="input" placeholder="mm/dd/yyyy" />

//                 </div>
//                 <div className="input-container ">
//                     <input type="text" onChange={e => console.log(e.target.value)} className="input " placeholder="How Many" />

//                 </div>
//                 <div className="input-container ">
//                     <input type="text" id="date-input2" className="input" placeholder="mm/dd/yyyy" />

//                 </div>
//                 <button type='submit' style={{ marginTop: "20px", backgroundColor: "orange", borderRadius: "10px", color: "white", padding: "8px" }} className="btn btn-book">Book Now</button>


//             </div>
//         </div>

//     )
// }
import { useRef, useState, useEffect, useContext } from 'react';
import "./Login.css"
import { useNavigate, useNavigation } from 'react-router-dom';


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(user, pwd)

        navigate("/")
    }

    return (
        <div className='main-container1'>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Log In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Email:</label>
                        <input
                            className='inputs'
                            type="email"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            className='inputs'
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button type='submit' style={{ marginTop: "20px", backgroundColor: "#4e7cd1", borderRadius: "10px", color: "white" }} className="submit-button">Login</button>


                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </div>
    )
}

export default Login