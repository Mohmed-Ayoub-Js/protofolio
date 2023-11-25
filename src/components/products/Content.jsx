"use client";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from "next/link";
export default function Content(){
    const data = [
        {
            app_name: "تذكير النفس   ",
            app_size: "2.36 MB",
            operating_system: "android",
            version: "1.0.0",
            price:0,
            image:"https://public-files.gumroad.com/yl37a32ywv6f5ig270yx5vcuic62",
            description: "Islamic application for remembrance with the ability to add and save supplications and specify their repetition times."
        },
        {
            app_name: "Arabify",
            version: "1.0.0",
            app_size: "71.6 MB",
            price:0,
            operating_system: "windows",
            image:"https://public-files.gumroad.com/cp2gwa26g4mgu078m1vvlb4sk39u",
            description: "An Arabic store developed by an Arab developer to provide a perfect Arabic user experience for downloading and installing exclusive games dedicated to Arabs from Arabic products."
        }
    ];
    return(
        <div className="flex justify-center items-center flex-col">
    <Link target="_blank" href='https://mohmedayoubjs.gumroad.com/' className="m-5">
    <div className="text-red-500">
        كل هذه المنتجات قابلة للتحميل في متجرنا  
    </div>    
    </Link> 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <Card shadow="sm" className="m-10 md:m-0" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.app_name}
              className="w-full object-cover h-[140px]"
              src={item.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.app_name}</b>
            <p className="text-default-500">{item.price}$</p>
            <p>{item.app_size}</p>
          </CardFooter>
          <div className="flex gap-5 flex-col">
            <div>
            OS : {item.operating_system}
            </div>
            <div>
            الوصف : {item.description}
            </div>
            <div>
                الاصدار {item.version}
            </div>
          </div>
        </Card>
      ))}
    </div>   
        </div>
    )
}