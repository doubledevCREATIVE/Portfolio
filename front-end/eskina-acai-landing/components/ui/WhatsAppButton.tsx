'use client';

import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Número do WhatsApp (substituir pelo número real)
  const whatsappNumber = '5553991071007'; // Formato: código do país + DDD + número
  const message = 'Olá! Gostaria de fazer um pedido na Eskina do Açaí.';

  useEffect(() => {
    // Mostrar o botão após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Esconder o tooltip após 5 segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    console.log("WhatsApp URL gerada:", url);
    window.open(url, '_blank');
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-xl mb-2 w-64 animate-bounce">
          <button
            onClick={handleCloseTooltip}
            className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
            aria-label="Fechar"
          >
            <FaTimes className="text-sm" />
          </button>
          <p className="text-sm font-semibold">
            Fale conosco pelo WhatsApp! 💬
          </p>
          <p className="text-xs mt-1">
            Tire suas dúvidas ou faça seu pedido agora mesmo!
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <FaWhatsapp className="text-4xl" />
        <span className="absolute right-full mr-3 bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Fale Conosco
        </span>
      </button>

      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></div>
    </div>


      
  );
};

export default WhatsAppButton;

