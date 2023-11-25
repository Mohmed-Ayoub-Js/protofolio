"use client";
import { images } from "@/data/images";
import {Card, CardBody} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import {Code} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import { useState } from "react";
export default function Footer(){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [display , setDisplay] = useState('hidden');
    const [isError , setIserror] = useState(false);
    const [social , setSocial] = useState(null);
    const handelClick = () => {
       if(display === 'hidden'){
        setDisplay('block');
       } else {
        setDisplay('hidden');
       }
    }

    function handelSubmit(){
      var socialLowerCase = social.toLowerCase();

      if (socialLowerCase.includes("discord")) {
        alert('حسابي على الديسكورد : mohamedayoubjs');
      } else if (socialLowerCase.includes('twitter')) {
        alert('حسابي على تويتر : @MohammedAyoubJs');
      } else if (socialLowerCase.includes('facebook')) {
        alert('رابط حسابي على فيسبوك : https://www.facebook.com/profile.php?id=100085964006086');
      } else if (socialLowerCase.includes('instagram')) {
        alert('رابط حسابي على انستغرام @mohammedayoubjs');
      } 
      if(social === "ديسكورد"){
        alert('حسابي على الديسكورد : mohamedayoubjs');

      }
      if(social === "تويتر"){
        alert('حسابي على الديسكورد : mohamedayoubjs');

      }
      if(social === "فيسبوك"){
        alert('رابط حسابي على فيسبوك : https://www.facebook.com/profile.php?id=100085964006086');
       
      }
      if(social === "انستا"){
        alert('رابط حسابي على انستغرام @mohammedayoubjs');

      }
      if(social === "انستغرام"){
        alert('رابط حسابي على انستغرام @mohammedayoubjs');

      }
      if(social === "فيس"){
        alert('رابط حسابي على فيسبوك : https://www.facebook.com/profile.php?id=100085964006086');

      }
      if(socialLowerCase === "x"){
        alert('حسابي على تويتر : @MohammedAyoubJs');

      }
      else {
        alert('يرجى إدخال اسم منصة صحيحة للتواصل.');
      }
    }
   
  

    return(
        <div>
            <div className="flex justify-center items-center flex-row">
             <img src='logo.png' alt='logo' width={100} height={100}/>
             <div>
                <h1>
                    Mohammed Ayoub Js
                </h1>
             </div>
            </div> 
            <div>
            <ul className="flex justify-center items-center flex-row">
                {images.map((item , index) => (
                    <li key={item.name} className="w-10">
                    <Popover placement="top">
                       <PopoverTrigger>
                         <Card>
                           <CardBody>
                              <Image src={item.image} alt="" width={60} height={60} />
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
            <div className="flex justify-between items-center flex-row">
                <h1 className="font-bold text-white">
                    جميع الحقوق محفوظة لدى المطور 
                </h1>
                <Button className="font-bold text-red-600 cursor-pointer" onPress={onOpen}>
                    مصادر الصور
                </Button>
            </div>
            </div>
            <Modal isOpen={isOpen} size='full' onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">مصادر الصور المستخدم في الموقع الالكتروني هذا</ModalHeader>
              <ModalBody>
                <p> 
                السلام عليكم ورحمة الله وبركاته ، في هذا الموقع الالكتروني موجود بعض المصادر و الملحقات التي تحتوي على صور ليس لنا حقوق على استخدامها في اي مكان من الاماكن ، لهذا يحق على اصحاب هذه الصور الرقمية على حذفها بالتواصل معي عبر اي وسيلة تواصل متاحة ، يمكنك الحصول على ذلك عن طريق الظغط على موقع التواصل الاجتماعي المطلوب من ثم تنسخ اسم المستخدم الخاص بي 
                </p>

                <p className="text-red-500 font-bold">
                    ملاحظة : اذا كانت صورة من الصور المحمية الحقوق هي خاصتك لكن غير موجودة بالقائمة يمكنك الابلاغ اسفله بأنك تواجه مشكلة ما ويمكنك توثيق لنا ان هذه الصورة خاصتك وستحذف فورا
                </p>
                <p className="font-bold text-3xl">
            المصادر : 
                </p>
                <p>
            <div className="flex justify-center items-center flex-col gap-4">
                {images.map((item , index) => (
                    <Code key={index}>
                    <p className="text-white"> 
                     {item.image}
                    </p>                        
                    </Code>

                ))}                
            </div>
                </p>
              <div className={`${display}`}>
              <div class="relative mt-6">
                <input
                  type="text"
                  onChange={(e) => {setSocial(e.target.value)}}
                  placeholder="ادخل وسيلة التواصل الخاصة بك"
                  className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-white ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                />
                <div className="absolute inset-y-1 right-1 flex justify-end">
                  <button
                    type="submit"
                    aria-label="Submit"
                    onClick={handelSubmit}
                    className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                  >
                    <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={handelClick}>
                  لدي مشكلة
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
        </div>
    )
}