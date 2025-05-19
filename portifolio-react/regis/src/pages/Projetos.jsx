import React from 'react';
import { FaGithub, FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si';

export default function Projetos() {
  const tecnologias = {
    html: { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    css: { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500' },
    js: { icon: FaJs, name: 'JavaScript', color: 'text-yellow-500' },
    java: { icon: FaJava, name: 'Java', color: 'text-red-600' },
    react: { icon: FaReact, name: 'React', color: 'text-blue-400' },
    node: { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    typescript: { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600' },
    python: { icon: FaPython, name: 'Python', color: 'text-blue-500' },
    mongodb: { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    postgresql: { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-400' },
    tailwind: { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-400' }
  };

  const projetos = [
    {
      titulo: "PALAVRA NA REDE",
      imagem: "src/assets/img/soccerhangman.png",
      descricao: "Palavra na Rede é um jogo de adivinhação inspirado no famoso Termo, trazendo a paixão pelo futebol para uma experiência divertida e desafiadora. O objetivo é adivinhar nomes de times de diferentes regiões do mundo, tentando acertar com o menor número de tentativas possível. Desenvolvido com HTML, CSS e JavaScript, o jogo oferece uma experiência dinâmica e envolvente para fãs de futebol que gostam de testar seus conhecimentos e competir com amigos.",
      link: "https://github.com/DuduMZSantos/soccer_hangman",
      techs: ['html', 'css', 'js']
    },
    {
      titulo: "API DE CLIMA",
      imagem: "src/assets/img/apideclima.png",
      descricao: "O projeto Weather Global Controller foi desenvolvido com o objetivo de aprimorar habilidades no consumo e integração de APIs, utilizando as tecnologias HTML, CSS e JavaScript. O sistema permite a consulta de informações meteorológicas em tempo real de diversas localidades ao redor do mundo, fornecendo dados como temperatura, umidade, velocidade do vento e condições climáticas atuais.",
      link: "https://github.com/regisamxjr/Api-clima",
      techs: ['html', 'css', 'js']
    },
    {
      titulo: "CADO SURF CAMP",
      imagem: "src/assets/img/cadosurfcamp.png",
      descricao: "Este projeto é um site desenvolvido com HTML, CSS e JavaScript para uma escola de surfe localizada na praia de Garopaba no estado de Santa Catarina. O objetivo é oferecer uma plataforma informativa e atrativa para os alunos e visitantes da escola, destacando serviços, informações essenciais e a previsão do tempo atual na cidade, indispensável para os praticantes de surfe.",
      link: "https://github.com/regisamxjr/cado-surf-camp-site",
      techs: ['html', 'css', 'js']
    },
    {
      titulo: "SISTEMA DE CADASTRO DE TRANSPORTES",
      imagem: "src/assets/img/javafx.png",
      descricao: "Este projeto é uma aplicação desktop desenvolvida em Java com JavaFX, projetada para gerenciar transportes de maneira eficiente. Ele permite o cadastro e acompanhamento do status dos transportes, que podem ser classificados como alocado, pendente ou inativo. O objetivo é proporcionar uma ferramenta prática para empresas que precisam organizar e monitorar sua logística de transportes.",
      link: "https://github.com/regisamxjr/interface-Cadastro-Trasporte-Java",
      techs: ['java']
    },
    {
      titulo: "CALCULADORA",
      imagem: "src/assets/img/calculadora.png",
      descricao: "Este é um projeto de uma calculadora simples desenvolvida utilizando HTML, CSS e JavaScript. Foi um dos meus primeiros projetos, criado com o objetivo de praticar conceitos básicos de programação web, design de interface e manipulação de eventos com JavaScript.",
      link: "https://github.com/regisamxjr/calculadora",
      techs: ['html', 'css', 'js']
    },
   
    {
      titulo: "CARDÁPIO DO MOONIGHT RESTAURANTE",
      imagem: "src/assets/img/cardapio-restaurante.png",
      descricao: "O projeto Moonight Restaurante foi desenvolvido utilizando HTML e CSS, com o objetivo de apresentar um cardápio digital atrativo e funcional. Inspirado em uma experiência gastronômica sofisticada e moderna, o site visa proporcionar aos visitantes uma navegação intuitiva e envolvente, destacando o charme e a exclusividade do restaurante.",
      link: "https://github.com/regisamxjr/cardapio-restaurante",
      techs: ['html', 'css']
    },
    {
      titulo: "ENZO BARBER",
      imagem: "src/assets/img/enzobarber.png",
      descricao: "O Enzo Barber é um sistema web completo desenvolvido para otimizar a gestão de barbearias, proporcionando uma experiência moderna e eficiente tanto para os clientes quanto para os profissionais. O projeto combina tecnologia e usabilidade para facilitar o agendamento de serviços e aprimorar a organização do atendimento.",
      link: "https://github.com/regisamxjr/enzobarber",
      techs: ['html', 'css', 'js']
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Meus Projetos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <article key={index} className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-[#219ebc] transition-colors">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={projeto.imagem} 
                  alt={projeto.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white">{projeto.titulo}</h2>
                  <div className="flex space-x-2">
                    {projeto.techs.map((tech, techIndex) => {
                      const TechIcon = tecnologias[tech].icon;
                      return (
                        <div 
                          key={techIndex}
                          className={`${tecnologias[tech].color} bg-gray-900/50 p-1 rounded-full`}
                          title={tecnologias[tech].name}
                        >
                          <TechIcon size={16} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{projeto.descricao}</p>
                <a 
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#219ebc] hover:text-[#1a7d94] transition-colors"
                >
                  <FaGithub size={20} />
                  <span>Ver no GitHub</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 