
import { Link } from "@inertiajs/react";
import Dropdown from '@/Components/Dropdown';
import { CgProfile} from 'react-icons/cg';
import logo from '../imgs/logo.png'
import { menuShow, showLoginOrSignup } from "@/script";
import { IoSearchCircle,IoSearch } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { router } from '@inertiajs/react'
import LoginOrSignup from "@/Pages/Auth/LoginOrSignup";


export default function Header({auth}){
    menuShow();
    showLoginOrSignup();
    //console.log(auth)
    const hanldeClickLogout = ()=>{
            router.post('/logout')
    }
	return(
        <>
    		<header className="header wrap">
        		<div className="header_logo-area">
                    <Link href="/">
        			 <img src={logo} alt="" className="header_logo-area_img" />
                    </Link>
        		</div>
        		<div className="header_ul-area">
        			<div className="header_ul-area_li">
        				<Link href="about" className="header_ul-area_li_about">ABOUT US</Link>
        			</div>
        			<div className="header_ul-area_li">  
                        <div className="header_ul-area_li_user js-show-items">
                            <span className="inline-flex rounded-md">
                                <CgProfile className='header_ul_li_icon'/>
                            </span>
                        </div>
                        <ul className="header_ul-area_li_user_items js-items">
                            {auth.user ? (
                            <>
                                <li className="header_ul-area_li_user_items_li">
                                   <Link href={route('dashboard')}> Profile </Link> 
                                </li>
                                <li className="header_ul-area_li_user_items_li">
                                   <button onClick={hanldeClickLogout}> Logout </button> 
                                </li>
                            </>
                            ) : (
                            <>
                                <li className="header_ul-area_li_user_items_li js-show-loginOrsignup">
                                    Sign Up 
                                </li>
                                <li className="header_ul-area_li_user_items_li js-show-loginOrsignup">
                                   Log in
                                </li>
                            </>
                        )}
                        </ul>
                    </div>
        		</div>  
            </header>
            <LoginOrSignup auth={auth}/ >
        </>
		)
}

function Header_sp({auth}){
    return(

        <header className="header-sp">
            <div className="header-sp_icon-area">
                <Link href="/" className="header-sp_icon-area_link">
                    <IoSearch/>
                </Link>
                <p className="header-sp_icon-area_title">Explore</p>
            </div>
            <div className="header-sp_icon-area">
                <Link href="/" className="header-sp_icon-area_link">
                    <FcLike />
                </Link>
                <p className="header-sp_icon-area_title">Wishlists</p>
            </div>
            <div className="header-sp_icon-area">
                {auth.user?(
                    <>
                        <Link href="/" className="header-sp_icon-area_link">
                         <CgProfile />
                        </Link>
                        <p className="header-sp_icon-area_title">Logout</p>
                    </>

                ):(
                    <>
                        <Link href="/" className="header-sp_icon-area_link">
                         <CgProfile />
                        </Link>
                        <p className="header-sp_icon-area_title">Login</p>
                    </>
                )}
            </div>
            
                
            </header>
        )
}

export {Header_sp};