import { Post } from "../types";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <a href="#">
        <figure className="md:max-w-[300px] w-full overflow-hidden h-fit rounded-3xl flex-1">
          <img
            src={post.image}
            alt=""
            className="object-cover w-full h-full hover:scale-125 hover:rotate-12 transition-all duration-[2000ms] ease-in-out"
            loading="lazy"
          />
        </figure>
      </a>

      <div className="space-y-4 flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <p className="inline-flex gap-3 items-center text-base">
            <span className="text-[#0A2640] font-bold">{post.category}</span>
            <span className="text-[#777777] font-normal">
              November 21, 2021
            </span>
          </p>

          <a
            href="#"
            className="text-[20px] leading-[32px] hover:text-blue-900 transition-all duration-300 ease-in-out"
          >
            {post.title}
          </a>
        </div>

        <div className="inline-flex gap-3 items-center">
          <img src={post.author.image} alt={post.author.name} loading="lazy" />
          <p className="text-base">{post.author.name}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
