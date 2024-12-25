"use client";

import { useState } from "react";
import { Check, User } from "react-feather";

const tabs = [
  "SPECIAL EVENTS PRIVATE HIRE AND VIP",
  "PRIVATE HIRE ONLY",
  "EXECUTIVE CHAUFFEUR",
  "WEDDING CARS",
  "CORPORATE HIRE",
];

const DiscoverFleet = () => {
  const [activeTab, setActiveTab] = useState(0);
  console.log("activeTab", activeTab);
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-start text-40 font-medium">Discover Our Fleet</h2>
        <p className="text-black">
          Embark on a journey of luxury and sophistication as you discover our
          beautiful fleet of vehicles designed to redefine your travel
          experience. Each vehicle in our fleet is maintained to our exceptional
          standards, regularly cleaned, and reliability checked to give you the
          ultimate driving experience.
        </p>
      </div>

      <div className="bg-brand">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 bg-[#CD8B11]">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`text-xs px-4 py-2 rounded ${
                activeTab === index
                  ? "bg-[#CD8B11] hover:bg-[#CD8B11]/90 text-white font-medium"
                  : "bg-[#F2D395] text-black"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="">
          {activeTab === 0 && (
            <>
              <div className="grid md:grid-cols-2 gap-6 px-4 mb-8 bg-brand">
                <div className="bg-transparent overflow-hidden">
                  <img
                    src="/assets/fleet1.png"
                    alt="Lincoln MKT Stretch Limousine"
                    loading="lazy"
                    quality={100}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <div className="bg-transparent overflow-hidden">
                  <img
                    src="/assets/fleet2.png"
                    alt="Luxury Vehicle"
                    loading="lazy"
                    quality={100}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>
              <div className="mb-6 px-4">
                <h3 className="text-xl font-semibold text-black">
                  MERCEDES-BENZ SPRINTER CREW VAN 2500
                </h3>
                <p className="text-black mt-2">
                  Step into the world of luxury with the Lincoln MKT Stretch
                  Limousine, a perfect choice for those who seek elegance and
                  spacious comfort in their travels. Whether it’s a special
                  celebration or a sophisticated corporate event, this limousine
                  enhances every occasion with its style and luxury.
                </p>
              </div>
              <div className="space-y-6 px-4">
                <h4 className="text-lg font-semibold text-black">Features:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="h-5 w-5 text-black-600" />
                    </div>
                    <div>
                      <h5 className="text-black font-medium">
                        <User className="h-5 w-5 text-black-600" />
                      </h5>
                      <p className="text-black text-sm">
                        <User className="h-5 w-5 text-black-600" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-8 px-4 pb-4">
          <button className="bg-black hover:bg-black/90 text-white px-6 py-3 rounded">
            Book Your Trip Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverFleet;
