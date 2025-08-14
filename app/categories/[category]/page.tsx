import { categoryParam } from "@/types";
import {prisma} from '@/lib/prisma'
import NewsCard from "@/app/components/newsCard";

export default async function CategoryPage({params}: categoryParam){
const {category} =  params
const posts = await prisma.post.findMany({
    where: {
        category: category
    },
    include:{
        author: true
    }
})
return(
    <div>
        {posts.map(post=>{
            return  (<div className="mt-4"><NewsCard
                          key={post.id}
                          title={post.title}
                          imageUrl={post.imageUrl || "https://placehold.co/600x400"}
                          description={post.description || ""}
                          author={post.author.name || "Unknown Author"}
                          id = {post.id}
                        /></div>)
        })}
    </div>
)
}