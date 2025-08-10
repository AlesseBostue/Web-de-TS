export default function InviteWidget() {
  const inviteLink = "https://discord.gg/8nu3ZdDkp7"

  return (
    <section className="invite-widget p-6 bg-indigo-600 text-white rounded-md text-center">
      <h2 className="text-2xl font-bold mb-3">¡Únete a nuestro servidor de Discord!</h2>
      <p className="mb-4">Conecta con la comunidad, participa en eventos y mucho más.</p>
      <a
        href={inviteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
      >
        Unirse
      </a>
    </section>
  )
}