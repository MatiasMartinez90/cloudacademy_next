import type { NextPage } from 'next'
import Router from 'next/router'

const Home: NextPage = () => {
  const moveToRequireAuthenticationPage = () => {
    Router.push('/admin')
  }

  const moveToExamplePage = () => {
    Router.push('/example')
  }

  const courseSteps = [
    {
      id: 0,
      title: "Before we start",
      subtitle: "Step #1...",
      icon: "🧠",
      color: "from-purple-500 to-purple-600",
      active: true
    },
    {
      id: 1,
      title: "Setting Up...",
      icon: "⚡",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Store Your Data",
      icon: "🗄️",
      color: "from-teal-500 to-teal-600"
    },
    {
      id: 3,
      title: "Finish Setup",
      icon: "🧠",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 4,
      title: "Get Access",
      icon: "🔑",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 5,
      title: "Sync Your Data",
      icon: "🔄",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 6,
      title: "Chat With Your Bot",
      icon: "🤖",
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 border-b border-slate-700/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <h2 className="text-xl font-bold text-white">WebCursos</h2>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Cursos</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Documentación</a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 bg-slate-800/30 min-h-screen border-r border-slate-700/50 p-6">
          <div className="space-y-3">
            {courseSteps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all cursor-pointer ${
                  step.active 
                    ? 'bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30' 
                    : 'hover:bg-slate-700/30'
                }`}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r ${step.color} text-white text-sm`}>
                  {step.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-400">
                    Step #{step.id}: {step.title}
                  </div>
                  {step.subtitle && (
                    <div className="text-xs text-gray-500 mt-1">
                      {step.subtitle}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Featured Project Card */}
          <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  • PROJECT
                </span>
                <h1 className="text-3xl font-bold text-white mt-4">
                  Set Up a RAG Chatbot in Bedrock
                </h1>
                <p className="text-gray-300 mt-3 text-lg">
                  Build an AI chatbot that learns from your data with RAG and Amazon Bedrock!
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-slate-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-500 border-2 border-slate-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 border-2 border-slate-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 border-2 border-slate-800"></div>
                </div>
                <span className="text-gray-400 text-sm ml-2">70+ completed</span>
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-orange-500/20">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">DIFFICULTY</div>
                  <div className="text-sm text-white">Mildly spicy</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">TIME</div>
                  <div className="text-sm text-white">60 min</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">COST</div>
                  <div className="text-sm text-white">~$0.01</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">COMPLETED</div>
                  <div className="text-sm text-white">70+ completed</div>
                </div>
              </div>
            </div>

            {/* Requirements and Concepts */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.678-2.153-1.415-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                  </svg>
                  <h3 className="text-white font-medium">WHAT YOU'LL NEED</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>An AWS account - <a href="#" className="text-blue-400 hover:text-blue-300 underline">Create one here!</a></span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="text-white font-medium">KEY CONCEPTS</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <span>Amazon Bedrock</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <span>Amazon OpenSearch Serverless</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <span>Amazon S3</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-8">
              <button 
                onClick={moveToExamplePage}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Comenzar Proyecto
              </button>
              <button 
                onClick={moveToRequireAuthenticationPage}
                className="px-6 py-3 bg-slate-700/50 text-gray-300 rounded-lg font-medium border border-slate-600 hover:bg-slate-700 transition-all duration-200"
              >
                Panel de Admin
              </button>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-white font-semibold">30 Second Summary</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                In this project, you'll learn how to build a chatbot that's an expert on you – it can answer questions about 
                who you are, what you do, and what you know!
              </p>
              <p>
                This is made possible when we use a special AI technique called <span className="text-white font-medium">RAG (Retrieval Augmented 
                Generation)</span>, which is a way to train an AI chatbot on your personal documents. We'll learn how to do this 
                on <span className="text-white font-medium">Amazon Bedrock</span>, an AWS service that gives you access to AI models to bring into your applications.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
