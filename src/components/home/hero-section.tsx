// import BackgroundImage from "@/assets/img/Frame 1000001650.png";
// import { WaitlistForm } from "./waitlist-form";
// import GemIcon from "@/assets/icons/gem";

// export function HeroSection() {
//   return (
//     <div 
//       className="relative text-center rounded-2xl py-24 bg-cover bg-center"
//       style={{ backgroundImage: `url(${BackgroundImage})` }}
//     >
//       <div className="relative z-10 py-16">
//         <div className="flex items-center justify-center space-x-3 mb-2">
//           <span className="text-white text-2xl">
//             <GemIcon className="w-6 h-6" />
//           </span>
//           <span className="text-white uppercase tracking-[0.2em] text-sm font-medium font-pangram">
//             JOIN THE CHOW AFRICA WAITLIST
//           </span>
//           <span className="text-white text-2xl">
//             <GemIcon className="w-6 h-6" />
//           </span>
//         </div>
//         <h1 className="text-8xl font-bold mb-4 leading-tight">
//           <span className="text-white font-pangram">Find chow, </span>
//           <span className="text-[#009F79] font-courgette relative">
//             Asap!
            
//             {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-400" /> */}
//           </span>
//         </h1>
//         <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
//           The patient dog eats left overs. Be the first to know when we launch. Join our Waitlist 😋
//         </p>
//       </div>
//       <WaitlistForm />
//     </div>
//   )
// }




import BackgroundImage from "@/assets/img/Frame 1000001650.png";
import { WaitlistForm } from "./waitlist-form";
import GemIcon from "@/assets/icons/gem";
import AnimatedLine from "@/components/home/animatedline/animatedLine"


export function HeroSection() {
  return (
    <div 
      className="relative text-center rounded-2xl py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
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
  )
}