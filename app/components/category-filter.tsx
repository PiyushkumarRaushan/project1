import Link from "next/link"
import { Book, Leaf, Heart, PawPrintIcon as Paw, Users, Palette, Baby, Globe } from "lucide-react"

const categories = [
  { name: "Education", icon: Book, slug: "education" },
  { name: "Environment", icon: Leaf, slug: "environment" },
  { name: "Health", icon: Heart, slug: "health" },
  { name: "Animals", icon: Paw, slug: "animals" },
  { name: "Community", icon: Users, slug: "community" },
  { name: "Arts & Culture", icon: Palette, slug: "arts" },
  { name: "Children & Youth", icon: Baby, slug: "children" },
  { name: "International", icon: Globe, slug: "international" },
]

export default function CategoryFilter() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/search?category=${category.slug}`}
          className="flex flex-col items-center p-4 bg-white rounded-lg border hover:border-primary hover:shadow-md transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <category.icon className="h-6 w-6 text-primary" />
          </div>
          <span className="text-sm font-medium text-center">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

