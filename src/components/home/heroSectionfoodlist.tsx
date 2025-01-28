import { ThumbsUp } from 'lucide-react';
import Slider from "react-slick";
import type { FoodItem } from "@/types/food";
import productImage from "@/assets/img/Home-new-01.png";
import productImageOne from "@/assets/img/image (3).png";
import productImageTwo from "@/assets/img/image (2).png";
import productImageThree from "@/assets/img/image (1).png"; 
import productImageFive from "@/assets/img/e4e2604d03796a699fa8505fbd92d350-removebg-preview.png";
import PhoneFrame from "@/assets/img/phone-frame.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Pasta, Green Sauce & Kpomo",
    image: productImageOne,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 2,
    name: "Egg-cooked Fried Rice & Peas",
    image: productImageTwo,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 3,
    name: "Shredded Roasted Chicken",
    image: productImageThree,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: false,
  },
  {
    id: 4,
    name: "Naija Special Fried Rice with Shrimps",
    image: PhoneFrame,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: true,
  },
  {
    id: 5,
    name: "Souse Fries & Bacon",
    image: productImageFive,
    price: "₦3,000",
    duration: "25mins",
    isHighlighted: false,
  },
];

export function HeroSectionFoodList() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1204,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <style jsx global>{`
        .slick-track {
          display: flex !important;
          align-items: flex-end !important;
        }
        .slick-slide {
          height: inherit !important;
          display: flex !important;
          align-items: flex-end !important;
        }
        .slick-slide > div {
          width: 100%;
          display: flex;
          align-items: flex-end;
        }
      `}</style>
      
      <Slider {...settings}>
        {foodItems.map((item) => (
          <div className="px-2 flex items-end" key={item.id}>
            {item.isHighlighted ? (
              <div className="flex justify-center rounded-xl bg-transparent md-mb-18 py-3 md:h-[500px]">
                <div className="relative w-full h-full">
                  <img 
                    src={item.image || "@/assets/img/phone-frame.png"} 
                    alt={item.name} 
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white py-2 mb-5 rounded-xl text-start px-2 cursor-pointer w-full">
                <div className="flex justify-center rounded-xl bg-[#d6d5ca44] py-3 mb-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <img 
                      src={item.image || "@/assets/img/Home-new-01.png"} 
                      alt={item.name} 
                      className="object-cover w-full h-full" 
                    />
                  </div>
                </div>
                <h3 className="font-bold py-1 text-sm mb-1 text-start font-pangram md:line-clamp-2 max-md:text-xs  max-md:font-bold  max-md:w-48">
                  {item.name}
                </h3>
                <span className="text-[#49280F] py-1 px-2 text-[8px] rounded-full inline-block bg-[#D6D5CA] text-start font-pangram">
                  🍲 Continental
                </span>
                <div className="flex py-1 justify-between items-center text-xs mt-2 text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" />
                    <span className="font-sofia-sans">{item.duration}</span>
                  </div>
                  <div className="p-[2.5px] bg-[#858786] rounded-full"></div>
                  <span className="font-semibold">Approx. {item.price}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}