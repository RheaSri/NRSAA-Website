import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#060220] border-b-2 border-[#f5f4f5] px-6 py-4 flex justify-between items-center ${className}`}
    >
      <h1 className="text-3xl font-light tracking-wider">
        <img
          src="src/assets/NRSAA (dk_mod).png"
          className="w-32 h-auto hidden sm:block"
          alt="NRSAA Logo"
        />
      </h1>

      <nav className="relative space-x-6 text-lg font-bold flex items-center">
        <Link
          to="/"
          className={`hover:text-[#0263a0] ${location.pathname === '/' ? 'text-[#0263a0]' : 'text-[#f5f4f5]'}`}
        >
          Home
        </Link>

        {/* Product Dropdown with Outside Click Detection */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="hover:text-[#0263a0] text-[#f5f4f5] focus:outline-none"
          >
            Product
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 bg-[#060220] text-[#f5f4f5] border border-[#f5f4f5] rounded-md shadow-lg z-20">
              <Link
                to="/monitor"
                className="block px-4 py-2 hover:text-[#0263a0] whitespace-nowrap"
                onClick={() => setIsDropdownOpen(false)}
              >
                NRSAA Monitor
              </Link>
              <Link
                to="/platform"
                className="block px-4 py-2 hover:text-[#0263a0] whitespace-nowrap"
                onClick={() => setIsDropdownOpen(false)}
              >
                NRSAA Platform
              </Link>
              <Link
                to="/ai"
                className="block px-4 py-2 hover:text-[#0263a0] whitespace-nowrap"
                onClick={() => setIsDropdownOpen(false)}
              >
                NRSAA AI
              </Link>
            </div>
          )}
        </div>

        <a href="#contact" className="hover:text-[#0263a0] text-[#f5f4f5]">Contact</a>
        <a href="#mentions" className="hover:text-[#0263a0] text-[#f5f4f5]">Mentions</a>
      </nav>
    </header>
  );
};

export default Header;
