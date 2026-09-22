import Card from "./Card.jsx"
function CardSection(){
    return(
        <section className="flex justify-between ">
             <Card
             icon= {<i className="bi bi-display"></i>}
             title= "Custom Website Design"
             description= "Beautiful, modern, and unique websites tailored to your brand and business goals."
             />

             <Card
             icon= {<i className="bi bi-phone"></i>}
             title= "Responsive Development"
             description="Websites that look perfect on every device- mobile, tablet, and desktop."
             />

             <Card
             icon= {<i className="bi bi-search"></i>}
             title= "SEO Friendly"
             description="Built with SEO best practices to help you rank higher angd get discovered."
             />

             <Card
             icon= {<i className="bi bi-headset"></i>}
             title= "Ongoing Support"
             description="We're here post-launch to provide updates, maintenance and support."
             />


             
        </section>
    )
}

export default CardSection;