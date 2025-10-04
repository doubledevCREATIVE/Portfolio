'use client';

import React from 'react';
import Image from 'next/image';
import { FaLeaf, FaIceCream, FaCookie, FaCandyCane } from 'react-icons/fa';

const ProductsSection = () => {
  const productCategories = [
    {
      icon: <FaLeaf className="text-5xl text-[#FDCB00]" />,
      title: 'Açaí com Frutas Frescas',
      description: 'Combine seu açaí com uma seleção de frutas frescas e suculentas, como morango, banana, kiwi, manga e uva. Uma explosão de vitaminas e sabor a cada colherada.',
    },
    {
      icon: <FaIceCream className="text-5xl text-[#FDCB00]" />,
      title: 'Açaí com Cremes e Caldas',
      description: 'Para os amantes de doçura e cremosidade, temos opções como creme de leite ninho, creme de avelã, creme de maracujá, caldas de chocolate, caramelo e morango.',
    },
    {
      icon: <FaCookie className="text-5xl text-[#FDCB00]" />,
      title: 'Açaí com Granola e Cereais',
      description: 'Adicione crocância e fibras ao seu açaí com nossa variedade de granolas, cereais, aveia e sementes. Uma opção nutritiva e deliciosa.',
    },
    {
      icon: <FaCandyCane className="text-5xl text-[#FDCB00]" />,
      title: 'Açaí com Doces e Guloseimas',
      description: 'Para quem não resiste a um docinho, temos opções como confetes de chocolate, paçoca, leite condensado, e muito mais.',
    },
  ];

  const sizes = [
    { size: '300ml', price: 'R$ XX,XX' },
    { size: '500ml', price: 'R$ XX,XX' },
    { size: '700ml', price: 'R$ XX,XX' },
    { size: 'Bacia', price: 'R$ XX,XX' },
  ];

  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-white to-[#A07CD0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#5A2D82] mb-6">
          Nossos Produtos
        </h2>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Na Eskina do Açaí, a variedade e a qualidade são os nossos diferenciais. Oferecemos uma ampla gama de 
          opções para você montar o seu açaí do jeito que mais gosta, com os melhores ingredientes e combinações 
          irresistíveis.
        </p>

        {/* Featured Product Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/products/product_açaí_cup.png"
              alt="Açaí da Eskina do Açaí"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Açaí Tradicional & Sizes */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-[#5A2D82] mb-4">Açaí Tradicional</h3>
          <p className="text-lg text-gray-700 mb-6">
            Nosso açaí cremoso e puro, feito com a fruta selecionada, é a base perfeita para a sua criação. 
            Escolha o tamanho e adicione os seus acompanhamentos favoritos para uma experiência única.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sizes.map((item, index) => (
              <div
                key={index}
                className="bg-[#5A2D82] text-white p-4 rounded-lg text-center hover:bg-[#E63946] transition-colors"
              >
                <div className="font-bold text-xl mb-2">{item.size}</div>
                <div className="text-[#FDCB00] font-semibold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-2xl font-bold text-[#5A2D82] ml-4">{category.title}</h3>
              </div>
              <p className="text-gray-700">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Monte Seu Açaí */}
        <div className="bg-[#FDCB00] rounded-lg shadow-xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-[#5A2D82] mb-4">Monte Seu Açaí</h3>
          <p className="text-lg text-gray-800 mb-6">
            Liberte a sua criatividade e monte o seu açaí personalizado! Escolha a base, adicione quantas frutas, 
            cremes, caldas e toppings desejar. As possibilidades são infinitas para você criar a sua obra-prima na 
            Eskina do Açaí.
          </p>
          <a
            href="#contato"
            className="inline-block bg-[#5A2D82] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-[#E63946] transition-all transform hover:scale-105"
          >
            Faça Seu Pedido
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
