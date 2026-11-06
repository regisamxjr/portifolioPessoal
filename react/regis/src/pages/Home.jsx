import {
  FaJava, FaReact, FaCss3Alt, FaHtml5, FaDatabase, FaGithub, FaLinkedin,
  FaNodeJs, FaAws
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiMongodb, SiC, SiPostgresql, SiExpress
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import profilePicture from '../assets/img/profilepicture.webp';

const technologies = [
  { name: 'Java', icon: FaJava, color: '#EF4444' },
  { name: 'C', icon: SiC, color: '#3B82F6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#FACC15' },
  { name: 'HTML5', icon: FaHtml5, color: '#F97316' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#3B82F6' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#22D3EE' },
  { name: 'React', icon: FaReact, color: '#67E8F9' },
  { name: 'Node.js', icon: FaNodeJs, color: '#22C55E' },
  { name: 'Express', icon: SiExpress, color: '#E2E8F0' },
  { name: 'MongoDB', icon: SiMongodb, color: '#22C55E' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#60A5FA' },
  { name: 'SQL', icon: FaDatabase, color: '#3B82F6' },
  { name: 'AWS', icon: FaAws, color: '#F59E0B' }
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(ellipse at 50% 20%, rgba(37,99,235,0.28), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(59,130,246,0.12), transparent 45%)'
          }}
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={profilePicture}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[55vw] max-w-[640px] min-w-[280px] h-auto object-cover opacity-[0.45] hidden lg:block"
            style={{
              WebkitMaskImage: 'linear-gradient(to left, black 35%, transparent 100%)',
              maskImage: 'linear-gradient(to left, black 35%, transparent 100%)'
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
          <p className="text-blue-300/90 tracking-[0.2em] text-sm sm:text-base md:text-lg uppercase mb-5 opacity-0 animate-fade-in-up">
            {t('subtitle')}
          </p>

          <h1 className="font-bold leading-[0.95] tracking-tight text-white opacity-0 animate-fade-in-up delay-100">
            <span className="block text-[clamp(3.2rem,12vw,8.5rem)] bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              RÉGIS
            </span>
            <span className="block text-[clamp(3.2rem,12vw,8.5rem)] bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              XAVIER
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up delay-200">
            {t('tagline')}
          </p>

          <div className="mt-8 flex items-center justify-center gap-5 opacity-0 animate-fade-in-up delay-300">
            <a
              href="https://github.com/regisamxjr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-blue-300 transition-colors transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/r%C3%A9gis-j%C3%BAnior/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-blue-300 transition-colors transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          <div className="mt-14 w-full max-w-5xl mx-auto overflow-x-auto scrollbar-hide opacity-0 animate-fade-in-up delay-300">
            <div className="flex flex-nowrap justify-center items-center gap-4 sm:gap-5 md:gap-6 min-w-max mx-auto px-2">
              {technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300"
                    title={tech.name}
                  >
                    <Icon
                      className="text-xl sm:text-2xl md:text-3xl transition-colors duration-300 hover:brightness-125"
                      style={{ color: tech.color }}
                      aria-label={tech.name}
                    />
                    <span className="sr-only">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
