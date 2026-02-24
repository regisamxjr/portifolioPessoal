import { useEffect } from 'react';
import { FaJava, FaReact, FaCss3Alt, FaHtml5, FaDatabase, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiC } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white flex flex-col items-center justify-center px-4 pt-32 pb-12 overflow-x-hidden">
      {/* Bloco de Texto com Animação */}
      <div className="text-center space-y-4 opacity-0 animate-fade-in-up">
        <h1 className="text-4xl sm:text-6xl font-bold text-blue-400">
          RÉGIS XAVIER 
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-300">
          <span className="font-semibold text-white">{t('subtitle')} </span>
        </h2>
        <p className="text-blue-200 max-w-xl mx-auto">
          {t('tagline')}
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-12 max-w-4xl mx-auto">
        <div className="flex flex-col items-center opacity-0 animate-fade-in-up delay-[200ms] transform hover:scale-110 transition-transform duration-300">
          <FaJava title="Java" className="text-5xl text-red-600 hover:text-white transition" />
          <span className="sr-only">Java</span>
        </div>
        <div className="flex flex-col items-center opacity-0 animate-fade-in-up delay-[250ms] transform hover:scale-110 transition-transform duration-300">
          <SiC title="C" className="text-5xl text-blue-500 hover:text-white transition" />
          <span className="sr-only">C</span>
        </div>
        <div className="flex flex-col items-center opacity-0 animate-fade-in-up delay-[300ms] transform hover:scale-110 transition-transform duration-300">
          <SiJavascript title="JavaScript" className="text-5xl text-yellow-400 hover:text-white transition" />
          <span className="sr-only">JavaScript</span>
        </div>
        <div className="flex flex-col items-center opacity-0 animate-fade-in-up delay-[350ms] transform hover:scale-110 transition-transform duration-300">
          <FaHtml5 title="HTML" className="text-5xl text-orange-600 hover:text-white transition" />
          <span className="sr-only">HTML</span>
        </div>
        <div className="flex flex-col items-center opacity-0 animate-fade-in-up delay-[400ms] transform hover:scale-110 transition-transform duration-300">
          <FaCss3Alt title="CSS" className="text-5xl text-blue-500 hover:text-white transition" />
          <span className="sr-only">CSS</span>
        </div>
        <div className="flex flex-col items-center opacity-0 animate-fade-in-up delay-[450ms] transform hover:scale-110 transition-transform duration-300">
          <SiTailwindcss title="Tailwind CSS" className="text-5xl text-cyan-400 hover:text-white transition" />
          <span className="sr-only">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center opacity-0 animate-fade-in-up delay-[500ms] transform hover:scale-110 transition-transform duration-300">
          <FaReact title="React" className="text-5xl text-cyan-300 hover:text-white transition" />
          <span className="sr-only">React</span>
        </div>
        <div className="flex flex-col items-center opacity-0 animate-fade-in-up delay-[550ms] transform hover:scale-110 transition-transform duration-300">
          <SiMongodb title="MongoDB" className="text-5xl text-green-500 hover:text-white transition" />
          <span className="sr-only">MongoDB</span>
        </div>
        <div className="flex flex-col items-center opacity-0 animate-fade-in-up delay-[600ms] transform hover:scale-110 transition-transform duration-300">
          <FaDatabase title="SQL" className="text-5xl text-blue-500 hover:text-white transition" />
          <span className="sr-only">SQL</span>
        </div>
      </div>
    </div>
    
   </>
  );
}
