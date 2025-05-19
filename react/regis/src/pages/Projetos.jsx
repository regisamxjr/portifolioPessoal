import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projetos = () => {
  const projetos = [
    {
      titulo: 'E-commerce Platform',
      descricao: 'Plataforma de e-commerce completa com carrinho de compras, pagamentos e painel administrativo.',
      tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imagem: 'https://via.placeholder.com/600x400',
      github: 'https://github.com/seu-usuario/ecommerce',
      demo: 'https://ecommerce-demo.com'
    },
    {
      titulo: 'Task Management App',
      descricao: 'Aplicativo de gerenciamento de tarefas com drag-and-drop, filtros e notificações.',
      tecnologias: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      imagem: 'https://via.placeholder.com/600x400',
      github: 'https://github.com/seu-usuario/task-manager',
      demo: 'https://task-manager-demo.com'
    },
    {
      titulo: 'Social Media Dashboard',
      descricao: 'Dashboard para análise de métricas de redes sociais com gráficos interativos.',
      tecnologias: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      imagem: 'https://via.placeholder.com/600x400',
      github: 'https://github.com/seu-usuario/social-dashboard',
      demo: 'https://social-dashboard-demo.com'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
          Projetos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-secondary-500 transition-colors"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {projeto.titulo}
                </h3>
                <p className="text-gray-400 mb-4">{projeto.descricao}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projeto.tecnologias.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-secondary-900/50 text-secondary-400 border border-secondary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-secondary-400 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={projeto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-secondary-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projetos; 