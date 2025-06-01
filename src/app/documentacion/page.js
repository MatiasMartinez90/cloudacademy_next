import Navigation from '@/components/Navigation'

export default function Documentacion() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Documentación Técnica
          </h1>
          
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Ejemplo de documentación */}
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      DOC
                    </span>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                      Guía de Implementación
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Documentación técnica
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Guía detallada sobre cómo implementar diferentes soluciones técnicas
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="/documentacion/guia-implementacion"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Leer documentación
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 