import workplace from "../assets/workplace.jpg";
function Background() {
    return (
        <div className="h-screen w-full">
            <img  className=" relative w-full h-full object-cover" src={workplace} alt="background" />
        </div>
    )
}

export default Background;