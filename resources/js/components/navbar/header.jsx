import React from 'react'
import NavbarDefault from './nav'
import NavGuest from './navGuest'
// import {
//     Card,
//     CardFooter,
//     Typography,
//     Tooltip,
//     Avatar
// } from "@material-tailwind/react";
function Header() {
    return (
        <div className='flex mx-2 bg-slate-500'>

            <NavbarDefault />
            {/* <NavGuest/> */}
        </div>
    )
}

export default Header
