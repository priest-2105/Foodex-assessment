import { Clock, Heart, Share2 } from "lucide-react"

interface FoodItem {
  id: number
  name: string
  image: string
  price: string
  duration: string
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Naija Special Fried Rice with Shrimps",
    image: "/placeholder.svg?height=200&width=200",
    price: "₦1,500",
    duration: "25mins",
  },
  {
    id: 2,
    name: "Egg-cooked Fried Rice & Peas",
    image: "/placeholder.svg?height=200&width=200",
    price: "₦1,200",
    duration: "20mins",
  },
  {
    id: 3,
    name: "Shredded Roasted Chicken",
    image: "/placeholder.svg?height=200&width=200",
    price: "₦2,000",
    duration: "30mins",
  },
]

export function FoodGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {foodItems.map((item) => (
        <div key={item.id} className="bg-[#FAF9F6] rounded-3xl p-6 shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-inner">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover w-full h-full" />
            </div>
          </div>
          <h3 className="font-medium text-lg mb-4 text-center">{item.name}</h3>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{item.duration}</span>
            </div>
            <span className="font-semibold">Approx. {item.price}</span>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-[#2563EB] text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Ask to add
            </button>
            <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

