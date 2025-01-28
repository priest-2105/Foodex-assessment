import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface GoodbyeCardProps {
  className?: string
}

export function GoodbyeCard({ className }: GoodbyeCardProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const cardVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5,
      },
    },
  }

  return (
    <div className={`w-full mx-auto py-6 px-4 lg:px-0 lg:pl-46 text-start lg:pr-24 ${className}`}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        className="flex flex-col lg:flex-row items-center md:justify-between max-md:justify-start text-start w-full font-pangram font-bold shadow-2xl border border-[#EDEFFC] p-6 lg:p-8 rounded-2xl"
      >
        <div className="text-4xl sm:text-3xl text-start justify-start md:text-4xl lg:text-[32px] space-y-2 lg:space-y-0 mb-6 lg:mb-0 max-w-[550px]">
          <span className="block md:inline">Signup to</span>
          <span className="bg-[#5F63E1] text-white font-medium border-2 border-[#000] px-4 py-1 rounded-full inline-block my-2 lg:my-0 lg:mx-2">
            chowafrica
          </span>
          <span className="block md:inline">and say</span>
          <span className="bg-black text-white border-2 border-[#009F79] px-3 py-1 rounded-full inline-flex items-center gap-2 my-2 lg:my-0 lg:mx-2">
            <span className="font-medium">goodbye</span>
            <span className="text-2xl">👋🏾</span>
          </span>
          <span className="block lg:inline">to mealtime stress.</span>
        </div>

        <button className="bg-[#009F79] hover:bg-[#008F69] font-sofia-sans rounded-full shadow-xl border-2 border-[#FFFFFF] transition-colors text-white px-8 sm:px-10 py-3 sm:py-4 font-medium text-start cursor-pointer w-fit lg:w-auto">
          JOIN WAITLIST
        </button>
      </motion.div>
    </div>
  )
}

