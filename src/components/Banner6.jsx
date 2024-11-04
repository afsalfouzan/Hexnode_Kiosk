import React, { useState } from "react";

function Banner6() {
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
    <main className="container py-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-10 text-white text-center ">
          Sign up and try Hexnode free for 14 days!
        </h1>
        <div className="mx-10">
          <div className="flex flex-col gap-5 min-w-[300px] md:flex-row md:min-w-[600px]">
            <input
              type="email"
              placeholder="Your Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 w-full bg-white text-black placeholder-opacity-20 text-lg rounded-sm text-left"
            />
            <button
              onClick={handleSubmit}
              className="text-[#fff] bg-[#dd0735] text-lg rounded-sm py-3 w-full cursor-pointer hover:gb-red-500 md:max-w-[200px]"
            >
              GET STARTED NOW
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
    </main>
  );
}

export default Banner6;
