import type { NextPage } from 'next'
import Router from 'next/router'
import { useState } from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { Authenticator } from '@aws-amplify/ui-react'
import AuthenticatedHeader from '../components/AuthenticatedHeader'

const RAGBedrockCategoryContent = () => {
  const { user, signOut } = useAuthenticator()
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
      id: 'build-rag-chatbot',
      title: 'Build a RAG Chatbot with Bedrock',
      description: 'Construye un chatbot inteligente con RAG y Amazon Bedrock. Integra Claude, embeddings, vector databases y retrieval para respuestas contextuales.',
      icon: '🤖',
      level: 'Intermedio',
      duration: '75 min',
      cost: '$0.12',
      difficulty: 'RAG Implementation',
      type: 'AI/ML',
      color: 'from-purple-500 to-blue-600',
      students: 892,
      rating: 4.9,
      featured: true
    },
    {
      id: 'advanced-prompt-engineering',
      title: 'Advanced Prompt Engineering with Claude',
      description: 'Domina técnicas avanzadas de prompt engineering. Chain-of-thought, few-shot learning, prompt optimization y fine-tuning para Claude en Bedrock.',
      icon: '🧠',
      level: 'Avanzado',
      duration: '60 min',
      cost: '$0.08',
      difficulty: 'Prompt Engineering',
      type: 'AI/ML',
      color: 'from-green-500 to-teal-600',
      students: 567,
      rating: 4.8,
      featured: true
    },
    {
      id: 'vector-search-embeddings',
      title: 'Vector Search with Bedrock Embeddings',
      description: 'Implementa búsqueda semántica con embeddings de Bedrock. Vector databases, similarity search, OpenSearch integration y retrieval optimization.',
      icon: '🔍',
      level: 'Intermedio',
      duration: '55 min',
      cost: '$0.06',
      difficulty: 'Vector Search',
      type: 'Data Processing',
      color: 'from-blue-500 to-indigo-600',
      students: 423,
      rating: 4.7,
      featured: true
    },
    {
      id: 'enterprise-ai-pipeline',
      title: 'Enterprise AI Pipeline with Bedrock',
      description: 'Construye pipelines de IA para empresas. Data ingestion, preprocessing, model orchestration, monitoring y deployment escalable con Bedrock.',
      icon: '🏭',
      level: 'Avanzado',
      duration: '90 min',
      cost: '$0.18',
      difficulty: 'Enterprise AI',
      type: 'MLOps',
      color: 'from-orange-500 to-red-600',
      students: 345,
      rating: 4.9,
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
      <AuthenticatedHeader user={user} signOut={signOut} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="relative">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-green-600/20 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-800/95 to-slate-900/90 backdrop-blur-sm border-2 border-purple-500/30 rounded-3xl p-10">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg animate-pulse">
                      🔥 CURSO ESTRELLA
                    </span>
                    <h1 className="text-4xl font-bold text-white mt-4 mb-2">
                      RAG <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">Bedrock</span>
                    </h1>
                    <p className="text-gray-300 text-lg">
                      Construye chatbots inteligentes con Amazon Bedrock y RAG. Integra IA generativa con AWS para crear asistentes que entienden tus datos empresariales.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 border-2 border-slate-800"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-slate-800"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-500 border-2 border-slate-800"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 border-2 border-slate-800"></div>
                    </div>
                    <span className="text-gray-400 text-sm ml-2">2.2k+ estudiantes</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">DURACIÓN TOTAL</div>
                      <div className="text-sm text-white">4.7 horas</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">DIFICULTAD</div>
                      <div className="text-sm text-white">Intermedio a Avanzado</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">COSTO PROMEDIO</div>
                      <div className="text-sm text-white">~$0.11</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-orange-500/20">
                      <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">CURSOS</div>
                      <div className="text-sm text-white">4 disponibles</div>
                    </div>
                  </div>
                </div>

                {/* AI Technologies Showcase */}
                <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">🧠</span>
                    <h3 className="text-white font-bold text-lg">Tecnologías de IA que Dominarás</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-400 text-xl">🤖</span>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">Claude</span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-400 text-xl">🔍</span>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">RAG</span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-400 text-xl">📊</span>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">Embeddings</span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-orange-400 text-xl">🏭</span>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">MLOps</span>
                    </div>
                  </div>
                </div>

                {/* CTA Principal */}
                <div className="text-center">
                  <button 
                    onClick={() => Router.push('/bedrock')}
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>🚀 Comenzar con RAG Bedrock</span>
                    </span>
                  </button>
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
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400 transition-colors"
            >
              <option value="all">Todos los niveles</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
            
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400 transition-colors"
            >
              <option value="all">Todos los tipos</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Data Processing">Data Processing</option>
              <option value="MLOps">MLOps</option>
            </select>
          </div>
        </div>

        {/* Cursos Destacados */}
        {featuredCourses.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <span>🌟</span>
              <span>Cursos Esenciales de RAG & Bedrock</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredCourses.map((course) => (
                <div 
                  key={course.id}
                  onClick={() => goToCourse(course.id)}
                  className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                      DESTACADO
                    </span>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                      {course.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-2xl leading-tight group-hover:text-purple-300 transition-colors mb-3">
                        {course.title}
                      </h3>
                      <p className="text-gray-400 text-base mb-4 leading-relaxed">
                        {course.description}
                      </p>
                      <div className="flex items-center space-x-6 text-sm mb-4">
                        <span className="px-3 py-1 bg-slate-700/50 rounded-full text-purple-400 font-medium">
                          {course.level}
                        </span>
                        <span className="text-gray-400">{course.duration}</span>
                        <span className="text-gray-400">{course.cost}</span>
                        <span className="px-2 py-1 bg-purple-600/30 rounded text-purple-300 text-xs">
                          {course.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <span>⭐</span>
                            <span>{course.rating}</span>
                          </div>
                          <span>{course.students} estudiantes</span>
                        </div>
                        <div className="flex items-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors text-base font-medium">
                          <span>Comenzar Curso</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RAG Architecture */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <span>🏗️</span>
            <span>Arquitectura RAG que Construirás</span>
          </h2>
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Knowledge Base</h4>
                <p className="text-gray-400 text-sm">Document ingestion, chunking, embedding generation con Bedrock</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Retrieval System</h4>
                <p className="text-gray-400 text-sm">Vector search, similarity matching, context selection</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Generation Layer</h4>
                <p className="text-gray-400 text-sm">Claude integration, prompt engineering, response synthesis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <span>🎯</span>
            <span>Ruta de Aprendizaje RAG</span>
          </h2>
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">Vector Search with Bedrock Embeddings</h4>
                  <p className="text-gray-400 text-sm">Aprende embeddings y búsqueda semántica como base del RAG</p>
                </div>
                <span className="text-gray-500 text-sm">55 min</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">Advanced Prompt Engineering with Claude</h4>
                  <p className="text-gray-400 text-sm">Domina técnicas avanzadas de prompting para mejores resultados</p>
                </div>
                <span className="text-gray-500 text-sm">60 min</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">Build a RAG Chatbot with Bedrock</h4>
                  <p className="text-gray-400 text-sm">Integra todos los componentes en un chatbot funcional</p>
                </div>
                <span className="text-gray-500 text-sm">75 min</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">Enterprise AI Pipeline with Bedrock</h4>
                  <p className="text-gray-400 text-sm">Escala tu solución para uso empresarial con MLOps</p>
                </div>
                <span className="text-gray-500 text-sm">90 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Todos los Cursos */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <span>🧠</span>
            <span>Todos los Cursos de RAG Bedrock ({filteredCourses.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                onClick={() => goToCourse(course.id)}
                className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-lg leading-tight group-hover:text-purple-300 transition-colors mb-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="px-2 py-1 bg-slate-700/50 rounded-full text-purple-400 font-medium">
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
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>⭐ {course.rating}</span>
                    <span>•</span>
                    <span>{course.students} estudiantes</span>
                  </div>
                  <span className="px-2 py-1 bg-purple-600/20 rounded text-purple-300 text-xs">
                    {course.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Revolution Call to Action */}
        <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 border border-purple-500/30 rounded-2xl p-8 text-center">
          <div className="mb-4">
            <span className="text-4xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Únete a la Revolución de la IA</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Conviértete en experto en RAG y Amazon Bedrock. Construye chatbots inteligentes que transformarán la forma en que las empresas interactúan con sus datos.
          </p>
          <button 
            onClick={() => Router.push('/bedrock')}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Comenzar mi Viaje en IA
          </button>
        </div>
      </div>
    </div>
  )
}

const RAGBedrockCategory: NextPage = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => <RAGBedrockCategoryContent />}
    </Authenticator>
  )
}

export default RAGBedrockCategory