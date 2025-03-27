"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Badge } from "@/app/components/ui/badge"
import { Progress } from "@/app/components/ui/progress"
import { Calendar, Clock, MapPin, Award, Edit, Settings } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  // In a real app, this would come from a database
  const upcomingOpportunities = [
    {
      id: 1,
      title: "Community Garden Helper",
      organization: "Green City Initiative",
      location: "Downtown Community Garden",
      date: "Saturday, Mar 20",
      time: "9:00 AM - 12:00 PM",
      image: "https://img.huffingtonpost.com/asset/5d015e972500004e12de770e.jpeg?ops=1200_630height=100&width=100",
    },
    {
      id: 2,
      title: "Food Bank Assistant",
      organization: "Community Food Network",
      location: "Main Street Food Bank",
      date: "Thursday, Mar 25",
      time: "1:00 PM - 4:00 PM",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const pastOpportunities = [
    {
      id: 3,
      title: "Beach Cleanup",
      organization: "Ocean Conservancy",
      location: "City Beach",
      date: "February 15, 2023",
      hours: 3,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      title: "Animal Shelter Helper",
      organization: "Paws & Claws Rescue",
      location: "Eastside Animal Shelter",
      date: "January 22, 2023",
      hours: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      title: "Homeless Shelter Meal Service",
      organization: "City Homeless Coalition",
      location: "Downtown Shelter",
      date: "December 24, 2022",
      hours: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const savedOpportunities = [
    {
      id: 6,
      title: "Museum Guide",
      organization: "City Art Museum",
      location: "Downtown Art District",
      date: "Weekends",
      time: "11:00 AM - 4:00 PM",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 7,
      title: "Youth Mentor",
      organization: "Big Brothers Big Sisters",
      location: "Various Locations",
      date: "Flexible",
      time: "Flexible",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const skills = [
    { name: "Communication", level: 85 },
    { name: "Leadership", level: 70 },
    { name: "Organization", level: 90 },
    { name: "Problem Solving", level: 75 },
  ]

  const interests = ["Environment", "Education", "Animals", "Community"]

  const totalHours = pastOpportunities.reduce((sum, opp) => sum + opp.hours, 0)

  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h1 className="text-2xl font-bold">Jane Doe</h1>
                <p className="text-muted-foreground mb-4">San Francisco, CA</p>
                <div className="flex gap-2 mb-4">
                  <Link href="/profile/edit">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Edit className="h-4 w-4" />
                      Edit Profile
                    </Button>
                  </Link>
                  <Link href="/settings">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Settings className="h-4 w-4" />
                      Settings
                    </Button>
                  </Link>
                </div>
                <div className="w-full p-4 bg-primary/10 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Total Volunteer Hours</span>
                    <span className="font-bold">{totalHours} hours</span>
                  </div>
                  <Progress value={Math.min((totalHours / 50) * 100, 100)} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    {50 - totalHours > 0 ? `${50 - totalHours} hours until next badge` : "Badge earned!"}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    Environmental Champion
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    10+ Hours
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="outline">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">
                Edit Interests
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Upcoming Opportunities</h2>
              {upcomingOpportunities.length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center">
                    <p className="text-muted-foreground mb-4">You don't have any upcoming volunteer opportunities.</p>
                    <Link href="/search">
                      <Button>Find Opportunities</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                upcomingOpportunities.map((opportunity) => (
                  <Card key={opportunity.id}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <img
                          src={opportunity.image || "/placeholder.svg"}
                          alt={opportunity.title}
                          className="w-20 h-20 rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{opportunity.title}</h3>
                          <p className="text-muted-foreground">{opportunity.organization}</p>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{opportunity.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{opportunity.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{opportunity.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Link href={`/opportunity/${opportunity.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="past" className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Past Opportunities</h2>
              {pastOpportunities.length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center">
                    <p className="text-muted-foreground">You don't have any past volunteer opportunities.</p>
                  </CardContent>
                </Card>
              ) : (
                pastOpportunities.map((opportunity) => (
                  <Card key={opportunity.id}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <img
                          src={opportunity.image || "/placeholder.svg"}
                          alt={opportunity.title}
                          className="w-20 h-20 rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{opportunity.title}</h3>
                          <p className="text-muted-foreground">{opportunity.organization}</p>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{opportunity.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{opportunity.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{opportunity.hours} hours</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Link href={`/opportunity/${opportunity.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm">
                            Leave Review
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="saved" className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Saved Opportunities</h2>
              {savedOpportunities.length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center">
                    <p className="text-muted-foreground mb-4">You don't have any saved volunteer opportunities.</p>
                    <Link href="/search">
                      <Button>Find Opportunities</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                savedOpportunities.map((opportunity) => (
                  <Card key={opportunity.id}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <img
                          src={opportunity.image || "/placeholder.svg"}
                          alt={opportunity.title}
                          className="w-20 h-20 rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{opportunity.title}</h3>
                          <p className="text-muted-foreground">{opportunity.organization}</p>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{opportunity.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{opportunity.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{opportunity.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Link href={`/opportunity/${opportunity.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

