export default function Price(){
    const data = [
      {
        type:'موقع الكتروني',
        des:'تطوير موقع الكتروني بسيط لمدة عمل اسبوع',
        price:15,
      },
      {
        type:'موقع الكتروني',
        des:'تطوير موقع الكتروني متوسط لمدة عمل ثلاث اسابيع',
        price:26,
      },
      {
        type:'واجهة مستخدم احترافية',
        des:'تطوير واجهة مستخدم للمنصات الثلاث اندرويد و الويب و الديسك توب',
        price:30,
      },
      {
        type:'مخصصة',
        des:'اذا تريد تطوير شيئ اخر او تريد تطوير نفس ما هو مذكور بسعر مخصص',
        price:'سعر خاص',
      }
    ];
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((item , index)=> (
            <div key={index} class="flex flex-col bg-gray-900 rounded-3xl m-10 w-[300px] shadow-xl">
            <div class="px-6 py-8 sm:p-10 sm:pb-6">
                <div class="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                    <h2 class="text-lg font-medium tracking-tighter text-white lg:text-3xl">
                    {item.type}
                    </h2>
                    <p class="mt-2 text-sm text-gray-100">{item.des}</p>
                </div>
                <div class="mt-6">
                    <p>
                    <span class="text-4xl font-bold tracking-tight text-white">
                                            {item.price}$
                                        </span>
                    <span class="text-base font-medium text-white"> + 5 دولار اضافية للتعديل </span>
                    </p>
                </div>
                </div>
            </div>
            <div class="flex px-6 pb-8 sm:px-8">
                <a aria-describedby="tier-starter" class="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white" href="https://mostaql.com/u/MohammedAyoubJs">
                 البدأ معي في مستقل
                </a>
            </div>
            </div>                
            ))}

        </div>
    )
}