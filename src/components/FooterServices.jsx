function FooterServices() {
    return(
        <div className="flex flex-col gap-2 px-32">
            <h5 className="text-lg text-yellow-300 font-semibold">Services</h5>
            <links className=" flex flex-col gap-px">
            <p className="text-md text-white font-light hover:text-yellow-300">Website Design</p>
            <p href="#" className="text-md text-white font-light hover:text-yellow-300">Website Development</p>
            <p href="#" className="text-md text-white font-light hover:text-yellow-300">SEO Optimization</p>
            <p href="#" className="text-md text-white font-light hover:text-yellow-300">Website Maintenance</p>
            </links>
        </div>
    )
}
export default FooterServices;