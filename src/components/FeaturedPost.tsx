import { posts } from "../data/posts";
import featuredImage from "../assets/images/blog/featured-image.png";

const FeaturedPost = () => {
  const currentFeaturedPost = posts.filter((post) => post.isFeaturedPost)[0];
  return (
    <>
      <section className="flex flex-col md:flex-row gap-10 items-center py-10">
        <figure className="md:max-w-[550px] w-full overflow-hidden h-fit rounded-3xl flex-1">
          <img
            src={featuredImage}
            alt=""
            className="object-cover w-full h-full hover:scale-125 hover:rotate-12 transition-all duration-[2000ms] ease-in-out"
          />
        </figure>

        <div className="flex-1 space-y-4">
          <p className="inline-flex gap-3 items-center">
            <span className="text-[#0A2640] font-bold">
              {currentFeaturedPost.category}
            </span>
            <span className="text-[#777777] font-normal">
              November 21, 2021
            </span>
          </p>
          <h3 className="text-[48px] leading-[72px]">
            {currentFeaturedPost.title}
          </h3>
          <div className="inline-flex gap-3 items-center">
            <img
              src={currentFeaturedPost.author.image}
              alt={currentFeaturedPost.author.name}
            />
            <p className="text-base">{currentFeaturedPost.author.name}</p>
          </div>
        </div>
      </section>
      <hr className="my-12 border-[#0A2640]" />
    </>
  );
};

export default FeaturedPost;
