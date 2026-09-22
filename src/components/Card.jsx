function Card({icon, title, description}){
    return(
        <div className="bg-green-50 w-100 h-72 flex flex-col  rounded-2xl gap-4 p-4 shadow-lg hover:shadow-amber-100">
           <logo className="flex items-center justify-center bg-yellow-200 h-[60px] w-[72px] text-red-600 rounded-full text-4xl text-center ">{icon}</logo>
           <h1 className="text-green-900 font-semibold text-2xl">{title}</h1>
           <p className="text-green-900 text-[20px] font-extralight ">{description}</p>
        </div>
    )
}

export default Card;