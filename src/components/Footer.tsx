import { companyMenu, landingsMenu, resourcesMenu } from "../data/menus";

const Footer = () => {
  return (
    <footer className="py-24 lg:py-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 max-w-[1200px] mx-auto px-5 lg:px-0 gap-10">
      <div className="lg:col-span-6 flex flex-col gap-8 md:max-w-[400px]">
        <a href="/" className="text-[#0A2640] inline-flex items-center gap-3">
          <svg
            width="26"
            height="34"
            viewBox="0 0 26 34"
            fill="none"
            stroke=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16H17.0678C21.9511 16 25.9099 19.9588 25.9099 24.8421C25.9099 29.7255 21.9511 33.6842 17.0678 33.6842H0V16Z"
              fill="currentColor"
            />
            <path
              d="M0 0.526337H11.3927C15.0552 0.526337 18.0243 3.4954 18.0243 7.15792C18.0243 10.8204 15.0552 13.7895 11.3927 13.7895H0V0.526337Z"
              fill="currentColor"
            />
          </svg>
          <h2 className="font-bold text-[44px]">Boldo</h2>
        </a>
        <p className="text-[#777777] text-[16px]">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>

        <p className="text-[#777777] text-[16px] mt-8">All rights reserved.</p>
      </div>
      <div className="lg:col-span-2 flex flex-col gap-8">
        <p className="font-bold text-[20px]">Landings</p>

        <div className="flex flex-col gap-8">
          {landingsMenu.map((menu) => (
            <a
              className="text-[#777777] text-[16px] hover:text-blue-900 transition-all duration-300 ease-in-out"
              href="#"
            >
              {menu.title}
            </a>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-col gap-8">
        <p className="font-bold text-[20px]">Company</p>

        <div className="flex flex-col gap-8">
          {companyMenu.map((menu) => (
            <a
              className="text-[#777777] text-[16px] hover:text-blue-900 transition-all duration-300 ease-in-out inline-flex gap-5 items-center"
              href="#"
            >
              <span>{menu.title}</span>
              {menu.hasButton && (
                <button className="px-4 py-2 rounded-full justify-center items-center inline-flex font-bold text-[13px] bg-[#65E4A3] hover:bg-green-500 text-[#0A2640] transition-all duration-300 ease-in-out">
                  <span>{menu.buttonLabel}</span>
                </button>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-col gap-8">
        <p className="font-bold text-[20px]">Resources</p>

        <div className="flex flex-col gap-8">
          {resourcesMenu.map((menu) => (
            <a
              className="text-[#777777] text-[16px] hover:text-blue-900 transition-all duration-300 ease-in-out"
              href="#"
            >
              {menu.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
