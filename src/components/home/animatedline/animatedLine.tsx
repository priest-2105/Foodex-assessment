import type React from "react"
import { useEffect, useRef } from "react"
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
      className="-mt-2"
      width="268"
      height="12"
      viewBox="0 0 268 12"
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

