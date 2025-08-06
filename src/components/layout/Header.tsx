import { Link } from 'react-router-dom'
import { SiGithub } from 'react-icons/si'

function Header() {
    return (
        <header className="fixed top-0 z-50 w-full shadow">
            <div className="mx-auto max-w-6xl w-full flex items-center justify-between px-6 py-3">
                {/* IZQUIERDA: Título */}
                <div className="text-accent font-bold text-xl">
                    TS COMUNITY
                </div>

                {/* CENTRO: Navegación principal */}
                <nav className="absolute left-1/2 -translate-x-1/2">
                    <ul className="flex gap-6 text-sm font-medium">
                        <li>
                            <Link to="/clubes" className="hover:text-accent transition">
                                Clubes
                            </Link>
                        </li>
                        <li>
                            <Link to="/eventos" className="hover:text-accent transition">
                                Eventos
                            </Link>
                        </li>
                        <li>
                            <Link to="/staffs" className="hover:text-accent transition">
                                Staffs
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* DERECHA: GitHub icon + Botón de contacto */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/tumonulo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl hover:text-accent transition"
                        aria-label="GitHub"
                    >
                        <SiGithub />
                    </a>
                    <Link
                        to="/contacto"
                        className="bg-secondary text-white px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition"
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header