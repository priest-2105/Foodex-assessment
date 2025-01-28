import type React from "react"
import AnimatedLine from "../components/AnimatedLine"

const AnimationDemo: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Animated Line Demo</h1>
        <AnimatedLine />
      </div>
    </div>
  )
}

export default AnimationDemo

