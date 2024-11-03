import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Effortless kiosk deployment & management",
    image: "/assets/images/effortless-kiosk-deployement-image.webp",
    description:
      "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
    toggle: "Zero touch kiosk",
  },
  {
    id: 2,
    title: "Customized interface for brand visibility",
    image: "/assets/images/customized-interface-image.webp",
    description:
      "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    toggle: "Brand visibility",
  },
  {
    id: 3,
    title: "What more can you do with Hexnode kiosk?",
    image: "/assets/images/power-up-protection-image.webp",
    description:
      "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
    toggle: "Data security",
  },
  {
    id: 4,
    title: "Secure and update your app ecosystem",
    image: "/assets/images/secure-app-ecosystem.webp",
    description:
      "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
    toggle: "App management",
  },
  {
    id: 5,
    title: "Provide an easy-to-use interface for end-users",
    image: "/assets/images/easy-to-use-interface-image.webp",
    description:
      "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
    toggle: "Easy to use interface",
  },
];

function Banner3() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <main className="container my-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="my-10 px-8 lg:px-32 text-center">
          What additional possibilities does the Kiosk mode offer?
        </h1>

        {/* upto lg */}
        {data.map((item, index) => (
          <div className="lg:hidden">
            <div
              className={`my-1 relative max-w-[300px] mx-auto transition-all transform duration-500  overflow-visible ease-in-out ${
                activeTab === item.id
                  ? "opacity-100 translate-y-0 h-auto"
                  : "opacity-0 translate-y-10 h-0"
              }`}
            >
              <img
                className=" w-full h-full object-cover rounded-lg"
                src={item.image}
                alt={item.title}
              />
              <p className="absolute  top-[20%] right-[-30px] border flex gap-2 p-2  border-solid backdrop-blur-xl bg-white/90 border-[#F2F2F2] rounded-[5px] py-[8px]  transition-all duration-300 ease-out ">
                <img
                  className="w-4 object-cover rounded-lg"
                  src="/assets/icons/ads-tick-green.svg"
                  alt={item.title}
                />
                <span className="text-sm">{item.toggle}</span>
              </p>
            </div>
            <div className="flex flex-col items-start justify-center px-2">
              <h2 onClick={() => setActiveTab(item.id)}>{item.title}</h2>
              <p
                className={`text-[#333333] font-normal text-[19px] leading-[28px] pt-[10px] transition-all transform duration-500 overflow-hidden ease-in-out ${
                  activeTab === item.id
                    ? "opacity-100 translate-y-0 h-auto"
                    : "opacity-0 translate-y-10 h-0"
                }`}
              >
                {item.description}
                <span className="text-[#DD0735] uppercase flex items-center font-semibold mt-1 text-[15px] cursor-pointer">
                  try for free
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6.575"
                    height="11.737"
                    class="ml-[5px] translate-x-0 group-hover:translate-x-[3px] transition-all duration-300 ease-out mb-1"
                  >
                    <path
                      fill="none"
                      stroke="#dd0735"
                      stroke-linecap="round"
                      d="m.707.707 5.161 5.161-5.161 5.161"
                      data-name="arrow - icon"
                    ></path>
                  </svg>
                </span>
              </p>
            </div>
          </div>
        ))}
        {/* from lg */}
        <div className="hidden lg:flex items-start justify-center space-x-6 gap-12">
          <div className="flex   flex-col space-y-4 items-center justify-center">
            {data.map((item) => (
              <div
                key={item.id}
                className={` min-w-[450px] mt-10 transition-all transform duration-500 ease-in-out relative overflow-visible ${
                  activeTab === item.id
                    ? "opacity-100 translate-y-0 h-[450px]"
                    : "opacity-0 translate-y-10 h-0"
                }`}
              >
                <img
                  className=" w-full h-full object-cover rounded-3xl"
                  src={item.image}
                  alt={item.title}
                />
                 <p className="absolute  top-[20%] right-[-30px] border flex gap-3 p-2  border-solid backdrop-blur-xl bg-white/90 border-[#F2F2F2] rounded-[5px] py-[8px]  transition-all duration-300 ease-in-out ">
                <img
                  className=" w-6 object-cover rounded-lg"
                  src="/assets/icons/ads-tick-green.svg"
                  alt={item.title}
                />
                <span className="text-sm">{item.toggle}</span>
              </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col px-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="transition-all transform duration-500 ease-in-out"
              >
                <h2
                  className={`cursor-pointer text-[#020A19] py-6 m-0`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.title}
                </h2>
                <p
                  className={`text-[#333333] font-normal text-[19px] leading-[28px] transition-all transform duration-500 ease-in-out overflow-hidden ${
                    activeTab === item.id
                      ? "opacity-100 translate-y-0 h-auto"
                      : "opacity-0 translate-y-10 h-0"
                  }`}
                >
                  {item.description}
                  <span className="text-[#DD0735] uppercase flex items-center font-semibold mt-1 text-[15px] cursor-pointer">
                    try for free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6.575"
                      height="11.737"
                      className="ml-[5px] translate-x-0 group-hover:translate-x-[3px] transition-all duration-300 ease-out mb-1"
                    >
                      <path
                        fill="none"
                        stroke="#dd0735"
                        strokeLinecap="round"
                        d="m.707.707 5.161 5.161-5.161 5.161"
                        data-name="arrow - icon"
                      ></path>
                    </svg>
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Banner3;
