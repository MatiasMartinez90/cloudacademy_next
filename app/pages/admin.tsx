import { NextPage } from 'next'
import useUser from '../lib/useUser'

const Admin: NextPage = () => {
  const { user, loading, loggedOut, signOut } = useUser({ redirect: '/signin' })

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  )
  if (loggedOut) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-gray-600">Redirecting...</div>
    </div>
  )

  console.log(user.signInUserSession?.idToken?.jwtToken)

  // Mock data para cursos
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      description: "Aprende los conceptos básicos de React desde cero",
      instructor: "Ana García",
      duration: "8 horas",
      level: "Principiante",
      image: "https://via.placeholder.com/300x200?text=React",
      progress: 75,
      enrolled: true
    },
    {
      id: 2,
      title: "Node.js y Express",
      description: "Desarrollo backend con Node.js y Express",
      instructor: "Carlos Ruiz",
      duration: "12 horas",
      level: "Intermedio",
      image: "https://via.placeholder.com/300x200?text=Node.js",
      progress: 40,
      enrolled: true
    },
    {
      id: 3,
      title: "Python para Data Science",
      description: "Análisis de datos con Python y Pandas",
      instructor: "María López",
      duration: "15 horas",
      level: "Intermedio",
      image: "https://via.placeholder.com/300x200?text=Python",
      progress: 0,
      enrolled: false
    },
    {
      id: 4,
      title: "Vue.js Avanzado",
      description: "Técnicas avanzadas y mejores prácticas en Vue.js",
      instructor: "Luis Martín",
      duration: "10 horas",
      level: "Avanzado",
      image: "https://via.placeholder.com/300x200?text=Vue.js",
      progress: 90,
      enrolled: true
    },
    {
      id: 5,
      title: "Machine Learning con TensorFlow",
      description: "Introducción al aprendizaje automático",
      instructor: "Elena Vega",
      duration: "20 horas",
      level: "Avanzado",
      image: "https://via.placeholder.com/300x200?text=ML",
      progress: 0,
      enrolled: false
    },
    {
      id: 6,
      title: "CSS Grid y Flexbox",
      description: "Layouts modernos con CSS Grid y Flexbox",
      instructor: "Roberto Silva",
      duration: "6 horas",
      level: "Principiante",
      image: "https://via.placeholder.com/300x200?text=CSS",
      progress: 100,
      enrolled: true
    },
    {
      id: 7,
      title: "Docker y Kubernetes",
      description: "Containerización y orquestación de aplicaciones",
      instructor: "Patricia Ruiz",
      duration: "14 horas",
      level: "Intermedio",
      image: "https://via.placeholder.com/300x200?text=Docker",
      progress: 25,
      enrolled: true
    },
    {
      id: 8,
      title: "GraphQL API Design",
      description: "Diseño de APIs modernas con GraphQL",
      instructor: "Diego Morales",
      duration: "9 horas",
      level: "Intermedio",
      image: "https://via.placeholder.com/300x200?text=GraphQL",
      progress: 0,
      enrolled: false
    },
    {
      id: 9,
      title: "React Native Mobile",
      description: "Desarrollo de apps móviles con React Native",
      instructor: "Carmen Torres",
      duration: "16 horas",
      level: "Intermedio",
      image: "https://via.placeholder.com/300x200?text=React+Native",
      progress: 60,
      enrolled: true
    },
    {
      id: 10,
      title: "AWS Cloud Fundamentals",
      description: "Introducción a servicios de Amazon Web Services",
      instructor: "Fernando Castro",
      duration: "18 horas",
      level: "Principiante",
      image: "https://via.placeholder.com/300x200?text=AWS",
      progress: 0,
      enrolled: false
    }
  ]

  const enrolledCourses = courses.filter(course => course.enrolled)
  const availableCourses = courses.filter(course => !course.enrolled)

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Principiante': return 'bg-green-100 text-green-800'
      case 'Intermedio': return 'bg-yellow-100 text-yellow-800'
      case 'Avanzado': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CloudAcademy Dashboard</h1>
              <p className="text-sm text-gray-600">Bienvenido, {user.attributes?.email}</p>
            </div>
            <button 
              onClick={() => signOut({ redirect: '/' })}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="mb-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Cursos Inscritos</dt>
                      <dd className="text-lg font-medium text-gray-900">{enrolledCourses.length}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Cursos Completados</dt>
                      <dd className="text-lg font-medium text-gray-900">{enrolledCourses.filter(c => c.progress === 100).length}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">En Progreso</dt>
                      <dd className="text-lg font-medium text-gray-900">{enrolledCourses.filter(c => c.progress > 0 && c.progress < 100).length}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Horas Totales</dt>
                      <dd className="text-lg font-medium text-gray-900">{enrolledCourses.reduce((acc, course) => acc + parseInt(course.duration), 0)}h</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mis Cursos */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Mis Cursos</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200">
                <img className="h-48 w-full object-cover" src={course.image} alt={course.title} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                  <p className="text-sm text-gray-500 mb-4">Instructor: {course.instructor}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progreso</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200">
                    {course.progress === 100 ? 'Revisar' : course.progress > 0 ? 'Continuar' : 'Comenzar'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cursos Disponibles */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Cursos Disponibles</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {availableCourses.map((course) => (
              <div key={course.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200">
                <img className="h-48 w-full object-cover" src={course.image} alt={course.title} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                  <p className="text-sm text-gray-500 mb-4">Instructor: {course.instructor}</p>
                  
                  <button className="w-full bg-white text-indigo-600 px-4 py-2 rounded-md border border-indigo-600 hover:bg-indigo-50 transition-colors duration-200">
                    Inscribirse
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Admin
