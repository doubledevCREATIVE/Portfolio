'use client';

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#5A2D82] mb-12">
          Sobre a Eskina do Açaí
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/about_us.png"
                alt="Eskina do Açaí - Nossa História"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-[#E63946] mb-4">
                Nossa História e Paixão
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A Eskina do Açaí nasceu do sonho e da paixão de duas irmãs empreendedoras por açaí. Desde cedo, 
                sempre fomos fascinadas pela versatilidade e pelos benefícios dessa fruta amazônica, e percebemos 
                que havia um espaço para oferecer uma experiência de açaí verdadeiramente especial. Não queríamos 
                apenas vender um produto, mas sim criar um ponto de encontro onde as pessoas pudessem desfrutar de 
                momentos de alegria, energia e sabor.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#E63946] mb-4">
                Motivação e Propósito
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa motivação principal é compartilhar o que amamos: um açaí de qualidade superior, preparado com 
                carinho e ingredientes frescos. Acreditamos que o açaí é mais do que um alimento; é um estilo de vida 
                que combina saúde, bem-estar e prazer. Nosso propósito é proporcionar aos nossos clientes uma experiência 
                gastronômica memorável, onde cada tigela é uma obra de arte personalizada, feita sob medida para satisfazer 
                os mais diversos paladares.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Buscamos ser um espaço acolhedor e vibrante, onde a comunidade possa se reunir, relaxar e recarregar as 
                energias. Valorizamos a qualidade dos nossos produtos, a higiene no preparo e, acima de tudo, o sorriso e 
                a satisfação de cada cliente que passa pela nossa Eskina. Venha fazer parte da nossa história e descobrir 
                o verdadeiro sabor do açaí!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
