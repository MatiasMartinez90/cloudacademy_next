import Navigation from '@/components/Navigation'

export default function Cursos() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Cursos Disponibles
          </h1>
          
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Ejemplo de curso */}
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      AWS
                    </span>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                      AWS Bedrock
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Curso de implementación
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Aprende a implementar RAG con AWS Bedrock y Next.js
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="/cursos/aws-bedrock"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Ver curso
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