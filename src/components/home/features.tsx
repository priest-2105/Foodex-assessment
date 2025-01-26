import { Check } from "lucide-react"
import React from "react"

export function FeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-center space-x-3 mb-12">
          <span className="text-black text-2xl">★</span>
          <span className="uppercase tracking-[0.2em] text-sm font-medium">JOIN THE CHOWAFRICA WAITLIST</span>
          <span className="text-black text-2xl">★</span>
        </div>

        {/* Main Content */}
        <div className="text-center mb-8">
          <h2 className="text-[#2D2D2D] text-5xl font-medium mb-4">
            tired of eating the
            <div className="inline-block relative mx-2">
              <span className="relative z-10 bg-[#E67E22] text-white px-8 py-2 rounded-full">
                same dishes everyday?
              </span>
            </div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Do you crave new and exciting dishes? Look no further! Chow is the perfect solution for discovering your
            next dish.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
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
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LrPdVSWBjW7juKCgxreNqQOmARWIZ7.png"
              alt="Person using phone"
              className="rounded-2xl w-full"
            />

            {/* Feature Pills */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <Check className="w-4 h-4" />
                Picked by 214 people today
              </div>
              <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <Check className="w-4 h-4" />
                Exclude onions
              </div>
              <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <Check className="w-4 h-4" />
                Must include turkey
              </div>
            </div>

            {/* Price Tag */}
            <div className="absolute bottom-8 right-[-20px] bg-[#E67E22] text-white px-6 py-3 rounded-lg">
              You can buy all for <span className="font-bold">₦5000</span> at Yaba
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

