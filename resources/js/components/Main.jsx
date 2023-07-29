import React from 'react'
import Header from './navbar/header';
import { Outlet } from 'react-router-dom';

function Main() {
    return (
        <div>
            <Header/>
            <Outlet />
        </div>
    )
}

export default Main
