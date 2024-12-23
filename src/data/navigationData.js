export const navigationData = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  {
    name: "SERVICES",
    href: "#",
    children: [
      { name: "Corporate Travel", href: "/services/corporate" },
      { name: "Airport Transfer", href: "/services/airport" },
      { name: "Wedding Transfer", href: "/services/wedding" },
      { name: "Charter Service", href: "/services/charter" },
      { name: "Cruise Port Transfer", href: "/services/cruise" },
    ],
  },
  { name: "FLEET", href: "/fleet" },
  { name: "GET A QUOTE", href: "/quote" },
  { name: "CONTACT", href: "/contact" },
  { name: "RATE", href: "/rate" },
  { name: "DRIVER LOGIN", href: "/driver-login", mobileOnly: true },
];
