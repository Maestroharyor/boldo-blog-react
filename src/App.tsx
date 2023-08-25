import FeaturedPost from "./components/FeaturedPost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import PageHeadings from "./components/PageHeadings";
import PostSection from "./components/PostSection";

const App = () => {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto px-5">
        <PageHeadings title="Thoughts and words" />
        <FeaturedPost />
        <PostSection />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
