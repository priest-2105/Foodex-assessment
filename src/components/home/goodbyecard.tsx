interface GoodbyeCardProps {
    className?: string
  }
  
  export function GoodbyeCard({ className }: GoodbyeCardProps) {
    return (
      <div className={`flex shadow-md items-center justify-between w-full md:ml-auto px-24 mx-auto py-6 font-pangram font-bold ${className}`}>
        <div className="flex items-center gap-2 text-[32px] font-pangram">
          <span>
            Signup to
          <span className="bg-[#7F56D9] my-1 mx-1 text-white px-4 py-1 rounded-full">chowafrica</span>
            and say
          <span className="bg-black text-white my-1 mx-1 w-fit px-4 py-1 rounded-full flex items-center gap-2">
            goodbye <span className="text-2xl">👋🏾</span></span>  to mealtime stress.
            </span>
        </div>
  
        <button className="bg-[#009F79] hover:bg-[#008F69] transition-colors text-white px-8 py-3 rounded-lg font-medium">
          JOIN WAITLIST
        </button>
      </div>
    )
  }
  
  