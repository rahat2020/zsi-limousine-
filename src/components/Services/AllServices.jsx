"use client";

import Image from "next/image";
import React from "react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { Phone } from "react-feather";
import { services } from "@/data/serviceData";

const AllServices = () => {
  return (
    <div>
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="/assets/card-banner.png"
          alt="Luxury limousine with city skyline"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="mb-8 text-4xl font-bold">OUR SERVICES</h1>
        <p className="mb-8 text-center">Reservations Available 24/7</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="tel:1-833-711-4606"
            className="flex items-center gap-2 rounded-md bg-[#CD8B11] px-6 py-3 text-white transition-colors hover:bg-[#CD8B11]/90"
          >
            <Phone className="h-5 w-5" />
            1-833 711 4606
          </Link>
          <Link
            href="/book"
            className="rounded-md bg-[#CD8B11] px-6 py-3 text-white transition-colors hover:bg-[#CD8B11]/90"
          >
            BOOK YOUR RIDE
          </Link>
        </div>
        <p className="mx-auto mt-12 max-w-4xl text-center text-gray-600">
          At RPC Limo, we take pride in offering flat-rate Seattle Limo Service
          in the Metropolitan area. Whether you need a luxury limo to or from
          the Airport, a business meeting, or any other destination, we provide
          chauffeur-driven best limo service Seattle that guarantees a luxurious
          and hassle-free experience. We prioritize delivering first-class
          service to all our Worldwide clients. From the moment you book our
          Washington services to the completion of your trip, our management
          team and chauffeurs are dedicated to providing a seamless and
          memorable experience.
        </p>
      </div>
      <div className="container mx-auto px-4 pb-16">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Our All Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
