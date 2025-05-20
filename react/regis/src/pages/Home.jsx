import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowRight, FaReact, FaNodeJs, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

const Home = () => {
  const tecnologias = [
    { nome: 'React', icon: FaReact, cor: 'text-blue-400' },
    { nome: 'Node.js', icon: FaNodeJs, cor: 'text-green-400' },
    { nome: 'TypeScript', icon: SiTypescript, cor: 'text-blue-500' },
    { nome: 'JavaScript', icon: SiJavascript, cor: 'text-yellow-400' },
    { nome: 'MongoDB', icon: SiMongodb, cor: 'text-green-500' },
    { nome: 'PostgreSQL', icon: SiPostgresql, cor: 'text-blue-300' },
    { nome: 'Docker', icon: FaDocker, cor: 'text-blue-600' },
    { nome: 'AWS', icon: FaAws, cor: 'text-orange-500' },
    { nome: 'Tailwind CSS', icon: SiTailwindcss, cor: 'text-cyan-400' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  Régis Xavier
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl animate-fade-in-up delay-200">
                Software Engineer
              </p>
              <div className="flex gap-4 mb-8 animate-fade-in-up delay-200">
                <a
                  href="https://github.com/regisamxjr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/regisamxjr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-8">
                {tecnologias.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.nome}
                      className="group p-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex flex-col items-center">
                        <Icon className={`text-xl mb-1 ${tech.cor}`} />
                        <span className="text-xs text-gray-300 group-hover:text-blue-400 transition-colors">
                          {tech.nome}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-100">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-xl relative group hover:scale-105 transition-transform duration-500">
                <img
                  src="src/assets/img/fotoperfil.jpg"
                  alt="Régis Xavier"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
            Estatísticas GitHub
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="lg:col-span-2 bg-gray-900/50 rounded-lg p-3 backdrop-blur-sm border border-gray-800 animate-fade-in-up">
              <img
                src="https://github-readme-stats.vercel.app/api?username=regisamxjr&show_icons=true&theme=dark&hide_border=true&include_all_commits=true&count_private=true&hide_rank=true&custom_title=Estatísticas"
                alt="GitHub Stats"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-gray-900/50 rounded-lg p-3 backdrop-blur-sm border border-gray-800 animate-fade-in-up">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=regisamxjr&layout=compact&theme=dark&hide_border=true&langs_count=5&hide=html,css"
                alt="Most Used Languages"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="lg:col-span-3 bg-gray-900/50 rounded-lg p-3 backdrop-blur-sm border border-gray-800 animate-fade-in-up">
              <img
                src="https://ghchart.rshah.org/regisamxjr"
                alt="GitHub Contributions"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;