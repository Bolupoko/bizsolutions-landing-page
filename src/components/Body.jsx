import CardSection from "./CardSection.jsx";
import Services from "./Services.jsx";
import WorkSection from "./WorkSection.jsx";
import Analysis from "./Analysis.jsx"

function Body(){
    return(
        <div className=" bg-green-900 flex flex-col justify-between px-32 py-4 w-full h-auto font-bold gap-10">
            <h1 className="text-5xl text-center text-white hover:underline mt-6">What We Do</h1>
            <p className="text-white text-[20px] text-center font-light">Complete website solutions to take your business to the next level. </p>

            <CardSection />

            <Services />

            
            <div className=" flex flex-col items-center text-center gap-4">
                <h1 className="text-5xl text-white font-semibold hover:underline">
                    Our Work Speaks
                </h1>
                <p className="text-[18px] text-white font-light">A glimpse of websites we've built for amazing clients.</p>

                <WorkSection />

                <a href="#" className="flex justify-center gap-2 items-center bg-white w-80 h-12 text-green-800 text-md text-center border-xl border-green-600 rounded-4xl hover:scale-105 transition-transform duration-200">View More Project
                    <span><i className="bi bi-arrow-right "></i></span>
                </a>
                
            </div>

            <Analysis />

            

        </div>
    )
}

export default Body;