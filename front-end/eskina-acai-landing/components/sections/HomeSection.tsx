'use client';

import React from 'react';
import Carousel from '../ui/Carousel';

const HomeSection = () => {
  const carouselImages = [
    '/images/carousel/home_carousel_1.png',
    '/images/carousel/home_carousel_2.png',
    '/images/carousel/home_carousel_3.png',
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-[#A07CD0] to-white py-16">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-[#5A2D82] mb-6 animate-fade-in">
            Eskina do Açaí
          </h1>
          <p className="text-2xl md:text-3xl text-[#E63946] font-semibold mb-4">
            Onde o sabor encontra a sua energia!
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Bem-vindo à Eskina do Açaí, o seu novo ponto de encontro para desfrutar do mais puro e delicioso açaí! 
            Preparamos cada tigela com paixão e os melhores ingredientes, garantindo uma explosão de sabor e energia 
            para o seu dia. Explore nosso cardápio, descubra suas combinações favoritas e deixe-se levar por essa 
            experiência única. Na Eskina do Açaí, cada colherada é um convite à felicidade!
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel images={carouselImages} autoPlay={true} interval={5000} />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="#produtos"
            className="inline-block bg-[#FDCB00] text-[#5A2D82] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-[#E63946] hover:text-white transition-all transform hover:scale-105"
          >
            Explore Nosso Cardápio
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
