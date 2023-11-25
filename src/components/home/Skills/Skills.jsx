import { Progress } from "@nextui-org/react";
import { skills } from "@/data/skills";
export default function Skills(){
    return(
        <div className="flex justify-center items-center flex-col">
            <h1 className=" mt-5 text-5xl font-extrabold leading-[1.15] text-white sm:text-2xl">
                مهاراتي : 
            </h1>
        <div>
            {skills.map((item , index) => (
                <div key={index} >
                <Progress
                className="p-2"
                size="lg"
                radius="sm"
                classNames={{
                    base: "max-w-md",
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                    label: "tracking-wider font-medium text-default-600",
                    value: "text-foreground/60",
                }}
                label={item.skill}
                value={item.value}
                showValueLabel={true}
                />                  
                </div>
            ) )}    
        </div>
        </div>
    )
}