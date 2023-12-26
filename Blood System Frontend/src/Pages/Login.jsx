import React from 'react'
import SignIn from '../Components/SignIn';
import '../CSS/Home.css';

export default function Login() {
    return (
        <>
            <div className='overall'>

                <div className='wallpaper' />

                <div className='content'>
                    <SignIn />
                </div>

            </div>
        </>
    )
}
