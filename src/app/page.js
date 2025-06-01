import './globals.css'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Bienvenido a WebCursos
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Tu plataforma para aprender y compartir conocimiento técnico
            </p>
          </div>

          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {/* Card de ejemplo */}
            <Link href="/cursos/aws-bedrock" className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Curso
                  </p>
                  <span className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                      Introducción a AWS Bedrock
                    </p>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                      Aprende a implementar RAG con AWS Bedrock y Next.js
                    </p>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
