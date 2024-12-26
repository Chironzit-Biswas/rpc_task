"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import {useState} from "react";



export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)


    const navlist=[
        {
            label:'Home',
            link:'/'
        },
        {
            label:'Price',
            link:'/price'
        },
        {
            label:'Client',
            link:'/client'
        },
        {
            label:'Faq',
            link:'/faq'
        },
        {
            label:'Contact',
            link:'/contact'
        }

    ]
    return (
        <>
           {/* For Desktop*/}

            <div className={'bg-black text-white text-2xl'}>

                <marquee>
                  {/* Moving HeadLine*/}
                    <p>
                        <strong> Drive for us: Start, just finish 30 trips, and get $1000 bonus. <a
                            href="https://rpclimo.com/driver-registration/">Sign up today!</a>&nbsp; ★&nbsp;
                            <strong> Drive for us: Start, just finish 30 trips, and get $1000 bonus. <a
                                href="https://rpclimo.com/driver-registration/">Sign up today!</a>&nbsp; ★&nbsp;
                                <span className={'text-red-600'}>Please download our app from App store and Play store.For drivers RPC DRIVER app and for riders RPC LIMO app , Download today! ★&nbsp;</span> Drive
                                for us: Start, just finish 30 trips, and get $1000 bonus.
                            </strong>
                        </strong>
                        <strong> Drive for us: Start, just finish 30 trips, and get $1000 bonus. <a
                            href="https://rpclimo.com/driver-registration/">Sign up today!</a>&nbsp; ★&nbsp;
                            <strong> Drive for us: Start, just finish 30 trips, and get $1000 bonus. <a
                                href="https://rpclimo.com/driver-registration/">Sign up today!</a>&nbsp; ★&nbsp;
                                <span className={'text-red-600'}>Please download our app from App store and Play store.For drivers RPC DRIVER app and for riders RPC LIMO app , Download today! ★&nbsp;</span> Drive
                                for us: Start, just finish 30 trips, and get $1000 bonus.
                            </strong>
                        </strong>
                        <strong> Drive for us: Start, just finish 30 trips, and get $1000 bonus. <a
                            href="https://rpclimo.com/driver-registration/">Sign up today!</a>&nbsp; ★&nbsp;
                            <strong> Drive for us: Start, just finish 30 trips, and get $1000 bonus. <a
                                href="https://rpclimo.com/driver-registration/">Sign up today!</a>&nbsp; ★&nbsp;
                                <span className={'text-red-600'}>Please download our app from App store and Play store.For drivers RPC DRIVER app and for riders RPC LIMO app , Download today! ★&nbsp;</span> Drive
                                for us: Start, just finish 30 trips, and get $1000 bonus.
                            </strong>
                        </strong>
                    </p>
                </marquee>

            </div>
            <header className="bg-yellow-400 text-black p-4">
                <div className="container max-w-[1200px] mx-auto flex justify-between items-center">
                    <h1 className="text-lg font-bold">

                        <a href="/home">
                            <img src="/logocompany.png" alt="" width={150} height={150}/>
                        </a>

                    </h1>

                    <GiHamburgerMenu onClick={()=>setOpenMenu(!openMenu)} className={'md:hidden text-xl cursor-pointer z-30'}/>
                    {/*For Mobile Menu*/}
                    {
                        openMenu && (
                            <ul className="flex flex-col gap-4 h-1/2 w-64 bg-white p-4 rounded-lg shadow-md transform  -translate-x-50 absolute top-10 right-0">
                                {
                                    navlist.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.link} className=" font-bold hover:text-red-600 border-b-blue-600 hover:border-b-2 ">{item.label}</a>
                                        </li>
                                    ))
                                 }
                                <button className={'border-2 p-4 hover:bg-black hover:text-white rounded-md'}>Login</button>

                            </ul>
                        )
                    }

                    <nav className={'hidden md:flex items-center'}>
                        <ul className="flex space-x-4  ">
                            {
                                navlist.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.link}
                                           className=" font-bold hover:text-red-600 border-b-blue-600 hover:border-b-2 ">{item.label}</a>
                                    </li>
                                ))
                            }

                        </ul>
                        <p className={'w-full flex flex-row items-center justify-end text-center'}>
                            <FaPhoneAlt />  1-833 7114606
                        </p>
                        <div className={'gap-4 flex justify-end items-center text-xl ml-6 w-full '}>

                            <button

                                className={'border-black border-2 rounded-lg  hover:bg-black hover:text-white w-1/2 p-2'}>Book
                                Now Pay Later
                            </button>
                            <button
                                className={'border-black border-2 rounded-lg hover:bg-black hover:text-white w-1/2 px-5'}>Account
                                Login
                            </button>
                        </div>
                    </nav>
                </div>
            </header>


        </>
    );
};


