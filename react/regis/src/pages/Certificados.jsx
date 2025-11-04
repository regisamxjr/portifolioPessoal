import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Importando as imagens
import pooImg from '../assets/certificados/poo.png';
import reactjsImg from '../assets/certificados/reactjs.png';
import webstartImg from '../assets/certificados/webstart.png';
import versionamentoImg from '../assets/certificados/versionamento.png';
import golangImg from '../assets/certificados/golang.png';
import bancodedadosImg from '../assets/certificados/bancodedados.png';

const Certificados = () => {
  const { t } = useLanguage();
  
  const certificados = [
    {
      titulo: t('certificadosData.poo'),
      instituicao: 'TIC em Trilhas',
      imagem: pooImg
    },
    {
      titulo: t('certificadosData.react'),
      instituicao: 'TIC em Trilhas',
      imagem: reactjsImg
    },
    {
      titulo: t('certificadosData.webstart'),
      instituicao: 'TIC em Trilhas',
      imagem: webstartImg
    },
    {
      titulo: t('certificadosData.versionamento'),
      instituicao: 'Tic em Trilhas',
      imagem: versionamentoImg
    },
    {
      titulo: t('certificadosData.golang'),
      instituicao: 'Udemy',
      imagem: golangImg
    },
    {
      titulo: t('certificadosData.bancodedados'),
      instituicao: 'Tic em Trilhas',
      imagem: bancodedadosImg
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h1 className="mt-8 text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-center">
          {t('certificados')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificados.map((certificado, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={certificado.imagem}
                  alt={certificado.titulo}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificados; 