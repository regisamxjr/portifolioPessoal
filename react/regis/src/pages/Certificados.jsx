import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certificados = () => {
  const certificados = [
    {
      titulo: "Desenvolvimento Web Full Stack",
      instituicao: "Trybe",
      data: "2023",
      imagem: "https://via.placeholder.com/300x200",
      link: "#",
      descricao: "Curso completo de desenvolvimento web full stack, cobrindo front-end e back-end."
    },
    {
      titulo: "React.js Avançado",
      instituicao: "Alura",
      data: "2023",
      imagem: "https://via.placeholder.com/300x200",
      link: "#",
      descricao: "Aprofundamento em React.js, hooks, context API e gerenciamento de estado."
    },
    {
      titulo: "Node.js e Express",
      instituicao: "Rocketseat",
      data: "2023",
      imagem: "https://via.placeholder.com/300x200",
      link: "#",
      descricao: "Desenvolvimento de APIs RESTful com Node.js e Express."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 mt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
          Certificados
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificados.map((certificado, index) => (
            <div
              key={certificado.titulo}
              className="group bg-gray-900/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={certificado.imagem}
                  alt={certificado.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <a
                    href={certificado.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
                  >
                    Ver Certificado
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaCertificate className="text-2xl text-blue-400" />
                  <h3 className="text-xl font-semibold text-gray-300 group-hover:text-blue-400 transition-colors">
                    {certificado.titulo}
                  </h3>
                </div>
                <p className="text-gray-400 mb-2">{certificado.instituicao}</p>
                <p className="text-sm text-gray-500 mb-4">{certificado.data}</p>
                <p className="text-gray-400">{certificado.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificados; 