import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaCode } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-center h-20">
          <div className="flex items-center space-x-8">
            <NavItem to="/" icon={<FaHome />} label="Home" />
            <NavItem to="/sobre" icon={<FaUser />} label="Sobre" />
            <NavItem to="/projetos" icon={<FaCode />} label="Projetos" />
            <NavItem to="/contato" icon={<FaEnvelope />} label="Contato" />
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#219ebc] rounded-md"
      aria-label={label}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute -inset-2 bg-[#219ebc]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0"></div>
        <div className="text-2xl text-white group-hover:text-[#219ebc] transition-colors z-10">
          {icon}
        </div>
      </div>
      <span className="text-sm mt-1 text-white group-hover:text-[#219ebc] transition-colors">
        {label}
      </span>
    </Link>
  );
}
