function NavBar() {
    return(
        <nav className="flex absolute top-0 w-full justify-between items-center px-30 mt-2 ">
            <logo className="text-xl font-semibold text-green-600 animate-pulse">Biz<span className="text-red-600">Solutions</span></logo>
            <ul className="flex gap-20 text-sm text-green-600 font-semibold">
                <li className="hover:underline"><a href="#home">Home</a></li>
                <li className="hover:underline"><a href="#about">About</a></li>
                <li className="hover:underline"><a href="#services">Services</a></li>
                <li className="hover:underline"><a href="#contact">Contact</a></li>
            </ul>

            <button className=" bg-green-600 text-sm text-white p-3 rounded-4xl mt-2 hover:bg-white hover:text-green-600  border hover:border-green-600"><a href="#quote">Get a Free Quote</a></button>
        </nav>
    )
}

export default NavBar;