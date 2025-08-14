import { prisma } from "@/lib/prisma"
import NewsCard from "./newsCard"

export default async function HeroSection() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
   
  })

  console.log(posts)
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Latest News</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <NewsCard
              key={post.id}
              title={post.title}
              imageUrl={post.imageUrl || "https://placehold.co/600x400"}
              description={post.description || ""}
              author={post.author.name || "Unknown Author"}
              id ={post.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
