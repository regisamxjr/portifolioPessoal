import React from 'react'
import { FaCode, FaDatabase, FaLightbulb, FaTools, FaUsers, FaSeedling } from 'react-icons/fa'
import fotoPerfil from '../assets/img/fotoperfil.jpg'

const Sobre = () => {


  const softSkills = ['Proativo', 'Colaborativo', 'Comunicativo', 'Aprendizado Contínuo', 'Dedicação', 'Rápida Entrega'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-16 mt-10">Minha Jornada</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center max-w-5xl mx-auto">
          <div className="w-full flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src={fotoPerfil}
                alt="Régis Xavier"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-gray-300 leading-relaxed text-justify">
              Sou um estudante de Engenharia de Software na PUCRS, apaixonado
por tecnologia e desenvolvimento de software. Possuo conhecimento
avançado em Inglês e experiência prática com desenvolvimento web e
mobile. Tenho perfil proativo, comunicativo e determinado, buscando
sempre aprendizado contínuo e inovação. Atualmente, procuro uma
oportunidade de estágio como desenvolvedor para aplicar meus
conhecimentos e contribuir com soluções criativas e eficientes.

            </p>
           
          </div>
        </div>

        <div className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Competências</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-200 text-center">{skill}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Mindset</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800 hover:border-blue-500 transition">
              <iframe
                className="w-full h-64 sm:h-80"
                src="https://www.youtube.com/embed/lxidCLblwwA"
                title="Mindset Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800 hover:border-blue-500 transition">
              <iframe
                className="w-full h-64 sm:h-80"
                src="https://www.youtube.com/embed/_IzD5ZhoCU4"
                title="Mindset Video 2"
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
