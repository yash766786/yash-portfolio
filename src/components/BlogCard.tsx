import Image from "next/image";
import { FollowerPointerCard } from "./ui/following-pointer";

type BlogContent = {
  slug: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  authorAvatar: string;
};

export default function BlogCard({
  blogContent,
}: {
  blogContent: BlogContent;
}) {
  return (
    <div className="mx-auto w-80">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white dark:bg-zinc-900 dark:border-zinc-800 transition duration-200 hover:shadow-xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100 dark:bg-zinc-800">
            <img
              src={blogContent.image}
              alt="thumbnail"
              className="h-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
            />
          </div>
          <div className="p-4">
            <h2 className="my-4 text-lg font-bold text-zinc-700 dark:text-white">
              {blogContent.title}
            </h2>
            <h2 className="my-4 text-sm font-normal text-zinc-500 dark:text-zinc-400">
              {blogContent.description}
            </h2>
            <div className="mt-10 flex flex-row items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {blogContent.date}
              </span>
              <a
                href={blogContent.slug}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 block rounded-xl bg-black dark:bg-white px-6 py-2 text-xs font-bold text-white dark:text-black hover:opacity-90 transition hover:bg-black hover:text-white hover:cursor-none"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    <Image
      src={avatar}
      height="16"
      width="16"
      alt="thumbnail"
      className="w-7 h-7 rounded-full border-1 border-white object-cover object-top"
    />
    <p className="text-sm text-zinc-800 dark:text-white">{title}</p>
  </div>
);
