'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Sync login state with localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []); // Runs only on the first render

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    // Redirect to home page or login page
    router.push("/");
  };

  const checkLogin = () => {
    // Check login status from localStorage whenever called
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  return (
    <header className="p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image src="/logo.png" width={200} height={40} alt="logo" />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>

            {!isLoggedIn ? (
              <>
                <li>
                  <Link
                    href="/registration"
                    className="hover:underline"
                    onClick={checkLogin} // Sync state after navigation
                  >
                    Registration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="hover:underline"
                    onClick={checkLogin} // Sync state after navigation
                  >
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
