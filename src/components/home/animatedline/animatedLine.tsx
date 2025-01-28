import React, { useEffect, useRef } from "react"
import "./animatedLine.css"

const AnimatedLine: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      pathRef.current.style.strokeDasharray = `${length} ${length}`
      pathRef.current.style.strokeDashoffset = `${length}`
      pathRef.current.style.animation = "drawLine 1.2s ease-out forwards"
    }
  }, [])

  return (
    <svg
      className="w-48 max-md:mt-0 max-sm:w-20 max-md:w-30 max-lg:w-40 -mt-2"
      height="12"
      viewBox="0 0 268 12"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M1 9.00003C91.3333 4.83337 270.5 -0.999968 264.5 9.00003"
        stroke="#D87023"
        strokeWidth="6"
      />
    </svg>
  )
}

export default AnimatedLine