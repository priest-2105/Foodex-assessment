import { ThumbsUp } from "lucide-react"
import type { FoodItem } from "@/types/food"
import productImage from "@/assets/img/Home-new-01.png"

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Naija Special Fried Rice with Shrimps",
    image: productImage,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: true,
  },
  {
    id: 2,
    name: "Naija Special Fried Rice with Shrimps",
    image: productImage,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 3,
    name: "Naija Special Fried Rice with Shrimps",
    image: productImage,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 4,
    name: "Naija Special Fried Rice with Shrimps",
    image: productImage,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 5,
    name: "Calabar Asun & Gravy Sauce",
    image: productImage,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: true,
  },
  {
    id: 6,
    name: "Naija Special Fried Rice with Shrimps",
    image: productImage,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 7,
    name: "Naija Special Fried Rice with Shrimps",
    image: productImage,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 8,
    name: "Naija Special Fried Rice with Shrimps",
    image: productImage,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 9,
    name: "Shredded Roasted Chicken",
    image: productImage,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: true,
  },
]

export function FoodGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {foodItems.map((item) => (
        <div
          key={item.id}
          className={`
            bg-white rounded-2xl px-4 cursor-pointer transition-all duration-300
            ${item.isHighlighted ? "opacity-100 scale-105 shadow-lg z-10" : "opacity-40 scale-100"}
          `}
        >
          <div className="flex justify-center mb-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-8 border-white shadow-inner">
              <img src={item.image || "@/assets/img/Home-new-01.png"} alt={item.name} className="object-cover w-full h-full" />
            </div>
          </div>
          <h3 className="font-bold text-sm mb-1 text-start font-pangram line-clamp-2">{item.name}</h3>
          <span className="text-[#49280F] py-1 px-2 text-[8px] rounded-full h-fit bg-[#D6D5CA] font-pangram">🍲 Continental</span>
          <div className="flex justify-between items-center text-xs h-fit mt-2 text-gray-600 mb-3">
            <div className="flex items-center gap-1 h-max">
              <ThumbsUp className="w-3 h-3" />
              <span className="font-sofia-sans -mb-1">{item.duration}</span>
            </div>
            <div className="p-[2.5px] bg-[#858786] rounded-full"></div>
            <span className="font-semibold h-max">Approx. {item.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

