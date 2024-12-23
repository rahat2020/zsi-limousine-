"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Clock, Menu, PhoneCall, X } from "react-feather";
import { navigationData } from "@/data/navigationData";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="relative bg-[#CD8B11] px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Image
            src="/assets/logo.png"
            alt="RPC LIMO"
            width={180}
            height={50}
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="relative z-10 -mr-2 inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black/5 focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 md:flex">
          {navigationData.map((item) =>
            !item.mobileOnly ? (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center gap-1 px-2 py-1 text-10 font-medium hover:text-black/70"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute left-0 top-full z-20 mt-1 w-48 rounded-md bg-white py-1 shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-12 text-gray-700 hover:bg-gray-100"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-2 py-1 text-sm font-medium hover:text-black/70"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ) : null
          )}
        </nav>

        {/* Right side buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="tel:1-833-711-4606"
            className="flex items-center gap-1 text-sm font-medium"
          >
            <PhoneCall className="h-4 w-4" />
            1-833 711 4606
          </Link>
          <Link
            href="/book"
            className="rounded-md border border-black bg-transparent px-4 py-1.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
          >
            BOOK NOW PAY LATER
          </Link>
          <Link
            href="/login"
            className="rounded-md border border-black bg-transparent px-4 py-1.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
          >
            ACCOUNT LOGIN
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute inset-0 top-0 z-0 h-screen bg-[#CD8B11] px-4 pt-20 md:hidden">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        className="flex w-full items-center justify-between py-2 text-sm font-medium"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {isServicesOpen && (
                        <div className="ml-4 flex flex-col gap-2 border-l border-black/10 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="py-2 text-sm text-black/70 hover:text-black"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                <Link
                  href="tel:1-833-711-4606"
                  className="flex items-center gap-1 text-sm font-medium"
                >
                  <Clock className="h-4 w-4" />
                  1-833 711 4606
                </Link>
                <Link
                  href="/book"
                  className="rounded-md border border-black bg-transparent px-4 py-2 text-center text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  BOOK NOW PAY LATER
                </Link>
                <Link
                  href="/login"
                  className="rounded-md border border-black bg-transparent px-4 py-2 text-center text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  ACCOUNT LOGIN
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
