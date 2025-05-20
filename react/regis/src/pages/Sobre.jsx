import React from 'react'
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'

const Sobre = () => {
  const skills = [
    {
      icon: <FaCode className="w-8 h-8 text-blue-400" />,
      title: 'Frontend',
      description: 'Desenvolvimento de interfaces modernas e responsivas usando React, JavaScript, HTML5, CSS3 e Tailwind CSS.',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      icon: <FaServer className="w-8 h-8 text-blue-400" />,
      title: 'Backend',
      description: 'Construção de APIs robustas e escaláveis com Node.js, Express, Python e Java.',
      technologies: ['Node.js', 'Express', 'Python', 'Java']
    },
    {
      icon: <FaDatabase className="w-8 h-8 text-blue-400" />,
      title: 'Banco de Dados',
      description: 'Experiência com diferentes tipos de bancos de dados, tanto SQL quanto NoSQL.',
      technologies: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    {
      icon: <FaTools className="w-8 h-8 text-blue-400" />,
      title: 'Ferramentas',
      description: 'Utilização de ferramentas modernas para desenvolvimento e colaboração.',
      technologies: ['Git', 'Docker', 'VS Code', 'Figma']
    }
  ]

  const experiences = [
    {
      title: 'Engenheiro de Software Senior',
      company: 'Empresa Tech',
      period: '2022 - Presente',
      description: 'Liderando o desenvolvimento de aplicações web escaláveis usando React e Node.js.'
    },
    {
      title: 'Desenvolvedor Full Stack',
      company: 'Startup Inovadora',
      period: '2020 - 2022',
      description: 'Desenvolvimento de aplicações web e APIs RESTful usando Python e React.'
    }
  ]

  const education = [
    {
      degree: 'Mestrado em Ciência da Computação',
      institution: 'Universidade XYZ',
      period: '2018 - 2020'
    },
    {
      degree: 'Bacharel em Engenharia de Software',
      institution: 'Universidade ABC',
      period: '2014 - 2018'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h1 className=" mt-8 text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-center">
          Sobre Mim
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Seção Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src="src/assets/img/fotoperfil.jpg"
                  alt="Régis Xavier"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-200">Minha Jornada</h2>
              <p className="text-gray-300 leading-relaxed">
                Minha jornada na área de tecnologia começou com uma paixão por criar soluções inovadoras.
                Ao longo dos anos, desenvolvi expertise em desenvolvimento full stack, trabalhando com
                diversas tecnologias e frameworks modernos. Acredito que a tecnologia deve ser acessível
                e intuitiva, e busco sempre criar experiências que façam a diferença na vida das pessoas.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Atualmente, estou focado em desenvolver aplicações web escaláveis e de alta performance,
                utilizando as melhores práticas e tecnologias mais recentes do mercado. Meu objetivo é
                continuar crescendo profissionalmente e contribuir para projetos que tenham impacto real.
              </p>
            </div>
          </div>

          {/* Seção de Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold ml-3 text-gray-200">{skill.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Seção de Mindset */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-200 mb-8 text-center">Mindset</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/SEU_VIDEO_ID"
                title="Mindset"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre 