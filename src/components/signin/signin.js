import React, { useContext } from 'react';
import { ImFacebook, ImGithub, ImGoogle } from "react-icons/im";
import { AuthContext } from '../../contexts/contexts';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

    const { logInUser, googleSignIn, gitSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    
    // handle register
    const signInHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        logInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate('/post')
            })
            .catch(error => {
                console.log(error);
            })
    }

    // google login
    const googleHandler = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user
            console.log(user);
            navigate('/post')
        })
        .catch(error => {
            console.log(error);
        })
    }

    // github login
    const gitSignInHandle = () =>{
        gitSignIn()
        .then(result => {
            const user = result.user
            console.log(user);
            navigate('/post')
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='max-w-md p-5 rounded dark:bg-slate-800 mx-auto mt-20 bg-white shadow-md'>
            <form onSubmit={signInHandler}>
                <h2 className='text-2xl font-bold text-slate-800 dark:text-white mb-5'>Sign In</h2>

                <div className='relative mb-3'>
                    <label htmlFor="" className='text-slate-800 mb-2 block font-semibold dark:text-white'>Email</label>
                    <input name='email' className='dark:text-white h-9 block w-full rounded bg-transparent border border-slate-300 px-4 outline-none text-sm' type="email" required />
                </div>

                <div className='relative mb-3'>
                    <label htmlFor="" className='text-slate-800 mb-2 block font-semibold dark:text-white'>Password</label>
                    <input name='password' className='dark:text-white h-9 block w-full rounded bg-transparent border border-slate-300 px-4 outline-none text-sm' type="password" />
                </div>

                <button type='submit' className='transition-all font-semibold w-full dark:bg-purple-800 bg-slate-800 text-white rounded block p-2'>Sign in</button>

            </form>

            <div className='mt-6'>
                <ul className='flex gap-2 items-center justify-center'>
                    <button onClick={googleHandler} className='h-9 w-9 grid focus:ring-1 focus:ring-inset focus:ring-black place-content-center rounded-full dark:bg-slate-100 dark:text-slate-800 shadow-lg'>
                        <ImGoogle />
                    </button>
                    <button onClick={gitSignInHandle} className='h-9 w-9 grid focus:ring-1 focus:ring-inset focus:ring-black place-content-center rounded-full dark:bg-slate-100 dark:text-slate-800 shadow-lg'>
                        <ImGithub />
                    </button>
                    <button className='h-9 w-9 grid focus:ring-1 focus:ring-inset focus:ring-black place-content-center rounded-full dark:bg-slate-100 dark:text-slate-800 shadow-lg'>
                        <ImFacebook/>
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default SignIn;