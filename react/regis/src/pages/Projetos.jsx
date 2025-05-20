import React, { useState } from 'react';
import {
  FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaJava, FaHtml5,
  FaCss3Alt, FaJs, FaGitAlt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiMysql
} from 'react-icons/si';

const Projetos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projetos = [
    {
      titulo: 'Portfólio Pessoal',
      descricao: 'Portfólio moderno desenvolvido com React e Tailwind CSS.',
      descricaoCompleta: 'Portfólio profissional com design responsivo, utilizando React, JavaScript e Tailwind CSS, com animações suaves e interações dinâmicas.',
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Tailwind', icon: SiTailwindcss, cor: '#06B6D4' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: 'src/assets/img/portifolio.png',
      github: 'https://github.com/regisamxjr/portfolio',
      demo: 'https://rxavier.netlify.app'
    },
    {
      titulo: 'Weather Global Controller',
      descricao: 'Controle de temperatura mundial com API OpenWeather.',
      descricaoCompleta: 'Plataforma que exibe o clima ao vivo de cidades ao redor do mundo, usando HTML, CSS, JavaScript e API OpenWeather.',
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: 'src/assets/img/apideclima.png',
      github: 'https://github.com/seu-usuario/weather-controller',
      demo: '#'
    },
    {
      titulo: 'Controle de Transportes',
      descricao: 'Sistema desktop com JavaFX.',
      descricaoCompleta: 'Aplicativo JavaFX para gerenciamento de transportes cadastrados, com interface intuitiva e foco em controle logístico.',
      tecnologias: [
        { nome: 'Java', icon: FaJava, cor: '#007396' }
      ],
      imagem: 'src/assets/img/javafx.png',
      github: 'https://github.com/seu-usuario/transportes-javafx',
      demo: '#'
    },
    {
      titulo: 'Soccer Hangman',
      descricao: 'Jogo de adivinhação de times de futebol.',
      descricaoCompleta: 'Jogo estilo forca com nomes de clubes de futebol mundial. Feito com HTML, CSS e JavaScript, inspirado no jogo Termo.',
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: 'src/assets/img/soccerhangman.png',
      github: 'https://github.com/seu-usuario/soccer-hangman',
      demo: '#'
    },
    {
      titulo: 'Enzo Barbershop',
      descricao: 'Site institucional de barbearia.',
      descricaoCompleta: 'Landing page elegante e moderna de uma barbearia fictícia. Desenvolvido com HTML, CSS e JavaScript.',
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: 'src/assets/img/enzobarber.png',
      github: 'https://github.com/seu-usuario/enzo-barbershop',
      demo: '#'
    },
    {
      titulo: 'Cado SurfCamp',
      descricao: 'Site para hospedagem em Garopaba.',
      descricaoCompleta: 'Landing page de uma cabana de surf na praia de Garopaba, com fotos, descrição dos serviços e formulário.',
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: 'src/assets/img/cadosurfcamp.png',
      github: 'https://github.com/seu-usuario/cado-surfcamp',
      demo: '#'
    },
    {
      titulo: 'Calculadora',
      descricao: 'Calculadora funcional com design moderno.',
      descricaoCompleta: 'Calculadora web com funcionalidades básicas, layout responsivo e estilização com CSS moderno.',
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: 'src/assets/img/calculadora.png',
      github: 'https://github.com/seu-usuario/calculadora',
      demo: '#'
    },
    {
      titulo: 'Moonight Cardápio',
      descricao: 'Cardápio digital de restaurante fictício.',
      descricaoCompleta: 'Projeto fictício de cardápio online com design escuro, navegação fluida e foco na experiência do usuário.',
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: 'src/assets/img/cardapio-restaurante.png',
      github: 'https://github.com/regisamxjr/moonight-cardapio',
      demo: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
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
                  <a href={projeto.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" onClick={(e) => e.stopPropagation()}>
                    <FaGithub size={20} />
                  </a>
                  <a href={projeto.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" onClick={(e) => e.stopPropagation()}>
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  <FaGithub />
                  Ver no GitHub
                </a>
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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
