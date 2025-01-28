import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
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
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4 custom:gap-4" ref={ref}>
      {foodItems.map((item, index) => (
        <motion.div
          key={item.id}
          custom={index}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          className={`
             rounded-lg sm:rounded-2xl custom:rounded-2xl p-2 sm:p-4 custom:p-4 cursor-pointer transition-all duration-300
            ${item.isHighlighted ? "opacity-100 scale-105 shadow-lg z-10 bg-white" : "opacity-5 shadow-none scale-100 bg-[#ffffffa2]"}
          `}
        >
          <div className="flex justify-center mb-2 sm:mb-4 custom:mb-4">
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 custom:w-24 custom:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 sm:border-8 custom:border-8 border-white shadow-inner">
              <img
                src={item.image || "@/assets/img/Home-new-01.png"}
                alt={item.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <h3 className="font-bold text-xs sm:text-sm custom:text-[120px] mb-1 text-start font-pangram line-clamp-2">
            {item.name}
          </h3>
          <span className="text-[#49280F] py-0.5 px-1 sm:py-1 sm:px-2 custom:py-1 custom:px-2 text-[6px] sm:text-[8px] custom:text-[8px] rounded-full inline-block bg-[#D6D5CA] font-pangram">
            🍲 Continental
          </span>
          <div className="flex justify-between items-center text-[8px] sm:text-xs custom:text-xs mt-1 sm:mt-2 custom:mt-2 text-gray-600 mb-1 sm:mb-3 custom:mb-3">
            <div className="flex items-center gap-0.5 sm:gap-1 custom:gap-1">
              <ThumbsUp className="w-2 h-2 sm:w-3 sm:h-3 custom:w-3 custom:h-3" />
              <span className="font-sofia-sans">{item.duration}</span>
            </div>
            <div className="p-0.5 sm:p-[2.5px] custom:p-[2.5px] bg-[#858786] rounded-full"></div>
            <span className="font-semibold">Approx. {item.price}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

