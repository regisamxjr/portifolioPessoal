import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiTailwindcss, SiGit, SiVisualstudiocode, SiIntellijidea, SiFigma, SiMysql } from 'react-icons/si';

export default function Home() {
  const tecnologias = [
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500' },
    { icon: FaJs, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: FaJava, name: 'Java', color: 'text-red-600' },
    { icon: FaReact, name: 'React', color: 'text-blue-400' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-400' },
    { icon: SiMysql, name: 'SQL', color: 'text-blue-600' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    { icon: SiGit, name: 'Git', color: 'text-orange-600' },
    { icon: SiVisualstudiocode, name: 'VS Code', color: 'text-blue-500' },
    { icon: SiIntellijidea, name: 'IntelliJ', color: 'text-red-500' },
    { icon: SiFigma, name: 'Figma', color: 'text-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#219ebc]/10 via-black to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#219ebc/5%,transparent_50%,#219ebc/5%)] bg-[length:100%_100%] opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#219ebc/20%,transparent_70%)]"></div>
      
      {/* Conteúdo */}
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-white">
              <span className="text-[#219ebc]">Régis Xavier</span>
            </h1>
            <h2 className="text-3xl text-gray-400">Engenheiro de Software</h2>
            <p className="text-gray-300 text-lg">
              Desenvolvedor apaixonado por criar soluções inovadoras e eficientes.
              Especialista em desenvolvimento full-stack com foco em performance e escalabilidade.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com/seuusuario" 
                className="text-gray-400 hover:text-[#219ebc] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/seuusuario" 
                className="text-gray-400 hover:text-[#219ebc] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://wa.me/seunumero" 
                className="text-gray-400 hover:text-[#219ebc] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[400px] bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-[#219ebc]/20 to-transparent animate-pulse"></div>
              <img 
                src="/sua-foto.jpg" 
                alt="Régis Xavier" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#219ebc]/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-white mb-8">Tecnologias que utilizo</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tecnologias.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#219ebc] transition-all duration-300 group backdrop-blur-sm hover:shadow-lg hover:shadow-[#219ebc]/10 hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-[#219ebc]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    <Icon className={`${tech.color} text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10`} />
                  </div>
                  <span className="text-gray-300 text-sm text-center font-medium group-hover:text-[#219ebc] transition-colors duration-300">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 