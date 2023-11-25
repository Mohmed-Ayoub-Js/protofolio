import {Button} from "@nextui-org/react";
export default function About() {
    return (
      <>
      <div className="flex justify-center items-center md:flex-row flex-col">

        <div className="flex justify-center items-center flex-col">
         <h1 className=" mt-5 text-5xl font-extrabold leading-[1.15] text-white sm:text-6xl">
           مطور واجهات المستخدم
         </h1>
         <p className="mt-5 text-lg text-gray-300 sm:text-xl max-w-2xl">
          انا مطور واجهات المستخدم باستخدام لغة البرمجة جافاسكريبت باستخدام اطار العمل لتطوير واجهات المستخدم nextjs و React
         </p>
         <Button color="primary" variant="shadow">
        تعرف عني المزيد
      </Button> 

        </div>
            <img
          src="code.png"
          alt="nodejs"
          width={500}
          height={500}
          className="rounded-lg shadow-lg m-5"
        /> 
      </div>
      </>
    );
  }
  