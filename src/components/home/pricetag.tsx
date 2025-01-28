interface PriceTagProps {
    price: string
    location: string
    className?: string
  }
  
  export default function PriceTag({ price, location, className }: PriceTagProps) {
    return (
      <div
        className={`
          bg-[#DB7023] text-white px-4 py-2 rounded-lg border-2 border-white 
          block items-center gap-4 shadow-lg
          ${className}
        `}
      >
        <div className="bg-[#77441E] w-fit text-xs p-1 mb-1 rounded-full">
          💵
        </div>
        <p className="text-xs font-medium">
        You can buy all for<span className="text-[#2EE6A8] font-bold">{price}</span> {location}
        </p>
      </div>
    )
  }

