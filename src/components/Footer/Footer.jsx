"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "react-feather";

export default function Home() {
  const quickLinks = [
    { title: "Our Fleet", href: "#" },
    { title: "Our Gallery", href: "#" },
    { title: "Contact Us", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Book A Ride", href: "#" },
  ];

  const services = [
    { title: "Corporate Travel", href: "#" },
    { title: "Airport Transfer", href: "#" },
    { title: "Wedding Transfer", href: "#" },
    { title: "Charter Service", href: "#" },
    { title: "Cruise Port Transfer", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#CD8B11] text-black">
      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Logo and Description Section */}
          <div className="md:col-span-4">
            <Image
              src="/assets/logo.png"
              alt="RPC LIMO"
              width={240}
              height={60}
              className="mb-6"
            />
            <p className="mb-6 text-sm">
              Spanning from the bustling energy of New York to over 300 cities
              worldwide, RPC Limo is your trusted partner in sophisticated
              travel logistics. We pledge to provide a smooth transition from
              the outset of your journey to its conclusion, ensuring every leg
              of your trip is executed with precision and elegance.
            </p>
            <button className="rounded bg-black px-6 py-3 text-white hover:bg-black/90">
              Book Now Pay Later
            </button>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-2 md:col-start-6">
            <h2 className="mb-4 text-lg font-semibold">QUICK LINKS</h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm hover:underline">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="md:col-span-2">
            <h2 className="mb-4 text-lg font-semibold">OUR SERVICES</h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="text-sm hover:underline">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download Section */}
          <div className="md:col-span-3 md:col-start-10">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Link href="#">
                  <Image
                    src="/assets/app_banner.png"
                    alt="Download on the App Store"
                    width={220}
                    height={120}
                  />
                </Link>
              </div>
              <p className="text-sm">
                If you are a rider or want to use our platform to ride please
                download RPC LIMO app.
              </p>
              <p className="text-sm">
                If you are a driver or want to drive with us please download RPC
                DRIVER app.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 md:flex-row">
          <p className="text-sm">
            Copyright © RPC Limo 2024 - Developed by ZSI
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-black/70">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-black/70">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-black/70">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
