import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { FaChevronDown } from "react-icons/fa"; // Install react-icons


function Navbar() {

  
  return (
    <nav className="hidden md:flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <Link href="/"><Image src="/images/logo.png" width={80} height={150} alt="PulseTech logo" /></Link>
        <h1 className="text-3xl font-bold">PulseTech</h1>
      </div>

      <ul className="flex space-x-6 text-xl text-gray-800 items-center">
        <li><Link href="/">Home</Link></li>

        {/* Dropdown */}
        <li className="relative group">
          <div className="flex items-center cursor-pointer">
            <span>News</span>
            <FaChevronDown className="ml-1 text-sm transition-transform duration-300 group-hover:rotate-180" />
          </div>

          <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition-all duration-300 origin-top z-50">
            
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/categories/fashion">Fashion</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/categories/sport">Sport</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/categories/technology">Technology</Link>
            </li>
          </ul>
        </li>

        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
