import { Auth } from 'aws-amplify'

interface AuthenticatedHeaderProps {
  user: any
  signOut: (options?: { redirect?: string }) => void
}

export default function AuthenticatedHeader({ user, signOut }: AuthenticatedHeaderProps) {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50">
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
            
            <div className="flex items-center space-x-4">
              {/* User Profile with Google info */}
              <div className="flex items-center space-x-3">
                {/* User Avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-400/50 hover:border-green-400 transition-colors">
                  {user.attributes?.picture ? (
                    <img 
                      src={user.attributes.picture} 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg">
                      {user.attributes?.name?.charAt(0)?.toUpperCase() || user.attributes?.email?.charAt(0)?.toUpperCase()}
                    </div>
                  )}
                </div>
                
                {/* User Info */}
                <div className="hidden sm:block">
                  <div className="text-white text-sm font-medium">
                    Hola, {user.attributes?.name || user.attributes?.given_name || user.attributes?.email?.split('@')[0]}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {user.attributes?.email}
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => signOut({ redirect: '/' })}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}