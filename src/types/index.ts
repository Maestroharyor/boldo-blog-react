export interface Post {
  title: string;
  category: string;
  isFeaturedPost: boolean;
  excerpt: string;
  body: string;
  image: string;
  author: {
    name: string;
    image: string;
  };
}

export interface Menu {
  title: string;
  link: string;
  hasButton?: boolean;
  buttonLabel?: string;
}
