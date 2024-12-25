"use client";

import React from "react";
import Services from "../Services/Index";
import DiscoverFleet from "../DiscoverFleet/DiscoverFleet";
import Slider from "../Header/Slider/Slider";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Services />
      <DiscoverFleet />
    </div>
  );
};

export default HomePage;
