import { motion } from "framer-motion"
import BackgroundImage from "../../assets/img/Frame 1000001650.png"
import { WaitlistForm } from "./waitlist-form"
import GemIcon from "../../assets/icons/gem"
import AnimatedLine from "./animatedline/animatedLine"
import { Navigation } from "./navigation"
import { HeroSectionFoodList } from "./heroSectionfoodlist"

export function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <Navigation />
      <div className="md:ml-64 py-8 px-8 max-lg:mt-18 max-sm:mt-18  max-sm:px-4">
        <div
          className="relative text-center rounded-2xl h-fit pt-24 bg-cover bg-center"
          style={{ backgroundImage: `url(${BackgroundImage || "/placeholder.svg"})` }}
        >
          <div className="pb-2">
            <motion.div className="relative z-10 pt-16" initial="hidden" animate="visible" variants={textVariants}>
              <div className="flex items-center justify-center space-x-3 mb-2">
                <span className="text-white text-2xl max-sm:text-sm">
                  <GemIcon className="w-6 h-6 max-sm:h2 max-sm:w2" />
                </span>
                <span className="text-white uppercase tracking-[0.2em] text-sm font-medium font-pangram max-md:text-sm max-sm:text-xs">
                  JOIN THE CHOW AFRICA WAITLIST
                </span>
                <span className="text-white text-2xl max-sm:text-sm">
                  <GemIcon className="w-6 h-6 max-sm:h2 max-sm:w2" />
                </span>
              </div>
              <motion.h1
                className="text-8xl font-bold mb-4 flex items-center text-center justify-center leading-tight max-xl:text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl"
                variants={textVariants}
              >
                <span className="text-white font-pangram">Find chow, </span>
                <div className="flex items-center justify-center">
                  <div className="">
                    <h1 className="text-8xl text-[#009F79] font-courgette font-bold ml-4  max-xl:text-7xl max-lg:text-5xl max-md:text-4xl max-sm:-mb-1 max-sm:text-3xl">
                      Asap!
                    </h1>
                    <AnimatedLine />
                  </div>
                </div>
              </motion.h1>
              <motion.p
                className="text-white/90 text-lg mb-12 max-w-xl mx-auto font-normal font-pangram-stretched max-lg:max-w-screen max-lg:px-16 max-lg:text-md  max-md:max-w-screen max-md:px-16 max-md:text-sm max-sm:txt-sm max-sm:px-8"
                variants={textVariants}
              >
                The patient dog eats left overs. Be the first to know when we launch. Join our Waitlist 😎
              </motion.p>
            </motion.div>
            <WaitlistForm />
          </div>
          <HeroSectionFoodList />
        </div>
      </div>
    </>
  )
}

