import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si';

const Projetos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projetos = [
    {
      titulo: 'Portfólio Pessoal',
      descricao: 'Portfólio profissional desenvolvido com React e Tailwind CSS.',
      descricaoCompleta: 'Portfólio profissional com design moderno e responsivo, utilizando React para a interface e Tailwind CSS para estilização. Implementa animações suaves e interações dinâmicas.',
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Tailwind', icon: SiTailwindcss, cor: '#06B6D4' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: 'src/assets/img/apideclima.png',
      github: 'https://github.com/seu-usuario/portfolio',
      demo: 'https://portfolio-demo.com'
    },
    {
      titulo: 'Sistema de Gestão',
      descricao: 'Sistema completo de gestão empresarial com múltiplos módulos.',
      descricaoCompleta: 'Sistema de gestão empresarial desenvolvido em Java com Spring Boot, incluindo módulos de vendas, estoque, financeiro e relatórios. Interface web responsiva com React.',
      tecnologias: [
        { nome: 'Java', icon: FaJava, cor: '#007396' },
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'MySQL', icon: SiMysql, cor: '#4479A1' }
      ],
      imagem: 'src/assets/img/gestao.jpg',
      github: 'https://github.com/seu-usuario/sistema-gestao',
      demo: 'https://gestao-demo.com'
    },
    {
      titulo: 'E-commerce',
      descricao: 'Plataforma de e-commerce com carrinho e pagamentos.',
      descricaoCompleta: 'Plataforma completa de e-commerce com sistema de carrinho, integração com gateway de pagamento, painel administrativo e área do cliente.',
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Node.js', icon: FaNodeJs, cor: '#339933' },
        { nome: 'MongoDB', icon: SiMongodb, cor: '#47A248' }
      ],
      imagem: 'src/assets/img/ecommerce.jpg',
      github: 'https://github.com/seu-usuario/ecommerce',
      demo: 'https://ecommerce-demo.com'
    },
    {
      titulo: 'API RESTful',
      descricao: 'API RESTful com autenticação e documentação.',
      descricaoCompleta: 'API RESTful desenvolvida com Node.js e Express, incluindo autenticação JWT, documentação Swagger e testes automatizados.',
      tecnologias: [
        { nome: 'Node.js', icon: FaNodeJs, cor: '#339933' },
        { nome: 'TypeScript', icon: SiTypescript, cor: '#3178C6' },
        { nome: 'MongoDB', icon: SiMongodb, cor: '#47A248' }
      ],
      imagem: 'src/assets/img/api.jpg',
      github: 'https://github.com/seu-usuario/api-rest',
      demo: 'https://api-demo.com'
    },
    {
      titulo: 'Dashboard Analytics',
      descricao: 'Dashboard com gráficos e métricas em tempo real.',
      descricaoCompleta: 'Dashboard interativo com visualização de dados em tempo real, gráficos dinâmicos e exportação de relatórios.',
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'TypeScript', icon: SiTypescript, cor: '#3178C6' },
        { nome: 'Node.js', icon: FaNodeJs, cor: '#339933' }
      ],
      imagem: 'src/assets/img/dashboard.jpg',
      github: 'https://github.com/seu-usuario/dashboard',
      demo: 'https://dashboard-demo.com'
    },
    {
      titulo: 'App Mobile',
      descricao: 'Aplicativo mobile com React Native.',
      descricaoCompleta: 'Aplicativo mobile desenvolvido com React Native, incluindo autenticação, notificações push e sincronização offline.',
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Node.js', icon: FaNodeJs, cor: '#339933' },
        { nome: 'MongoDB', icon: SiMongodb, cor: '#47A248' }
      ],
      imagem: 'src/assets/img/mobile.jpg',
      github: 'https://github.com/seu-usuario/mobile-app',
      demo: 'https://mobile-demo.com'
    },
    {
      titulo: 'Blog Pessoal',
      descricao: 'Blog com sistema de comentários e categorias.',
      descricaoCompleta: 'Blog pessoal com sistema de posts, comentários, categorias e busca. Interface moderna e responsiva.',
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Node.js', icon: FaNodeJs, cor: '#339933' },
        { nome: 'MySQL', icon: SiMysql, cor: '#4479A1' }
      ],
      imagem: 'src/assets/img/blog.jpg',
      github: 'https://github.com/seu-usuario/blog',
      demo: 'https://blog-demo.com'
    },
    {
      titulo: 'Landing Page',
      descricao: 'Landing page moderna e responsiva.',
      descricaoCompleta: 'Landing page desenvolvida com HTML5, CSS3 e JavaScript, incluindo animações e formulário de contato.',
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: 'src/assets/img/landing.jpg',
      github: 'https://github.com/seu-usuario/landing',
      demo: 'https://landing-demo.com'
    },
    {
      titulo: 'Sistema de Vendas',
      descricao: 'Sistema de vendas com controle de estoque.',
      descricaoCompleta: 'Sistema de vendas desenvolvido em Java com interface web, incluindo controle de estoque, relatórios e dashboard.',
      tecnologias: [
        { nome: 'Java', icon: FaJava, cor: '#007396' },
        { nome: 'MySQL', icon: SiMysql, cor: '#4479A1' },
        { nome: 'Git', icon: FaGitAlt, cor: '#F05032' }
      ],
      imagem: 'src/assets/img/vendas.jpg',
      github: 'https://github.com/seu-usuario/vendas',
      demo: 'https://vendas-demo.com'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h1 className="mt-8 text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-center">
          Projetos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(projeto)}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
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
                      className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300"
                    >
                      <tech.icon style={{ color: tech.cor }} />
                      {tech.nome}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={projeto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.imagem}
                alt={selectedProject.titulo}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedProject.titulo}</h2>
              <p className="text-gray-400 mb-6">{selectedProject.descricaoCompleta}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tecnologias.map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300"
                  >
                    <tech.icon style={{ color: tech.cor }} />
                    {tech.nome}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaGithub />
                  Ver no GitHub
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt />
                  Ver Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projetos; 