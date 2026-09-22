function QuickLinks() {
    return(
        <div className="flex flex-col gap-2 px-32">
            <h5 className="text-lg text-yellow-300 font-semibold">Quick Links</h5>
            <links className=" flex flex-col gap-px">
            <a href="#" className="text-md text-white font-light hover:text-yellow-300">Home</a>
            <a href="#" className="text-md text-white font-light hover:text-yellow-300">Services</a>
            <a href="#" className="text-md text-white font-light hover:text-yellow-300">Portfolio</a>
            <a href="#" className="text-md text-white font-light hover:text-yellow-300">About</a>
            <a href="#" className="text-md text-white font-light hover:text-yellow-300">Contact</a>
            </links>
        </div>
    )
}
export default QuickLinks;