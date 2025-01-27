import BackgroundImage from "@/assets/img/Frame 1000001650.png";
import { WaitlistForm } from "./waitlist-form";
import GemIcon from "@/assets/icons/gem";
import AnimatedLine from "@/components/home/animatedline/animatedLine"
import { Navigation } from "./navigation";
import { HeroSectionFoodList } from "./heroSectionfoodlist";


export function HeroSection() {
  return (
    <>
    <Navigation/>
   <div className="md:ml-64 p-8"> 
    <div 
      className="relative text-center rounded-2xl h-fit py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="pb-18">
      <div className="relative z-10 pt-16">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <span className="text-white text-2xl">
            <GemIcon className="w-6 h-6" />
          </span>
          <span className="text-white uppercase tracking-[0.2em] text-sm font-medium font-pangram">
            JOIN THE CHOW AFRICA WAITLIST
          </span>
          <span className="text-white text-2xl">
            <GemIcon className="w-6 h-6" />
          </span>
        </div>
        <h1 className="text-8xl font-bold mb-4 flex items-center text-center justify-center leading-tight">
          <span className="text-white font-pangram">Find chow, </span>
          <div className="flex items-center justify-center">
          <div className="">
            <h1 className="text-8xl text-[#009F79] font-courgette font-bold ml-4">Asap!</h1>
            <AnimatedLine />
          </div>
            </div>
        </h1>
        <p className="text-white/90 text-lg mb-12 max-w-xl mx-auto font-normal font-pangram-stretched">
          The patient dog eats left overs. Be the first to know when we launch. Join our Waitlist 😎
        </p>
      </div>
      <WaitlistForm />
      </div>
      <HeroSectionFoodList/>
    </div>
    </div>
    </>
  )
}