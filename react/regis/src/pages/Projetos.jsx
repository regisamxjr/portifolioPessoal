import React, { useState, useMemo, useEffect } from 'react';
import {
  FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaJava, FaHtml5,
  FaCss3Alt, FaJs, FaTimes, FaChevronLeft, FaChevronRight, FaEye
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiPostgresql, SiExpress
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

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
import programaManejoDeEstresseImg from '../assets/img/manejodeestresse.png';
import logoLumiarImg from '../assets/img/logomanejo.png';
import timemanejoImg from '../assets/img/time-manejodeestresse.png';
import seDoceFosseImg from '../assets/img/sedocefosse.png';
import logoSeDoceFosseImg from '../assets/img/logosedocefosse.png';
import timeSeDoceFosseImg from '../assets/img/timesedocefosse.png';
import calculadoraJurosImg from '../assets/img/juroscompostos.png';
import graficoEvolucaoImg from '../assets/img/graficoevolucao.png';
import tabelaEvolucaoImg from '../assets/img/tabelaevolucao.png';
import alhopanImg from '../assets/img/alhopan.png';
import alhopan2Img from '../assets/img/alhopan2.png';

const hasLink = (url) => Boolean(url && url !== '#');

const Projetos = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [imageIndices, setImageIndices] = useState({});
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);
  const { t, language } = useLanguage();

  const projetos = useMemo(() => [
    {
      id: 'portfolio',
      titulo: t('projetosData.portfolio.titulo'),
      descricao: t('projetosData.portfolio.descricao'),
      descricaoCompleta: t('projetosData.portfolio.descricaoCompleta'),
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Tailwind', icon: SiTailwindcss, cor: '#06B6D4' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: portifolioImg,
      imagens: [portifolioImg],
      github: 'https://github.com/regisamxjr/portfoliopessoal',
      demo: 'https://rxavier.netlify.app'
    },
    {
      id: 'manejoEstresse',
      titulo: t('projetosData.manejoEstresse.titulo'),
      descricao: t('projetosData.manejoEstresse.descricao'),
      descricaoCompleta: t('projetosData.manejoEstresse.descricaoCompleta'),
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Tailwind', icon: SiTailwindcss, cor: '#06B6D4' },
        { nome: 'Java Spring Boot', icon: FaJava, cor: '#007396' },
        { nome: 'PostgreSQL', icon: SiPostgresql, cor: '#336791' }
      ],
      imagem: programaManejoDeEstresseImg,
      imagens: [programaManejoDeEstresseImg, logoLumiarImg, timemanejoImg],
      github: '',
      demo: '#'
    },
    {
      id: 'seDoceFosse',
      titulo: t('projetosData.seDoceFosse.titulo'),
      descricao: t('projetosData.seDoceFosse.descricao'),
      descricaoCompleta: t('projetosData.seDoceFosse.descricaoCompleta'),
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Tailwind', icon: SiTailwindcss, cor: '#06B6D4' },
        { nome: 'Java Spring Boot', icon: FaJava, cor: '#007396' },
        { nome: 'PostgreSQL', icon: SiPostgresql, cor: '#336791' },
        { nome: 'MongoDB', icon: SiMongodb, cor: '#4DB33D' }
      ],
      imagem: seDoceFosseImg,
      imagens: [seDoceFosseImg, logoSeDoceFosseImg, timeSeDoceFosseImg],
      github: '',
      demo: '#'
    },
    {
      id: 'alhoPan',
      titulo: t('projetosData.alhoPan.titulo'),
      descricao: t('projetosData.alhoPan.descricao'),
      descricaoCompleta: t('projetosData.alhoPan.descricaoCompleta'),
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Tailwind', icon: SiTailwindcss, cor: '#06B6D4' }
      ],
      imagem: alhopanImg,
      imagens: [alhopanImg, alhopan2Img],
      github: '',
      demo: 'https://alhopanbr.com.br'
    },
    {
      id: 'calculadoraJuros',
      titulo: t('projetosData.calculadoraJuros.titulo'),
      descricao: t('projetosData.calculadoraJuros.descricao'),
      descricaoCompleta: t('projetosData.calculadoraJuros.descricaoCompleta'),
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Tailwind', icon: SiTailwindcss, cor: '#06B6D4' },
        { nome: 'TypeScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: calculadoraJurosImg,
      imagens: [calculadoraJurosImg, graficoEvolucaoImg, tabelaEvolucaoImg],
      github: 'https://github.com/regisamxjr/juros-compostos',
      demo: 'https://planinvest.netlify.app'
    },
    {
      id: 'weather',
      titulo: t('projetosData.weather.titulo'),
      descricao: t('projetosData.weather.descricao'),
      descricaoCompleta: t('projetosData.weather.descricaoCompleta'),
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: apideclimaImg,
      imagens: [apideclimaImg],
      github: 'https://github.com/regisamxjr/weather-global-controller',
      demo: '#'
    },
    {
      id: 'lifve',
      titulo: t('projetosData.lifve.titulo'),
      descricao: t('projetosData.lifve.descricao'),
      descricaoCompleta: t('projetosData.lifve.descricaoCompleta'),
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Tailwind CSS', icon: SiTailwindcss, cor: '#06B6D4' },
        { nome: 'PostgreSQL', icon: SiPostgresql, cor: '#336791' },
        { nome: 'Node.js', icon: FaNodeJs, cor: '#339933' },
        { nome: 'Express', icon: SiExpress, cor: '#FFFFFF' }
      ],
      imagem: lifveImg,
      imagens: [lifveImg],
      github: 'https://github.com/regisamxjr/lifve',
      demo: '#'
    },
    {
      id: 'verax',
      titulo: t('projetosData.verax.titulo'),
      descricao: t('projetosData.verax.descricao'),
      descricaoCompleta: t('projetosData.verax.descricaoCompleta'),
      tecnologias: [
        { nome: 'React', icon: FaReact, cor: '#61DAFB' },
        { nome: 'Tailwind CSS', icon: SiTailwindcss, cor: '#06B6D4' }
      ],
      imagem: veraxImg,
      imagens: [veraxImg],
      github: 'https://github.com/regisamxjr/verax',
      demo: '#'
    },
    {
      id: 'soccer',
      titulo: t('projetosData.soccer.titulo'),
      descricao: t('projetosData.soccer.descricao'),
      descricaoCompleta: t('projetosData.soccer.descricaoCompleta'),
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: soccerhangmanImg,
      imagens: [soccerhangmanImg],
      github: 'https://github.com/seu-usuario/soccer-hangman',
      demo: '#'
    },
    {
      id: 'enzo',
      titulo: t('projetosData.enzo.titulo'),
      descricao: t('projetosData.enzo.descricao'),
      descricaoCompleta: t('projetosData.enzo.descricaoCompleta'),
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: enzobarberImg,
      imagens: [enzobarberImg],
      github: 'https://github.com/seu-usuario/enzo-barbershop',
      demo: '#'
    },
    {
      id: 'cado',
      titulo: t('projetosData.cado.titulo'),
      descricao: t('projetosData.cado.descricao'),
      descricaoCompleta: t('projetosData.cado.descricaoCompleta'),
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: cadosurfcampImg,
      imagens: [cadosurfcampImg],
      github: 'https://github.com/seu-usuario/cado-surfcamp',
      demo: '#'
    },
    {
      id: 'transportes',
      titulo: t('projetosData.transportes.titulo'),
      descricao: t('projetosData.transportes.descricao'),
      descricaoCompleta: t('projetosData.transportes.descricaoCompleta'),
      tecnologias: [
        { nome: 'Java', icon: FaJava, cor: '#007396' }
      ],
      imagem: javafxImg,
      imagens: [javafxImg],
      github: 'https://github.com/seu-usuario/transportes-javafx',
      demo: '#'
    },
    {
      id: 'calculadora',
      titulo: t('projetosData.calculadora.titulo'),
      descricao: t('projetosData.calculadora.descricao'),
      descricaoCompleta: t('projetosData.calculadora.descricaoCompleta'),
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: calculadoraImg,
      imagens: [calculadoraImg],
      github: 'https://github.com/seu-usuario/calculadora',
      demo: '#'
    },
    {
      id: 'cardapio',
      titulo: t('projetosData.cardapio.titulo'),
      descricao: t('projetosData.cardapio.descricao'),
      descricaoCompleta: t('projetosData.cardapio.descricaoCompleta'),
      tecnologias: [
        { nome: 'HTML5', icon: FaHtml5, cor: '#E34F26' },
        { nome: 'CSS3', icon: FaCss3Alt, cor: '#1572B6' },
        { nome: 'JavaScript', icon: FaJs, cor: '#F7DF1E' }
      ],
      imagem: cardapioImg,
      imagens: [cardapioImg],
      github: 'https://github.com/regisamxjr/moonight-cardapio',
      demo: '#'
    }
  ], [t, language]);

  useEffect(() => {
    const initialIndices = {};
    projetos.forEach((projeto, index) => {
      if (projeto.imagens && projeto.imagens.length > 1) {
        initialIndices[index] = 0;
      }
    });
    setImageIndices(initialIndices);
  }, [projetos]);

  useEffect(() => {
    if (hoveredProjectIndex === null) return;

    const projeto = projetos[hoveredProjectIndex];
    if (!projeto?.imagens || projeto.imagens.length <= 1) return;

    const interval = setInterval(() => {
      setImageIndices((prev) => {
        const currentIndex = prev[hoveredProjectIndex] || 0;
        return {
          ...prev,
          [hoveredProjectIndex]: (currentIndex + 1) % projeto.imagens.length
        };
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [hoveredProjectIndex, projetos]);

  const selectedProject = useMemo(
    () => projetos.find((projeto) => projeto.id === selectedProjectId) || null,
    [projetos, selectedProjectId]
  );

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProjectId(null);
      if (!selectedProject.imagens || selectedProject.imagens.length <= 1) return;
      if (event.key === 'ArrowRight') {
        setModalImageIndex((prev) => (prev + 1) % selectedProject.imagens.length);
      }
      if (event.key === 'ArrowLeft') {
        setModalImageIndex((prev) =>
          (prev - 1 + selectedProject.imagens.length) % selectedProject.imagens.length
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  const openProject = (projeto) => {
    setSelectedProjectId(projeto.id);
    setModalImageIndex(0);
  };

  const getProjectImage = (projeto, index) => {
    if (projeto.imagens?.length > 1) {
      return projeto.imagens[imageIndices[index] || 0];
    }
    return projeto.imagem;
  };

  const galleryImages = selectedProject?.imagens?.length
    ? selectedProject.imagens
    : selectedProject
      ? [selectedProject.imagem]
      : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="relative text-center mb-12 sm:mb-14">
          <div
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[28rem] h-40 blur-3xl opacity-40 -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(37,99,235,0.4), transparent 70%)'
            }}
          />
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
            {t('projetos')}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projetos.map((projeto, index) => {
            const galleryCount = projeto.imagens?.length || 1;

            return (
              <article
                key={projeto.id}
                onClick={() => openProject(projeto)}
                onMouseEnter={() => {
                  if (galleryCount > 1) setHoveredProjectIndex(index);
                }}
                onMouseLeave={() => setHoveredProjectIndex(null)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-md cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/45 hover:shadow-[0_16px_40px_rgba(15,23,42,0.65),0_0_0_1px_rgba(59,130,246,0.15)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
                  <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                    <img
                      src={getProjectImage(projeto, index)}
                      alt={projeto.titulo}
                      className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {projeto.tecnologias.slice(0, 3).map((tech) => (
                        <span
                          key={tech.nome}
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/55 border border-white/15 backdrop-blur-sm"
                          title={tech.nome}
                        >
                          <tech.icon style={{ color: tech.cor }} size={14} />
                        </span>
                      ))}
                      {projeto.tecnologias.length > 3 && (
                        <span className="inline-flex items-center justify-center min-w-8 h-8 px-2 rounded-full bg-black/55 border border-white/15 text-xs text-slate-200 backdrop-blur-sm">
                          +{projeto.tecnologias.length - 3}
                        </span>
                      )}
                    </div>

                    {galleryCount > 1 && (
                      <div className="flex gap-1.5">
                        {projeto.imagens.map((_, dotIndex) => (
                          <span
                            key={dotIndex}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              (imageIndices[index] || 0) === dotIndex
                                ? 'w-4 bg-blue-400'
                                : 'w-1.5 bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {projeto.titulo}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {projeto.descricao}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProject(projeto);
                    }}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto self-start px-4 py-2.5 mb-5 rounded-full bg-blue-600 text-white text-sm font-semibold border border-blue-400/40 shadow-[0_0_18px_rgba(37,99,235,0.35)] hover:bg-blue-500 transition-colors"
                  >
                    <FaEye />
                    {t('verDetalhes')}
                  </button>

                  <div className="mt-auto flex items-center gap-2 pt-4 border-t border-white/10">
                    {hasLink(projeto.github) && (
                      <a
                        href={projeto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t('verNoGitHub')}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-slate-300 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/15 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                    {hasLink(projeto.demo) && (
                      <a
                        href={projeto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t('verDemo')}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-slate-300 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/15 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/45 backdrop-blur-[2px] z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedProjectId(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl border border-blue-400/25 bg-slate-950/95 shadow-[0_24px_80px_rgba(0,0,0,0.75)] animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProjectId(null)}
              aria-label={t('fechar')}
              className="absolute top-4 right-4 z-30 inline-flex items-center justify-center w-14 h-14 rounded-full bg-black/65 border border-white/20 text-white hover:bg-blue-600 hover:border-blue-300 transition-colors"
            >
              <FaTimes size={22} />
            </button>

            <div className="p-6 sm:p-8 lg:p-10 border-b border-white/10 text-center">
              <div className="mx-auto max-w-3xl px-4 sm:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                  {selectedProject.titulo}
                </h2>

                <div className="flex flex-wrap justify-center gap-2.5 mb-6">
                  {selectedProject.tecnologias.map((tech) => (
                    <span
                      key={tech.nome}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-slate-200"
                    >
                      <tech.icon style={{ color: tech.cor }} size={16} />
                      {tech.nome}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6 mx-auto">
                  {selectedProject.descricaoCompleta}
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {hasLink(selectedProject.github) && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-800 text-white border border-white/10 hover:bg-slate-700 hover:border-blue-400/30 transition-colors"
                    >
                      <FaGithub />
                      {t('verNoGitHub')}
                    </a>
                  )}
                  {hasLink(selectedProject.demo) && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white border border-blue-400/40 shadow-[0_0_22px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      {t('verDemo')}
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80">
                <div className="relative flex items-center justify-center min-h-[240px] sm:min-h-[360px] lg:min-h-[440px] px-4 py-6 sm:px-8 sm:py-8">
                  {galleryImages.map((image, index) => (
                    <img
                      key={`${selectedProject.id}-${index}`}
                      src={image}
                      alt={`${selectedProject.titulo} ${index + 1}`}
                      className={`max-h-[55vh] w-auto max-w-full object-contain transition-all duration-500 ${
                        index === modalImageIndex
                          ? 'opacity-100 relative'
                          : 'opacity-0 absolute pointer-events-none'
                      }`}
                    />
                  ))}

                  {galleryImages.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setModalImageIndex(
                            (prev) =>
                              (prev - 1 + galleryImages.length) % galleryImages.length
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/55 border border-white/20 text-white hover:bg-blue-600 transition-colors flex items-center justify-center"
                        aria-label={t('imagemAnterior')}
                      >
                        <FaChevronLeft size={22} />
                      </button>
                      <button
                        onClick={() =>
                          setModalImageIndex((prev) => (prev + 1) % galleryImages.length)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/55 border border-white/20 text-white hover:bg-blue-600 transition-colors flex items-center justify-center"
                        aria-label={t('proximaImagem')}
                      >
                        <FaChevronRight size={22} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {galleryImages.length > 1 && (
                <div className="mt-4 flex justify-center gap-2.5 overflow-x-auto scrollbar-hide pb-1">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setModalImageIndex(index)}
                      aria-label={`${t('imagemNumero')} ${index + 1}`}
                      className={`relative flex-shrink-0 w-24 h-16 sm:w-28 sm:h-20 overflow-hidden rounded-xl border bg-slate-900 transition-all ${
                        modalImageIndex === index
                          ? 'border-blue-400 shadow-[0_0_0_1px_rgba(96,165,250,0.45)]'
                          : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-contain p-1"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projetos;
