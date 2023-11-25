"use client";

import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import { data } from "@/data/project";
import Link from "next/link";
export default function CardApplication(){
    
    return (
      <div className="lg:flex lg:flex-wrap">
        {data.map((item , index) => (
          <div key={index} className="md:bg-white">
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none m-5"
        >
          <Image
            alt={`image ${item.title}`}
            className="object-cover  cursor-pointer"
            height={250}
            src={item.image}
            width={300}
            isBlurred
            isZoomed
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-gray-500">{item.title}</p>
            <Link href={item.downloadLink}>
            <Button className="text-tiny text-white bg-black/20" variant="shadow" color="default" radius="lg" size="sm">
              المزيد 
            </Button>            
            </Link>
          </CardFooter>
        </Card>           
         </div>
        ))}
      </div>
    );
}