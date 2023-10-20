import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/contexts';

const Register = () => {
    const { createUser, verifyUser } = useContext(AuthContext)
    
    // handle register
    const createHandleRegister = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })

        verifyUser()
        .then(() => {
            alert("please email check")
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='max-w-md p-5 rounded dark:bg-slate-800 mx-auto mt-20 bg-white shadow-md'>
            <form onSubmit={createHandleRegister}>
                <h2 className='text-2xl font-bold text-slate-800 dark:text-white mb-5'>Registration</h2>

                <div className='relative mb-3'>
                    <label htmlFor="" className='text-slate-800 mb-2 block font-semibold dark:text-white'>Email</label>
                    <input name='email' className='dark:text-white h-9 block w-full rounded bg-transparent border border-slate-300 px-4 outline-none text-sm' type="email" required />
                </div>

                <div className='relative mb-3'>
                    <label htmlFor="" className='text-slate-800 mb-2 block font-semibold dark:text-white'>Password</label>
                    <input name='password' className='dark:text-white h-9 block w-full rounded bg-transparent border border-slate-300 px-4 outline-none text-sm' type="password" />
                </div>

                <button type='submit' className='transition-all font-semibold w-full dark:bg-purple-800 bg-slate-800 text-white rounded block p-2'>Registration</button>
            </form>
        </div>
    );
};

export default Register;