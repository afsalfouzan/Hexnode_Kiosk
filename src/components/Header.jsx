import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [changeHeader, setChangeHeader] = useState(false);
  const [topHeader, setTopHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY > 700) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }
      if (window.scrollY > 800) {
        setTopHeader(true);
      } else {
        setTopHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main>
      <div
        className={` w-full min-h-[78px] flex transition-colors duration-500 ${
          scrolled ? "bg-white" : "bg-gray-950"
        } ${topHeader ? "hidden md:block bg-white pt-3" : ""}`}
      >
        <div className="container mx-auto flex items-center justify-between relative">
          <div className="w-28">
            <img
              className={`w-full h-full object-fill ${
                scrolled ? "filter-none" : "filter invert"
              }`}
              src="/assets/icons/headerLogo.svg"
              alt="Logo"
            />
          </div>
          <div className="flex items-center gap-3 ">
            <button
              className={`bg-red-600 w-full shadow-lg text-white py-2 rounded-sm uppercase hover:bg-red-700 transition duration-500 hidden px-4 ${
                topHeader ? "  md:block xl:hidden" : ""
              }`}
            >
              14 Days Free Trial
            </button>
            <div
              className={`xl:hidden  ${
                isOpen || scrolled ? "text-black" : "text-white"
              }`}
            >
              <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
            </div>
          </div>
          <div className="hidden xl:block pr-10">
            <button className="bg-red-600 w-full mr-10 text-white py-2 text-sm shadow-lg rounded-sm uppercase hover:bg-red-700 transition duration-500 px-4">
              14 Days Free Trial
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden w-full min-h-[84px] border-t bg-white flex items-center justify-end transition-colors duration-500 ${
          changeHeader ? "block md:hidden" : "hidden"
        }`}
      >
        <div className="container  flex items-center justify-end">
          <button className="max-w-[200px] bg-red-600 w-full shadow-lg text-white py-3 rounded-sm uppercase hover:bg-red-700 transition duration-200 px-4 text-sm">
            14 Days Free Trial
          </button>
        </div>
      </div>

      <div
        className={`xl:hidden fixed z-40 bg-white top-0 left-0 md:w-1/2  md:left-1/2 w-screen h-screen shadow-lg transition-all duration-500 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10 pointer-events-none"
        }`}
      >
        <div className="mt-[84px] w-full border-t border-[rgb(191,192,193)] "></div>
        <div className="container mt-8">
          <button className="bg-red-600 shadow-lg w-full text-white py-3 rounded-sm uppercase hover:bg-red-700 transition duration-200 px-4">
            14 Days Free trial
          </button>
        </div>
        <p className="text-center mt-10">Login</p>
      </div>
    </main>
  );
}

export default Header;
