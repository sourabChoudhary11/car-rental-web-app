import { Link } from "react-router-dom"
import {IoReorderThreeOutline} from "react-icons/io5"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react";

const Navbar = () => {

    const [show, setShow] = useState(false);

    const clickHandler = () => {
        setShow(!show);
    }

     
    return (
        <header className={`sticky top-0 left-0 bg-white `}>
            <nav>
                <main className='flex items-center justify-between p-5 lg:justify-around'>
                    <div className='logo flex items-center text-2xl'>
                        <img className="w-24" src="https://w7.pngwing.com/pngs/422/582/png-transparent-taxi-car-rental-computer-icons-rent-miscellaneous-orange-logo.png" alt="car_rental_logo" /> <span className="font-bold text-2xl text-orange-500">C</span>Rental
                    </div>

                    <button onClick={clickHandler} className='text-3xl active:opacity-70 lg:hidden'>
                        <IoReorderThreeOutline />
                    </button>


                    <ul className={`flex items-center justify-center space-x-4 text-[18px] fixed h-[100vh] py-2 px-4 top-0 left-0 w-full bg-white flex-col ${!show ? 'translate-x-full transition-all duration-[1000ms] ease-linear ' : ' translate-x-0 transition-all duration-[1000ms] ease-linear'} space-y-3 rounded-b-lg lg:translate-x-0 lg:py-0 lg:space-y-0 lg:flex lg:flex-row lg:w-fit lg:relative  lg:top-0 lg:left-0 lg:space-x-5 lg:rounded-none lg:h-[auto]`}>
                        <li className={`${show ? 'visible' : 'hidden' } absolute right-5 top-5`}>
                        <button onClick={clickHandler} className='text-md active:opacity-70 lg:hidden'>
                        <AiOutlineClose />
                    </button>
                        </li>
                        <li onClick={clickHandler} className="font-bold hover:opacity-40 hover:transition-all hover:duration-700"><Link to={"/"}>Home</Link></li>
                        <li onClick={clickHandler} className="font-bold hover:opacity-40 hover:transition-all hover:duration-700"><Link to={"/about"}>About</Link></li>
                        <li onClick={clickHandler} className="font-bold hover:opacity-40 hover:transition-all hover:duration-700"><Link to={"/models"}>Vehicle Models</Link></li>
                        <li onClick={clickHandler} className="font-bold hover:opacity-40 hover:transition-all hover:duration-700"><Link to={"/team"}>Our Team</Link></li>
                        <li onClick={clickHandler} className="font-bold hover:opacity-40 hover:transition-all hover:duration-1000"><Link to={"/contact"}>Contact</Link></li>
                        <li onClick={clickHandler} className={`flex flex-col space-y-3 items-center lg:hidden`}>
                        <button className='bg-orange-600 text-white px-2 py-1 text-md mx-2 rounded-lg hover:bg-orange-700 hover:transition-all hover:duration-700'>Login</button>
                        <button className='bg-orange-600 text-white px-2 py-1 text-md mx-2 rounded-lg hover:bg-orange-700 hover:transition-all hover:duration-700'>Register</button>
                        </li>
                    </ul>
                    <form className="hidden lg:block">
                        <button className='bg-orange-600 text-white px-4 py-1 mx-2 rounded-lg hover:bg-orange-700 hover:transition-all hover:duration-700'>Login</button>
                        <button className='bg-orange-600 text-white px-4 py-1 mx-2 rounded-lg hover:bg-orange-700 hover:transition-all hover:duration-700'>Register</button>
                    </form>
                </main>
            </nav>
        </header>
    )
}

export default Navbar