import React from 'react';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-8">Sobre Mim</h1>
        
        <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-4">Engenheiro de Software</h2>
          <p className="text-gray-300 mb-6">
            Sou um engenheiro de software apaixonado por criar soluções inovadoras e eficientes.
            Com experiência em desenvolvimento full-stack, foco em criar aplicações escaláveis
            e de alta performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Habilidades Técnicas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Desenvolvimento Front-end (React, TypeScript)</li>
                <li>• Desenvolvimento Back-end (Node.js, Python)</li>
                <li>• Arquitetura de Software</li>
                <li>• DevOps & CI/CD</li>
                <li>• Cloud Computing (AWS, Azure)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Experiência</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Desenvolvimento de aplicações web</li>
                <li>• Implementação de arquiteturas microserviços</li>
                <li>• Otimização de performance</li>
                <li>• Liderança técnica</li>
                <li>• Mentoria de desenvolvedores</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 