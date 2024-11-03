import React, { useEffect, useRef, useState } from "react";

const data = [
  {
    id: 1,
    image: "/assets/images/justin-modrak.webp",
    title: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    profession: "Technology Coordinator",
    school: "East Troy Community School District",
  },
  {
    id: 2,
    image: "/assets/images/dalibor-kruljac.webp",
    title:
      "Most complete MDM solution I found, and I tested many of them, including major names",
    name: "Dalibor Kruljac",
    profession: "KAMELEYA LTD",
  },
  {
    id: 3,
    title: "It seemed to be in-line with everything we were looking at.",
    image: "/assets/images/chris-robinson.webp",
    name: "Chris Robinson",
    profession: "Executive Account Manager, NCS",
  },
];

const logos = [
  {
    id: 1,
    logo: "/assets/icons/gorillas.svg",
  },
  {
    id: 2,
    logo: "/assets/icons/wolt.svg",
  },
  {
    id: 3,
    logo: "/assets/icons/marriott-intl.svg",
  },
  {
    id: 4,
    logo: "/assets/icons/merck.svg",
  },
  {
    id: 5,
    logo: "/assets/icons/costco.svg",
  },
  {
    id: 6,
    logo: "/assets/icons/saic.svg",
  },
  {
    id: 7,
    logo: "/assets/icons/hilton.svg",
  },
  {
    id: 8,
    logo: "/assets/icons/group1-automotive.webp",
  },
  {
    id: 9,
    logo: "/assets/icons/lowes.svg",
  },
  {
    id: 10,
    logo: "/assets/icons/polaris.svg",
  },
];

const Card = ({ icon, title, name, profession, school }) => {
  return (
    <div className="w-full flex flex-col items-center gap-10 rounded-2xl shadow-md bg-white text-black mx-auto overflow-hidden md:flex-row">
      <div className="w-full  md:w-[60%] xl:w-1/2 md:h-[318px]">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-full h-full object-cover  "
        />
      </div>
      <div className="px-10">
        <h3 className="font-semibold mt-4 mb-10 text-center md:text-start text-[17px] md:text-lg xl:text-2xl">
          "{title}"
        </h3>
        <p className="text-sm font-semibold text-center md:text-start md:text-lg">
          {name}
        </p>
        <p className="text-[13px] text-center md:text-start md:text-base my-1 opacity-70">
          {profession}
        </p>
        <p className="text-[13px] text-center md:text-start md:text-base opacity-70 mb-5">
          {school}
        </p>
      </div>
    </div>
  );
};

function Banner4() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const startScroll = () => {
    scrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 80;
        if (
          scrollContainerRef.current.scrollLeft >=
          scrollContainerRef.current.scrollWidth -
            scrollContainerRef.current.clientWidth
        ) {
          scrollContainerRef.current.scrollLeft = 0;
        }
      }
    }, 1500); 
  };

  const stopScroll = () => {
    clearInterval(scrollIntervalRef.current);
  };

  useEffect(() => {
    if (!isHovered) {
      startScroll();
    }
    return () => stopScroll();
  }, [isHovered]);

  return (
    <main className="bg-[#F7F7F7] py-10 my-10 xl:px-24">
      <div className="container">
        <div className="min-h-[900px] md:min-h-fit">
          <h1 className="my-10 px-8 lg:px-32 text-center">
            Why should you choose Hexnode?
          </h1>
          <div className="p-10 sm:px-32 md:px-0 flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-10">
            <div className="hidden lg:block hover:translate-y-[-10px]">
              <button
                className={`p-5 px-6 shadow-md rounded-lg bg-[#FFFFFF] ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={prevCard}
                disabled={currentIndex === 0}
              >
                <img
                  className="lg:w-5"
                  src="/assets/icons/prev-arrow-icon-black.svg"
                  alt="Previous"
                />
              </button>
            </div>
            <div className="relative w-full min-h-[560px] md:min-h-[318px] overflow-hidden bg-white rounded-2xl shadow-md">
              {data.map((item, index) => {
                const translateX =
                  index === currentIndex
                    ? "translate-x-0"
                    : index === currentIndex - 1
                    ? "translate-x-[-100%]"
                    : index === currentIndex + 1
                    ? "translate-x-[100%]"
                    : "translate-x-0 opacity-0";

                return (
                  <div
                    key={index}
                    className={`w-full overflow-hidden transition-all duration-1000 transform ${translateX} ${
                      index === currentIndex ? "opacity-100" : "opacity-0 h-0"
                    }`}
                  >
                    <div>
                      {index === currentIndex && (
                        <Card
                          icon={item.image}
                          title={item.title}
                          name={item.name}
                          profession={item.profession}
                          school={item.school}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-5 hover:translate-y-[-10px]">
              <button
                className={`lg:hidden p-5 px-6 shadow-md rounded-lg bg-[#FFFFFF] ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={prevCard}
                disabled={currentIndex === 0}
              >
                <img
                  src="/assets/icons/prev-arrow-icon-black.svg"
                  alt="Previous"
                />
              </button>

              <button
                className={`p-5 px-6 shadow-md rounded-lg bg-[#FFFFFF] text-black ${
                  currentIndex === data.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={nextCard}
                disabled={currentIndex === data.length - 1}
              >
                <img
                  className="lg:w-5"
                  src="/assets/icons/ads-tick-green_next.svg"
                  alt="Next"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="my-10 relative">
          <div
            className="flex overflow-hidden scroll-smooth"
            ref={scrollContainerRef}
            onMouseEnter={() => {
              setIsHovered(true);
              stopScroll();
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              startScroll();
            }}
          >
            {logos.map((item, index) => (
              <div key={index} className="min-w-[150px] mx-2">
                <img
                  className="w-full h-auto object-cover"
                  src={item.logo}
                  alt={`Logo ${item.id}`}
                />
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </main>
  );
}

export default Banner4;
