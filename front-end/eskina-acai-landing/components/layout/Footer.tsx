'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#5A2D82] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#FDCB00]">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#FDCB00]" />
                <span>(XX) XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#FDCB00]" />
                <a href="mailto:contato@eskinadoacai.com.br" className="hover:text-[#FDCB00] transition-colors">
                  contato@eskinadoacai.com.br
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaGlobe className="text-[#FDCB00]" />
                <a href="https://www.eskinadoacai.com.br" className="hover:text-[#FDCB00] transition-colors">
                  www.eskinadoacai.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#FDCB00]">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="hover:text-[#FDCB00] transition-colors">
                Home
              </Link>
              <Link href="#sobre" className="hover:text-[#FDCB00] transition-colors">
                Sobre
              </Link>
              <Link href="#produtos" className="hover:text-[#FDCB00] transition-colors">
                Produtos
              </Link>
              <Link href="#promocoes" className="hover:text-[#FDCB00] transition-colors">
                Promoções
              </Link>
              <Link href="#contato" className="hover:text-[#FDCB00] transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#FDCB00]">Siga-nos</h3>
            <p className="mb-4">Acompanhe nossas novidades e promoções nas redes sociais!</p>
            <div className="flex items-center space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-[#FDCB00] transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-[#FDCB00] transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-[#FDCB00] transition-colors transform hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#A07CD0] text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Eskina do Açaí. Todos os direitos reservados. Desenvolvido com ❤️ por Double Dev.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
