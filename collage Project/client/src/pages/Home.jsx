import NavBar from "@/components/our components/NavBar";
import React, { useState } from "react";
import logo from "/logo.png";
import Button from "@/components/our components/Button";

import Card from "@/components/our components/Card";
import semestersData from "@/utils/data";
import Card2 from "@/components/our components/card2";
import FeatureCard from "@/components/our components/FeatureCard ";
import features from "@/utils/features";

const Home = () => {


  return (
    <div className="bg-[#111827]">
    <section className="w-10/12">
      <NavBar />
    </section>

    <main className="w-10/12 mx-auto h-full p-10">
      <section className="mt-20 p-5 text-white">
        <div className="pt-20 text-center">
          <h1 className="text-5xl font-bold">
            Your Ultimate{" "}
            <span className="text-rose-600 underline">Engineer Life</span>{" "}
            Preparation  <span className="text-orange-500">Hub</span> !
          </h1>
          <p className="p-4 text-gray-500">
            Engineer Life is innovation, precision, creativity, leadership,
            problem-solving, exploration, and success combined.
          </p>
        </div>
      </section>

      <section className="w-10/12 mx-auto">
        <div className="border border-gray-400 pt-16 pb-16 pl-8 pr-8 h-14 bg-[#1e2a44] rounded-3xl flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-[#FFF9EB] h-20 w-20 rounded-lg flex justify-center items-center">
              <img src={logo} alt="Nexus++ Logo" className="h-[70px] object-cover" />
            </div>
            <div>
              <span className="text-4xl font-semibold text-rose-700">
                Nexus++
              </span>
              <p className="text-gray-500">
                Unlock curated learning, expert doubt assistance,
                <br /> AI chart insights, approach-wise solutions, and more!
              </p>
            </div>
          </div>
          <div>
            <Button >Explore Plus</Button>
          </div>
        </div>
      </section>

   

      <section className="pt-24 w-10/12 mx-auto">
        <div className="p-2 gap-10 flex justify-between flex-wrap">
          {
            semestersData.map((value,index)=>{
              return <Card item={value}  key={index}></Card>
            })
          }
        </div>
      </section>

      <section className="mt-60 text-center w-11/12 mx-auto">
        <h1 className="text-6xl font-bold text-white">
          Connect with our community
        </h1>
        <div className="mt-36 flex items-center justify-between">
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </section>

      <section className="w-10/12 mx-auto mt-60">
        <div className="py-16">
          <h1 className="text-4xl text-white font-bold text-center mb-8">
            Why choose us?
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Unlock Your Potential with Our Comprehensive Learning Approach
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                number={feature.number}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  </div>
  );
};

export default Home;
