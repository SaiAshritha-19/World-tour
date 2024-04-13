import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";
import Calendar from 'react-calendar';
import { formatDate } from "./Home";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        // setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        navigate("/login")

    }
    const [defaultTxt, setDefault] = useState({ 1: true, 2: true })
    const [showCalendar, setShowCalendar] = useState(false);
    const handleIconClick = (type) => {
        if (type === 1)
            setShowCalendar(!showCalendar);

    };

    const [date, setDate] = useState({ 1: new Date(), 2: new Date() });


    const handleDateChange = (newDate, type) => {
        setDate(prevDate => ({
            ...prevDate,
            [type]: newDate
        }));
        if (type === 1) {
            setShowCalendar(false);
            setDefault(prev => (
                { ...prev, [type]: false }
            ))
        }
    };

    const navigate = useNavigate()
    console.log(!validName || !validPwd, "adknasjk")

    return (
        <div className='main-container2'>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section className="section-container">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Full Name:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            className="inputs"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => { console.log("dfsf"); setUserFocus(true) }}
                            onBlur={() => setUserFocus(false)}
                        />
                        <label htmlFor="username">Contact Number:</label>


                        <input
                            className="inputs"
                            type="number"
                            id="contact"
                            autoComplete="off"
                            onChange={(e) => setContact(e.target.value)}
                            value={contact}
                            required
                            aria-describedby="uidnote"

                        />
                        <label htmlFor="username">
                            Date of Birth:

                        </label>
                        <div style={{ display: "flex", margin: 0, paddingRight: "10px", paddingLeft: "8px", width: "100%", borderRadius: "0.5rem", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#d2d2d2" }}>
                            <input type="text" id="date-input3" value={defaultTxt[1] ? "dd/mm/yyyy" : formatDate(date[1])} className="inputs" placeholder="mm/dd/yyyy" />
                            <AiOutlineCalendar size={20} onClick={() => handleIconClick(1)} />
                        </div>
                        {showCalendar && (
                            <div style={{ position: 'absolute', zIndex: 999, top: '70', right: 100 }}
                            >
                                <Calendar
                                    onChange={(newDate) => handleDateChange(newDate, 1)}
                                    value={date[1]}
                                />
                            </div>

                        )}
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <label htmlFor="email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        <input
                            className="inputs"
                            type="email"
                            id="email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required

                            aria-describedby="uidnote"

                        />

                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            className="inputs"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor="gender">
                            Gender:

                        </label>
                        <input
                            className="inputs"
                            type="text"
                            id="gender"
                            autoComplete="off"
                            onChange={(e) => setGender(e.target.value)}
                            value={gender}
                            required
                            aria-describedby="uidnote"

                        />

                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
                        {/* <button disabled={!validName || !validPwd ? true : false}>Sign Up</button> */}
                        <button type='submit' disabled={!validName || !validPwd || !validEmail ? true : false} style={{ marginTop: "20px", backgroundColor: "#4e7cd1", borderRadius: "10px", color: "white" }} className="submit-button">Register</button>

                    </form>
                    <p style={{ marginTop: "5px" }}>
                        Already registered? <button className="login-btn" onClick={() => navigate("/login")}>Login</button>

                    </p>
                </section>
            )}
        </div>
    )
}

export default Register