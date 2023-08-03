import React from "react";
import { NavLink } from 'react-router-dom'
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    PowerIcon,
    Bars2Icon,
} from "@heroicons/react/24/outline";
import CardMain from "../core/card";
// import NavGuest from "./navGuest";

// profile menu component
const profileMenuItems = [
    {
        label: "Thông Tin Tài Khoản",
        icon: UserCircleIcon,
        href: '/'
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
        href: '/login'
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    // const closeMenu = () => setIsMenuOpen(false);
    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <div className="relative flex items-center mx-auto text-blue-gray-900">
                <NavLink
                    to="/"
                    className="py-1 ml-2 font-medium cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>


                </NavLink>
                <NavLink
                    to="/"
                    className="ml-2 cursor-pointer py-1.5 font-medium "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>



                </NavLink>
                <NavLink
                    to="/"
                    className="ml-2 cursor-pointer py-1.5 font-medium "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg>


                </NavLink>
                <NavLink
                    to="/"
                    className="mr-4 ml-2 cursor-pointer py-1.5 font-medium "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                </NavLink>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-blue-500 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </div>


            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon, href }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <NavLink key={key}
                            to={href}
                            className={`flex items-center gap-2 rounded outline-none ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                            color={isLastItem ? "red" : "inherit"}
                        >
                            <span className="p-1 px-2">{label}</span>
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                        </NavLink>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

// nav list menu
// const navListMenuItems = [
//     {
//         title: "VỊ TRÍ",
//         href: "/"

//     },
//     {
//         title: "DANH SÁCH THỢ",
//         href: "/"
//     },

// ];

// function NavListMenu() {
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//     const renderItems = navListMenuItems.map(({ title, href }) => (
//         <NavLink to={href} key={title}>
//             <Typography variant="h6" color="blue-gray" className="mb-1">
//                 {title}
//             </Typography>
//         </NavLink>
//     ));

//     return (
//         <React.Fragment>
//             <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen} >
//                 <MenuHandler>
//                     <Typography as="a" href="#" variant="small" className="font-normal">
//                         <MenuItem className="items-center hidden gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
//                             <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Thông Tin Thợ {" "}
//                             <ChevronDownIcon
//                                 strokeWidth={2}
//                                 className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
//                                     }`}
//                             />
//                         </MenuItem>
//                     </Typography>
//                 </MenuHandler>
//                 <MenuList className="hidden w-[10rem] gap-3 overflow-visible lg:grid">
//                     <ul className="flex flex-col w-full gap-1 ">
//                         {renderItems}
//                     </ul>
//                 </MenuList>
//             </Menu>
//             <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
//                 <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Thông Tin Thợ {" "}
//             </MenuItem>
//             <ul className="flex flex-col w-full gap-1 ml-6 lg:hidden">
//                 {renderItems}
//             </ul>
//         </React.Fragment>
//     );
// }

// nav list component
const navListItems = [

    {
        id: 1, label: "Trang Chủ",
        icon: CodeBracketSquareIcon,
        href: '/'
    },
    {
        id: 2,
        label: "Tìm Kiếm",
        icon: UserCircleIcon, href: '/tim-khach-hang'
    },
    // {
    //     id: 3,
    //     label: "Báo Giá",
    //     icon: CubeTransparentIcon, href: '/blog'
    // },
    // {
    //     id: 4,
    //     label: "Sản Phẩm",
    //     icon: CodeBracketSquareIcon, href: '/'
    // },
];

function NavList() {
    return (
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">

            {navListItems.map(({ label, icon, href }, key) => (
                <NavLink key={key} to={href} className="font-normal">
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                        {label}
                    </MenuItem>
                </NavLink>
            ))}
            {/* <NavListMenu /> */}
        </ul>
    );
}

function NavbarDefault() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <Navbar className="w-full max-w-full p-2 mx-auto mt-2 text-black-400 lg:pl-6 bg-blue-gray-200">
            <div className="relative flex items-center justify-between h-8 mx-auto text-blue-gray-900">

                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden lg-max:text-left"
                >
                    <Bars2Icon className="w-6 h-6" />
                </IconButton>
                <div className="hidden p-0 m-0 lg:flex">
                    <NavLink
                        to="/"
                        className="mr-4 ml-2 cursor-pointer py-1.5 font-medium "
                    >
                        <img className="w-8 h-8" src="https://thoviet.com.vn/wp-content/uploads/2023/03/cropped-Logo-Tho-Viet-bg-3.png" alt="LogoTV" />
                    </NavLink>
                    <NavList />
                </div>
                <CardMain/>
                <div>
                    <ProfileMenu />
                </div>
            </div>


            <Collapse open={isNavOpen} className="overflow-scroll ">
                <CardMain/>
                <NavList />
            </Collapse>

        </Navbar>
    );
}
export default NavbarDefault
