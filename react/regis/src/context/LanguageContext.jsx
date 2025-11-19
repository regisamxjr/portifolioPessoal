import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Carrega o idioma salvo no localStorage ou usa 'pt' como padrão
    return localStorage.getItem('language') || 'pt';
  });

  useEffect(() => {
    // Salva o idioma no localStorage quando mudar
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const translations = {
    pt: {
      home: 'Home',
      sobre: 'Sobre',
      projetos: 'Projetos',
      certificados: 'Certificados',
      contato: 'Contato',
      subtitle: 'SOFTWARE ENGINEER',
      tagline: 'Em busca do sucesso através do esforço e dedicação',
      curriculo: 'Currículo',
      minhaJornada: 'Minha Jornada',
      sobreText: 'Sou um estudante de Engenharia de Software na PUCRS, apaixonado por tecnologia e desenvolvimento de software. Possuo conhecimento avançado em Inglês e atualmente aprendendo alemão. Tenho perfil proativo, comunicativo e determinado, buscando sempre aprendizado contínuo e inovação. Atualmente, me dedico para aumentar cada dia mais a minha experiência profissional e me tornar um desenvolvedor mais capacitado.',
      competencias: 'Competências',
      softSkills: {
        proativo: 'Proativo',
        colaborativo: 'Colaborativo',
        comunicativo: 'Comunicativo',
        aprendizado: 'Aprendizado Contínuo',
        dedicacao: 'Dedicação',
        entrega: 'Rápida Entrega'
      },
      mindset: 'Mindset',
      experienciaProfissional: 'Experiência Profissional',
      experienciaData: {
        experiencia1: {
          titulo: 'Desenvolvedor Junior Full Stack',
          empresa: 'Supernova',
          periodo: 'Julho 2025 - Presente',
          descricao: 'Desenvolvimento de sistemas integradas com chatbot e IA',
          tecnologias: 'React, Node.js, PostgreSQL, Git'
        },
        
      },
      verNoGitHub: 'Ver no GitHub',
      verDemo: 'Ver Demo',
      projetosData: {
        portfolio: {
          titulo: 'Portfólio Pessoal',
          descricao: 'Portfólio moderno desenvolvido com React e Tailwind CSS.',
          descricaoCompleta: 'Portfólio profissional com design responsivo, utilizando React, JavaScript e Tailwind CSS, com animações suaves e interações dinâmicas.'
        },
        weather: {
          titulo: 'Weather Global Controller',
          descricao: 'Controle de temperatura mundial com API OpenWeather.',
          descricaoCompleta: 'Plataforma que exibe o clima ao vivo de cidades ao redor do mundo, usando HTML, CSS, JavaScript e API OpenWeather.'
        },
        lifve: {
          titulo: 'LIFVE',
          descricao: 'Gerenciamento de custos e tarefas de forma simplificada',
          descricaoCompleta: 'Aplicativo fullstack mobile e desktop para gerenciamento de custos e tarefas de forma simplificada, feito com React Native, Electron, Node.js, Express e Postgres.'
        },
        verax: {
          titulo: 'Verax Collection',
          descricao: 'Ecommerce de roupas e acessórios simplificado',
          descricaoCompleta: 'Ecommerce de roupas e acessórios simplificado, feito com React, Tailwind CSS'
        },
        soccer: {
          titulo: 'Soccer Hangman',
          descricao: 'Jogo de adivinhação de times de futebol.',
          descricaoCompleta: 'Jogo estilo forca com nomes de clubes de futebol mundial. Feito com HTML, CSS e JavaScript, inspirado no jogo Termo.'
        },
        enzo: {
          titulo: 'Enzo Barbershop',
          descricao: 'Site institucional de barbearia.',
          descricaoCompleta: 'Landing page elegante e moderna de uma barbearia fictícia. Desenvolvido com HTML, CSS e JavaScript.'
        },
        cado: {
          titulo: 'Cado SurfCamp',
          descricao: 'Site para hospedagem em Garopaba.',
          descricaoCompleta: 'Landing page de uma cabana de surf na praia de Garopaba, com fotos, descrição dos serviços e formulário.'
        },
        transportes: {
          titulo: 'Controle de Transportes',
          descricao: 'Sistema desktop com JavaFX.',
          descricaoCompleta: 'Aplicativo JavaFX para gerenciamento de transportes cadastrados, com interface intuitiva e foco em controle logístico.'
        },
        calculadora: {
          titulo: 'Calculadora',
          descricao: 'Calculadora funcional com design moderno.',
          descricaoCompleta: 'Calculadora web com funcionalidades básicas, layout responsivo e estilização com CSS moderno.'
        },
        cardapio: {
          titulo: 'Moonight Cardápio',
          descricao: 'Cardápio digital de restaurante fictício.',
          descricaoCompleta: 'Projeto fictício de cardápio online com design escuro, navegação fluida e foco na experiência do usuário.'
        },
        manejoEstresse: {
          titulo: 'Projeto Programa Manejo de Estresse',
          descricao: 'Programa de atividades para aliviar o estresse, regulamentado pela OMS',
          descricaoCompleta: 'Programa Manejo de Estresse, projeto real criado por um grupo de alunos da universidade da PUCRS, por meio da Agência Experimental de Engenharia de Software, com objetivo de ajudar pessoas a aliviar o estresse de forma saudável e interativa.'
        },
        seDoceFosse: {
          titulo: 'Projeto Se Doce Fosse',
          descricao: 'Projeto acadêmico de e-commerce de doces',
          descricaoCompleta: 'Projeto acadêmico de e-commerce de doces, realizado em grupo no curso de Engenharia de Software na PUCRS, por meio da Agência Experimental de Engenharia de Software, com objetivo de tornar a venda de doces mais fácil e eficiente.'
        }
      },
      // Certificados
      certificadosData: {
        poo: 'Programação Orientada a Objetos',
        react: 'React + Vite',
        webstart: 'Web Start',
        versionamento: 'Versionamento de codigo',
        golang: 'Golang',
        bancodedados: 'Banco de dados'
      },
      // Contato
      email: 'regisamxjr@gmail.com',
      phone: '+55 (51) 99746-9270',
      location: 'Porto Alegre, RS - Brasil',
      downloadCurriculoPT: 'Baixar Currículo (PT)',
      downloadCurriculoEN: 'Baixar Currículo (EN)'
    },
    en: {
      // Header
      home: 'Home',
      sobre: 'About',
      projetos: 'Projects',
      certificados: 'Certificates',
      contato: 'Contact',
      // Home
      subtitle: 'SOFTWARE ENGINEER',
      tagline: 'Pursuing success through effort and dedication',
      curriculo: 'Resume',
      // Sobre
      minhaJornada: 'My Journey',
      sobreText: 'I am a Software Engineering student at PUCRS, passionate about technology and software development. I have advanced knowledge in English and am currently learning German. I have a proactive, communicative, and determined profile, always seeking continuous learning and innovation. Currently, I dedicate myself to increasing my professional experience every day and becoming a more qualified developer.',
      competencias: 'Competencies',
      softSkills: {
        proativo: 'Proactive',
        colaborativo: 'Collaborative',
        comunicativo: 'Communicative',
        aprendizado: 'Continuous Learning',
        dedicacao: 'Dedication',
        entrega: 'Fast Delivery'
      },
      mindset: 'Mindset',
      experienciaProfissional: 'Professional Experience',
      experienciaData: {
        experiencia1: {
          titulo: 'Junior Full Stack Developer',
          empresa: 'Supernova',
          periodo: 'July 2025 - Present',
          descricao: 'Development of integrated systems with chatbot and AI',
          tecnologias: 'React, Node.js, PostgreSQL, Git'
        }
      },
      // Projetos
      verNoGitHub: 'View on GitHub',
      verDemo: 'View Demo',
      projetosData: {
        portfolio: {
          titulo: 'Personal Portfolio',
          descricao: 'Modern portfolio developed with React and Tailwind CSS.',
          descricaoCompleta: 'Professional portfolio with responsive design, using React, JavaScript and Tailwind CSS, with smooth animations and dynamic interactions.'
        },
        weather: {
          titulo: 'Weather Global Controller',
          descricao: 'Global temperature control with OpenWeather API.',
          descricaoCompleta: 'Platform that displays live weather from cities around the world, using HTML, CSS, JavaScript and OpenWeather API.'
        },
        lifve: {
          titulo: 'LIFVE',
          descricao: 'Simplified cost and task management',
          descricaoCompleta: 'Fullstack mobile and desktop application for simplified cost and task management, made with React Native, Electron, Node.js, Express and Postgres.'
        },
        verax: {
          titulo: 'Verax Collection',
          descricao: 'Simplified clothing and accessories e-commerce',
          descricaoCompleta: 'Simplified clothing and accessories e-commerce, made with React, Tailwind CSS'
        },
        soccer: {
          titulo: 'Soccer Hangman',
          descricao: 'Football team guessing game.',
          descricaoCompleta: 'Hangman-style game with world football club names. Made with HTML, CSS and JavaScript, inspired by the Wordle game.'
        },
        enzo: {
          titulo: 'Enzo Barbershop',
          descricao: 'Barbershop institutional website.',
          descricaoCompleta: 'Elegant and modern landing page for a fictional barbershop. Developed with HTML, CSS and JavaScript.'
        },
        cado: {
          titulo: 'Cado SurfCamp',
          descricao: 'Website for accommodation in Garopaba.',
          descricaoCompleta: 'Landing page for a surf cabin on Garopaba beach, with photos, service descriptions and form.'
        },
        transportes: {
          titulo: 'Transport Control',
          descricao: 'Desktop system with JavaFX.',
          descricaoCompleta: 'JavaFX application for managing registered transports, with intuitive interface and focus on logistics control.'
        },
        calculadora: {
          titulo: 'Calculator',
          descricao: 'Functional calculator with modern design.',
          descricaoCompleta: 'Web calculator with basic functionality, responsive layout and modern CSS styling.'
        },
        cardapio: {
          titulo: 'Moonight Menu',
          descricao: 'Digital menu for fictional restaurant.',
          descricaoCompleta: 'Fictional online menu project with dark design, fluid navigation and focus on user experience.'
        },
        manejoEstresse: {
          titulo: 'Stress Management Program Project',
          descricao: 'Activity program to relieve stress, regulated by the WHO',
          descricaoCompleta: 'Stress Management Program, a real project created by a group of students from PUCRS University, through the Experimental Software Engineering Agency, with the aim of helping people relieve stress in a healthy and interactive way.'
        },
        seDoceFosse: {
          titulo: 'Se Doce Fosse Project',
          descricao: 'Academic e-commerce project for sweets',
          descricaoCompleta: 'Academic e-commerce project for sweets, carried out in a group in the Software Engineering course at PUCRS, through the Experimental Software Engineering Agency, with the aim of making the sale of sweets easier and more efficient.'
        }
      },
      // Certificados
      certificadosData: {
        poo: 'Object-Oriented Programming',
        react: 'React + Vite',
        webstart: 'Web Start',
        versionamento: 'Code Versioning',
        golang: 'Golang',
        bancodedados: 'Database'
      },
      // Contato
      email: 'regisamxjr@gmail.com',
      phone: '+55 (51) 99746-9270',
      location: 'Porto Alegre, RS - Brazil',
      downloadCurriculoPT: 'Download Resume (PT)',
      downloadCurriculoEN: 'Download Resume (EN)'
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

