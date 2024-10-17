// src/components/Header.js

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-pink-100 p-4">
      <div className="flex items-center">
        <Image 
          src="/4.jpg" // Your image path
          alt="Pookie&apos;s Logo"
          width={50}
          height={50}
          className="rounded-full mr-2"
        />
        <h1 className="text-pink-700 text-3xl md:text-4xl">Pookie&apos;s</h1>
      </div>
      <nav>
        <ul className="flex space-x-4 md:space-x-8">
          <li>
            <Link href="/" className="text-teal-600 hover:text-teal-800 text-lg md:text-2xl">Home</Link>
          </li>
          <li>
            <Link href="/collaboration" className="text-teal-600 hover:text-teal-800 text-lg md:text-2xl">Collaboration</Link>
          </li>
          <li>
            <Link href="/products" className="text-teal-600 hover:text-teal-800 text-lg md:text-2xl">Products</Link>
          </li>
          <li>
            <Link href="/about" className="text-teal-600 hover:text-teal-800 text-lg md:text-2xl">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-teal-600 hover:text-teal-800 text-lg md:text-2xl">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
