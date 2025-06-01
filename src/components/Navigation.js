"use client";

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, ArrowRightOnRectangleIcon, UserPlusIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                WebCursos
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-12 items-center">
              <Link href="/cursos" className="text-gray-900 dark:text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                Cursos
              </Link>
              <Link href="/documentacion" className="text-gray-900 dark:text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                Documentación
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              title="Iniciar sesión"
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <ArrowRightOnRectangleIcon className="h-6 w-6" />
            </button>
            <button
              title="Registrarse"
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <UserPlusIcon className="h-6 w-6" />
            </button>
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              title={resolvedTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {resolvedTheme === 'dark' ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 