import { Post } from "../types";

export const posts: Post[] = [
  {
    title: "Pitch termsheet backing validation focus release.",
    category: "News",
    isFeaturedPost: true,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: new URL("../assets/images/blog/post-1.png", import.meta.url).href,
    author: {
      name: "Chandler Bing",
      image: new URL(
        "../assets/images/avatar/chandler-bing.png",
        import.meta.url
      ).href,
    },
  },
  {
    title:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    category: "Productivity",
    isFeaturedPost: true,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: new URL("../assets/images/blog/post-2.png", import.meta.url).href,
    author: {
      name: "Rachel Green",
      image: new URL(
        "../assets/images/avatar/rachel-green.png",
        import.meta.url
      ).href,
    },
  },
  {
    title:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    category: "Updates",
    isFeaturedPost: true,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: new URL("../assets/images/blog/post-3.png", import.meta.url).href,
    author: {
      name: "Monica Geller",
      image: new URL(
        "../assets/images/avatar/monica-geller.png",
        import.meta.url
      ).href,
    },
  },

  {
    title: "10 Tips for Boosting Your Productivity",
    category: "Productivity",
    isFeaturedPost: true,
    excerpt:
      "Discover ten practical tips to increase your productivity and make the most of your workday.",
    body: "In today's fast-paced world...",
    image: new URL("../assets/images/blog/post-4.png", import.meta.url).href,
    author: {
      name: "Chandler Bing",
      image: new URL(
        "../assets/images/avatar/chandler-bing.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "The Art of Effective Communication",
    category: "Communication",
    isFeaturedPost: true,
    excerpt:
      "Learn how to communicate effectively in both your personal and professional life.",
    body: "Communication is the cornerstone of human interaction...",
    image: new URL("../assets/images/blog/post-5.png", import.meta.url).href,
    author: {
      name: "Rachel Green",
      image: new URL(
        "../assets/images/avatar/rachel-green.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "Mastering Remote Work: Tips for Success",
    category: "Remote Work",
    isFeaturedPost: false,
    excerpt: "As remote work becomes more common...",
    body: "Remote work offers unprecedented flexibility...",
    image: new URL("../assets/images/blog/post-6.png", import.meta.url).href,
    author: {
      name: "Monica Geller",
      image: new URL(
        "../assets/images/avatar/monica-geller.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "The Power of Positive Thinking",
    category: "Self-Improvement",
    isFeaturedPost: false,
    excerpt:
      "Discover how cultivating a positive mindset can lead to a happier and more fulfilling life.",
    body: "Positive thinking has the ability to transform your...",
    image: new URL("../assets/images/blog/post-3.png", import.meta.url).href,
    author: {
      name: "Chandler Bing",
      image: new URL(
        "../assets/images/avatar/chandler-bing.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "Navigating the Challenges of Startup Growth",
    category: "Entrepreneurship",
    isFeaturedPost: false,
    excerpt:
      "Scaling a startup comes with its own set of challenges. Learn strategies to overcome them.",
    body: "Startup founders often find themselves...",
    image: new URL("../assets/images/blog/post-2.png", import.meta.url).href,
    author: {
      name: "Rachel Green",
      image: new URL(
        "../assets/images/avatar/rachel-green.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "Exploring Culinary Delights: A World Food Tour",
    category: "Food",
    isFeaturedPost: false,
    excerpt:
      "Embark on a virtual journey around the world through its diverse and delicious cuisines.",
    body: "Food is a universal language that connects us all...",
    image: new URL("../assets/images/blog/post-5.png", import.meta.url).href,
    author: {
      name: "Monica Geller",
      image: new URL(
        "../assets/images/avatar/monica-geller.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "The Impact of Social Media on Modern Marketing",
    category: "Marketing",
    isFeaturedPost: false,
    excerpt:
      "Explore how social media has revolutionized the way businesses promote their products and engage with customers.",
    body: "In the digital age, social media has emerged as...",
    image: new URL("../assets/images/blog/post-4.png", import.meta.url).href,
    author: {
      name: "Chandler Bing",
      image: new URL(
        "../assets/images/avatar/chandler-bing.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "Unveiling the Wonders of Astrophotography",
    category: "Photography",
    isFeaturedPost: false,
    excerpt:
      "Dive into the mesmerizing world of astrophotography and learn how to capture stunning images of the night sky.",
    body: "Astrophotography is a captivating niche within photography...",
    image: new URL("../assets/images/blog/post-1.png", import.meta.url).href,
    author: {
      name: "Rachel Green",
      image: new URL(
        "../assets/images/avatar/rachel-green.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "The Evolution of Artificial Intelligence",
    category: "Technology",
    isFeaturedPost: false,
    excerpt:
      "Trace the journey of artificial intelligence from its inception to its current transformative capabilities.",
    body: "Artificial Intelligence, once a concept of science fiction...",
    image: new URL("../assets/images/blog/post-6.png", import.meta.url).href,
    author: {
      name: "Monica Geller",
      image: new URL(
        "../assets/images/avatar/monica-geller.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "The Green Revolution: Sustainable Practices for a Better Future",
    category: "Sustainability",
    isFeaturedPost: false,
    excerpt:
      "Discover innovative ways individuals and businesses can contribute to a more sustainable planet.",
    body: "Sustainability has become a pressing concern...",
    image: new URL("../assets/images/blog/post-3.png", import.meta.url).href,
    author: {
      name: "Chandler Bing",
      image: new URL(
        "../assets/images/avatar/chandler-bing.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "The Psychology of Colors in Design",
    category: "Design",
    isFeaturedPost: false,
    excerpt:
      "Explore the psychological effects of different colors and how they influence design choices.",
    body: "Colors have the power to evoke emotions and shape perceptions...",
    image: new URL("../assets/images/blog/post-2.png", import.meta.url).href,
    author: {
      name: "Rachel Green",
      image: new URL(
        "../assets/images/avatar/rachel-green.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "The Fascinating World of Ancient Civilizations",
    category: "History",
    isFeaturedPost: false,
    excerpt:
      "Journey back in time to uncover the mysteries and achievements of ancient civilizations around the globe.",
    body: "The stories of ancient civilizations have intrigued historians...",
    image: new URL("../assets/images/blog/post-1.png", import.meta.url).href,
    author: {
      name: "Monica Geller",
      image: new URL(
        "../assets/images/avatar/monica-geller.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "The Benefits of Mindfulness Meditation",
    category: "Wellness",
    isFeaturedPost: false,
    excerpt:
      "Explore how mindfulness meditation can improve mental clarity, reduce stress, and enhance overall well-being.",
    body: "In today's fast-paced world...",
    image: new URL("../assets/images/blog/post-4.png", import.meta.url).href,
    author: {
      name: "Chandler Bing",
      image: new URL(
        "../assets/images/avatar/chandler-bing.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "The Rise of E-Commerce: Trends and Innovations",
    category: "E-Commerce",
    isFeaturedPost: false,
    excerpt:
      "Learn about the latest trends and innovations shaping the e-commerce landscape and changing consumer behaviors.",
    body: "E-commerce has undergone a significant transformation...",
    image: new URL("../assets/images/blog/post-5.png", import.meta.url).href,
    author: {
      name: "Rachel Green",
      image: new URL(
        "../assets/images/avatar/rachel-green.png",
        import.meta.url
      ).href,
    },
  },
  {
    title: "Discovering Hidden Travel Gems",
    category: "Travel",
    isFeaturedPost: false,
    excerpt:
      "Embark on a journey to uncover lesser-known travel destinations that offer unique experiences and cultural insights.",
    body: "While popular tourist destinations have their charm...",
    image: new URL("../assets/images/blog/post-6.png", import.meta.url).href,
    author: {
      name: "Monica Geller",
      image: new URL(
        "../assets/images/avatar/monica-geller.png",
        import.meta.url
      ).href,
    },
  },
];
