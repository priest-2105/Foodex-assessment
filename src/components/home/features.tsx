import { Check } from "lucide-react";
import GemIcon from "@/assets/icons/gem"
import Cloud from "@/assets/vectors/cloud"
import WideCloud from "@/assets/vectors/wide-cloud"
import FeatureSectionImage from "@/assets/img/emmanuel-ikwuegbu-81fRHbVliQI-unsplash 1.png"
import PriceTag from "@/components/home/pricetag"
import GreenTag from "@/components/home/greentag"

const tagsData = [
  { icon: <Check className="w-4 h-4" />, text: "Picked by 214 people today" },
  { icon: <Check className="w-4 h-4" />, text: "Exclude onions" },
  { icon: <Check className="w-4 h-4" />, text: "Must include turkey" },
];

export function FeatureSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10  mx-auto py-8">
        {/* Header */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <span className="text-black text-2xl"><GemIcon className="w-4 h-4" /></span>
          <span className="uppercase tracking-[0.2em] text-sm font-pangram  font-medium">JOIN THE CHOWAFRICA WAITLIST</span>
          <span className="text-black text-2xl"><GemIcon className="w-4 h-4" /></span>
        </div>

        {/* Main Content */}
        <div className="text-center mb-8 relative">
          <h2 className="text-[#353542] text-6xl font-pangram font-bold mb-4">
            tired of eating the
          </h2>
           <div className="inline-block relative">
              <span className="relative z-10 bg-[#E67E22] border-black border-4 text-white text-4xl px-8 py-2 font-sofia-sans rounded-full">
              🍛 same dishes everyday? 🍝
              </span>
            </div>
          <p className="text-black max-w-xl my-12 font-semibold text-lg font-sofia-sans-condenced mx-auto">
            Do you crave new and exciting dishes? Look no further! Chow is the perfect solution for discovering your
            next dish.
          </p>
          <div className="absolute bottom-0 left-20"><WideCloud/></div>
          <div className="absolute bottom-0 right-0"><Cloud/></div>
        </div>

        {/* Features Grid */}
        <div className="md:ml-64 px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16 mx-auto  bg-[#FFF8F2] p-6">
          {/* Left Side - Food Grid */}
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-white rounded-2xl shadow-sm p-2 flex items-center justify-center"
              >
                <img src="/placeholder.svg" alt="Food item" className="w-full h-full object-cover rounded-xl" />
              </div>
            ))}
          </div>

          {/* Right Side - Image and Features */}
          <div className="relative w-fit">
            <img
              src={FeatureSectionImage}
              alt="Person using phone"
              className="rounded-2xl w-[397px]"
            />

            {/* Feature Pills */}
            <div className="absolute top-4 -right-4 flex flex-col gap-2">
              <PriceTag/>
            </div>

            <div className="absolute bottom-14 -left-4 flex flex-col gap-2">
              
              {tagsData.map((tag, index) => (
                 <div
                 className={`
                   bg-[#009F79] text-white px-4 py-2 rounded-lg border-2 border-white 
                   flex items-center gap-4 shadow-lg ml-[${index * 100}px]
                 `}
               >
                 <div className="bg-[#1E735E] w-fit text-xs p-1 mb-1 rounded-full">
                 {tag.icon}
                 </div>
                 <p className="text-xs font-medium"> {tag.text}
                 </p>
               </div>
              ))}
            </div>

            {/* Price Tag */}
            <div className="absolute bottom-8 right-[-20px] bg-[#E67E22] text-white px-6 py-3 rounded-lg">
              You can buy all for <span className="font-bold">₦5000</span> at Yaba
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

