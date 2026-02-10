'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'

interface Comic {
  id: number
  title: string
  category: string
  year: number
}

const COMICS_DATA: Comic[] = [
  { id: 1, title: 'Yaksha Nexus', category: 'Sci-Fi', year: 2024 },
  { id: 2, title: 'Kathakali Avengers', category: 'Action', year: 2024 },
  { id: 3, title: 'Theyyam Protocol', category: 'Thriller', year: 2023 },
  { id: 4, title: 'Spice Route Chronicles', category: 'Adventure', year: 2023 },
  { id: 5, title: 'Monsoon Guardians', category: 'Fantasy', year: 2024 },
]

const CATEGORIES = ['All', ...new Set(COMICS_DATA.map(c => c.category))]

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter comics based on search and category
  const filteredComics = useMemo(() => {
    return COMICS_DATA.filter(comic => {
      const matchesSearch = comic.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      const matchesCategory =
        selectedCategory === 'All' || comic.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <section id="gallery" className="w-full bg-background py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-primary">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Comics</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the stories where Kerala traditions meet pop culture
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-sm">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search comics..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Comics Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredComics.map(comic => (
            <div
              key={comic.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative flex h-80 w-full flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-primary to-accent p-6">
                <span className="text-4xl font-bold text-primary-foreground/20">
                  {comic.title.split(' ').map(w => w[0]).join('')}
                </span>
                <span className="text-sm font-semibold text-primary-foreground/60 text-center">
                  {comic.title}
                </span>
                <span className="rounded-full bg-primary-foreground/10 px-3 py-1 text-xs text-primary-foreground/50">
                  {comic.category} &middot; {comic.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredComics.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-lg text-muted-foreground">
              No comics found matching your search.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
