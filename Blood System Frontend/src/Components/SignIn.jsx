import React, { useState } from 'react'
import '../CSS/Pages.css';
import Service from '../Services/Service';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

    const [username, setUsername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    let button = "login";
    let formChange = () => {

        const signUpForm = document.getElementById("sign-up-form");
        signUpForm.classList.toggle("display-none");
        const login = document.getElementById("login");
        login.classList.toggle("display-none");

        const signUp = document.getElementById("sign-up");
        signUp.classList.toggle("display-flex");
        const loginForm = document.getElementById("login-form");
        loginForm.classList.toggle("display-flex");

        const col1 = document.getElementById("Column-1");
        const col2 = document.getElementById("Column-2");
        col1.classList.toggle("order");

        if (button === "login") {
            col1.classList.add("bounce-left");
            col1.classList.remove("bounce-right");

            col2.classList.add("bounce-right");
            col2.classList.remove("bounce-left");

            button = "signup";
        } else {
            col1.classList.add("bounce-right");
            col1.classList.remove("bounce-left");

            col2.classList.add("bounce-left");
            col2.classList.remove("bounce-right");

            button = "login";
        }


        const user = document.getElementById("user");
        const userSpan = document.getElementById("user-span");
        const email1 = document.getElementById("email-1");
        const emailSpan1 = document.getElementById("span-email-1");
        const email2 = document.getElementById("email-2");
        const emailSpan2 = document.getElementById("span-email-2");
        const password1 = document.getElementById("password-1");
        const passwordSpan1 = document.getElementById("span-password-1");
        const password2 = document.getElementById("password-2");
        const passwordSpan2 = document.getElementById("span-password-2");

        user.addEventListener("input", () => {
            if (user.value) {
                userSpan.classList.add("focus-span");
            } else {
                userSpan.classList.remove("focus-span");
            }
        })

        email1.addEventListener("input", () => {
            if (email1.value) {
                emailSpan1.classList.add("focus-span");
            } else {
                emailSpan1.classList.remove("focus-span");
            }
        })
        email2.addEventListener("input", () => {
            if (email2.value) {
                emailSpan2.classList.add("focus-span");
            } else {
                emailSpan2.classList.remove("focus-span");
            }
        })

        password1.addEventListener("input", () => {
            if (password1.value) {
                passwordSpan1.classList.add("focus-span");
            } else {
                passwordSpan1.classList.remove("focus-span");
            }
        })

        password2.addEventListener("input", () => {
            if (password2.value) {
                passwordSpan2.classList.add("focus-span");
            } else {
                passwordSpan2.classList.remove("focus-span");
            }
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const details = { username, email, password }
        Service.signUp(details).then((res) => {
            console.log(res);
            if (res.data) {
                let loginBtn = document.querySelector("#loginBtn");
                loginBtn.click()
            }
        })
    };

    const navigate = useNavigate();

    const loginSubmit = (e) => {

        e.preventDefault();

        const details = { email, password }
        console.log(details.email,details.password);
        Service.login(details).then((res) => {
            console.log(res);
            if (res.data) {
                navigate({
                    pathname: "/"
                })
            }
        });
    }



    return (


        <>
            <div className='wrapper'>
                <main>
                    <section className='section'>
                        <div id='Page'>
                            <div id='Column-1' className='Slide-1'>
                                <div id='sign-up-form' className='Form'>
                                    <h1>Sign Up</h1>
                                    <form
                                        className='Form-1'
                                        onSubmit={handleSubmit}>
                                        <label className='fields'>
                                            <input id='user'
                                                className='input'
                                                name='user' type={"text"} placeholder="" autoComplete="off"
                                                onChange={(e) => {
                                                    setUsername(e.target.value)
                                                }}
                                                required
                                            />
                                            <span id='user-span'>UserName</span>
                                        </label>
                                        <label className='fields'>
                                            <input className='input'
                                                id='email-1' name='email-1' type={"email"} placeholder="" autoComplete="off"
                                                onChange={(e) => {
                                                    setemail(e.target.value)
                                                }}
                                                required
                                            />
                                            <span id='span-email-1'>Email</span>
                                        </label>
                                        <label className='fields'>
                                            <input id='password-1' className='input'
                                                name='password-1' type={"password"} placeholder=""
                                                onChange={(e) => {
                                                    setpassword(e.target.value)
                                                }}
                                                required
                                            />
                                            <span id='span-password-1'>Password</span>
                                        </label>
                                        <input className='input'
                                            type={"submit"} value="SignUp"
                                        />
                                    </form>
                                </div>

                                <div id='login-form' className='display-none'>
                                    <h1>Login</h1>
                                    <form
                                        className='Form-1'
                                        onSubmit={loginSubmit}>
                                        <label className='fields'>
                                            <input className='input'
                                                id='email-2' name='email-2' type={"email"} placeholder="" autoComplete="off"
                                                onChange={(e) => {
                                                    setemail(e.target.value)
                                                }}
                                                required
                                            />
                                            <span id='span-email-2'>Email</span>
                                        </label>
                                        <label className='fields'>
                                            <input className='input'
                                                id='password-2' name='password-2' type={"password"} placeholder=""
                                                onChange={(e) => {
                                                    setpassword(e.target.value)
                                                }}
                                                required
                                            />
                                            <span id='span-password-2'>Password</span>
                                        </label>
                                        <a href='#' style={{ textDecoration: "none", color: "black" }}>Forgot Password?</a>
                                        <input className='input'
                                            type={"submit"} value="Login" />
                                    </form>
                                </div>
                            </div>

                            <div id='Column-2' className='Slide-2'>
                                <div id='login' className='info'>
                                    <h2>Already a member?</h2>
                                    <button id='loginBtn' className='Button'
                                        onClick={formChange}>Login</button>
                                </div>
                                <div id='sign-up' className='info display-none'>
                                    <h2>Don't Have an Account?</h2>
                                    <button className='Button'
                                        onClick={formChange}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <div className='codepen-footer'>
                    <small>Created by <a href="https://twitter.com/iamgurucharan15" target="_top">@GC</a></small>
                    <small>SAVE BLOOD..!  SAVE LIFE..!</small>
                    <small>LifeShare'23</small>
                </div>

            </div>

        </>
    )
}
