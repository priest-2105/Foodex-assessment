"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function WaitlistForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white rounded-full h-12 px-6"
          required
        />
        <Button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 rounded-full h-12 font-medium"
        >
          JOIN WAITLIST
        </Button>
      </div>
    </form>
  )
}

