import { useState } from 'react'
import { Link } from 'react-router-dom'
import { appRoutes } from '@/consts/routes'
import Button from '@/components/ui/Button'

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const navLinks = appRoutes.filter(route => route.nav)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <>
            {/* Botón hamburguesa */}
            <button 
                onClick={toggleMenu}
                className="lg:hidden flex flex-col gap-1 p-2"
                aria-label="Toggle menu"
            >
                <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={closeMenu}
                />
            )}

            {/* Menú móvil */}
            <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-md border-l border-gray-800 z-50 transform transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="p-6">
                    {/* Header del menú */}
                    <div className="flex justify-between items-center mb-8">
                        <span className="font-bold text-xl text-white">Menú</span>
                        <button 
                            onClick={closeMenu}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800"
                            aria-label="Close menu"
                        >
                            <span className="text-white text-xl">×</span>
                        </button>
                    </div>

                    {/* Links de navegación */}
                    <nav className="mb-8">
                        <ul className="space-y-4">
                            {navLinks.map(link => (
                                <li key={link.path}>
                                    <Link 
                                        to={link.path} 
                                        onClick={closeMenu}
                                        className="block text-white text-lg py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Botón de Discord */}
                    <div className="pt-4 border-t border-gray-800">
                        <Button 
                            onClick={() => {
                                window.open('https://discord.gg/8nu3ZdDkp7', '_blank')
                                closeMenu()
                            }} 
                            variant='accent'
                            className="w-full"
                        >
                            Unirse al Discord
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}