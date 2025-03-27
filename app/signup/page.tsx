"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Checkbox } from "@/app/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [userType, setUserType] = useState("volunteer")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would handle form submission and authentication
    router.push(userType === "volunteer" ? "/profile" : "/organization/dashboard")
  }

  return (
    <div className="container max-w-md py-12">
      <Link href="/" className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>Join our community to find volunteer opportunities or recruit volunteers</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <Tabs value={userType} onValueChange={setUserType} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="organization">Organization</TabsTrigger>
            </TabsList>
            <TabsContent value="volunteer">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="City, State" required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary underline">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary underline">
                      privacy policy
                    </Link>
                  </label>
                </div>
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="organization">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organization name</Label>
                  <Input id="org-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-email">Email</Label>
                  <Input id="org-email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-password">Password</Label>
                  <Input id="org-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-website">Website</Label>
                  <Input id="org-website" type="url" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-address">Address</Label>
                  <Input id="org-address" required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="org-terms" required />
                  <label
                    htmlFor="org-terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary underline">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary underline">
                      privacy policy
                    </Link>
                  </label>
                </div>
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

