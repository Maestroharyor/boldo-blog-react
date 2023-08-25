const Newsletter = () => {
  return (
    <section className="max-w-[1200px] mx-auto w-full py-20 px-10 flex flex-col items-center justify-center bg-[#0A2640] rounded-2xl text-white gap-10 lg:gap-16 relative overflow-hidden">
      <img
        src="/images/background.png"
        alt=""
        className="absolute top-0 right-0 z-[1] opacity-40"
      />
      <p className="text-[30px] lg:text-[48px] leading-[45px] lg:leading-[72px] text-center relative z-[2] max-w-[720px] mx-auto">
        An enterprise template to ramp up your company website
      </p>

      <div className="flex flex-col md:flex-row gap-5 max-w-[720px] mx-auto w-full relative z-[2]">
        <input
          type="email"
          placeholder="Your email address"
          className="bg-white px-8 py-4 text-[20px] rounded-full placeholder:text-[#0A2640] border-none outline-none text-[#0A2640] focus:ring-4 ring-green-500 flex-1 transition-all duration-100 ease-in-out"
        />

        <button className="px-14 py-4 rounded-full justify-center items-center inline-flex font-bold bg-[#65E4A3] hover:bg-green-500 text-[#0A2640] transition-all duration-300 ease-in-out">
          <span>Start now</span>
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
