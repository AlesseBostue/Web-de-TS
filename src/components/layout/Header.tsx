import { Link } from 'react-router-dom'
import logo from '@/assets/logo.webp'
import { appRoutes } from '@/consts/routes'
import Button from '@/components/ui/Button'

export default function Header() {
    const navLinks = appRoutes.filter(route => route.nav)

    return (
        <header className="fixed top-0 w-full px-8 py-6 z-50">
            <div className="max-w-6xl mx-auto grid grid-cols-3 items-center">
                {/* Izquierda */}
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src={logo} alt="Logo" className="w-8 h-8" />
                        <span className="font-bold text-lg group-hover:text-accent">TS Comunity Brawl</span>
                    </Link>
                </div>

                {/* Centro */}
                <nav className="justify-self-center">
                    <ul className="flex gap-6">
                        {navLinks.map(link => (
                            <li key={link.path}>
                                <Link to={link.path} className="hover:text-accent">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Derecha */}
                <div className="justify-self-end">
                    <Button onClick={() => window.open('https://discord.gg/8nu3ZdDkp7', '_blank')} variant='accent'>
                        Unirse
                    </Button>
                </div>
            </div>
        </header>
    )
}