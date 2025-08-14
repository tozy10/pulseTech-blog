// components/NewsCard.tsx
import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  id: number;

};

export default function NewsCard({
  title,
  description,
  imageUrl,
  author,
  id,
}: NewsCardProps) {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-52 w-full flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Flex container with space between top and bottom */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 line-clamp-2 min-h-[3.5rem]">
            {title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3 mt-2 min-h-[3.5rem]">
            {description}
          </p>
          <div className="pt-2 text-sm text-gray-500">By {author}</div>
        </div>

        {/* This div stays at bottom */}
        <div className="pt-3">
          <Link
            href={`/news/${id}`}
            className="inline-block text-blue-600 font-medium hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
