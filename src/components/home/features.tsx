import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import GemIcon from "../../assets/icons/gem"
import Cloud from "../../assets/vectors/cloud"
import WideCloud from "../../assets/vectors/wide-cloud"
import featureImage from "../../assets/img/emmanuel-ikwuegbu-81fRHbVliQI-unsplash 1.png"
import { FoodGrid } from "./food-grid"
import backgroundImage from "../../assets/img/features-background.png"

const tagsData = [
  { icon: "👍🏾", text: "Picked by 314 people today" },
  { icon: "🧅", text: "Exclude onions" },
  { icon: "🥩", text: "Must include turkey" },
]

export function FeatureSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 1.0,  
    triggerOnce: true,  
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const greenTagVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const orangeTagVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-fit mx-auto px-4">
        {/* Header */}
        <motion.div
          className="flex items-center justify-center space-x-3 mb-12"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <span className="text-black text-2xl">
            <GemIcon className="w-4 h-4" />
          </span>
          <span className="uppercase tracking-[0.2em] text-sm font-pangram  font-medium">
            JOIN THE CHOWAFRICA WAITLIST
          </span>
          <span className="text-black text-2xl">
            <GemIcon className="w-4 h-4" />
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="text-center mb-8 relative" ref={ref}>
          <div className="text-center mb-8 relative max-lg:hidden">
          <div className="absolute bottom-0 left-20 z-1 max-lg:-left-50 max-lg:bottom-20">
            <WideCloud className="opacity-50 z-1" />
          </div>
          <div className="absolute bottom-0 right-0 z-1 max-lg:-left-50 max-lg:bottom-20">
            <Cloud className="opacity-50 z-1" />
          </div>
            <motion.h2
              className="text-[#353542] text-6xl font-pangram font-bold mb-4 z-50"
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              tired of eating the
            </motion.h2>
            <motion.div
              className="inline-block relative z-10"
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <span className="relative z-10 bg-[#E67E22] border-black border-4 text-white text-4xl px-8 py-2 font-sofia-sans rounded-full">
                🍛 same dishes everyday? 🍝
              </span>
            </motion.div>
            <motion.p
              className="text-black max-w-xl my-12 font-semibold text-lg font-sofia-sans-condenced mx-auto z-10"
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              Do you crave new and exciting dishes? Look no further! Chow is the perfect solution for discovering your
              next dish.
            </motion.p>
          </div>
          <div className="text-center mb-8 relative max-lg:block lg:hidden">
            <div className="absolute bottom-0 left-20 z-0 max-lg:-left-50 max-lg:bottom-20">
              <WideCloud className="opacity-50" />
            </div>
            <div className="absolute bottom-0 right-0 z-0 max-lg:-left-50 max-lg:bottom-20">
              <Cloud className="opacity-50" />
            </div>
            <motion.h2
              className="text-[#353542] text-6xl max-lg:text-3xl font-pangram font-bold mb-4 z-10"
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              tired of eating the same dishes
              <span className="relative z-10 bg-[#E67E22] border-black border-4 text-white text-4xl px-8 py-2 font-sofia-sans rounded-full max-lg:mx-2 max-lg:text-3xl max-md:text-2xl max-sm:text-lg">
                everyday?
              </span>
            </motion.h2>
            <motion.p
              className="text-black max-w-xl my-12 font-semibold text-lg font-sofia-sans-condenced mx-auto z-10 max-sm:px-4 max-lg:px-8"
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              Do you crave new and exciting dishes? Look no further! Chow is the perfect solution for discovering your
              next dish.
            </motion.p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="xl:ml-64 md:px-24">
          <div
            className={`grid xl:grid-cols-2 gap-12 items-center mt-16 mx-auto bg-no-repeat bg-center bg-cover p-8`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {/* Left Side - Food Grid */}
            <FoodGrid />

            {/* Right Side - Image and Features */}
            <div className="relative justify-center w-fit mx-auto text-center">
              <img
                src={featureImage || "/placeholder.svg"}
                alt="Person using phone"
                className="rounded-2xl w-[397px] text-center md:ml-auto mx-auto"
              />

              {/* Feature Pills */}
              <motion.div
                className="absolute top-30 -right-26 max-md:-right-4 max-md:top-20 flex flex-col gap-2"
                initial="hidden"
                animate={controls}
                variants={orangeTagVariants}
              >
                <div className="bg-[#DB7023] text-white px-4 py-2 rounded-lg border-2 border-white block items-center gap-4 shadow-lg">
                  <div className="bg-[#77441E] w-fit text-[9px] p-1 mb-1 rounded-full">💵</div>
                  <p className="text-[9px] font-medium">
                    You can buy all for<span className="text-[#2EE6A8] font-bold"> N2,500</span> at Yaba
                  </p>
                </div>
              </motion.div>

              <div className="absolute bottom-14 -left-4 flex flex-col gap-2">
                {tagsData.map((tag, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#009F79] text-white px-4 py-2 rounded-lg border-2 border-white flex items-center gap-4 shadow-lg mt-2"
                    initial="hidden"
                    animate={controls}
                    variants={greenTagVariants}
                    custom={index}
                    style={{ marginLeft: `${index * 10}px` }}
                  >
                    <div className="bg-[#1E735E] w-fit text-[9px] p-1 mb-1 rounded-full">{tag.icon}</div>
                    <p className="text-[9px] font-medium">{tag.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}