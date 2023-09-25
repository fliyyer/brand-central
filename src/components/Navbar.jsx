import { useState, useRef, useEffect } from "react";
import BrandCentral from '../assets/images/logo-brand-central.png';
import { Link } from "react-router-dom";
import DropNotification from "../layout/Notif/DropNotification";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openProfileDropdown, setOpenProfileDropdown] = useState(false);
    const [openNotificationDropdown, setOpenNotificationDropdown] = useState(false);

    const toggleProfileDropdown = () => {
        setOpenProfileDropdown(!openProfileDropdown);
    }
    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    };
    const toggleNotificationDropdown = () => {
        setOpenNotificationDropdown(!openNotificationDropdown);
    };

    const closeDropdowns = () => {
        setOpenDropdown(false);
        setOpenProfileDropdown(false);
    };

    const dropdownRef = useRef(null);
    const profileDropdownRef = useRef(null);
    const notificationDropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(false);
            }
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setOpenProfileDropdown(false);
            }
            if (
                notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)
            ) {
                setOpenNotificationDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const dropdownStyle = {
        position: 'absolute',
        top: 'calc(100% + 8px)',
        color: '#fff',
        right: 0,
        width: '208px',
        backgroundColor: '#3F4447',
        boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.10)',
        borderRadius: '4px',
        zIndex: 10,
    };


    return (
        <nav className="w-full bg-white shadow-md" style={{ backgroundColor: '#3F4447' }}>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-2">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-6 md:block">
                        <Link to='/'>
                            <img src={BrandCentral} alt="Brand Central" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-white rounded-md outline-none focus:border-text-white focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center font-roboto justify-center space-y-4 md:flex md:space-x-2 md:space-y-0">
                            <div className="relative">
                                <button
                                    ref={dropdownRef}
                                    className="px-6 font-medium leading-5 py-[10px] rounded-[100px] border-[1px] text-center text-primary-color border-primary-color tracking-[0.1px]"
                                    onClick={toggleDropdown}
                                >
                                    Create new document
                                </button>
                                {openDropdown && (
                                    <div style={dropdownStyle}>
                                        <ul className="uppercase font-sans text-sm leading-5">
                                            <li className="py-3 px-4 hover:bg-dropdown-hover hover:ease-out hover:duration-300 cursor-pointer">Sign Board</li>
                                            <li className="py-3 px-4 hover:bg-dropdown-hover hover:ease-out hover:duration-300 cursor-pointer">Banner</li>
                                            <li className="py-3 px-4 hover:bg-dropdown-hover hover:ease-out hover:duration-300 cursor-pointer">Social Media</li>
                                            <li className="py-3 px-4 hover:bg-dropdown-hover hover:ease-out hover:duration-300 cursor-pointer">Flyer</li>
                                            <li className="py-3 px-4 hover:bg-dropdown-hover hover:ease-out hover:duration-300 cursor-pointer">Namecard</li>
                                            <li className="py-3 px-4 hover:bg-dropdown-hover hover:ease-out hover:duration-300 cursor-pointer">Email Signature</li>
                                            <li className="py-3 px-4 hover:bg-dropdown-hover hover:ease-out hover:duration-300 cursor-pointer">Envelope</li>
                                            <li className="py-3 px-4 hover:bg-dropdown-hover hover:ease-out hover:duration-300 cursor-pointer">Proposal</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <button onClick={toggleNotificationDropdown} className="pl-4 pr-6 items-center gap-2 flex font-medium leading-5 py-[10px] rounded-[100px] border-[1px] text-center text-white tracking-[0.1px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M9 1.5C12.7275 1.5 15.75 4.53225 15.75 8.27325V15H2.25V8.27325C2.25 4.53225 5.2725 1.5 9 1.5ZM7.125 15.75H10.875C10.875 16.2473 10.6775 16.7242 10.3258 17.0758C9.97419 17.4275 9.49728 17.625 9 17.625C8.50272 17.625 8.02581 17.4275 7.67417 17.0758C7.32254 16.7242 7.125 16.2473 7.125 15.75Z" fill="white" />
                                </svg>
                                <p>Notification</p>
                            </button>
                            {openNotificationDropdown && (
                                <div ref={notificationDropdownRef} className="notif-dropdown">
                                    <DropNotification />
                                </div>
                            )}
                            <Link to={'/save-documents'} >
                                <button className="pl-4 pr-6 items-center mt-4 md:mt-0 gap-2 flex font-medium leading-5 py-[10px] rounded-[100px] border-[1px] text-center text-white tracking-[0.1px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M948.312 433.853C948.204 433.853 948.132 433.925 948.132 434.033C948.132 434.141 948.204 434.213 948.312 434.213H949.086C949.194 434.213 949.266 434.141 949.266 434.033C949.266 433.925 949.194 433.853 949.086 433.853H948.312ZM949.086 434.465H948.312C948.204 434.465 948.132 434.537 948.132 434.645C948.132 434.753 948.204 434.825 948.312 434.825H949.086C949.194 434.825 949.266 434.753 949.266 434.645C949.266 434.537 949.194 434.465 949.086 434.465ZM949.086 435.059H948.312C948.204 435.059 948.132 435.131 948.132 435.239C948.132 435.347 948.204 435.419 948.312 435.419H949.086C949.194 435.419 949.266 435.347 949.266 435.239C949.266 435.149 949.194 435.059 949.086 435.059ZM9.00001 0.449219C4.28401 0.449219 0.450012 4.28322 0.450012 8.99922C0.450012 13.7152 4.28401 17.5492 9.00001 17.5492C13.716 17.5492 17.55 13.7152 17.55 8.99922C17.55 4.28322 13.716 0.449219 9.00001 0.449219ZM6.10201 7.48722C6.19201 7.30722 6.37201 7.18122 6.57001 7.18122H7.74001V3.95922C7.74001 3.67122 7.97401 3.45522 8.24401 3.45522H9.73801C10.026 3.45522 10.242 3.68922 10.242 3.95922V7.19922H11.412C11.61 7.19922 11.79 7.32522 11.88 7.50522C11.952 7.68522 11.916 7.90122 11.79 8.06322L9.37801 10.6552C9.18001 10.8532 8.82001 10.8532 8.64001 10.6552L6.19201 8.04522C6.04801 7.90122 6.01201 7.68522 6.10201 7.48722ZM13.086 12.9052C13.086 13.3012 12.762 13.6252 12.366 13.6252H5.63401C5.23801 13.6252 4.91401 13.3012 4.91401 12.9052V11.3932C4.91401 10.9972 5.23801 10.6732 5.63401 10.6732C6.03001 10.6732 6.35401 10.9972 6.35401 11.3932V12.2032H11.682V11.3932C11.682 10.9972 12.006 10.6732 12.402 10.6732C12.798 10.6732 13.122 10.9972 13.122 11.3932V12.9052H13.086Z" fill="white" />
                                    </svg>
                                    <p>Saved Document</p>
                                </button></Link>
                            <button className="pl-4 pr-6 items-center gap-2 flex font-medium leading-5 py-[10px] rounded-[100px] border-[1px] text-center text-white tracking-[0.1px]" onClick={toggleProfileDropdown}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M10.5 15.75L9 17.25L7.5 15.75H3.74625C3.34942 15.75 2.96884 15.5924 2.68824 15.3118C2.40764 15.0312 2.25 14.6506 2.25 14.2537V3.74625C2.25 2.91975 2.91975 2.25 3.74625 2.25H14.2537C15.0802 2.25 15.75 2.91975 15.75 3.74625V14.2537C15.75 14.6506 15.5924 15.0312 15.3118 15.3118C15.0312 15.5924 14.6506 15.75 14.2537 15.75H10.5ZM4.76775 13.5H13.3853C12.902 12.8051 12.2576 12.2374 11.5073 11.8456C10.757 11.4538 9.92297 11.2494 9.0765 11.25C8.23003 11.2494 7.39601 11.4538 6.64568 11.8456C5.89536 12.2374 5.25103 12.8051 4.76775 13.5ZM9 9.75C9.34472 9.75 9.68606 9.6821 10.0045 9.55018C10.323 9.41827 10.6124 9.22491 10.8562 8.98116C11.0999 8.7374 11.2933 8.44802 11.4252 8.12954C11.5571 7.81106 11.625 7.46972 11.625 7.125C11.625 6.78028 11.5571 6.43894 11.4252 6.12046C11.2933 5.80198 11.0999 5.5126 10.8562 5.26884C10.6124 5.02509 10.323 4.83173 10.0045 4.69982C9.68606 4.5679 9.34472 4.5 9 4.5C8.30381 4.5 7.63613 4.77656 7.14384 5.26884C6.65156 5.76113 6.375 6.42881 6.375 7.125C6.375 7.82119 6.65156 8.48887 7.14384 8.98116C7.63613 9.47344 8.30381 9.75 9 9.75Z" fill="white" />
                                </svg>
                                <p>Account</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.34317 7.75781L4.92896 9.17203L12 16.2431L19.0711 9.17205L17.6569 7.75784L12 13.4147L6.34317 7.75781Z" fill="white" />
                                </svg>
                            </button>
                            {openProfileDropdown && (
                                <div ref={profileDropdownRef} className="dropown-profile">
                                    <ul className="uppercase font-sans text-sm leading-5">
                                        <Link to='/profile' className="py-3 px-4 flex items-center gap-2 hover:bg-dropdown-hover hover:ease-out hover:duration-300 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.375 21.6875C7.02459 21.6875 2.6875 17.3504 2.6875 12C2.6875 6.64959 7.02459 2.3125 12.375 2.3125C17.7254 2.3125 22.0625 6.64959 22.0625 12C22.0625 17.3504 17.7254 21.6875 12.375 21.6875ZM7.53125 12C7.53125 13.2846 8.04157 14.5167 8.94995 15.425C9.85833 16.3334 11.0904 16.8437 12.375 16.8437C13.6596 16.8437 14.8917 16.3334 15.8 15.425C16.7084 14.5167 17.2187 13.2846 17.2187 12H15.2812C15.2812 12.7708 14.9751 13.51 14.43 14.055C13.885 14.6001 13.1458 14.9062 12.375 14.9062C11.6042 14.9062 10.865 14.6001 10.32 14.055C9.77494 13.51 9.46875 12.7708 9.46875 12H7.53125Z" fill="#FBE60F" />
                                            </svg>
                                            Profile
                                        </Link>
                                        <Link to='/login' className="py-3 px-4 flex gap-2 hover:bg-dropdown-hover hover:ease-out hover:duration-300 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.375 21.6875C7.02459 21.6875 2.6875 17.3504 2.6875 12C2.6875 6.64959 7.02459 2.3125 12.375 2.3125C17.7254 2.3125 22.0625 6.64959 22.0625 12C22.0625 17.3504 17.7254 21.6875 12.375 21.6875ZM17.2187 15.875L22.0625 12L17.2187 8.125V11.0312H9.46875V12.9687H17.2187V15.875Z" fill="#FBE60F" />
                                            </svg>
                                            Logout</Link>
                                    </ul>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    );
}