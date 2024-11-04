import React, { useState } from "react";

const awards = [
  {
    id: 1,
    icon: "/assets/icons/idc.webp",
    description:
      "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
  },
  {
    id: 2,
    icon: "/assets/icons/gartner.webp",
    description:
      "Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.",
  },
  {
    id: 3,
    icon: "/assets/icons/forrester.webp",
    description:
      "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
  },
];

function Banner1() {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } else {
      console.log("Email submitted:", email);
    }
  };

  return (
    <main>
      <div className="container flex flex-col xl:flex-row-reverse justify-between items-center pt-14">
        <div className="w-full max-w-full md:max-w-[597px] max-[420px]:max-h-[258px] max-[420px]:mb-[40px]">
          <img
            className="w-full h-full object-fill"
            src="/assets/images/hexnode-kiosk.webp"
            alt="Logo"
          />
        </div>

        <div className="flex flex-col items-center justify-center xl:justify-start gap-3 md:gap-10 max-w-full sm:max-w-[550px] xl:max-w-[498px]">
          <h1 className="text-white">
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </h1>
          <div className="flex w-full justify-center flex-col items-center px-10 sm:flex-row sm:px-10 md:px-0 gap-6 sm:gap-2">
            <input
              type="email"
              placeholder="Your Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 md:ml-10 lg:ml-0 w-full bg-white text-black placeholder-opacity-20 text-lg rounded-sm text-left"
            />
            <button
              onClick={handleSubmit}
              className="text-[#fff] font-extralight bg-[#dd0735] text-lg rounded-sm py-3 w-full cursor-pointer hover:gb-red-500 sm:max-w-[200px]"
            >
              GET STARTED NOW!
            </button>
          </div>
          {showError && (
            <p
              className={`text-white text-sm transition-opacity duration-500 ease-in-out transform ${
                showError
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              Please enter your work email!
            </p>
          )}
        </div>
      </div>

      <div className="bg-gray-900 text-white py-5 px-4 md:px-0 mt-10 opacity-90">
        <div className="container grid grid-cols-1 md:grid-cols-3 justify-center text-center md:text-start">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className="flex flex-col md:flex-row items-center  md:items-start max-w-[340px] mx-auto"
            >
              <div className="flex flex-col items-center md:items-start py-8 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
                <img
                  src={award.icon}
                  alt={award.title}
                  className="w-24 h-auto mb-4"
                />
                <p className="text-sm md:text-base text-[14px] leading-[22px] text-[rgb(255,255,255,60%)]">
                  {award.description}
                </p>
              </div>
              {index < awards.length - 1 && (
                <div className="w-[107px] h-[1px] bg-[rgba(255,255,255,0.2)] md:w-[1px] md:h-[80%] md:mt-6 md:mx-5"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Banner1;
