import { images } from "@/data/images";
import {Card, CardBody} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import {Code} from "@nextui-org/react";
export default function Contact(){
    return(
        <div className="flex justify-center items-center flex-col">
            <div>
                <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-white sm:text-2xl">
                    تواصل معي
                </h1>
            </div>
            <div className="lg:flex lg:flex-wrap">
                <ul className="lg:flex lg:flex-wrap gap-5 cursor-pointer ">
                {images.map((item , index) => (
                    <li key={index}>
                     <Popover placement="top">
                        <PopoverTrigger>
                          <Card>
                            <CardBody>
                               <img src={item.image} alt="" width={100} height={100} />
                            </CardBody>
                          </Card>                                 
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                            <div className="text-small font-bold">{item.name}</div>
                            <div className="text-tiny">{item.users}</div>
                            </div>
                        </PopoverContent>
                     </Popover>
                    </li>
                ))}                    
                </ul>
            </div>
            <Chip>
                أو
            </Chip>
            <div>
            <Code>mohmedayoub852@gmail.com</Code>
            </div>
        </div>
    )
}