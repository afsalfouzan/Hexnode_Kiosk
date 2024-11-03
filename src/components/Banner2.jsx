import React, { useRef, useState } from "react";

const data = [
  {
    id: 1,
    image: "/assets/images/single-app-kios-image.webp",
    title: "Single App Kiosk",
    subTitle: "Powerful Single-App Kiosk solutions for enhanced control",
    list: [
      "Provision the devices to run one specialized application, with limited functionalities.",
      "Customize the device settings to cater to a specific use-case each time.",
      "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
      "Empower your administrators with full control over the kiosk devices.",
    ],
  },
  {
    id: 2,
    title: "Multi-App Kiosk",
    subTitle: "Elevate efficiency with Multi-App Kiosk",
    image: "/assets/images/multi-app-kiosk-image.webp",
    list: [
      "Limit device access to approved apps, ensuring focus and productivity.",
      "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
      "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
      "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
    ],
  },
  {
    id: 3,
    title: "Web-based Kiosk",
    subTitle: "Explore the new way to manage web apps and websites",
    image: "/assets/images/web-based-kiosk-image.webp",
    list: [
      "Let users access essential and approved web apps, website and files only.",
      "Make the best use of website kiosk with Hexnode's advanced settings.",
      "Tailor your experience to match your unique use case.",
      "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
    ],
  },
  {
    id: 4,
    title: "Digital Signages",
    subTitle: "Capture attention with Digital Signage Kiosks",
    image: "/assets/images/digital-signage-kiosk-image.webp",
    list: [
      "Transform your devices into captivating digital signage kiosks that grab attention.",
      "Engage your audience with vibrant images and seamless video streaming.",
      "Customize media files with trimming, muting, and background music.",
      "Advertise and show off your brand aesthetics to attract customers in different ways.",
      "Take control with Hexnode to reestablish your brand's presence.",
    ],
  },
  {
    id: 5,
    title: "ASAM Kiosk",
    subTitle: "Unlock the power of Autonomous Single App Mode (ASAM)",
    image: "/assets/images/asam-kiosk-image.webp",
    list: [
      "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
      "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
      "Create focused, efficient and secure digital environments to match your requirements.",
      "Configure ASAM effortlessly and elevate your user experience like never before.",
    ],
  },
];

function Banner2() {
  const [activeTab, setActiveTab] = useState(1);
  const buttonRefs = useRef([]);

  const toggleTab = (id, index) => {
    setActiveTab(id);

    buttonRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <main>
      <div className="container my-10 md:mt-28 ">
        <h1 className="text-black mb-4 md:text-center lg:mb-16">
          Specific kiosk modes for unique use cases
        </h1>
        <div className="space-y-0 md:hidden">
          {data.map((item) => (
            <details
              key={item.id}
              className={`group [&_summary::-webkit-details-marker]:hidden ${
                activeTab === item.id ? "" : "border"
              } `}
              onClick={() => toggleTab(item.id)}
            >
              <summary
                className={`flex cursor-pointer items-center justify-between gap-1.5 rounded-sm p-4 ${
                  activeTab === item.id
                    ? "bg-[#020a19] text-white"
                    : "bg-gray-50 text-[#020a19]/50"
                }`}
              >
                <p className="font-medium">{item.title}</p>
                <svg
                  className="size-5 shrink-0 transition duration-500 group-open:-rotate-180 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div
                className={`bg-[#f7f7f7] p-6 transition-all transform duration-500 overflow-hidden ease-in-out ${
                  activeTab === item.id
                    ? "opacity-100 translate-x-0 h-auto"
                    : "opacity-0 translate-x-10 h-0"
                }`}
              >
                <div className="my-3 max-w-[320px]">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <h2>{item.subTitle}</h2>
                <ul className="mt-4 leading-relaxed text-gray-700 list-disc list-inside">
                  {item.list.map((listItem, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.393"
                        height="10.111"
                        className="flex-shrink-0 mt-2 md:hidden"
                      >
                        <path
                          fill="none"
                          stroke="#60c458"
                          strokeWidth="2"
                          d="M.697 4.107 5.45 8.718l8.247-8"
                          data-name="tick - icon"
                        ></path>
                      </svg>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>

        {/* from width md */}
        <div className="hidden md:block">
          <ul className="flex flex-row overflow-hidden mt-10 rounded-t-lg">
            {data.map((item, index) => (
              <li
                key={index}
                className={`min-w-56 flex items-center justify-center w-full`}
                onClick={() => toggleTab(item.id, index)}
                ref={(el) => (buttonRefs.current[index] = el)}
              >
                <button
                  className={`font-normal text-2xl px-3 py-6 rounded-sm shadow-sm w-full transition-all duration-1000 ease-in-out ${
                    activeTab === item.id
                      ? "bg-[rgb(2,10,25)] text-white"
                      : "bg-white text-[#020a19]/50"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>

          {data.map((item, index) => {
            const isActive = activeTab === item.id;
            return (
              <div
                key={index}
                className={`bg-[#f7f7f7] transition-all transform duration-500 overflow-hidden ease-in-out px-6 lg:flex lg:flex-row-reverse lg:gap-10 ${
                  isActive
                    ? "opacity-100 translate-x-0 h-auto"
                    : "opacity-0 translate-x-10 h-0"
                }`}
              >
                <div className="my-3 max-w-[360px] lg:max-w-auto lg:min-w-[360px">
                  <img
                    className="w-full h-full object-fill rounded-lg"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div>
                  <h2 className="text-[#020A19] mt-8 font-bold text-[19px] leading-[26px] sm:text-[28px] md:text-[32px] max-w-[670px] sm:leading-[40px] pb-[15px] lg:pb-[40px]">
                    {item.subTitle}
                  </h2>
                  <ul className="mt-4 leading-relaxed text-gray-700 list-disc list-inside mb-20 ">
                    {item.list.map((listItem, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-6 text-base sm:text-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14.393"
                          height="10.111"
                          className="flex-shrink-0 mt-2"
                        >
                          <path
                            fill="none"
                            stroke="#60c458"
                            strokeWidth="2"
                            d="M.697 4.107 5.45 8.718l8.247-8"
                            data-name="tick - icon"
                          ></path>
                        </svg>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Banner2;
