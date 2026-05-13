import { useState } from "react";

import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const links = [
  "About",
  "Projects",
  "Certificates",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-12 pt-5">

        <nav className="liquid-glass rounded-2xl px-5 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div>

            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
              SD//
            </h1>

          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">

            {links.map((link) => (

              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-neutral-300 hover:text-white transition duration-300"
              >
                {link}
              </a>

            ))}

          </div>

          {/* RIGHT CTA */}
          <div className="hidden md:flex items-center gap-3">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
              bg-white
              text-black
              px-9
              py-4              
              rounded-2xl
              flex
              items-center
              text-base
              font-semibold
              flex
              items-center
              gap-2
              hover:bg-neutral-200
              transition
              duration-300
              "
            >
              Resume
              <ArrowUpRight size={16} />
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </nav>

      </header>

      {/* MOBILE MENU */}
      {open && (

        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10">

          {links.map((link) => (

            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-3xl heading-font"
            >
              {link}
            </a>

          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-white text-black px-6 py-3 rounded-xl text-sm font-medium"
          >
            View Resume
          </a>

        </div>

      )}
    </>
  );
}