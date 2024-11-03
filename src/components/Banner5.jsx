import React from "react";

const logos = [
  { id: 1, logo: "/assets/icons/android.svg" },
  { id: 2, logo: "/assets/icons/ios.svg" },
  { id: 3, logo: "/assets/icons/apple-tv.svg" },
  { id: 4, logo: "/assets/icons/windows.svg" },
  { id: 5, logo: "/assets/icons/android-tv.svg" },
  { id: 6, logo: "/assets/icons/amazon-fire.webp" },
];

function Banner5() {
  return (
    <main className="container">
      <h1 className="my-10 text-center">Platforms supported</h1>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6 sm:px-14 mb-20">
        {logos.map((item, index) => (
          <div key={index} className="flex justify-center items-center max-w-48">
            <img
              className="w-full h-auto object-cover"
              src={item.logo}
              alt={`Platform ${item.id}`}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Banner5;
