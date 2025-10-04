'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Busca:', searchQuery);
    // Implementar lógica de busca aqui
  };

  return (
    <header className="bg-[#5A2D82] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="Eskina do Açaí Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="hover:text-[#FDCB00] transition-colors font-semibold">
              Home
            </Link>
            <Link href="#sobre" className="hover:text-[#FDCB00] transition-colors font-semibold">
              Sobre
            </Link>
            <Link href="#produtos" className="hover:text-[#FDCB00] transition-colors font-semibold">
              Produtos
            </Link>
            <Link href="#promocoes" className="hover:text-[#FDCB00] transition-colors font-semibold">
              Promoções
            </Link>
            <Link href="#contato" className="hover:text-[#FDCB00] transition-colors font-semibold">
              Contato
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-white rounded-full px-4 py-2 w-64">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-gray-800 outline-none text-sm"
            />
            <button type="submit" className="text-[#5A2D82] hover:text-[#FDCB00] transition-colors">
              <FaSearch />
            </button>
          </form>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100078217061443"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FDCB00] transition-colors text-xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/eskinadoacai2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FDCB00] transition-colors text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FDCB00] transition-colors text-xl"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl hover:text-[#FDCB00] transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#A07CD0] pt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#home"
                className="hover:text-[#FDCB00] transition-colors font-semibold"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="#sobre"
                className="hover:text-[#FDCB00] transition-colors font-semibold"
                onClick={toggleMenu}
              >
                Sobre
              </Link>
              <Link
                href="#produtos"
                className="hover:text-[#FDCB00] transition-colors font-semibold"
                onClick={toggleMenu}
              >
                Produtos
              </Link>
              <Link
                href="#promocoes"
                className="hover:text-[#FDCB00] transition-colors font-semibold"
                onClick={toggleMenu}
              >
                Promoções
              </Link>
              <Link
                href="#contato"
                className="hover:text-[#FDCB00] transition-colors font-semibold"
                onClick={toggleMenu}
              >
                Contato
              </Link>
            </nav>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mt-4 flex items-center bg-white rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-gray-800 outline-none text-sm"
              />
              <button type="submit" className="text-[#5A2D82] hover:text-[#FDCB00] transition-colors">
                <FaSearch />
              </button>
            </form>

            {/* Mobile Social Media */}
            <div className="flex items-center space-x-6 mt-4 justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=100078217061443"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FDCB00] transition-colors text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/eskinadoacai2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FDCB00] transition-colors text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FDCB00] transition-colors text-2xl"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
