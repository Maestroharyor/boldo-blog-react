const Header = () => {
  return (
    <header className="sticky top-0 lg:static max-w-[1200px] mx-auto py-3 lg:py-5 px-5 lg:px-0 bg-white z-10">
      <nav className="flex items-center justify-between">
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
          <h2 className="font-bold text-[35px] lg:text-[44px]">Boldo</h2>
        </a>

        <div className="md:inline-flex gap-7 items-center hidden">
          <a
            className="text-[#0A2640] text-[16px] font-semibold hover:text-blue-900 transition-all duration-300"
            href="#"
          >
            Products
          </a>
          <a
            className="text-[#0A2640] text-[16px] font-semibold hover:text-blue-900 transition-all duration-300"
            href="#"
          >
            Services
          </a>
          <a
            className="text-[#0A2640] text-[16px] font-semibold hover:text-blue-900 transition-all duration-300"
            href="#"
          >
            About
          </a>

          <a
            href="#"
            className="px-10 py-2 rounded-full border-2 border-[#0A2640] text-[#0A2640] hover:text-blue-800 hover:border-blue-800 justify-center items-center inline-flex font-bold transition-all duration-300 ease-in-out"
          >
            <span>Log In</span>
          </a>
        </div>

        <button className="md:hidden mobile_menu_button_open">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>

      <nav className="mobile_menu absolute top-0 left-0 w-full h-full bg-[#0A2640] md:hidden px-5 py-6 space-y-6 transform translate-x-[-100vw] transition-all duration-300 ease-in-out mobile_menu_nav">
        <div className="flex justify-between">
          <a href="/" className="text-white inline-flex items-center gap-3">
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

          <button className="text-red-400 hover:text-red-500 transition-all duration-300 ease-in-out mobile_menu_button_close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col divide-y divide-gray-400">
          <a
            className="text-white text-[18px] font-semibold hover:text-blue-100 transition-all duration-300 py-5"
            href="#"
          >
            Products
          </a>
          <a
            className="text-white text-[18px] font-semibold hover:text-blue-100 transition-all duration-300 py-5"
            href="#"
          >
            Services
          </a>
          <a
            className="text-white text-[18px] font-semibold hover:text-blue-100 transition-all duration-300 py-5"
            href="#"
          >
            About
          </a>
          <a
            className="text-white text-[18px] font-semibold hover:text-blue-100 transition-all duration-300 py-5"
            href="#"
          >
            Log In
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
