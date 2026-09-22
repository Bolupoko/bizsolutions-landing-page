function Services(){
    return(
         <div className="flex flex-col h-80 w-full bg-green-900 gap-10 py-4 rounded-2xl shadow-lg hover:shadow-amber-100 ">
                <h1 className="text-white text-5xl text-center font-semibold hover:underline underline-offset-4">Why Choose Us?</h1>

                <div className="flex px-6 gap-3 justify-between ">
                    <div className="flex flex-col gap-2">
                        <i className="bi bi-bullseye text-yellow-200 text-4xl"></i>
                        <h1 className="text-white text-2xl font-semibold">Client Focused</h1>
                        <p className="text-white text-lg font-extralight max-w-86">Your goals, vision and satisfaction are our priority. we work closely with you at every step.</p>
                    </div>

                     <div className=" flex flex-col justify-center w-px h-40  bg-white "></div>

                     <div className="flex flex-col gap-2">
                        <i className="bi bi-lightning-charge text-yellow-200 text-4xl"></i>
                        <h1 className="text-white text-2xl font-semibold">Fast Delivery</h1>
                        <p className="text-white text-lg font-extralight max-w-86">We deliver on time without compromising on quality.</p>
                    </div>

                     <div className=" flex flex-col justify-center w-px h-40  bg-white"></div>

                     <div className="flex flex-col gap-2">
                        <i className="bi bi-shield-check text-yellow-200 text-4xl"></i>
                        <h1 className="text-white text-2xl font-semibold">Quality Assured</h1>
                        <p className="text-white text-lg font-extralight max-w-86">Clean code, modern technology, and error-free performance.</p>
                    </div>

                     <div className=" flex flex-col justify-center w-px h-40  bg-white"></div>

                     <div className="flex flex-col gap-2">
                        <i className="bi bi-chat-left-dots text-yellow-200 text-4xl"></i>
                        <h1 className="text-white text-2xl font-semibold">Clear Communication</h1>
                        <p className="text-white text-lg font-extralight max-w-86">We keep you updated at every stage of the project.</p>
                    </div>

                </div>
            </div>
    )
}
export default Services;