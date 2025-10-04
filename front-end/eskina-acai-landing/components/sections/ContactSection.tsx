'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    whatsapp: '',
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simular envio de e-mail (implementar backend posteriormente)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        whatsapp: '',
        mensagem: '',
      });
    } catch (error) {
      setSubmitMessage('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#5A2D82] mb-6">
          Entre em Contato
        </h2>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Queremos ouvir você! Seja para tirar dúvidas, fazer sugestões, elogios ou para parcerias, a Eskina do 
          Açaí está sempre à disposição para atendê-lo.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-[#5A2D82] mb-6">Nossos Contatos</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-[#A07CD0] bg-opacity-20 p-4 rounded-lg">
                  <FaPhone className="text-3xl text-[#5A2D82]" />
                  <div>
                    <div className="font-semibold text-[#5A2D82]">Telefone</div>
                    <div className="text-gray-700">(XX) XXXX-XXXX</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-[#A07CD0] bg-opacity-20 p-4 rounded-lg">
                  <FaWhatsapp className="text-3xl text-[#5A2D82]" />
                  <div>
                    <div className="font-semibold text-[#5A2D82]">WhatsApp</div>
                    <div className="text-gray-700">(XX) XXXXX-XXXX</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-[#A07CD0] bg-opacity-20 p-4 rounded-lg">
                  <FaEnvelope className="text-3xl text-[#5A2D82]" />
                  <div>
                    <div className="font-semibold text-[#5A2D82]">E-mail</div>
                    <div className="text-gray-700">contato@eskinadoacai.com.br</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-[#A07CD0] bg-opacity-20 p-4 rounded-lg">
                  <FaMapMarkerAlt className="text-3xl text-[#5A2D82]" />
                  <div>
                    <div className="font-semibold text-[#5A2D82]">Endereço</div>
                    <div className="text-gray-700">Rua Exemplo, 123 - Bairro - Cidade/UF</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FDCB00] p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-[#5A2D82] mb-3">Horário de Funcionamento</h4>
              <div className="space-y-2 text-gray-800">
                <div className="flex justify-between">
                  <span className="font-semibold">Segunda a Sexta:</span>
                  <span>13h - 22h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sábado:</span>
                  <span>13h - 22h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Domingo:</span>
                  <span>13h - 20h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <h3 className="text-3xl font-bold text-[#5A2D82] mb-6">Fale Conosco</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A2D82] text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="sobrenome" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sobrenome *
                  </label>
                  <input
                    type="text"
                    id="sobrenome"
                    name="sobrenome"
                    value={formData.sobrenome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A2D82] text-gray-800"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A2D82] text-gray-800"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A2D82] text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A2D82] text-gray-800"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A2D82] resize-none text-gray-800"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5A2D82] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-[#E63946] transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {submitMessage && (
                <div
                  className={`p-4 rounded-lg text-center ${
                    submitMessage.includes('sucesso')
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
