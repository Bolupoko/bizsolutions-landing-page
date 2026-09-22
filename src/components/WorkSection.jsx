import works from "../assets/works.jpeg";
import works2 from "../assets/works2.jpeg";
import works3 from "../assets/works3.jpeg";
function WorkSection() {
  return (
    <div className="flex gap-4 justify-center ">
      
        <figure>
          <img
          className=" flex flex-col w-140 h-72 object-fit rounded-xl border hover:border-yellow-100 hover:scale-105 transition-transform duration-200"
          src={works}
          alt="Completed Project Screenshot"
          />
          <figcaption className="text-md text-white mt-2">Home Furniture Website
          </figcaption>
        
        </figure>

         <figure>
          <img
          className=" w-140 h-72 object-fit rounded-xl border hover:border-yellow-100 hover:scale-105 transition-transform duration-200"
          src={works2}
          alt="Completed Project Screenshot"
        />
        <figcaption className="text-md text-white mt-2">Designing Website
          </figcaption>
         </figure>

        

         <figure>
          <img
          className=" w-140 h-72 object-fit rounded-xl border hover:border-yellow-100 hover:scale-105 transition-transform duration-200"
          src={works3}
          alt="Completed Project Screenshot"
        />

        <figcaption className="text-md text-white mt-2">Construction Website
          </figcaption>
      
         </figure>

    </div>
  );
}

export default WorkSection;
