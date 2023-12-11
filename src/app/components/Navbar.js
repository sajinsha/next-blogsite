import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 stickytop-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <Link
          href="/"
          className="text-white/90 no-underline hover:text-white  "
        >
          Home
        </Link>
        <Link
          href="/About"
          className="text-white/90 no-underline hover:text-white  "
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
