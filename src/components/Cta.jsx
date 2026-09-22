import tableLaptop from "../assets/tableLaptop.jpg";
function Cta() {
    return(
        <div className="flex pl-32 bg-green-600  h-71.6 w-full justify-between border border-b-2 border-yellow-50">
            <div className="flex flex-col  gap-2 py-4 max-w-xl">
                
                <p className="text-yellow-200 text-xl font-light ">LET'S BUILD SOMETHING GREAT</p>
                
                <h4 className="text-white text-4xl font-bold ">Ready to Grow Your Business Online?</h4>
                
                <p className="text-white text-xl font-light max-w-132">Let's build a professional website that brings your ideas, business and brand to life.</p>
                
                <a href="#" className="bg-red-600 h-10 w-52 rounded-4xl text-center py-2 text-white text-md" > Get a Free Quote <span><i className="bi bi-arrow-right"></i></span> </a>
            </div>

            <div className=" flex-1 h-full w-full items-stretch ">
                <img className="block h-72 w-full object-cover  border border-b-2 border-yellow-50 " src={tableLaptop} alt="Laptop showing a website mockup design"></img>
            </div>
        </div>
    );
}

export default Cta;