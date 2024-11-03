import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import Banner3 from "../components/Banner3";
import Banner4 from "../components/Banner4";
import Banner5 from "../components/Banner5";
import Banner6 from "../components/Banner6";

const MainLayout = () => {
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>

      <main>
        <section className="bg-gray-950">
          <Banner1 />
        </section>
        <section className="bg-white">
          <Banner2 />
        </section>
        <section className="bg-white">
          <Banner3 />
        </section>
        <section>
          <Banner4 />
        </section>
        <section>
          <Banner5 />
        </section>
        <section className="bg-gray-950">
          <Banner6 />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
