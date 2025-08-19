import logo from '@/assets/logo.webp'
import spaceBg from '@/assets/space-bg.webp'

export default function Hero() {
    return (
        <section
            className="flex flex-row justify-center items-center gap-16 px-8 min-h-screen bg-cover bg-center bg-no-repeat max-lg:flex-col-reverse max-lg:gap-6 max-lg:px-6 max-sm:gap-4 max-sm:px-4"
            style={{ backgroundImage: `url(${spaceBg})` }}
        >
            <div className="flex flex-col justify-center items-start gap-4 max-lg:items-center max-lg:text-center">
                <h1 className="text-6xl font-extrabold text-primary max-lg:text-5xl max-sm:text-4xl">
                    TS Comunity Brawl
                </h1>
                <p className="text-3xl text-subtitle max-lg:text-2xl max-sm:text-xl">
                    Clubes de Brawl Stars, Eventos...
                </p>
            </div>
            
            <div>
                <img 
                    src={logo} 
                    alt="Logo de TS" 
                    className="w-80 max-lg:w-72 max-sm:w-56"
                />
            </div>
        </section>
    )
}