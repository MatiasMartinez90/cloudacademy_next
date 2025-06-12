import type { NextPage } from 'next'
import Router from 'next/router'

const Home: NextPage = () => {
  const moveToRequireAuthenticationPage = () => {
    Router.push('/admin')
  }

  const moveToExamplePage = () => {
    Router.push('/example')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h2 className="text-2xl font-bold text-indigo-600">CloudAcademy</h2>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Cursos</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Precios</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Sobre Nosotros</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Aprende</span>
            <span className="block text-indigo-600">tecnología del futuro</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Domina las habilidades más demandadas en el mercado laboral con nuestros cursos online. 
            Desde desarrollo web hasta inteligencia artificial.
          </p>
          
          {/* Main Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={moveToExamplePage}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Ver Cursos Disponibles
            </button>
            <button 
              onClick={moveToRequireAuthenticationPage}
              className="inline-flex items-center justify-center px-8 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Panel de Administración
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Cursos Actualizados</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Contenido siempre actualizado con las últimas tecnologías y tendencias del mercado.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Aprendizaje Rápido</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Metodología optimizada para aprender más en menos tiempo con ejercicios prácticos.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Certificación</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Obtén certificados reconocidos por la industria al completar nuestros cursos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-white rounded-lg shadow-sm">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Únete a miles de estudiantes
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Que ya están transformando sus carreras con nuestros cursos
              </p>
            </div>
            <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Estudiantes</dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">12,000+</dd>
              </div>
              <div className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Cursos</dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">50+</dd>
              </div>
              <div className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Certificaciones</dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">95%</dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
