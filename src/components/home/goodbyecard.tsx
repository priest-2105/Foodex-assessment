interface GoodbyeCardProps {
    className?: string
  }
  
  export function GoodbyeCard({ className }: GoodbyeCardProps) {
    return (
      <div className={`flex w-full md:ml-auto md:pl-46 pr-24 mx-auto py-6`}>

      <div className={`flex shadow-2xl border-1  border-[#EDEFFC] p-8 rounded-2xl items-center justify-between w-full font-pangram font-bold ${className}`}>
        <div className="flex items-center gap-2 text-[32px] py-6 font-pangram">
          <span>
            Signup to
          <span className="bg-[#5F63E1] my-1 mx-1 text-white font-medium h-fit border-2 border-[#000] px-4 py-1 rounded-full">chowafrica</span>
            and say
          <span className="flex py-1"><span className="bg-black text-white  border-2 border-[#009F79] my-1 mx-1 w-fit px-3 py-0 h-fit rounded-full flex font-medium items-center gap-2">goodbye<span className="text-2xl">👋🏾</span>
          </span> to mealtime stress.</span>
            </span>
        </div>
  
        <button className="bg-[#009F79] hover:bg-[#008F69] font-sofia-sans rounded-full shadow-xl border-2 border-[#FFFFFF] transition-colors text-white px-10 py-4 font-medium cursor-pointer">
          JOIN WAITLIST
        </button>
        </div>
      </div>
    )
  }
  
  