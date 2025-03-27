"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { MapPin, Search } from "lucide-react"

export default function HeroSection() {
  const router = useRouter()
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (location) params.append("location", location)
    if (category) params.append("category", category)
    router.push(`/search?${params.toString()}`)
  }

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // In a real app, we would convert coordinates to a location name
        // using a geocoding service
        setLocation("Current Location")
      })
    }
  }

  return (
    <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Difference in Your Community</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find volunteer opportunities that match your skills, interests, and availability
          </p>

          <form onSubmit={handleSearch} className="grid sm:grid-cols-[1fr_auto_auto] gap-3 max-w-2xl mx-auto">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Enter your location"
                className="pl-10"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button type="button" variant="outline" onClick={handleUseCurrentLocation} className="sm:w-auto w-full">
              Current Location
            </Button>
            <Button type="submit" className="sm:w-auto w-full">
              <Search className="h-4 w-4 mr-2" />
              Find Opportunities
            </Button>
          </form>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="environment">Environment</SelectItem>
                <SelectItem value="health">Health</SelectItem>
                <SelectItem value="animals">Animals</SelectItem>
                <SelectItem value="community">Community</SelectItem>
                <SelectItem value="arts">Arts & Culture</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  )
}

