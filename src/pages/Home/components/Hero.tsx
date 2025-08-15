import spaceBg from '@/assets/space-bg.webp'
import logo from '@/assets/logo.webp'

export default function Hero() {
    return (
        <section
            className="flex justify-center items-center gap-10 h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${spaceBg})` }}
        >
            <div>
                <h1 className="text-primary font-extrabold text-5xl">
                    TS Community Brawl
                </h1>
                <p className="text-subtitle text-xl">
                    Clubes de Brawl Stars, Eventos....
                </p>
            </div>
            <div>
                <img src={logo} alt="Logo de TS" />
            </div>
        </section>
    )
}