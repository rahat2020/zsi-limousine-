"use client";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { services } from "@/data/serviceData";

const Services = () => {
  return (
    <section className="py-16">
      <div className="w-full px-12 ">
        <h2 className=" text-start text-40 font-medium">
          Superior Limousine Services in New York by RPC Limo
        </h2>
        <p className="mx-auto mb-12 max-w-xxl font-normal text-start text-gray-600">
          RPC Limo seamlessly excellence in providing superior limousine
          services across the New York Metropolitan area. Whether facilitating
          your airport transfers, business meetings, or hassle-free travel,
          embodying class and luxury. With our focus on delivering
          sophistication and punctuality. Our dedication to first-class service
          extends globally, ensuring every time commitment is met our
          chauffeurs' keen eye for detail. An experienced management team and
          professionally-trained staff are committed to making a seamless,
          distinguished travel experience for you.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services?.slice(0, 3)?.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-black/90"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
