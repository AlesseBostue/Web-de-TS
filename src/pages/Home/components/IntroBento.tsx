import { SiDiscord } from 'react-icons/si'
import clubIcon from '@/assets/club.svg'
import { Link } from 'react-router-dom'

function IntroBento() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 max-w-5xl mx-auto">
      
      {/* Discord */}
      <a
        href="https://discord.gg/8nu3ZdDkp7"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-1 sm:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br 
          from-indigo-900 via-indigo-800 to-indigo-500 border border-indigo-900 
          flex flex-col items-start hover:scale-105 hover:contrast-125 
          transition-transform duration-300 ease-in-out p-6 min-h-[180px] group"
      >
        <span className="absolute top-2 left-4 font-bold text-base md:text-xl text-white z-10 drop-shadow-sm mr-4">
          Comunidad de Discord enfocada en crear ambiente amigable y competitivo
        </span>

        <SiDiscord
          className="absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-12 group-hover:scale-125 group-hover:-translate-y-2 group-hover:-translate-x-2
            transition-transform duration-300 ease-in-out z-0 text-neutral-200 opacity-60"
        />

        <span className="absolute bottom-4 left-4 text-xs text-white bg-indigo-900/60 
          rounded-xl px-2 py-0.5 z-10 group-hover:-translate-y-1 
          transition-transform duration-300 ease-in-out"
        >
          +5100 miembros
        </span>
      </a>

      {/* Clubes */}
      <Link
        to="/clubes"
        className="row-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br 
          from-red-900 via-red-700 to-red-500 border border-red-900 
          flex flex-col items-start hover:scale-105 hover:contrast-125 
          transition-transform duration-300 ease-in-out p-6 min-h-[180px] group"
      >
        <span className="absolute top-2 left-4 font-bold text-base md:text-xl text-white z-10 drop-shadow-sm mr-4">
          Clubes competitivos de Brawl Stars
        </span>

        <img
            src={clubIcon}
            className="absolute -right-4 -bottom-4 size-28 -rotate-6 group-hover:-rotate-12 group-hover:scale-125 group-hover:-translate-y-2 group-hover:-translate-x-2
            transition-transform duration-300 ease-in-out z-0 text-white opacity-60"
        >
        </img>

        <span className="absolute bottom-4 left-4 text-xs text-white bg-red-900/60 
          rounded-xl px-2 py-0.5 z-10 group-hover:-translate-y-1 
          transition-transform duration-300 ease-in-out"
        >
          16 clubes
        </span>
      </Link>

      {/* Eventos */}
      <Link
        to="/eventos"
        className="relative rounded-3xl overflow-hidden bg-gradient-to-br 
          from-emerald-900 via-green-700 to-green-500 border border-green-900 
          flex flex-col items-start hover:scale-105 hover:contrast-125 
          transition-transform duration-300 ease-in-out p-6 min-h-[180px] group"
      >
        <span className="absolute top-2 left-4 font-bold text-base md:text-xl text-white z-10 drop-shadow-sm mr-4">
          Torneos y eventos emocionantes
        </span>

        <svg
          className="absolute -right-4 -bottom-4 size-28 -rotate-6 group-hover:-rotate-12 group-hover:scale-125 group-hover:-translate-y-2 group-hover:-translate-x-2 
            transition-transform duration-300 ease-in-out z-0 text-white opacity-60"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 3h14a2 2 0 012 2v16l-7-3-7 3V5a2 2 0 012-2z" />
        </svg>

        <span className="absolute bottom-4 left-4 text-xs text-white bg-green-900/60 
          rounded-xl px-2 py-0.5 z-10 group-hover:-translate-y-1 
          transition-transform duration-300 ease-in-out"
        >
          3 torneos activos
        </span>
      </Link>

      {/* Staffs */}
      <Link
        to="/staffs"
        className="relative rounded-3xl overflow-hidden bg-gradient-to-br 
          from-gray-900 via-purple-800 to-indigo-600 border border-purple-900 
          flex flex-col items-start hover:scale-105 hover:contrast-125 
          transition-transform duration-300 ease-in-out p-6 min-h-[180px] group"
      >
        <span className="absolute top-2 left-4 font-bold text-base md:text-xl text-white z-10 drop-shadow-sm mr-4">
          Equipo de staffs profesional
        </span>

        <svg
          className="absolute -right-4 -bottom-4 size-28 -rotate-6 group-hover:-rotate-12 group-hover:scale-125 group-hover:-translate-y-2 group-hover:-translate-x-2 
            transition-transform duration-300 ease-in-out z-0 text-white opacity-60"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>

        <span className="absolute bottom-4 left-4 text-xs text-white bg-purple-900/60 
          rounded-xl px-2 py-0.5 z-10 group-hover:-translate-y-1 
          transition-transform duration-300 ease-in-out"
        >
          Soporte 24/7
        </span>
      </Link>
    </section>
  )
}

export default IntroBento