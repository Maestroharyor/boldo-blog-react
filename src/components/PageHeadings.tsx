type Props = {
  title: string;
};

const PageHeadings = ({ title }: Props) => {
  return (
    <section className="py-10 text-center">
      <div className="space-y-1 text-[#0A2640]">
        <div className="font-normal leading-loose text-[20px]">Blog</div>
        <h1 className="text-center text-4xl font-normal leading-[84px] md:text-[64px]">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHeadings;
