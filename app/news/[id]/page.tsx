import { ArticleParam, categoryParam } from "@/types";
import {prisma} from '@/lib/prisma'

export default async function CategoryPage({params}: ArticleParam   ){
const id =  Number(params.id)
const post = await prisma.post.findUniqueOrThrow({
    where: {id},
    include:{
        author: true
    }
})
return(
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-6">
        By {post.author?.name || "Unknown Author"} on{" "}
        {new Date(post.createdAt).toLocaleDateString()}
      </p>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className=" h-auto rounded-lg mb-6"
        />
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.description && (
        <p className="mt-6 text-gray-700 italic">{post.description}</p>
      )}
    </article>
)
}