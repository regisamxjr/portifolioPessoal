import React from 'react'
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'

const Sobre = () => {
  const skills = [
    {
      icon: <FaCode className="w-8 h-8 text-secondary-400" />,
      title: 'Frontend',
      description: 'Desenvolvimento de interfaces modernas e responsivas usando React, JavaScript, HTML5, CSS3 e Tailwind CSS.',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      icon: <FaServer className="w-8 h-8 text-secondary-400" />,
      title: 'Backend',
      description: 'Construção de APIs robustas e escaláveis com Node.js, Express, Python e Java.',
      technologies: ['Node.js', 'Express', 'Python', 'Java']
    },
    {
      icon: <FaDatabase className="w-8 h-8 text-secondary-400" />,
      title: 'Banco de Dados',
      description: 'Experiência com diferentes tipos de bancos de dados, tanto SQL quanto NoSQL.',
      technologies: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    {
      icon: <FaTools className="w-8 h-8 text-secondary-400" />,
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
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
            Sobre Mim
          </h1>
          <p className="text-lg text-gray-300 mb-12">
            Sou um desenvolvedor full stack apaixonado por criar soluções digitais inovadoras.
            Com experiência em diversas tecnologias e frameworks, busco sempre entregar
            produtos de alta qualidade que atendam às necessidades dos usuários.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-secondary-500 transition-colors"
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
                      className="px-3 py-1 text-sm rounded-full bg-secondary-900/50 text-secondary-400 border border-secondary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre 