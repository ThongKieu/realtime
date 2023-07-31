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
            <MenuHandler>
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
            </MenuHandler>

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
const navListMenuItems = [
    {
        title: "VỊ TRÍ",
        href: "/"

    },
    {
        title: "DANH SÁCH THỢ",
        href: "/"
    },

];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(({ title, href }) => (
        <NavLink to={href} key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                </Typography>
        </NavLink>
    ));

    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen} >
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="items-center hidden gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
                            <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Thông Tin Thợ {" "}
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden w-[10rem] gap-3 overflow-visible lg:grid">
                    <ul className="flex flex-col w-full gap-1 ">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
                <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Thông Tin Thợ {" "}
            </MenuItem>
            <ul className="flex flex-col w-full gap-1 ml-6 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

// nav list component
const navListItems = [

    {
        id: 1, label: "Trang Chủ",
        icon: CodeBracketSquareIcon,
        href: '/'
    },
    {
        id: 2,
        label: "Tìm Khách Hàng",
        icon: UserCircleIcon, href: '/tim-khach-hang'
    },
    {
        id: 3,
        label: "Báo Giá",
        icon: CubeTransparentIcon, href: '/blog'
    },
    {
        id: 4,
        label: "Sản Phẩm",
        icon: CodeBracketSquareIcon, href: '/'
    },
];

function NavList() {
    return (
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">

            {navListItems.map(({ label, icon, href }, key) => (
                <NavLink key={key} to={href} className="font-normal ">
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                        {label}
                    </MenuItem>
                </NavLink>
            ))}
            <NavListMenu />
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
        <Navbar className="max-w-screen-xl p-2 mx-auto mt-2 lg:rounded-full lg:pl-6 bg-blue-gray-200">
            <div className="relative flex items-center mx-auto text-blue-gray-900">
                <NavLink
                    to="/"
                    className="mr-4 ml-2 cursor-pointer py-1.5 font-medium "
                >
                    <img className="w-8 h-8" src="https://thoviet.com.vn/wp-content/uploads/2023/03/cropped-Logo-Tho-Viet-bg-3.png" alt="LogoTV" />
                </NavLink>
                <div className="absolute hidden top-1/4 left-1/4 -translate-x-1/4 -translate-y-1/4 lg:block">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden lg-max:text-left"
                >
                    <Bars2Icon className="w-6 h-6" />
                </IconButton>
                <ProfileMenu />
            </div>
            <Collapse open={isNavOpen} className="overflow-scroll ">
                <NavList />
            </Collapse>
        </Navbar>
    );
}
export default NavbarDefault
