import type { NextPage } from 'next'
import Router from 'next/router'

const Home: NextPage = () => {
  const moveToRequireAuthenticationPage = () => {
    Router.push('/admin')
  }

  const moveToExamplePage = () => {
    Router.push('/example')
  }

  const courses = [
    {
      id: 1,
      title: "Full Stack Developer con JavaScript",
      description: "Conviértete en Full Stack Developer con JavaScript. Domina JavaScript, Node y React para tu primer gran empleo.",
      icon: "⚡",
      color: "bg-yellow-500",
      instructor: "Por Juan Pérez",
      category: "JavaScript"
    },
    {
      id: 2,
      title: "Curso de Configuración de Entorno de Desarrollo en Windows",
      description: "Aprende a configurar tu entorno de desarrollo para trabajar de manera eficiente en Windows.",
      icon: "🖥️",
      color: "bg-blue-500",
      instructor: "Por María García",
      category: "Desarrollo"
    },
    {
      id: 3,
      title: "Curso de Configuración de Entorno de Desarrollo en Linux",
      description: "Domina Linux y configura tu entorno de desarrollo para ser más productivo.",
      icon: "🐧",
      color: "bg-orange-500",
      instructor: "Por Carlos Ruiz",
      category: "Linux"
    },
    {
      id: 4,
      title: "Curso de Configuración de Entorno de Desarrollo en macOS",
      description: "Optimiza tu flujo de trabajo en macOS y configura las mejores herramientas de desarrollo.",
      icon: "🍎",
      color: "bg-gray-500",
      instructor: "Por Ana López",
      category: "macOS"
    },
    {
      id: 5,
      title: "Curso de Git y GitHub",
      description: "Aprende control de versiones y colaboración en proyectos con Git y GitHub.",
      icon: "📦",
      color: "bg-green-500",
      instructor: "Por Luis Martín",
      category: "Git"
    },
    {
      id: 6,
      title: "Curso de Frontend Developer",
      description: "Desarrolla interfaces modernas y atractivas con HTML, CSS y JavaScript.",
      icon: "🎨",
      color: "bg-purple-500",
      instructor: "Por Elena Vega",
      category: "Frontend"
    },
    {
      id: 7,
      title: "Curso Práctico de Frontend Developer",
      description: "Pon en práctica tus conocimientos de frontend con proyectos reales.",
      icon: "💻",
      color: "bg-indigo-500",
      instructor: "Por Roberto Silva",
      category: "Frontend"
    },
    {
      id: 8,
      title: "Curso de Fundamentos de JavaScript",
      description: "Domina los conceptos fundamentales de JavaScript desde cero.",
      icon: "📜",
      color: "bg-yellow-600",
      instructor: "Por Patricia Ruiz",
      category: "JavaScript"
    },
    {
      id: 9,
      title: "Curso de Asincronismo con JavaScript",
      description: "Aprende a manejar operaciones asíncronas en JavaScript de manera eficiente.",
      icon: "⚡",
      color: "bg-red-500",
      instructor: "Por Diego Morales",
      category: "JavaScript"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header estilo Platzi */}
      <header className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-green-400">CloudAcademy</span>
                <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded uppercase font-bold">LIVE</span>
              </div>
              
              {/* Buscador central */}
              <div className="hidden md:flex items-center flex-1 max-w-lg">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="¿Qué quieres aprender?"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                  />
                  <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Navegación derecha */}
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Cursos</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Empresas</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Blog</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Live</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Precios</a>
              </nav>
              <button 
                onClick={moveToRequireAuthenticationPage}
                className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Acceder
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section estilo Platzi */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Cursos online para trabajar
            <br />
            <span className="text-green-400">en tecnología</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Elige entre más de 1000 cursos online para aprender desde cero o desarrollar las 
            habilidades más demandadas del trabajo en tecnología.
          </p>

          {/* Filtros estilo Platzi */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <select className="bg-slate-700/50 border border-slate-600 rounded-lg px-6 py-3 text-white focus:outline-none focus:border-green-400 transition-colors min-w-[200px]">
              <option>Todas las categorías</option>
              <option>Desarrollo Web</option>
              <option>Inteligencia Artificial</option>
              <option>DevOps</option>
              <option>Diseño</option>
            </select>
            <select className="bg-slate-700/50 border border-slate-600 rounded-lg px-6 py-3 text-white focus:outline-none focus:border-green-400 transition-colors min-w-[200px]">
              <option>Todas las escuelas</option>
              <option>Escuela de JavaScript</option>
              <option>Escuela de Python</option>
              <option>Escuela de React</option>
            </select>
          </div>
        </div>

        {/* Botones principales destacados */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <button 
            onClick={moveToExamplePage}
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            <span className="relative z-10">🚀 Ver Cursos Disponibles</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </button>
          <button 
            onClick={moveToRequireAuthenticationPage}
            className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-xl font-semibold text-lg hover:bg-green-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
          >
            📊 Panel de Administración
          </button>
        </div>

        {/* Sección de categoría */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">DESARROLLO E INGENIERÍA</h2>
            </div>
          </div>

          {/* Curso destacado principal */}
          <div className="mb-12 bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-2xl">
                ⚡
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Full Stack Developer con JavaScript</h3>
                <p className="text-gray-300 text-lg">
                  Conviértete en Full Stack Developer con JavaScript. Domina JavaScript, Node y React para tu primer gran empleo. 
                  Tu futuro en desarrollo web comienza aquí.
                </p>
              </div>
            </div>
          </div>

          {/* Grid de cursos estilo Platzi */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center text-xl`}>
                    {course.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm leading-tight group-hover:text-green-400 transition-colors">
                      {course.title}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                <p className="text-gray-500 text-xs">
                  {course.instructor}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
              <div className="text-gray-300">Cursos disponibles</div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">50k+</div>
              <div className="text-gray-300">Estudiantes activos</div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Tasa de satisfacción</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
