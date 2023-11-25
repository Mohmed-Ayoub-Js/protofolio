import CardApplication from "@/freelancecomponent/Card";

export default function Projects(){
    return(
        <div className="flex justify-center items-center flex-col">
          <div className=" mt-5 text-5xl font-extrabold leading-[1.15] text-white sm:text-2xl">
            احدث مشاريعي 
           </div>     
           <CardApplication />
        </div>
    )
}

