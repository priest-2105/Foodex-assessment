"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function WaitlistForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() 
  }

  return (
    <form onSubmit={handleSubmit} className="w-fit mx-auto mb-16">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white rounded-xl pl-4 pr-28 py-7 text-[#1A1A1A] text-md font-bold font-sofia-sans"
          required
        />
        <Button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer font-sofia-sans text-white text-md rounded-full px-12 py-7 border-white border-2 font-medium whitespace-nowrap"
        >
          JOIN WAITLIST
        </Button>
      </div>
    </form>
  )
}

