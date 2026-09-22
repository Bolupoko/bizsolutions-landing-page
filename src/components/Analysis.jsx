function Analysis(){
    return(
        <div className="flex bg-green-200 h-20 w-full justify-between px-40 items-center rounded-xl">
            <div className="flex gap-2 items-center">
                <i className="bi bi-emoji-smile text-4xl"></i>
            
                <div className="flex flex-col ">
                    <h5 className="text-xl text-red-400">50+ </h5>
                    <p className="text-sm font-extralight text-green-800">Happy Clients</p>
                </div>
            </div>

            <div className=" w-px h-6 bg-gray-800"></div>

            <div className="flex gap-2 items-center">
                <i className="bi bi-folder2 text-4xl"></i>
            
                <div className="flex flex-col ">
                    <h5 className="text-xl text-red-400">80+ </h5>
                    <p className="text-sm font-extralight text-green-800">Project Compiler</p>
                </div>
            </div>

            <div className=" w-px h-6 bg-gray-800"></div>

            <div className="flex gap-2 items-center">
                <i className="bi bi-clock text-4xl"></i>
            
                <div className="flex flex-col ">
                    <h5 className="text-xl text-red-400">3+ </h5>
                    <p className="text-sm font-extralight text-green-800">Years Experience</p>
                </div>
            </div>

            <div className=" w-px h-6 bg-gray-800"></div>


            <div className="flex gap-2 items-center">
                <i className="bi bi-headset text-4xl"></i>
            
                <div className="flex flex-col ">
                    <h5 className="text-xl text-red-400">100% </h5>
                    <p className="text-sm font-extralight text-green-800">Client Satisfaction</p>
                </div>
            </div>

        </div>
    )
}

export default Analysis;