function IntroGrid() {
  return (
    <section className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
  
        <article className="col-span-2 row-span-2 border border-white rounded-2xl">
            <p>
                Comunidad de Discord con 5000 miembros enfocada en bla bla bla
            </p>
        </article>

        <article className="col-span-1 border border-white rounded-2xl">
            <p>
                Contamos con 16 clubes de Brawl Stars.
            </p>
        </article>

        <article className="col-span-2 border border-white rounded-2xl">
            <p>
                Eventos
            </p>
        </article>

    </section>
  )
}

export default IntroGrid