import BizSolutions from "./BizSolutions.jsx";
import QuickLinks from "./QuickLinks.jsx";
import FooterServices from "./FooterServices.jsx";
import Contact from "./Contact.jsx";
function Footer() {
    return (
        <footer className="flex flex-col bg-green-900  h-72 w-full py-4 gap-4">
            <div className="flex justify-between">
                <BizSolutions />

                <QuickLinks />

                <div className=" flex flex-col justify-center w-px h-40  bg-gray-400 "></div>

                <FooterServices />

                <div className=" flex flex-col justify-center w-px h-40  bg-gray-400 "></div>

                <Contact />
                
            </div>

            <p className="bg-white h-px w-full"></p>


            <p className=" bg-green-900 border-px border-t-white text-white text-sm font-light text-center w-full py-4 animate-pulse">&copy; 2026 Your Company. All rights reserved.</p>
        </footer>
    )
}

export default Footer;