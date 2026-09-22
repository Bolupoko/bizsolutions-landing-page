function Hero() {
    return(
        <div className="flex flex-col gap-8 px-32 absolute top-50">
           <div className=" flex flex-row gap-16">
             <p className="text-green-600 text-sm font-light">PROFESSIONAL</p>
            <p className="text-green-600 text-sm font-light">CREATIVE</p>
            <p className=" text-green-600 text-sm font-light">RESULTS DRIVEN</p>
           </div>

           <h1 className="text-6xl text-green-900 font-bold max-w-160 ">We Build Websites That <span className="text-red-600 underline">Grow Your</span> Business.</h1>

           <p className=" max-w-110 text-md text-green-800 font-light">Professional, responsive, and SEO-friendly websites that help you attract more customers and grow online.</p>

           <div className="flex gap-5 ">
            <button className="bg-green-600 rounded-4xl text-white text-sm px-4 py-2 font-light hover:bg-white hover:text-green-600 border hover:border-green-600 "><a href="#" className="text-white hover:text-green-600">Get a Free Quote <span><i className="bi bi-arrow-right ml-2"></i></span></a></button>
            <button className="bg-white rounded-4xl border border-green-600 text-green-600 text-sm px-4 py-2 font-light hover:bg-green-600 hover:text-white"><a href="#" className="text-green-600 hover:text-white">View Our Work</a></button>
           </div>

           <div className=" flex gap-12">
            <div className="flex flex-col items-center text-center">
            <i className="bi bi-display text-red-600 font-extrabold"></i>
            <p className="text-green-800 text-center text-[8px] font-semibold">Modern Designs</p>
            </div>

            <div className=" flex flex-col justify-center w-px h-6 my-2 bg-gray-400"></div>
            
            <div className="flex flex-col items-center text-center">
            <i className="bi bi-phone text-red-600 font-extrabold"></i>
            <p className="text-green-800 text-center text-[8px] font-semibold">Mobile Friendly</p>
            </div>

            <div className=" flex flex-col justify-center w-px h-6 my-2 bg-gray-400"></div>

             <div className="flex flex-col items-center text-center">
            <i className="bi bi-search text-red-600 font-extrabold -scale-x-100"></i>
            <p className="text-green-800 text-center text-[8px] font-semibold">SEO Optimized</p>
            </div>

           </div>
        </div>
    )
}

export default Hero;