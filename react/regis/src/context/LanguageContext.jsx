import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  pt: {
    home: 'Início',
    sobre: 'Sobre',
    projetos: 'Projetos',
    intercambio: 'Intercâmbio',
    certificados: 'Certificados',
    contato: 'Contato',
    subtitle: 'ENGENHEIRO DE SOFTWARE FULL STACK',
    tagline: 'Em busca do sucesso através do esforço e da dedicação',
    verProjetos: 'Ver Projetos',
    falarComigo: 'Falar Comigo',
    tecnologiasTitulo: 'Tecnologias',
    tecnologiasDescricao: 'Ferramentas e linguagens que uso para construir produtos digitais.',
    momentosTitulo: 'Melhores Momentos',
    momentosDescricao: 'Marcos que moldaram minha trajetória acadêmica e profissional.',
    momentos: {
      pucrs: {
        ano: '2022',
        titulo: 'Engenharia de Software na PUCRS',
        descricao: 'Início da formação com foco em desenvolvimento, arquitetura e entrega de software.'
      },
      projetos: {
        ano: '2023-2025',
        titulo: 'Projetos reais e produtos web',
        descricao: 'Construção de aplicações full stack, e-commerces e soluções para clientes reais.'
      },
      supernova: {
        ano: '2025',
        titulo: 'Desenvolvedor Full Stack na Supernova',
        descricao: 'Experiência profissional com React, Node.js, PostgreSQL, chatbots e AWS.'
      },
      uppsala: {
        ano: '2026',
        titulo: 'Intercâmbio na Uppsala University',
        descricao: 'Ciência da Computação na Suécia, ampliando visão internacional e comunicação.'
      }
    },
    curriculo: 'Currículo',
    minhaJornada: 'Minha Jornada',
    jornadaImagemAlt: 'Café e código na minha jornada',
    sobreText:
      'Estudante de Engenharia de Software na PUCRS e atualmente de Ciência da Computação na Universidade de Uppsala, na Suécia. Realizo um grande sonho ao estudar e aprimorar meu aprendizado em um país tão desenvolvido, fortalecendo ainda mais minha capacidade de adaptação e comunicação, competências cada vez mais valorizadas.',
    competencias: 'Competências',
    competenciasDescricao: 'Habilidades comportamentais que guiam minha forma de aprender, colaborar e entregar.',
    softSkills: {
      proativo: 'Proativo',
      proativoDesc: 'Antecipo problemas e proponho soluções antes que se tornem bloqueios.',
      colaborativo: 'Colaborativo',
      colaborativoDesc: 'Trabalho bem em equipe, alinhando ideias e compartilhando conhecimento.',
      comunicativo: 'Comunicativo',
      comunicativoDesc: 'Explico ideias com clareza e mantenho o diálogo aberto com o time.',
      aprendizado: 'Aprendizado Contínuo',
      aprendizadoDesc: 'Busco evoluir constantemente com novas tecnologias e boas práticas.',
      dedicacao: 'Dedicação',
      dedicacaoDesc: 'Me envolvo de forma consistente para entregar com qualidade.',
      entrega: 'Rápida Entrega',
      entregaDesc: 'Priorizo eficiência sem abrir mão de organização e resultado.'
    },
    intercambioDescricao: 'Uma experiência acadêmica internacional em Uppsala, Suécia.',
    intercambioHighlights: {
      universidade: 'Uppsala University',
      local: 'Uppsala, Suécia',
      periodo: '2026',
      estudantes: '~50 mil estudantes'
    },
    intercambioText: {
      p1: 'O intercâmbio será realizado durante todo o ano de 2026 na cidade de Uppsala, na Suécia, conhecida por ser uma cidade universitária jovem e dinâmica, que abriga uma das instituições mais renomadas da Europa, a Uppsala University. A universidade possui uma excelente infraestrutura e reúne cerca de 50 mil estudantes, criando um ambiente acadêmico internacional e estimulante.',
      p2: 'A cidade apresenta clima frio durante grande parte do ano, o que faz parte da experiência cultural sueca. No entanto, durante o verão, Uppsala se torna ainda mais ativa e vibrante, com eventos ao ar livre, atividades esportivas, shows e diversas oportunidades de interação social entre estudantes de diferentes partes do mundo.'
    },
    intercambioFoto: 'Foto do intercâmbio',
    mindset: 'Mindset',
    experienciaProfissional: 'Experiência Profissional',
    educacao: 'Educação',
    educacaoData: {
      edu1: {
        instituicao: 'Uppsala University',
        curso: 'Ciência da Computação',
        periodo: '2025 - 2026',
        descricao: 'Intercâmbio acadêmico na Suécia, focado em Ciência da Computação.'
      },
      edu2: {
        instituicao: 'PUCRS',
        curso: 'Engenharia de Software',
        periodo: '2022 - Presente',
        descricao: 'Bacharelado em Engenharia de Software.'
      }
    },
    experienciaData: {
      experiencia1: {
        titulo: 'Desenvolvedor Júnior Full Stack',
        empresa: 'Supernova',
        periodo: 'Julho 2025 - Julho 2026',
        descricao: 'Desenvolvedor focado em aplicações web, integrações com chatbots e AWS.',
        tecnologias: 'React, Node.js, PostgreSQL, Git, AWS'
      }
    },
    verNoGitHub: 'Ver no GitHub',
    verDemo: 'Ver Demo',
    verDetalhes: 'Ver detalhes',
    tecnologiasUsadas: 'Tecnologias',
    galeriaProjeto: 'Galeria',
    filtrarTodos: 'Todos',
    projetosEncontrados: 'projetos',
    fechar: 'Fechar',
    imagemAnterior: 'Imagem anterior',
    proximaImagem: 'Próxima imagem',
    imagemNumero: 'Imagem',
    selecionarIdioma: 'Selecionar idioma',
    projetosData: {
      portfolio: {
        titulo: 'Portfólio Pessoal',
        descricao: 'Portfólio moderno desenvolvido com React e Tailwind CSS.',
        descricaoCompleta:
          'Portfólio profissional com design responsivo, utilizando React, JavaScript e Tailwind CSS, com animações suaves e interações dinâmicas.'
      },
      weather: {
        titulo: 'Weather Global Controller',
        descricao: 'Controle de temperatura mundial com API OpenWeather.',
        descricaoCompleta:
          'Plataforma que exibe o clima ao vivo de cidades ao redor do mundo, usando HTML, CSS, JavaScript e API OpenWeather.'
      },
      lifve: {
        titulo: 'LIFVE',
        descricao: 'Gerenciamento de custos e tarefas de forma simplificada.',
        descricaoCompleta:
          'Aplicativo fullstack mobile e desktop para gerenciamento de custos e tarefas de forma simplificada, feito com React Native, Electron, Node.js, Express e Postgres.'
      },
      verax: {
        titulo: 'Verax Collection',
        descricao: 'E-commerce de roupas e acessórios simplificado.',
        descricaoCompleta: 'E-commerce de roupas e acessórios simplificado, feito com React e Tailwind CSS.'
      },
      soccer: {
        titulo: 'Soccer Hangman',
        descricao: 'Jogo de adivinhação de times de futebol.',
        descricaoCompleta:
          'Jogo estilo forca com nomes de clubes de futebol mundial. Feito com HTML, CSS e JavaScript, inspirado no jogo Termo.'
      },
      enzo: {
        titulo: 'Enzo Barbershop',
        descricao: 'Site institucional de barbearia.',
        descricaoCompleta:
          'Landing page elegante e moderna de uma barbearia fictícia. Desenvolvido com HTML, CSS e JavaScript.'
      },
      cado: {
        titulo: 'Cado SurfCamp',
        descricao: 'Site para hospedagem em Garopaba.',
        descricaoCompleta:
          'Landing page de uma cabana de surf na praia de Garopaba, com fotos, descrição dos serviços e formulário.'
      },
      transportes: {
        titulo: 'Controle de Transportes',
        descricao: 'Sistema desktop com JavaFX.',
        descricaoCompleta:
          'Aplicativo JavaFX para gerenciamento de transportes cadastrados, com interface intuitiva e foco em controle logístico.'
      },
      calculadora: {
        titulo: 'Calculadora',
        descricao: 'Calculadora funcional com design moderno.',
        descricaoCompleta:
          'Calculadora web com funcionalidades básicas, layout responsivo e estilização com CSS moderno.'
      },
      calculadoraJuros: {
        titulo: 'Planinvest',
        descricao: 'Calculadora de juros compostos com gráfico e tabela para acompanhamento mensal do rendimento.',
        descricaoCompleta:
          'Aplicação web para calcular juros compostos com gráfico e tabela para o acompanhamento do rendimento mensalmente. Permite calcular o valor futuro de investimentos com diferentes taxas e períodos, visualizando a evolução do investimento ao longo do tempo. Desenvolvido com HTML, CSS e JavaScript.'
      },
      cardapio: {
        titulo: 'Moonight Cardápio',
        descricao: 'Cardápio digital de restaurante fictício.',
        descricaoCompleta:
          'Projeto fictício de cardápio online com design escuro, navegação fluida e foco na experiência do usuário.'
      },
      manejoEstresse: {
        titulo: 'Programa Manejo de Estresse',
        descricao: 'Programa de atividades para aliviar o estresse, regulamentado pela OMS.',
        descricaoCompleta:
          'Programa Manejo de Estresse, projeto real criado por um grupo de alunos da PUCRS, por meio da Agência Experimental de Engenharia de Software, com o objetivo de ajudar pessoas a aliviar o estresse de forma saudável e interativa.'
      },
      seDoceFosse: {
        titulo: 'Se Doce Fosse',
        descricao: 'Projeto acadêmico de e-commerce de doces.',
        descricaoCompleta:
          'Projeto acadêmico de e-commerce de doces, realizado em grupo no curso de Engenharia de Software na PUCRS, por meio da Agência Experimental de Engenharia de Software, com o objetivo de tornar a venda de doces mais fácil e eficiente.'
      },
      alhoPan: {
        titulo: 'AlhoPan',
        descricao: 'Landing page para exposição dos produtos e da marca Alhopan.',
        descricaoCompleta: 'Primeiro freelance realizado: landing page para exposição dos produtos e da marca Alhopan.'
      }
    },
    certificadosData: {
      poo: 'Programação Orientada a Objetos',
      react: 'React + Vite',
      webstart: 'Web Start',
      versionamento: 'Versionamento de Código',
      golang: 'Golang',
      bancodedados: 'Banco de Dados'
    },
    contatoDescricao: 'Entre em contato ou baixe meu currículo em inglês.',
    email: 'regisamxjr@gmail.com',
    phone: '+55 (51) 99746-9270',
    location: 'Porto Alegre, RS - Brasil',
    downloadCurriculo: 'Baixar Currículo',
    redesSociais: 'Redes sociais'
  },
  en: {
    home: 'Home',
    sobre: 'About',
    projetos: 'Projects',
    intercambio: 'Exchange Studies',
    certificados: 'Certificates',
    contato: 'Contact',
    subtitle: 'FULL STACK SOFTWARE ENGINEER',
    tagline: 'Pursuing success through effort and dedication',
    verProjetos: 'View Projects',
    falarComigo: 'Get in Touch',
    tecnologiasTitulo: 'Technologies',
    tecnologiasDescricao: 'Tools and languages I use to build digital products.',
    momentosTitulo: 'Best Moments',
    momentosDescricao: 'Milestones that shaped my academic and professional journey.',
    momentos: {
      pucrs: {
        ano: '2022',
        titulo: 'Software Engineering at PUCRS',
        descricao: 'Started my degree focused on development, architecture, and software delivery.'
      },
      projetos: {
        ano: '2023-2025',
        titulo: 'Real projects and web products',
        descricao: 'Built full-stack apps, e-commerces, and solutions for real clients.'
      },
      supernova: {
        ano: '2025',
        titulo: 'Full Stack Developer at Supernova',
        descricao: 'Professional experience with React, Node.js, PostgreSQL, chatbots, and AWS.'
      },
      uppsala: {
        ano: '2026',
        titulo: 'Exchange at Uppsala University',
        descricao: 'Computer Science in Sweden, expanding international vision and communication.'
      }
    },
    curriculo: 'Resume',
    minhaJornada: 'My Journey',
    jornadaImagemAlt: 'Coffee and code on my journey',
    sobreText:
      'Software Engineering student at PUCRS and currently studying Computer Science at Uppsala University in Sweden. I am fulfilling a big dream by studying and improving my learning in such a developed country, further enhancing my adaptability and communication skills, which are increasingly valued.',
    competencias: 'Competencies',
    competenciasDescricao: 'Behavioral strengths that shape how I learn, collaborate, and deliver.',
    softSkills: {
      proativo: 'Proactive',
      proativoDesc: 'I anticipate problems and propose solutions before they become blockers.',
      colaborativo: 'Collaborative',
      colaborativoDesc: 'I work well in teams, aligning ideas and sharing knowledge.',
      comunicativo: 'Communicative',
      comunicativoDesc: 'I explain ideas clearly and keep open dialogue with the team.',
      aprendizado: 'Continuous Learning',
      aprendizadoDesc: 'I constantly evolve with new technologies and best practices.',
      dedicacao: 'Dedication',
      dedicacaoDesc: 'I stay consistently engaged to deliver with quality.',
      entrega: 'Fast Delivery',
      entregaDesc: 'I prioritize efficiency without losing organization or results.'
    },
    intercambioDescricao: 'An international academic experience in Uppsala, Sweden.',
    intercambioHighlights: {
      universidade: 'Uppsala University',
      local: 'Uppsala, Sweden',
      periodo: '2026',
      estudantes: '~50k students'
    },
    intercambioText: {
      p1: 'The exchange program will take place throughout 2026 in the city of Uppsala, Sweden, known for being a young and dynamic university city that houses one of the most renowned institutions in Europe, Uppsala University. The university has excellent infrastructure and brings together around 50,000 students, creating an international and stimulating academic environment.',
      p2: 'The city has a cold climate for most of the year, which is part of the Swedish cultural experience. However, during the summer, Uppsala becomes even more active and vibrant, with outdoor events, sports activities, concerts and various opportunities for social interaction among students from different parts of the world.'
    },
    intercambioFoto: 'Exchange photo',
    mindset: 'Mindset',
    experienciaProfissional: 'Professional Experience',
    educacao: 'Education',
    educacaoData: {
      edu1: {
        instituicao: 'Uppsala University',
        curso: 'Computer Science',
        periodo: '2025 - 2026',
        descricao: 'Academic exchange in Sweden, focused on Computer Science.'
      },
      edu2: {
        instituicao: 'PUCRS',
        curso: 'Software Engineering',
        periodo: '2022 - Present',
        descricao: 'Bachelor in Software Engineering.'
      }
    },
    experienciaData: {
      experiencia1: {
        titulo: 'Junior Full Stack Developer',
        empresa: 'Supernova',
        periodo: 'July 2025 - July 2026',
        descricao: 'Developer focused on web applications, chatbot integrations, and AWS.',
        tecnologias: 'React, Node.js, PostgreSQL, Git, AWS'
      }
    },
    verNoGitHub: 'View on GitHub',
    verDemo: 'View Demo',
    verDetalhes: 'View details',
    tecnologiasUsadas: 'Technologies',
    galeriaProjeto: 'Gallery',
    filtrarTodos: 'All',
    projetosEncontrados: 'projects',
    fechar: 'Close',
    imagemAnterior: 'Previous image',
    proximaImagem: 'Next image',
    imagemNumero: 'Image',
    selecionarIdioma: 'Select language',
    projetosData: {
      portfolio: {
        titulo: 'Personal Portfolio',
        descricao: 'Modern portfolio developed with React and Tailwind CSS.',
        descricaoCompleta:
          'Professional portfolio with responsive design, using React, JavaScript and Tailwind CSS, with smooth animations and dynamic interactions.'
      },
      weather: {
        titulo: 'Weather Global Controller',
        descricao: 'Global temperature control with OpenWeather API.',
        descricaoCompleta:
          'Platform that displays live weather from cities around the world, using HTML, CSS, JavaScript and OpenWeather API.'
      },
      lifve: {
        titulo: 'LIFVE',
        descricao: 'Simplified cost and task management.',
        descricaoCompleta:
          'Fullstack mobile and desktop application for simplified cost and task management, made with React Native, Electron, Node.js, Express and Postgres.'
      },
      verax: {
        titulo: 'Verax Collection',
        descricao: 'Simplified clothing and accessories e-commerce.',
        descricaoCompleta: 'Simplified clothing and accessories e-commerce, made with React and Tailwind CSS.'
      },
      soccer: {
        titulo: 'Soccer Hangman',
        descricao: 'Football team guessing game.',
        descricaoCompleta:
          'Hangman-style game with world football club names. Made with HTML, CSS and JavaScript, inspired by the Wordle game.'
      },
      enzo: {
        titulo: 'Enzo Barbershop',
        descricao: 'Barbershop institutional website.',
        descricaoCompleta:
          'Elegant and modern landing page for a fictional barbershop. Developed with HTML, CSS and JavaScript.'
      },
      cado: {
        titulo: 'Cado SurfCamp',
        descricao: 'Website for accommodation in Garopaba.',
        descricaoCompleta:
          'Landing page for a surf cabin on Garopaba beach, with photos, service descriptions and form.'
      },
      transportes: {
        titulo: 'Transport Control',
        descricao: 'Desktop system with JavaFX.',
        descricaoCompleta:
          'JavaFX application for managing registered transports, with an intuitive interface and focus on logistics control.'
      },
      calculadora: {
        titulo: 'Calculator',
        descricao: 'Functional calculator with modern design.',
        descricaoCompleta:
          'Web calculator with basic functionality, responsive layout and modern CSS styling.'
      },
      calculadoraJuros: {
        titulo: 'Planinvest',
        descricao: 'Compound interest calculator with chart and table for monthly return tracking.',
        descricaoCompleta:
          'Web application to calculate compound interest with chart and table for monthly return tracking. Allows you to calculate the future value of investments with different rates and periods, visualizing the investment evolution over time. Developed with HTML, CSS and JavaScript.'
      },
      cardapio: {
        titulo: 'Moonight Menu',
        descricao: 'Digital menu for a fictional restaurant.',
        descricaoCompleta:
          'Fictional online menu project with dark design, fluid navigation and focus on user experience.'
      },
      manejoEstresse: {
        titulo: 'Stress Management Program',
        descricao: 'Activity program to relieve stress, regulated by the WHO.',
        descricaoCompleta:
          'Stress Management Program, a real project created by a group of students from PUCRS University, through the Experimental Software Engineering Agency, with the aim of helping people relieve stress in a healthy and interactive way.'
      },
      seDoceFosse: {
        titulo: 'Se Doce Fosse',
        descricao: 'Academic e-commerce project for sweets.',
        descricaoCompleta:
          'Academic e-commerce project for sweets, carried out in a group in the Software Engineering course at PUCRS, through the Experimental Software Engineering Agency, with the aim of making the sale of sweets easier and more efficient.'
      },
      alhoPan: {
        titulo: 'AlhoPan',
        descricao: 'Landing page for showcasing Alhopan products and brand.',
        descricaoCompleta: 'First freelance project: a landing page for showcasing Alhopan products and brand.'
      }
    },
    certificadosData: {
      poo: 'Object-Oriented Programming',
      react: 'React + Vite',
      webstart: 'Web Start',
      versionamento: 'Code Versioning',
      golang: 'Golang',
      bancodedados: 'Database'
    },
    contatoDescricao: 'Get in touch or download my English resume.',
    email: 'regisamxjr@gmail.com',
    phone: '+55 (51) 99746-9270',
    location: 'Porto Alegre, RS - Brazil',
    downloadCurriculo: 'Download Resume',
    redesSociais: 'Social media'
  }
};

const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved === 'en' || saved === 'pt' ? saved : 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  }, []);

  const changeLanguage = useCallback((lang) => {
    if (lang === 'pt' || lang === 'en') {
      setLanguage(lang);
    }
  }, []);

  const t = useCallback(
    (key) => {
      const value = getNestedValue(translations[language], key);
      if (value === undefined || value === null) {
        const fallback = getNestedValue(translations.pt, key);
        return fallback === undefined || fallback === null ? key : fallback;
      }
      return value;
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, toggleLanguage, changeLanguage, t }),
    [language, toggleLanguage, changeLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
