import React, { useState, useMemo } from 'react';
import {
  FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaJava, FaHtml5,
  FaCss3Alt, FaJs, FaGitAlt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiExpress
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

// Importando as imagens
import portifolioImg from '../assets/img/portifolio.png';
import apideclimaImg from '../assets/img/apideclima.png';
import javafxImg from '../assets/img/javafx.png';
import soccerhangmanImg from '../assets/img/soccerhangman.png';
import enzobarberImg from '../assets/img/enzobarber.png';
import cadosurfcampImg from '../assets/img/cadosurfcamp.png';
import calculadoraImg from '../assets/img/calculadora.png';
import cardapioImg from '../assets/img/cardapio-restaurante.png';
import lifveImg from '../assets/img/lifve.png';
import veraxImg from '../assets/img/verax.png';

const Projetos = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();

  const projetos = useMemo(() => [
    {
      titulo: t('projetosData.portfolio.titulo'),
      descricao: t('projetosData.portfolio.descricao'),
      descricaoCompleta: t('projetosData.portfolio.descricaoCompleta'),
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Tailwind', icon: SiTailwindcss, cor: '#06B6D4' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: portifolioImg,
      github: 'https://github.com/regisamxjr/portfoliopessoal',
      demo: 'https://rxavier.netlify.app'
    },
    {
      titulo: t('projetosData.weather.titulo'),
      descricao: t('projetosData.weather.descricao'),
      descricaoCompleta: t('projetosData.weather.descricaoCompleta'),
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: apideclimaImg,
      github: 'https://github.com/regisamxjr/apideclima',
      demo: '#'
    },
    {
      titulo: t('projetosData.lifve.titulo'),
      descricao: t('projetosData.lifve.descricao'),
      descricaoCompleta: t('projetosData.lifve.descricaoCompleta'),
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Tailwind CSS', icon: SiTailwindcss, cor: '#06B6D4' },
        { nome: 'PostgreSQL', icon: SiPostgresql, cor: '#336791' },
        { nome: 'Node.js', icon: FaNodeJs, cor: '#339933' },
        { nome: 'Express', icon: SiExpress, cor: '#FFFFFF' },
      ],
      imagem: lifveImg,
      github: 'https://github.com/regisamxjr/lifve',
      demo: '#'
    },
    {
      titulo: t('projetosData.verax.titulo'),
      descricao: t('projetosData.verax.descricao'),
      descricaoCompleta: t('projetosData.verax.descricaoCompleta'),
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Tailwind CSS', icon: SiTailwindcss, cor: '#06B6D4' },
      ],
      imagem: veraxImg,
      github: 'https://github.com/regisamxjr/verax',
      demo: '#'
    },
    {
      titulo: t('projetosData.soccer.titulo'),
      descricao: t('projetosData.soccer.descricao'),
      descricaoCompleta: t('projetosData.soccer.descricaoCompleta'),
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: soccerhangmanImg,
      github: 'https://github.com/seu-usuario/soccer-hangman',
      demo: '#'
    },
    {
      titulo: t('projetosData.enzo.titulo'),
      descricao: t('projetosData.enzo.descricao'),
      descricaoCompleta: t('projetosData.enzo.descricaoCompleta'),
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: enzobarberImg,
      github: 'https://github.com/seu-usuario/enzo-barbershop',
      demo: '#'
    },
    {
      titulo: t('projetosData.cado.titulo'),
      descricao: t('projetosData.cado.descricao'),
      descricaoCompleta: t('projetosData.cado.descricaoCompleta'),
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: cadosurfcampImg,
      github: 'https://github.com/seu-usuario/cado-surfcamp',
      demo: '#'
    },
    {
      titulo: t('projetosData.transportes.titulo'),
      descricao: t('projetosData.transportes.descricao'),
      descricaoCompleta: t('projetosData.transportes.descricaoCompleta'),
      tecnologias: [
        { nome: 'Java', icon: FaJava, cor: '#007396' }
      ],
      imagem: javafxImg,
      github: 'https://github.com/seu-usuario/transportes-javafx',
      demo: '#'
    },
    
    {
      titulo: t('projetosData.calculadora.titulo'),
      descricao: t('projetosData.calculadora.descricao'),
      descricaoCompleta: t('projetosData.calculadora.descricaoCompleta'),
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: calculadoraImg,
      github: 'https://github.com/seu-usuario/calculadora',
      demo: '#'
    },
    {
      titulo: t('projetosData.cardapio.titulo'),
      descricao: t('projetosData.cardapio.descricao'),
      descricaoCompleta: t('projetosData.cardapio.descricaoCompleta'),
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: cardapioImg,
      github: 'https://github.com/regisamxjr/moonight-cardapio',
      demo: '#'
    }
  ], [t]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h1 className="mt-8 text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-center">
          {t('projetos')}
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
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.imagem}
                alt={selectedProject.titulo}
                className="w-full h-64 object-cover"
              />
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
                  {t('verNoGitHub')}
                </a>
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <FaExternalLinkAlt />
                  {t('verDemo')}
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
