import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Search, Users } from "lucide-react"
import VolunteerOpportunities from "@/app/components/volunteer-opportunities"
import HeroSection from "@/app/components/hero-section"
import CategoryFilter from "@/app/components/category-filter"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">VolunteerMatch</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/search">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />

        <section className="container py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Find Opportunities By Category</h2>
          <CategoryFilter />
        </section>

        <section className="container py-12 bg-slate-50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Opportunities</h2>
            <Link href="/search">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <VolunteerOpportunities />
        </section>

        <section className="container py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">For Organizations</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Are you a nonprofit or community organization looking for volunteers? Post your opportunities and find
                dedicated volunteers with the skills you need.
              </p>
              <Link href="/organizations/register">
                <Button size="lg">Register Your Organization</Button>
              </Link>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Volunteers working together"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-slate-900 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">VolunteerMatch</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-slate-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-300 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-slate-300 hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">For Volunteers</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/search" className="text-slate-300 hover:text-white">
                    Find Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-slate-300 hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-slate-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">For Organizations</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/organizations/register" className="text-slate-300 hover:text-white">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/organizations/resources" className="text-slate-300 hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/organizations/success-stories" className="text-slate-300 hover:text-white">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-slate-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-slate-300 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-300">
            <p>© {new Date().getFullYear()} VolunteerMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

