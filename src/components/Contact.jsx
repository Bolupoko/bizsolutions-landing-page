function Contact() {
    return(
        <div className="flex flex-col gap-2 px-32">
            <h5 className="text-lg text-yellow-300 font-semibold">Contact Us</h5>
            <links className=" flex flex-col gap-px">
            <p className="text-md text-white font-light">
                <span> <i className="bi bi-telephone-fill text-yellow-300"></i> </span >+234 801 234 5678</p>
            <p className="text-md text-white font-light">
                <span> <i className="bi bi-envelope-fill text-yellow-300"></i> </span >hello@bizsolutions.com</p>
            <p className="text-md text-white font-light">
                <span> <i className="bi bi-geo-alt-fill text-yellow-300"></i> </span >Lagos, Nigeria</p>

            <p className="text-md text-white font-light">
                <span> <i className="bi bi-clock text-yellow-300 font-bold"></i> </span >Mon-Fri, 9am-6pm</p>
            
            </links>
        </div>
    )
}
export default Contact;