export function HeroSection() {
  return (
    <div className="relative text-center py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#000_20%)] bg-black bg-[length:30px_30px] opacity-95"
        style={{
          maskImage: "radial-gradient(circle at center, black, transparent)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent)",
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-12">
          <span className="text-white text-2xl">★</span>
          <span className="text-white uppercase tracking-[0.2em] text-sm font-medium">
            JOIN THE CHOW AFRICA WAITLIST
          </span>
          <span className="text-white text-2xl">★</span>
        </div>
        <h1 className="text-8xl font-bold mb-4 leading-tight">
          <span className="text-white font-display">Find chow</span>
          <span className="text-emerald-400 italic font-display relative">
            Asap!
            <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-400" />
          </span>
        </h1>
        <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
          The patient dog eats left overs. Be the first to know when we launch. Join our Waitlist 😋
        </p>
      </div>
    </div>
  )
}

