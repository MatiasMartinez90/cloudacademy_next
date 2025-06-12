import type { NextPage } from 'next'
import Router from 'next/router'
import { useState } from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { Authenticator } from '@aws-amplify/ui-react'

const ChallengePrincipiantesCategoryContent = () => {
  const { user } = useAuthenticator()
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const goBack = () => {
    Router.push('/admin')
  }

  const goToCourse = (courseId: string) => {
    if (courseId === 'bedrock') {
      Router.push('/bedrock')
    } else {
      // Para otros cursos, redirigir a una página genérica o mostrar "próximamente"
      alert(`Curso "${courseId}" próximamente disponible`)
    }
  }

  const courses = [
    {
      id: 'aws-beginners-challenge',
      title: 'Join the AWS Beginners Challenge!',
      description: 'Únete al desafío oficial de AWS para principiantes. Aprende los fundamentos de la nube con proyectos prácticos y guías paso a paso.',
      icon: '🎯',
      level: 'Principiante',
      duration: '15 min',
      cost: 'Gratis',
      difficulty: 'Introducción',
      type: 'Challenge',
      color: 'from-yellow-500 to-orange-500',
      students: 1245,
      rating: 4.9,
      featured: true
    },
    {
      id: 'setup-aws-account',
      title: 'Set Up An AWS Account for Free',
      description: 'Crea tu cuenta gratuita de AWS. Configuración inicial, free tier, billing alerts y mejores prácticas de seguridad desde el primer día.',
      icon: '🔑',
      level: 'Principiante',
      duration: '20 min',
      cost: 'Gratis',
      difficulty: 'Setup',
      type: 'Fundamentos',
      color: 'from-green-500 to-emerald-600',
      students: 987,
      rating: 4.8,
      featured: true
    },
    {
      id: 'host-website-s3',
      title: 'Host a Website on Amazon S3',
      description: 'Tu primer proyecto en AWS: hosting estático con S3. Configura buckets, políticas, CloudFront y dominio personalizado paso a paso.',
      icon: '🌐',
      level: 'Principiante',
      duration: '45 min',
      cost: '$0.02',
      difficulty: 'Proyecto Práctico',
      type: 'Web Hosting',
      color: 'from-blue-500 to-cyan-600',
      students: 756,
      rating: 4.7,
      featured: true
    },
    {
      id: 'visualize-data-quicksight',
      title: 'Visualize data with QuickSight',
      description: 'Crea dashboards interactivos con Amazon QuickSight. Conecta datos, diseña visualizaciones y comparte insights empresariales.',
      icon: '📊',
      level: 'Básico',
      duration: '50 min',
      cost: '$0.05',
      difficulty: 'Analytics',
      type: 'Data Visualization',
      color: 'from-purple-500 to-pink-600',
      students: 432,
      rating: 4.6,
      featured: false
    },
    {
      id: 'cloud-security-iam',
      title: 'Cloud Security with AWS IAM',
      description: 'Fundamentos de seguridad en AWS con IAM. Usuarios, grupos, políticas, roles y principio de menor privilegio para principiantes.',
      icon: '🔒',
      level: 'Básico',
      duration: '40 min',
      cost: 'Gratis',
      difficulty: 'Seguridad',
      type: 'Security',
      color: 'from-red-500 to-rose-600',
      students: 623,
      rating: 4.8,
      featured: true
    }
  ]

  const filteredCourses = courses.filter(course => {
    const levelMatch = selectedLevel === 'all' || course.level === selectedLevel
    const typeMatch = selectedType === 'all' || course.type === selectedType
    return levelMatch && typeMatch
  })

  const featuredCourses = courses.filter(course => course.featured)

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 border-b border-slate-700/50 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={goBack}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Volver al Dashboard</span>
              </button>
            </div>
            <div className="text-center text-white font-medium">
              Categoría: Challenge para principiantes
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                  • CATEGORÍA
                </span>
                <h1 className="text-4xl font-bold text-white mt-4 mb-2">
                  Challenge para principiantes
                </h1>
                <p className="text-gray-300 text-lg">
                  Tu primer paso en AWS Cloud. Proyectos guiados, cuenta gratuita y fundamentos esenciales para nuevos cloud engineers.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 border-2 border-slate-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-500 border-2 border-slate-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-slate-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 border-2 border-slate-800"></div>
                </div>
                <span className="text-gray-400 text-sm ml-2">3.2k+ estudiantes</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-yellow-500/20">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">DURACIÓN TOTAL</div>
                  <div className="text-sm text-white">2.8 horas</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">DIFICULTAD</div>
                  <div className="text-sm text-white">Principiante</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">COSTO PROMEDIO</div>
                  <div className="text-sm text-white">Casi Gratis</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">CURSOS</div>
                  <div className="text-sm text-white">5 disponibles</div>
                </div>
              </div>
            </div>

            {/* Challenge Badge */}
            <div className="mt-8 bg-gradient-to-r from-yellow-500/10 via-green-500/10 to-blue-500/10 border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🏆</span>
                <h3 className="text-white font-bold text-lg">AWS Beginners Challenge</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Completa todos los cursos para obtener tu certificado de participación en el AWS Beginners Challenge oficial.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-sm font-medium">Challenge Activo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">3,200+ participantes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <select 
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400 transition-colors"
            >
              <option value="all">Todos los niveles</option>
              <option value="Principiante">Principiante</option>
              <option value="Básico">Básico</option>
            </select>
            
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400 transition-colors"
            >
              <option value="all">Todos los tipos</option>
              <option value="Challenge">Challenge</option>
              <option value="Fundamentos">Fundamentos</option>
              <option value="Web Hosting">Web Hosting</option>
              <option value="Data Visualization">Analytics</option>
              <option value="Security">Security</option>
            </select>
          </div>
        </div>

        {/* Cursos Destacados */}
        {featuredCourses.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <span>🌟</span>
              <span>Cursos Destacados del Challenge</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredCourses.map((course) => (
                <div 
                  key={course.id}
                  onClick={() => goToCourse(course.id)}
                  className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 hover:border-yellow-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                      DESTACADO
                    </span>
                  </div>

                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {course.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-xl leading-tight group-hover:text-yellow-300 transition-colors mb-2">
                        {course.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="px-2 py-1 bg-slate-700/50 rounded-full text-yellow-400 font-medium">
                          {course.level}
                        </span>
                        <span className="text-gray-400">{course.duration}</span>
                        <span className="text-gray-400">{course.cost}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <span>⭐</span>
                        <span>{course.rating}</span>
                      </div>
                      <span>{course.students} estudiantes</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400 group-hover:text-yellow-300 transition-colors text-sm font-medium">
                      <span>Comenzar</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Todos los Cursos */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <span>🎯</span>
            <span>Todos los Cursos del Challenge ({filteredCourses.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                onClick={() => goToCourse(course.id)}
                className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 hover:border-yellow-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-yellow-300 transition-colors mb-1">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="px-2 py-1 bg-slate-700/50 rounded-full text-yellow-400 font-medium">
                        {course.level}
                      </span>
                      <span className="text-gray-500">{course.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>⭐ {course.rating}</span>
                    <span>•</span>
                    <span>{course.students}</span>
                  </div>
                  <span className="text-gray-500 text-xs">{course.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="bg-gradient-to-r from-yellow-500/10 via-green-500/10 to-blue-500/10 border border-yellow-500/30 rounded-2xl p-8 text-center">
          <div className="mb-4">
            <span className="text-4xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">¿Listo para el Challenge?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Únete a miles de estudiantes que han comenzado su carrera en AWS. Completa todos los cursos y obtén tu certificado oficial.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
            Comenzar Challenge Ahora
          </button>
        </div>
      </div>
    </div>
  )
}

const ChallengePrincipiantesCategory: NextPage = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => <ChallengePrincipiantesCategoryContent />}
    </Authenticator>
  )
}

export default ChallengePrincipiantesCategory