import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/main";
import SignIn from "../components/signin/signin";
import Register from "../components/register/register";
import Post from "../components/post/post";
import PrivateRouter from "./privateRouter";
import Details from "../components/details/details";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Register></Register>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'sign',
                element: <SignIn></SignIn>
            },
            {
                path: 'post',
                loader: (() =>{
                    return fetch("https://jsonplaceholder.typicode.com/posts")
                }),
                element: <PrivateRouter><Post></Post></PrivateRouter>
            },
            {
                path: 'post/:postRead',
                loader: (({params}) =>{
                    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postRead}`)
                }),
                element: <PrivateRouter><Details></Details></PrivateRouter>
            },
            {
                path: '*',
                element: <h1>Not Found Page</h1>
            },
        ]
    }
])