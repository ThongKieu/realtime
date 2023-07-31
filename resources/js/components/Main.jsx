import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './navbar/header';
import FloatingButton from './core/floatingButton';


function Main() {
    return (
        <div>
            <Header />
            <div className='mx-5'>
                <Outlet />
            </div>
            <div className='fixed bottom-2 right-2'>
                <FloatingButton />
            </div>
        </div>
    )
}

export default Main
