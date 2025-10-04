'use client';

import React from 'react';
import Carousel from '../ui/Carousel';
import { FaTag, FaGift, FaPercent } from 'react-icons/fa';

const PromotionsSection = () => {
  const promotionImages = [
    '/images/promotions/promotion_ifood.png',
    '/images/carousel/home_carousel_1.png',
    '/images/carousel/home_carousel_2.png',
    '/images/carousel/home_carousel_3.png',
  ];

  const promotions = [
    {
      icon: <FaTag className="text-4xl text-[#FDCB00]" />,
      title: 'Açaí Duplo Delícia',
      description: 'Leve dois açaís de 500ml com 3 acompanhamentos cada por um preço imperdível! Perfeito para compartilhar com quem você ama.',
      price: 'R$ XX,XX',
      discount: 'Economize R$ YY,YY!',
    },
    {
      icon: <FaGift className="text-4xl text-[#FDCB00]" />,
      title: 'Combo Família Açaí',
      description: 'Uma bacia de açaí de 1 litro com 5 acompanhamentos à sua escolha e 4 copos de 300ml. A alegria da família garantida!',
      price: 'R$ XX,XX',
      discount: 'Oferta Especial!',
    },
    {
      icon: <FaPercent className="text-4xl text-[#FDCB00]" />,
      title: 'Desconto no iFood',
      description: 'Peça pelo iFood e aproveite um desconto especial em todo o nosso cardápio. A Eskina do Açaí na sua casa com ainda mais economia!',
      price: 'Até 20% OFF',
      discount: 'Válido por tempo limitado!',
    },
  ];

  return (
    <section id="promocoes" className="py-20 bg-gradient-to-b from-[#A07CD0] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#5A2D82] mb-6">
          Promoções Imperdíveis!
        </h2>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Fique de olho nas nossas promoções exclusivas e aproveite para saborear o seu açaí favorito com preços 
          especiais! A Eskina do Açaí sempre tem uma novidade para você.
        </p>

        {/* Carousel de Promoções */}
        <div className="max-w-6xl mx-auto mb-16">
          <Carousel images={promotionImages} autoPlay={true} interval={4000} />
        </div>

        {/* Destaque da Semana */}
        <div className="bg-[#E63946] text-white rounded-lg shadow-2xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <FaTag className="text-6xl text-[#FDCB00] mr-4" />
            <h3 className="text-3xl md:text-4xl font-bold">Destaque da Semana</h3>
          </div>
          <h4 className="text-2xl font-bold text-center mb-4">Açaí Duplo Delícia!</h4>
          <p className="text-lg text-center mb-4">
            Leve dois açaís de 500ml com 3 acompanhamentos cada por um preço imperdível! Perfeito para compartilhar 
            com quem você ama ou para garantir sua dose dupla de energia. Escolha entre morango, banana, granola, 
            leite condensado, e muito mais!
          </p>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FDCB00] mb-2">R$ XX,XX</div>
            <div className="text-xl">Economize R$ YY,YY!</div>
            <div className="mt-4 text-sm">
              Válido por tempo limitado ou enquanto durarem os estoques. Não perca!
            </div>
          </div>
        </div>

        {/* Outras Promoções */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">{promo.icon}</div>
              <h4 className="text-2xl font-bold text-[#5A2D82] text-center mb-3">{promo.title}</h4>
              <p className="text-gray-700 text-center mb-4">{promo.description}</p>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#E63946] mb-1">{promo.price}</div>
                <div className="text-sm text-[#5A2D82] font-semibold">{promo.discount}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-sm text-gray-600 max-w-3xl mx-auto">
          <p>
            *As promoções podem variar e estão sujeitas a termos e condições. Consulte nossa equipe para mais detalhes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
