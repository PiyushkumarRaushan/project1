"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Checkbox } from "@/app/components/ui/checkbox"
import {
  MapPin,
  Calendar,
  Clock,
  ArrowLeft,
  Building,
  Phone,
  Mail,
  Globe,
  Share2,
  Heart,
  CheckCircle,
} from "lucide-react"

// In a real app, this would come from a database
const opportunities = [
  {
    id: "1",
    title: "Community Garden Helper",
    organization: "Green City Initiative",
    organizationDescription:
      "Green City Initiative is a non-profit organization dedicated to creating sustainable urban environments through community gardens, tree planting, and environmental education.",
    location: "Downtown Community Garden",
    address: "123 Main Street, Anytown, USA",
    distance: "1.2 miles away",
    date: "Every Saturday",
    time: "9:00 AM - 12:00 PM",
    category: "Environment",
    image: "/placeholder.svg?height=400&width=800",
    description:
      "Join us at the Downtown Community Garden to help maintain this beautiful green space in the heart of our city. Volunteers will assist with planting, weeding, watering, and harvesting seasonal produce that is donated to local food banks. No experience necessary - we'll teach you everything you need to know!",
    requirements: [
      "Must be 16 years or older",
      "Wear comfortable clothes that can get dirty",
      "Bring water bottle and sunscreen",
      "Garden tools provided, but feel free to bring your own gloves",
    ],
    skills: ["Gardening", "Physical Labor"],
    commitment: "Ongoing",
    contactName: "Sarah Johnson",
    contactPhone: "(555) 123-4567",
    contactEmail: "garden@greencityinitiative.org",
    website: "www.greencityinitiative.org",
  },
]

export default function OpportunityPage() {
  const params = useParams()
  const id = params.id as string

  // In a real app, we would fetch the opportunity data based on the ID
  const opportunity = opportunities.find((opp) => opp.id === id) || opportunities[0]

  const [applied, setApplied] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault()
    setApplied(true)
  }

  return (
    <div className="container py-8">
      <Link href="/search" className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Back to Search Results
      </Link>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={opportunity.image || "/placeholder.svg"}
              alt={opportunity.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge>{opportunity.category}</Badge>
              <Badge variant="outline" className="bg-white">
                {opportunity.commitment}
              </Badge>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{opportunity.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">{opportunity.organization}</p>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{opportunity.location}</p>
                  <p className="text-sm text-muted-foreground">{opportunity.distance}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-sm text-muted-foreground">{opportunity.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Time</p>
                  <p className="text-sm text-muted-foreground">{opportunity.time}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {opportunity.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>

            <Tabs defaultValue="description">
              <TabsList className="mb-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="organization">Organization</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-4">
                <p>{opportunity.description}</p>
              </TabsContent>
              <TabsContent value="requirements">
                <h3 className="font-medium mb-2">Requirements:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {opportunity.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="organization">
                <div className="space-y-4">
                  <h3 className="font-medium">{opportunity.organization}</h3>
                  <p>{opportunity.organizationDescription}</p>
                  <Link href={`/organization/${opportunity.organization.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="outline">View Organization Profile</Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="space-y-6">
          {applied ? (
            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
                <p className="text-muted-foreground mb-4">
                  Thank you for your interest in volunteering. The organization will contact you soon with next steps.
                </p>
                <Button variant="outline" className="w-full" onClick={() => setApplied(false)}>
                  Apply to Another Position
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Interested in this opportunity?</h3>
                <div className="space-y-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Apply Now</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Apply to Volunteer</DialogTitle>
                        <DialogDescription>
                          Fill out this form to express your interest in this volunteer opportunity.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleApply} className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="firstName" className="text-sm font-medium">
                              First Name
                            </label>
                            <Input id="firstName" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="lastName" className="text-sm font-medium">
                              Last Name
                            </label>
                            <Input id="lastName" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone
                          </label>
                          <Input id="phone" type="tel" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Why are you interested?
                          </label>
                          <Textarea id="message" placeholder="Tell us why you're interested in this opportunity" />
                        </div>
                        <div className="flex items-start space-x-2 pt-2">
                          <Checkbox id="terms" required />
                          <label htmlFor="terms" className="text-sm text-muted-foreground">
                            I agree to be contacted about this volunteer opportunity
                          </label>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Submit Application</Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" className="w-full flex items-center gap-2" onClick={() => setSaved(!saved)}>
                    <Heart className={`h-4 w-4 ${saved ? "fill-red-500 text-red-500" : ""}`} />
                    {saved ? "Saved" : "Save for Later"}
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    onClick={() => {
                      navigator
                        .share({
                          title: opportunity.title,
                          text: `Check out this volunteer opportunity: ${opportunity.title}`,
                          url: window.location.href,
                        })
                        .catch(() => {
                          // Fallback if Web Share API is not supported
                          navigator.clipboard.writeText(window.location.href)
                          alert("Link copied to clipboard!")
                        })
                    }}
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{opportunity.organization}</p>
                    <p className="text-sm text-muted-foreground">{opportunity.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <p>{opportunity.contactPhone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <p>{opportunity.contactEmail}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <p>{opportunity.website}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-lg font-bold mb-4">Location</h3>
            <div className="rounded-lg overflow-hidden border h-64 bg-slate-100 flex items-center justify-center">
              <p className="text-muted-foreground">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

