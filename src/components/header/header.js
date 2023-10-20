import React, { useContext, useEffect, useState } from 'react';
import logo from '../../lockup.svg'
import { ImUser, ImSun } from "react-icons/im";
import { HiMoon } from "react-icons/hi";

import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/contexts';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const [theme, setTheme] = useState('light')

    const signOutHandler = () =>{
        logOut()
        .then(() =>{
            alert('sign out')
        })
        .catch(error =>{
            console.log(error);
        })
    }

    useEffect(() =>{
        if(localStorage.getItem('theme') === null){
            localStorage.setItem('theme', 'light')
        }
    }, [])

    useEffect(() =>{
        const html = document.querySelector('html')

        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark')
            setTheme('dark');
        }else{
            html.classList.remove('dark')
            setTheme('light');
        }
    }, [theme])

    const handleThemeSwitch = () =>{
        if (localStorage.getItem('theme') === 'light') {
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
        }else{
            localStorage.setItem('theme', 'light')
            setTheme('light')
        }
    }
    

    const linkStyle = {
        common: 'text-sm font-medium text-slate-800 dark:text-white dark:hover:bg-gray-800 hover:text-slate-900 py-2 px-4 rounded dark:hover:text-white hover:bg-slate-100',

        active: 'bg-slate-100 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-white dark:hover:bg-gray-800 dark:hover:text-white hover:text-slate-900 py-2 px-4 rounded hover:bg-slate-100',
    };
    return (
        <div className='py-2 bg-white dark:bg-gray-900 border-b  border-gray-100'>
            <div className='max-w-7xl mx-auto px-3'>
                <div className='flex flex-1 items-center justify-between'>
                    <div className='flex items-center gap-12'>
                        <div className='flex-shrink-0'>
                            <img className='h-9 w-36 block' src={logo} alt="logo" />
                        </div>
                        <nav className='flex items-center gap-2'>
                            <NavLink to="register" className={({ isActive }) => isActive ? linkStyle.active : linkStyle.common }>
                                Register
                            </NavLink>

                            <NavLink className={({ isActive }) => isActive ? linkStyle.active : linkStyle.common} to='sign'>Sign in</NavLink>
                            <NavLink className={({ isActive }) => isActive ? linkStyle.active : linkStyle.common} to='post'>Post</NavLink>
                        </nav>
                    </div>
                    
                    <div className='flex gap-6'>
                        <button className='text-slate-800 dark:text-white' onClick={handleThemeSwitch}>
                            {
                                (theme === 'light') ? <ImSun /> : <HiMoon />
                            }
                             
                        </button>
                        <div className='relative group'>
                            <div className='flex gap-2 items-center'>
                                <button className='text-slate-600 dark:text-white h-8 w-8 grid place-content-center rounded-full border-slate-200 border-2'>
                                    <ImUser />
                                </button>
                                {
                                    user?.email ? <span className='dark:text-white text-sm text-slate-800'>{user?.email}</span>: ''
                                }

                                {
                                    (!user?.email) && <span span className='dark:text-white text-sm text-slate-800'>{user?.displayName}</span>
                                }
                            </div>
                            
                            <div className='hidden group-hover:block w-36 z-10 bg-white absolute py-2 shadow-lg left-0 rounded'>
                                <p className='px-3 cursor-pointer' onClick={signOutHandler}>Sign Out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;