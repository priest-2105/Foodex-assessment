import { Heart, Share2, Clock } from "lucide-react"
import type { FoodItem } from "@/types/food"

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Naija Special Fried Rice with Shrimps",
    image: "/placeholder.svg?height=200&width=200",
    price: "₦4,500",
    duration: "25mins",
    isHighlighted: true,
  },
  {
    id: 2,
    name: "Naija Special Fried Rice with Shrimps",
    image: "/placeholder.svg?height=200&width=200",
    price: "₦4,500",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 3,
    name: "Naija Special Fried Rice with Shrimps",
    image: "/placeholder.svg?height=200&width=200",
    price: "₦4,500",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 4,
    name: "Naija Special Fried Rice with Shrimps",
    image: "/placeholder.svg?height=200&width=200",
    price: "₦4,500",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 5,
    name: "Calabar Asun & Gravy Sauce",
    image: "/placeholder.svg?height=200&width=200",
    price: "₦4,500",
    duration: "25mins",
    isHighlighted: true,
  },
  {
    id: 6,
    name: "Naija Special Fried Rice with Shrimps",
    image: "/placeholder.svg?height=200&width=200",
    price: "₦4,500",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 7,
    name: "Naija Special Fried Rice with Shrimps",
    image: "/placeholder.svg?height=200&width=200",
    price: "₦4,500",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 8,
    name: "Naija Special Fried Rice with Shrimps",
    image: "/placeholder.svg?height=200&width=200",
    price: "₦4,500",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 9,
    name: "Shredded Roasted Chicken",
    image: "/placeholder.svg?height=200&width=200",
    price: "₦4,500",
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
            bg-white rounded-2xl p-4 transition-all duration-300
            ${item.isHighlighted ? "opacity-100 scale-105 shadow-lg z-10" : "opacity-40 scale-100"}
          `}
        >
          <div className="flex justify-center mb-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-8 border-white shadow-inner">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover w-full h-full" />
            </div>
          </div>
          <h3 className="font-medium text-sm mb-3 text-center line-clamp-2">{item.name}</h3>
          <div className="flex justify-between items-center text-xs text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{item.duration}</span>
            </div>
            <span className="font-semibold">Approx. {item.price}</span>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-[#2563EB] text-white py-2 px-3 rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors">
              Ask to add
            </button>
            <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart className="w-4 h-4" />
            </button>
            <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

